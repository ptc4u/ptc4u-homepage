import { useState, useEffect } from 'react';

/**
 * Blogs section component for Pinnacle Thrive Coaching.
 *
 * Features grid layout, search bar, and preview of latest blogs.
 * Shows latest approved articles with intro parts and clickable headings for full content.
 */
export default function BlogsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [approvedContent, setApprovedContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  // Fetch approved content from API
  useEffect(() => {
    const fetchApprovedContent = async () => {
      try {
        setIsLoading(true);
        // Add cache-busting parameter to ensure fresh content
        const response = await fetch(`/api/approved-content?t=${Date.now()}&v=${Math.random()}`);
        const data = await response.json();
        
        if (data.success) {
          setApprovedContent(data.content);
          console.log('Blog page loaded content:', data.content.length, 'articles');
          console.log('Content IDs:', data.content.map(c => c.id));
          console.log('Content version:', data.contentVersion);
          setIsContentLoaded(true);
        } else {
          setError('Failed to load approved content');
        }
      } catch (err) {
        console.error('Error fetching approved content:', err);
        setError('Failed to load content. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchApprovedContent();
  }, []);

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(0);
  }, [searchTerm]);


  // Show loading state
  if (isLoading) {
    return (
      <section className="pt-1 pb-2 bg-white rounded-2xl shadow-lg" id="blogs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 font-helvetica">
              PTC Knowledge Base
            </h2>
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <span className="ml-3 text-gray-600">Loading latest articles...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="pt-1 pb-2 bg-white rounded-2xl shadow-lg" id="blogs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 font-helvetica">
              PTC Knowledge Base
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-bold text-red-800">Error Loading Content</h3>
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

  // Use approved content from API (already sorted by date)
  const latestArticles = approvedContent; // Show all approved articles

  const filteredBlogs = latestArticles.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Pagination logic for 3 articles per page
  const articlesPerPage = 3;
  const totalPages = Math.ceil(filteredBlogs.length / articlesPerPage);
  const startIndex = currentPage * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredBlogs.slice(startIndex, endIndex);

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


  const handleArticleClick = (article) => {
    console.log('Article clicked:', article.title);
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <section className="pt-1 pb-2 bg-white rounded-2xl shadow-lg" id="blogs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Fixed spacing to avoid navigation overlap */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 font-helvetica">
            PTC Knowledge Base
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium">
            Powerful Insights and Proven strategies to fast-track your personal and professional growth.
          </p>
        </div>

        {/* Search and Filter Section - Left Aligned */}
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar - Left aligned */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* Results Counter - Right aligned on same line */}
            <div className="flex-shrink-0">
              <span className="text-sm text-gray-600">
                {searchTerm ? `Found ${filteredBlogs.length} articles matching "${searchTerm}"` : `${currentArticles.length}/${filteredBlogs.length}`}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-black mb-4 text-center">
            Featured <span className="text-black">Content</span>
          </h3>
          
          {/* Pagination Navigation */}
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
                Page {currentPage + 1} of {totalPages}
              </span>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {currentArticles.map((blog) => (
              <article
                key={blog.id}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer h-full flex flex-col"
                onClick={() => handleArticleClick(blog)}
              >
                {/* Content Source Indicator - Enhanced visibility */}
                <div className="absolute top-3 right-3 z-10">
                  {blog.source === 'wordpress' && (
                    <span className="bg-white border-2 border-blue-500 text-blue-700 px-2 py-1 rounded-lg text-xs font-semibold shadow-lg flex items-center gap-1">
                      <img 
                        src="/images/wp.png" 
                        alt="WordPress" 
                        className="w-3 h-3 object-contain"
                      />
                      WordPress
                    </span>
                  )}
                  {blog.source === 'linkedin' && (
                    <span className="bg-white border-2 border-blue-600 text-blue-800 px-2 py-1 rounded-lg text-xs font-semibold shadow-lg flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </span>
                  )}
                  {blog.source === 'ptc' && (
                    <span className="bg-white border-2 border-purple-600 text-purple-700 px-2 py-1 rounded-lg text-xs font-semibold shadow-lg flex items-center gap-1">
                      <img 
                        src="/rndPTClogo.png" 
                        alt="PTC" 
                        className="w-3 h-3 object-contain"
                      />
                      PTC Original
                    </span>
                  )}
                </div>

                {/* Category */}
                <div className="mb-3 text-center">
                  <span className="inline-block bg-gray-100 text-black px-2 py-1 rounded text-xs font-medium">
                    {blog.readTime === '1 min read' ? 'Blog' : 
                     parseInt(blog.readTime) > 3 ? 'Article' : 
                     blog.category}
                  </span>
                </div>

                {/* Clickable Title */}
                <h4 className="text-base font-bold text-black mb-3 leading-tight text-center hover:text-purple-600 transition-colors">
                  {blog.title}
                </h4>

                {/* Excerpt (Intro part only) - Flex grow to fill space */}
                <p className="text-gray-700 mb-3 text-xs leading-relaxed flex-grow line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Click to read more indicator */}
                <div className="text-center mb-3">
                  <span className="text-purple-600 text-xs font-medium hover:text-purple-800 transition-colors">
                    Click to read full article →
                  </span>
                </div>

                {/* Author & Meta - Pushed to bottom */}
                <div className="text-center mt-auto relative">
                  <div className="text-xs text-gray-600 mb-1">
                    By <span className="font-semibold">{blog.author}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-xs text-gray-500">
                    <span>{blog.readTime}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                  </div>
                  {/* Page number in bottom right corner */}
                  <div className="absolute bottom-0 right-0 text-xs text-gray-400 font-medium">
                    {startIndex + currentArticles.indexOf(blog) + 1}
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* No results message */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                No articles found matching your search.
              </div>
            </div>
          )}

          {/* Show message when no articles on current page */}
          {filteredBlogs.length > 0 && currentArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">
                No articles on this page. Try going to the previous page.
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-black mb-6">
            Explore More PTC Insights
          </h3>
          <div className="flex flex-row gap-4 justify-center items-center">
            <a
              href="https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/?feedView=articles&viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-200 border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium text-base shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="#0077B5" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://itservicesdelivery.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gray-200 border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium text-base shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <img 
                src="/images/wp.png" 
                alt="WordPress" 
                className="w-5 h-5 mr-2 object-contain"
              />
              WordPress
            </a>
          </div>
        </div>
      </div>

      {/* Full Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={handleCloseArticle}>
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header - Fixed */}
            <div className="p-6 border-b border-gray-200 flex-shrink-0 bg-white">
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-4">
                  <div className="mb-4 flex items-center gap-3 flex-wrap">
                    <span className="inline-block bg-gray-100 text-black px-3 py-1 rounded text-sm font-medium">
                      {selectedArticle.category}
                    </span>
                    {/* Source indicator in modal */}
                    {selectedArticle.source === 'wordpress' && (
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.655-.98 1.42-1.805 2.25-2.445C13.44 2.825 10.26 1.5 6.5 1.5c-1.03 0-2.05.15-3.02.44 1.27 1.19 2.18 2.66 2.66 4.34-.5.15-1.05.25-1.64.25-1.5 0-2.8-.5-3.8-1.4C.5 5.5 0 7.2 0 9c0 2.2 1.2 4.1 3 5.2-.5-1.5-.5-3.1 0-4.6 1.5-1.5 3.5-2.4 5.5-2.4 1.1 0 2.1.3 3 .8.9-.5 1.9-.8 3-.8 2 0 4 1 5.5 2.4.5 1.5.5 3.1 0 4.6 1.8-1.1 3-3 3-5.2 0-1.8-.5-3.5-1.4-4.8-1-.9-2.3-1.4-3.8-1.4-.6 0-1.1-.1-1.6-.25.5-1.7 1.4-3.15 2.7-4.35-.97-.29-1.99-.44-3.02-.44-3.76 0-6.94 1.325-9.188 3.485.83.64 1.595 1.465 2.25 2.445.655.98 1.18 2.02 1.57 3.1.39 1.08.58 2.22.58 3.4 0 1.18-.19 2.32-.58 3.4-.39 1.08-.915 2.12-1.57 3.1-.655.98-1.42 1.805-2.25 2.445C3.56 21.175 6.74 22.5 10.5 22.5c1.03 0 2.05-.15 3.02-.44-1.27-1.19-2.18-2.66-2.66-4.34.5-.15 1.05-.25 1.64-.25 1.5 0 2.8.5 3.8 1.4 1 .9 1.4 2.1 1.4 3.8 0 2.2-1.2 4.1-3 5.2.5-1.5.5-3.1 0-4.6-1.5-1.5-3.5-2.4-5.5-2.4-1.1 0-2.1.3-3 .8-.9.5-1.9.8-3 .8-2 0-4-1-5.5-2.4-.5-1.5-.5-3.1 0-4.6-1.8 1.1-3 3-3 5.2 0 1.8.5 3.5 1.4 4.8 1 .9 2.3 1.4 3.8 1.4.6 0 1.1-.1 1.6-.25-.5 1.7-1.4 3.15-2.7 4.35.97.29 1.99.44 3.02.44 3.76 0 6.94-1.325 9.188-3.485-.83-.64-1.595-1.465-2.25-2.445-.655-.98-1.18-2.02-1.57-3.1-.39-1.08-.58-2.22-.58-3.4 0-1.18.19-2.32.58-3.4.39-1.08.915-2.12 1.57-3.1z"/>
                        </svg>
                        WordPress
                      </span>
                    )}
                    {selectedArticle.source === 'ptc' && (
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        PTC Original
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-black mb-4">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span>By <span className="font-semibold">{selectedArticle.author}</span></span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                  </div>
                </div>
                <button
                  onClick={handleCloseArticle}
                  className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                  title="Close article"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable Content Area - Enhanced */}
            <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed text-base">
                  {selectedArticle.fullContent || selectedArticle.excerpt || 'Full content not available. Please visit the original source for the complete article.'}
                </div>
              </div>
            </div>

            {/* Modal Footer - Fixed at bottom */}
            <div className="p-6 border-t border-gray-200 bg-white rounded-b-lg flex-shrink-0">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  {selectedArticle.source === 'wordpress' && 'Originally published on WordPress'}
                  {selectedArticle.source === 'ptc' && 'Pinnacle Thrive Coaching Original Content'}
                </div>
                <button
                  onClick={handleCloseArticle}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
