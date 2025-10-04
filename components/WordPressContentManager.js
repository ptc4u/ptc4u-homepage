import { useState, useEffect } from 'react';

/**
 * Content Manager component for Pinnacle Thrive Coaching.
 * 
 * This component allows manual curation of LinkedIn content with approval workflow.
 * Content can be selected, reviewed, and approved before appearing on the PTC site.
 */
export default function LinkedInContentManager() {
  const [selectedContent, setSelectedContent] = useState([]);
  const [isApprovalMode, setIsApprovalMode] = useState(false);
  const [activeTab, setActiveTab] = useState('linkedin'); // 'linkedin' only
  const [notification, setNotification] = useState(null);
  const [linkedinContent, setLinkedinContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [contentStatus, setContentStatus] = useState({}); // Track approval/rejection status
  const [showDialog, setShowDialog] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  // Function to fetch content from LinkedIn API
  const fetchContent = async (isRefresh = false) => {
    if (isRefresh) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }
    setError(null);
    
    try {
      // Add cache busting for refresh requests
      const cacheBuster = isRefresh ? `?t=${Date.now()}&v=${Math.random()}` : '';
      
      // Fetch LinkedIn content with comprehensive fetch
      const liResponse = await fetch(`/api/linkedin-content${cacheBuster}`);
      const liData = await liResponse.json();
      
      if (liData.success) {
        setLinkedinContent(liData.content);
        console.log('LinkedIn content loaded:', liData.content.length, 'posts');
        console.log('LinkedIn source:', liData.source);
        console.log('Authentication required:', liData.authenticationRequired);
        
        // Show notification about authentication if needed
        if (liData.authenticationRequired) {
          setNotification({
            type: 'info',
            message: `LinkedIn content loaded (${liData.content.length} posts) - Authentication required for live content`
          });
          setTimeout(() => setNotification(null), 5000);
        }
      } else {
        console.error('LinkedIn API Error:', liData.error);
      }

      // Show success notification for refresh
      if (isRefresh) {
        setNotification({
          type: 'success',
          message: 'LinkedIn content refreshed successfully! All posts have been loaded.'
        });
        setTimeout(() => setNotification(null), 3000);
      }

    } catch (err) {
      console.error('Content fetch error:', err);
      setError('Failed to load LinkedIn content. Please try again.');
    } finally {
      if (isRefresh) {
        setIsRefreshing(false);
      } else {
        setIsLoading(false);
      }
    }
  };

  // Initial content fetch
  useEffect(() => {
    fetchContent();
  }, []);

  // Refresh handler
  const handleRefresh = () => {
    fetchContent(true);
  };


  // LinkedIn content - you can add your LinkedIn posts here
  const fallbackLinkedinContent = [
    {
      id: 'li-leadership-digital',
      title: 'Leadership in Digital Transformation: Key Success Factors',
      excerpt: 'Leading digital transformation requires more than just technology adoption. It demands visionary leadership, cultural change, and strategic execution.',
      category: 'Leadership',
      author: 'Sairam Bollapragada',
      date: 'January 15, 2024',
      readTime: '3 min read',
      linkedinUrl: 'https://www.linkedin.com/posts/sairam-bollapragada_digitaltransformation-leadership-innovation-activity-1234567890/',
      status: 'pending',
      ptcRelevance: 'High - Executive leadership and transformation',
      coachingContext: 'Essential for leaders driving digital change in their organizations',
      source: 'linkedin'
    },
    {
      id: 'li-data-driven-decisions',
      title: 'The Power of Data-Driven Decision Making in Leadership',
      excerpt: 'In today\'s complex business environment, leaders who harness data effectively gain significant competitive advantages and make better strategic decisions.',
      category: 'Data Analytics',
      author: 'Sairam Bollapragada',
      date: 'January 10, 2024',
      readTime: '4 min read',
      linkedinUrl: 'https://www.linkedin.com/posts/sairam-bollapragada_leadership-dataanalytics-decisionmaking-activity-1234567890/',
      status: 'pending',
      ptcRelevance: 'High - Strategic decision making and analytics',
      coachingContext: 'Perfect for executives learning to leverage data for strategic advantage',
      source: 'linkedin'
    },
    {
      id: 'li-innovation-culture',
      title: 'Building an Innovation Culture: Lessons from 30+ Years in Tech',
      excerpt: 'Creating a culture of innovation isn\'t about fancy offices or ping pong tables. It\'s about psychological safety, experimentation, and learning from failure.',
      category: 'Innovation',
      author: 'Sairam Bollapragada',
      date: 'January 5, 2024',
      readTime: '5 min read',
      linkedinUrl: 'https://www.linkedin.com/posts/sairam-bollapragada_innovation-culture-leadership-activity-1234567890/',
      status: 'pending',
      ptcRelevance: 'High - Organizational culture and innovation',
      coachingContext: 'Valuable for leaders building innovative teams and organizations',
      source: 'linkedin'
    },
    {
      id: 'li-cybersecurity-leadership',
      title: 'Cybersecurity Leadership: Protecting Your Organization in the Digital Age',
      excerpt: 'Cybersecurity is no longer just an IT concern. It\'s a strategic business imperative that requires leadership commitment and organizational alignment.',
      category: 'Cybersecurity',
      author: 'Sairam Bollapragada',
      date: 'December 28, 2023',
      readTime: '4 min read',
      linkedinUrl: 'https://www.linkedin.com/posts/sairam-bollapragada_cybersecurity-leadership-digitaltransformation-activity-1234567890/',
      status: 'pending',
      ptcRelevance: 'High - Risk management and strategic leadership',
      coachingContext: 'Critical for executives understanding cybersecurity as a business risk',
      source: 'linkedin'
    }
  ];

  // Use LinkedIn content (fetched or fallback)
  const availableContent = linkedinContent.length > 0 ? linkedinContent : fallbackLinkedinContent;

  const handleContentSelection = (contentId, isSelected) => {
    if (isSelected) {
      setSelectedContent([...selectedContent, contentId]);
    } else {
      setSelectedContent(selectedContent.filter(id => id !== contentId));
    }
  };

  const handleApproval = async (contentId, status) => {
    // Update the content status in the local state
    setContentStatus(prev => ({
      ...prev,
      [contentId]: status
    }));
    
    // If content is approved, save it to the content store
    if (status === 'approved') {
      try {
        const approvedContent = availableContent.filter(content => 
          content.id === contentId
        );
        
        if (approvedContent.length > 0) {
          // Send approved content to the content store
          await fetch('/api/save-approved-content', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              content: approvedContent[0],
              action: 'approve'
            }),
          });
        }
      } catch (error) {
        console.error('Error saving approved content:', error);
      }
    }
    
    // Show success notification
    if (status === 'approved') {
      setNotification({
        type: 'success',
        message: `Content approved and published! This article is now live on the blog page and will replace older content.`
      });
    } else {
      setNotification({
        type: 'success',
        message: `Content has been ${status}! ${status === 'rejected' ? 'Post will be hidden from view.' : 'Post will be available for visitors.'}`
      });
    }
    
    // Clear notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
  };

  // Filter content based on active tab (LinkedIn only) and hide rejected posts
  const filteredContent = availableContent.filter(content => {
    const isLinkedIn = content.source === 'linkedin';
    const isNotRejected = contentStatus[content.id] !== 'rejected';
    return isLinkedIn && isNotRejected;
  });

  // Get approved content for the popup display
  const approvedContent = availableContent.filter(content => 
    contentStatus[content.id] === 'approved'
  );

  // Handle opening post dialog
  const openPostDialog = (post) => {
    setSelectedPost(post);
    setShowDialog(true);
  };

  // Handle closing post dialog
  const closePostDialog = () => {
    setShowDialog(false);
    setSelectedPost(null);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Loading LinkedIn Content</h3>
            <p className="text-gray-600">Fetching latest posts from LinkedIn...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <h3 className="text-lg font-bold text-red-800">Error Loading Content</h3>
          </div>
          <p className="text-red-700 mt-2">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
          notification.type === 'success' 
            ? 'bg-green-100 border border-green-400 text-green-800' 
            : 'bg-red-100 border border-red-400 text-red-800'
        }`}>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {notification.message}
          </div>
        </div>
      )}
      

      {/* Content Management Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-4">
          LinkedIn Content Curation System
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Select and approve content from your LinkedIn posts to feature on the PTC site.
        </p>
        
        {/* LinkedIn Content Counter */}
        <div className="mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-lg">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            LinkedIn Posts Available: {availableContent.length}
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
              isRefreshing
                ? 'bg-blue-400 text-white cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {isRefreshing ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Refreshing...</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Refresh Content</span>
              </>
            )}
          </button>
          
          <button
            onClick={() => setIsApprovalMode(!isApprovalMode)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              isApprovalMode 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isApprovalMode ? 'Exit Approval Mode' : 'Enter Approval Mode'}
          </button>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 flex items-center">
              {Object.values(contentStatus).filter(status => status === 'approved').length} approved • {Object.values(contentStatus).filter(status => status === 'rejected').length} rejected
            </span>
            
            <button
              onClick={async () => {
                try {
                  const approvedCount = Object.values(contentStatus).filter(status => status === 'approved').length;
                  
                  if (approvedCount === 0) {
                    setNotification({
                      type: 'error',
                      message: 'No approved content to publish. Please approve some articles first.'
                    });
                    setTimeout(() => setNotification(null), 5000);
                    return;
                  }
                  
                  // Get all approved content from local state
                  const approvedContent = availableContent.filter(content => 
                    contentStatus[content.id] === 'approved'
                  );
                  
                  // Send approved content to publish API
                  const response = await fetch('/api/publish-approved-content', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      approvedContent: approvedContent
                    }),
                  });
                  
                  if (response.ok) {
                    const data = await response.json();
                    setNotification({
                      type: 'success',
                      message: `Successfully published ${data.contentCount || approvedCount} approved articles to the blog page! The blog page will now show only these latest articles.`
                    });
                    setTimeout(() => setNotification(null), 5000);
                    
                    // Force refresh the blog page content
                    setTimeout(() => {
                      // Trigger a page refresh to ensure content is updated
                      if (typeof window !== 'undefined') {
                        // Open blog page in new tab to see the updated content
                        window.open('/blogs', '_blank');
                      }
                    }, 2000);
                  } else {
                    const errorData = await response.json();
                    setNotification({
                      type: 'error',
                      message: errorData.message || 'Failed to publish content. Please try again.'
                    });
                    setTimeout(() => setNotification(null), 5000);
                  }
                } catch (error) {
                  console.error('Publish error:', error);
                  setNotification({
                    type: 'error',
                    message: 'Error publishing content. Please try again.'
                  });
                  setTimeout(() => setNotification(null), 5000);
                }
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
              title="Publish all approved content to the blog page"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Publish</span>
            </button>
            
            <button
              onClick={async () => {
                try {
                  const response = await fetch('/api/clear-content', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  });
                  
                  if (response.ok) {
                    setNotification({
                      type: 'success',
                      message: 'All content cleared! Blog page will now show no articles until you publish new content.'
                    });
                    setTimeout(() => setNotification(null), 5000);
                    
                    // Open blog page to see empty state
                    setTimeout(() => {
                      if (typeof window !== 'undefined') {
                        window.open('/blogs', '_blank');
                      }
                    }, 1000);
                  } else {
                    setNotification({
                      type: 'error',
                      message: 'Failed to clear content. Please try again.'
                    });
                    setTimeout(() => setNotification(null), 5000);
                  }
                } catch (error) {
                  console.error('Clear content error:', error);
                  setNotification({
                    type: 'error',
                    message: 'Error clearing content. Please try again.'
                  });
                  setTimeout(() => setNotification(null), 5000);
                }
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center space-x-2"
              title="Clear all content from blog page"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span>Clear All</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Selection Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {filteredContent.map((content) => (
          <div
            key={content.id}
            className={`border-2 rounded-lg p-6 transition-all duration-300 ${
              selectedContent.includes(content.id)
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                {/* LinkedIn Source Indicator */}
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    LinkedIn
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2">
                  {content.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <span>{content.category}</span>
                  <span>•</span>
                  <span>{content.readTime}</span>
                  <span>•</span>
                  <span>{content.date}</span>
                </div>
              </div>
              
              {isApprovalMode && (
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedContent.includes(content.id)}
                    onChange={(e) => handleContentSelection(content.id, e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </label>
              )}
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              {content.excerpt}
            </p>

            <div className="space-y-2 mb-4">
              <div className="text-sm">
                <span className="font-semibold text-gray-700">PTC Relevance:</span>
                <span className="ml-2 text-gray-600">{content.ptcRelevance}</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-gray-700">Coaching Context:</span>
                <span className="ml-2 text-gray-600">{content.coachingContext}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <a
                href={content.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View on LinkedIn →
              </a>
              
              {/* Always show approval buttons for easier access */}
              <div className="flex space-x-2">
                <button
                  onClick={() => handleApproval(content.id, 'approved')}
                  className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleApproval(content.id, 'rejected')}
                  className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Approved Content Preview */}
      {approvedContent.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-black mb-6">
            Approved Content ({approvedContent.length})
          </h3>
          
          {/* Enhanced grid layout for 10+ articles */}
          <div className={`grid gap-6 ${
            approvedContent.length >= 15 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5' 
              : approvedContent.length >= 10 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {approvedContent.map((content, index) => (
              <div 
                key={content.id} 
                className={`bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group ${
                  approvedContent.length >= 10 ? 'hover:scale-105' : ''
                }`}
                onClick={() => openPostDialog(content)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                        Approved
                      </span>
                      {approvedContent.length >= 10 && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          #{index + 1}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-black mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {content.title}
                    </h4>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {content.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <span>{content.readTime}</span>
                    <span>•</span>
                    <span>{content.date}</span>
                  </div>
                  <span className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                    Read →
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Show total count and pagination info for large collections */}
          {approvedContent.length >= 10 && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-800">
                  <strong>{approvedContent.length} approved articles</strong> available for visitors
                </div>
                <div className="text-xs text-blue-600">
                  Click any article to open in full-screen reader
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Instructions */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-black mb-3">How to Use This System:</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Click "Refresh LinkedIn Posts" to pull all posts from your LinkedIn company page</li>
          <li>Review each post's PTC relevance and coaching context</li>
          <li>Click "Approve" to feature the content on your site</li>
          <li>Click "Reject" to hide the post from view (it will disappear from the screen)</li>
          <li>Approved content appears in the "Approved Content" section below</li>
          <li>Click on any approved post to open it in a popup dialog for full reading</li>
          <li>You can approve unlimited posts (10-15+) and they'll all be available in the scalable array system</li>
          <li>All content comes from your LinkedIn company page at https://www.linkedin.com/company/108140833/</li>
        </ol>
        
        <div className="mt-4 p-4 bg-white rounded border">
          <h4 className="font-semibold text-black mb-2">Adding New Content:</h4>
          <p className="text-sm text-gray-600">
            To add new LinkedIn content, simply add it to the fallbackLinkedinContent array in the LinkedInContentManager.js file. 
            Include the LinkedIn URL, coaching context, and PTC relevance for each piece of content.
          </p>
        </div>
      </div>

      {/* Post Dialog Popup */}
      {showDialog && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Dialog Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                  Approved
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  LinkedIn
                </span>
              </div>
              <button
                onClick={closePostDialog}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Dialog Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <h2 className="text-2xl font-bold text-black mb-4">{selectedPost.title}</h2>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                <span>{selectedPost.category}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>By {selectedPost.author}</span>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {selectedPost.excerpt}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-black mb-2">PTC Relevance:</h4>
                  <p className="text-gray-700 text-sm">{selectedPost.ptcRelevance}</p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-black mb-2">Coaching Context:</h4>
                  <p className="text-gray-700 text-sm">{selectedPost.coachingContext}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <a
                  href={selectedPost.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                  View on LinkedIn
                </a>
                
                <button
                  onClick={closePostDialog}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
