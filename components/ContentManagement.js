import React, { useState, useEffect } from 'react';

/**
 * Content Management Component
 * 
 * Manages LinkedIn content fetching, selection, and approval for Knowledge Base
 */
export default function ContentManagement({ onReturn }) {
  const [content, setContent] = useState([]);
  const [selectedContent, setSelectedContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch LinkedIn content from the last 2 weeks
  const fetchLinkedInContent = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/linkedin-company-feed');
      const data = await response.json();
      
      if (response.ok) {
        // Filter content from last 2 weeks
        const twoWeeksAgo = new Date();
        twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
        
        const recentContent = data.content?.filter(item => {
          const itemDate = new Date(item.publishedDate || item.createdAt);
          return itemDate >= twoWeeksAgo;
        }) || [];
        
        setContent(recentContent);
      } else {
        throw new Error(data.error || 'Failed to fetch content');
      }
    } catch (err) {
      console.error('Error fetching content:', err);
      setError('Failed to fetch LinkedIn content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Load content on component mount
  useEffect(() => {
    fetchLinkedInContent();
  }, []);

  const handleContentSelect = (contentId, isSelected) => {
    if (isSelected) {
      setSelectedContent(prev => [...prev, contentId]);
    } else {
      setSelectedContent(prev => prev.filter(id => id !== contentId));
    }
  };

  const handleApproveSelected = async () => {
    if (selectedContent.length === 0) {
      setError('Please select at least one content item to approve.');
      return;
    }

    setIsApproving(true);
    setError('');
    setSuccess('');

    try {
      const selectedItems = content.filter(item => selectedContent.includes(item.id));
      
      // Save approved content
      const response = await fetch('/api/save-approved-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: selectedItems,
          source: 'linkedin',
          approvedBy: 'admin',
          approvedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSuccess(`Successfully approved ${selectedContent.length} content items and pushed to Knowledge Base!`);
        setSelectedContent([]);
        // Refresh content list
        fetchLinkedInContent();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to approve content');
      }
    } catch (err) {
      console.error('Error approving content:', err);
      setError(`Failed to approve content: ${err.message}`);
    } finally {
      setIsApproving(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-6xl w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Content Management</h2>
          <p className="text-gray-600">Manage LinkedIn content from the last 2 weeks</p>
        </div>
        <button
          onClick={onReturn}
          className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Admin
        </button>
      </div>

      {/* Status Messages */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          {success}
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex items-center space-x-4">
          <button
            onClick={fetchLinkedInContent}
            disabled={isLoading}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Refreshing...
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh Content
              </>
            )}
          </button>
          
          <span className="text-sm text-gray-600">
            {content.length} items found from last 2 weeks
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            {selectedContent.length} selected
          </span>
          <button
            onClick={handleApproveSelected}
            disabled={selectedContent.length === 0 || isApproving}
            className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isApproving ? (
              <>
                <svg className="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Approving...
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Approve & Push to Knowledge Base
              </>
            )}
          </button>
        </div>
      </div>

      {/* Content List */}
      <div className="bg-white rounded-lg shadow-sm border">
        {isLoading && content.length === 0 ? (
          <div className="p-8 text-center">
            <svg className="animate-spin h-8 w-8 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-600">Loading content...</p>
          </div>
        ) : content.length === 0 ? (
          <div className="p-8 text-center">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-gray-600">No content found from the last 2 weeks</p>
            <button
              onClick={fetchLinkedInContent}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {content.map((item) => (
              <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start space-x-4">
                  <input
                    type="checkbox"
                    checked={selectedContent.includes(item.id)}
                    onChange={(e) => handleContentSelect(item.id, e.target.checked)}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">
                        {item.title || 'Untitled'}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {formatDate(item.publishedDate || item.createdAt)}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-3 line-clamp-3">
                      {item.excerpt || item.description || 'No description available'}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>LinkedIn Article</span>
                      {item.author && <span>By {item.author}</span>}
                      {item.likes && <span>{item.likes} likes</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
