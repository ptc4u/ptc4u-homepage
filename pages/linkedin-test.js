import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import UniversalHomeIcon from '../components/UniversalHomeIcon';

/**
 * LinkedIn Content Test Page
 * Test the comprehensive LinkedIn content fetching functionality
 */

export default function LinkedInTest() {
  const [linkedinContent, setLinkedinContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchInfo, setFetchInfo] = useState(null);

  const fetchLinkedInContent = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log('Fetching LinkedIn content...');
      
      const response = await fetch('/api/linkedin-content');
      const data = await response.json();
      
      if (data.success) {
        setLinkedinContent(data.content);
        setFetchInfo({
          total: data.total,
          source: data.source,
          note: data.note,
          lastUpdated: data.lastUpdated,
          authenticationRequired: data.authenticationRequired
        });
        console.log('LinkedIn content fetched:', data.content.length, 'posts');
        console.log('Source:', data.source);
        console.log('Authentication required:', data.authenticationRequired);
      } else {
        setError('Failed to fetch LinkedIn content');
      }
    } catch (err) {
      console.error('Error fetching LinkedIn content:', err);
      setError('Error fetching LinkedIn content: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLinkedInContent();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <UniversalHomeIcon />
      <NavBar />
      <main className="flex-grow flex items-center justify-center py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-black mb-6">
            LinkedIn Content Test
          </h1>
          
          <div className="mb-6">
            <button
              onClick={fetchLinkedInContent}
              disabled={isLoading}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isLoading
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isLoading ? 'Fetching...' : 'Fetch LinkedIn Content'}
            </button>
          </div>

          {fetchInfo && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Fetch Information</h3>
              <div className="text-sm text-blue-700 space-y-1">
                <p><strong>Total Posts:</strong> {fetchInfo.total}</p>
                <p><strong>Source:</strong> {fetchInfo.source}</p>
                <p><strong>Note:</strong> {fetchInfo.note}</p>
                <p><strong>Last Updated:</strong> {new Date(fetchInfo.lastUpdated).toLocaleString()}</p>
                {fetchInfo.authenticationRequired && (
                  <p className="text-orange-600"><strong>Authentication Required:</strong> Yes</p>
                )}
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Error</h3>
              <p className="text-red-700">{error}</p>
            </div>
          )}

          <div className="mb-6">
            <h2 className="text-xl font-bold text-black mb-4">
              LinkedIn Content ({linkedinContent.length} posts)
            </h2>
            
            {linkedinContent.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {linkedinContent.map((post, index) => (
                  <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-black mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="text-xs text-gray-500 mb-2">
                      <p><strong>Author:</strong> {post.author}</p>
                      <p><strong>Date:</strong> {post.date}</p>
                      <p><strong>Read Time:</strong> {post.readTime}</p>
                    </div>
                    
                    <div className="text-xs text-gray-500 mb-2">
                      <p><strong>PTC Relevance:</strong> {post.ptcRelevance}</p>
                      <p><strong>Coaching Context:</strong> {post.coachingContext}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Status: {post.status}
                      </span>
                      {post.linkedinUrl && (
                        <a
                          href={post.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-xs"
                        >
                          View on LinkedIn →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No LinkedIn content available</p>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
      </main>
    </div>
  );
}
