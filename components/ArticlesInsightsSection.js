import { useState, useEffect } from 'react';

/**
 * Articles & Insights section component for Pinnacle Thrive Coaching.
 * 
 * Features 4x2 grid layout showing latest 8 LinkedIn articles.
 * Click on each article opens a popup reading window.
 * Includes search functionality and Read More buttons.
 */
export default function ArticlesInsightsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [autoRefresh, setAutoRefresh] = useState(false);

  // Fetch latest 12 LinkedIn articles with auto refresh
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/linkedin-only-content?limit=12&t=${Date.now()}&v=${Math.random()}`);
        const data = await response.json();
        
        if (data.success) {
          // Filter out any WordPress content to ensure only LinkedIn content is shown
          const linkedinOnlyContent = data.content.filter(article => 
            article.source === 'linkedin' || article.source === 'linkedin-latest'
          );
          
          // Sort by publication date (most recent first)
          const sortedArticles = linkedinOnlyContent.sort((a, b) => {
            const dateA = new Date(a.publishedDate || a.date || '1970-01-01');
            const dateB = new Date(b.publishedDate || b.date || '1970-01-01');
            return dateB - dateA; // Most recent first
          });
          
          // Take only the latest 12 articles
          const latest12Articles = sortedArticles.slice(0, 12);
          setArticles(latest12Articles);
          console.log('Articles & Insights loaded:', latest12Articles.length, 'latest LinkedIn articles (sorted by date)');
        } else {
          setError('Failed to load articles');
        }
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to load articles. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();

    // Auto refresh every 5 minutes if enabled
    let refreshInterval;
    if (autoRefresh) {
      refreshInterval = setInterval(() => {
        console.log('Auto-refreshing articles...');
        fetchArticles();
      }, 5 * 60 * 1000); // 5 minutes
    }

    return () => {
      if (refreshInterval) {
        clearInterval(refreshInterval);
      }
    };
  }, [autoRefresh]);

  // Filter articles based on search term
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Pagination logic for 3 articles per page (up to 12 total articles = 4 pages max)
  const articlesPerPage = 3;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = currentPage * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Navigation functions
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(0);
  }, [searchTerm]);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  // Handle click outside modal to close
  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseArticle();
    }
  };

  // Handle keyboard events for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedArticle) {
        handleCloseArticle();
      }
    };

    if (selectedArticle) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedArticle]);

  const handleReadMoreWordPress = () => {
    // For now, redirect to the main website or a specific WordPress page
    window.open('https://itservicesdelivery.wordpress.com/', '_blank');
  };

  // Show loading state
  if (isLoading) {
    return (
      <section className="py-8 mt-12 bg-white rounded-2xl shadow-lg" id="articles-insights">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 font-helvetica">
              Articles & Insights
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="py-8 mt-12 bg-white rounded-2xl shadow-lg" id="articles-insights">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 font-helvetica">
              Articles & Insights
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-bold text-red-800">Error Loading Articles</h3>
              </div>
              <p className="text-red-700">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 mt-12 bg-white rounded-2xl shadow-lg" id="blogs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 font-helvetica">
            Articles & Insights
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Latest articles from our LinkedIn company page, sorted by publication date
            {articles.length < 12 && (
              <span className="block text-sm text-blue-600 mt-2">
                {articles.length} available LinkedIn articles (up to 12 will be displayed when more content is added)
              </span>
            )}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid - 1x3 Layout with Navigation */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 0}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                currentPage === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Page {currentPage + 1} of {totalPages} • Showing {currentArticles.length} of {filteredArticles.length} articles
              </span>
              <div className="flex items-center space-x-2">
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={autoRefresh}
                    onChange={(e) => setAutoRefresh(e.target.checked)}
                    className="mr-2"
                  />
                  Auto Refresh
                </label>
              </div>
            </div>
            
            <button
              onClick={goToNextPage}
              disabled={currentPage >= totalPages - 1}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                currentPage >= totalPages - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Articles Grid - 1x3 Layout - Only show 3 articles per page */}
          <div className="articles-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentArticles.slice(0, 3).map((article, index) => (
              <div
                key={article.id}
                onClick={() => handleArticleClick(article)}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                    {article.readTime === '1 min read' ? 'Blog' : 
                     parseInt(article.readTime) > 3 ? 'Article' : 
                     article.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-black mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.readTime}</span>
                  <span>{new Date(article.publishedDate || article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    {article.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No results message */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              No articles found matching your search.
            </div>
          </div>
        )}

        {/* Show message when no articles on current page */}
        {filteredArticles.length > 0 && currentArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              No articles on this page. Try going to the previous page.
            </div>
          </div>
        )}

        {/* More Articles Buttons */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.open('https://itservicesdelivery.wordpress.com/', '_blank')}
              className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              <span>More from WordPress</span>
            </button>
            
            <button
              onClick={() => window.open('https://www.linkedin.com/company/pinnacle-thrive-coaching/', '_blank')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              <span>More from LinkedIn</span>
            </button>
          </div>
        </div>
      </div>

      {/* Article Popup Modal */}
      {selectedArticle && (
        <div className="article-modal" onClick={handleModalBackdropClick}>
          <div className="article-modal-content">
            {/* Close button in top right */}
            <button
              onClick={handleCloseArticle}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* All content in one scrollable area */}
            <div className="modal-scrollable-content">
              {/* Article meta info */}
              <div className="flex items-center space-x-3 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                  {selectedArticle.readTime === '1 min read' ? 'Blog' : 
                   parseInt(selectedArticle.readTime) > 3 ? 'Article' : 
                   selectedArticle.category}
                </span>
                <span className="text-sm text-gray-500">{selectedArticle.readTime}</span>
              </div>

              {/* Article title */}
              <h2 className="text-2xl font-bold text-black mb-4">
                {selectedArticle.title}
              </h2>
              
              {/* Author and date */}
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                {selectedArticle.author} • {new Date(selectedArticle.publishedDate || selectedArticle.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>

              {/* Article content */}
              <div className="prose prose-lg max-w-none mb-8">
                <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {selectedArticle.fullContent || selectedArticle.excerpt || 'Full content not available. Please visit the original source for the complete article.'}
                </div>
              </div>

              {/* Read More Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <button
                  onClick={handleReadMoreWordPress}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2 font-semibold"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <span>Read More from WordPress</span>
                </button>
              </div>

              {/* Close button at bottom */}
              <div className="text-center">
                <button
                  onClick={handleCloseArticle}
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
