import { useState, useEffect } from 'react';

/**
 * Mobile Preview Toggle Component
 * 
 * Allows admin users to preview how the site appears on mobile devices
 * while staying on the desktop version of the admin interface.
 */
export default function MobilePreviewToggle({ children }) {
  const [isMobilePreview, setIsMobilePreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle preview toggle
  const toggleMobilePreview = () => {
    setIsLoading(true);
    setIsMobilePreview(!isMobilePreview);
    
    // Small delay to show loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  // Load mobile CSS when preview is enabled
  useEffect(() => {
    if (isMobilePreview) {
      // Create and append mobile CSS link
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/styles/mobile.css';
      link.id = 'mobile-preview-css';
      document.head.appendChild(link);

      // Add mobile class to body
      document.body.classList.add('mobile-preview-mode');
    } else {
      // Remove mobile CSS and class
      const mobileCSS = document.getElementById('mobile-preview-css');
      if (mobileCSS) {
        mobileCSS.remove();
      }
      document.body.classList.remove('mobile-preview-mode');
    }

    // Cleanup on unmount
    return () => {
      const mobileCSS = document.getElementById('mobile-preview-css');
      if (mobileCSS) {
        mobileCSS.remove();
      }
      document.body.classList.remove('mobile-preview-mode');
    };
  }, [isMobilePreview]);

  return (
    <div className="relative">
      {/* Mobile Preview Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleMobilePreview}
          disabled={isLoading}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg ${
            isMobilePreview
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Loading...</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobilePreview ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                )}
              </svg>
              <span>{isMobilePreview ? 'Exit Mobile Preview' : 'Preview Mobile'}</span>
            </>
          )}
        </button>
      </div>

      {/* Preview Mode Indicator */}
      {isMobilePreview && (
        <div className="fixed top-16 right-4 z-40 bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">Mobile Preview Active</span>
          </div>
        </div>
      )}

      {/* Content with mobile preview styling */}
      <div className={isMobilePreview ? 'mobile-preview-container' : ''}>
        {children}
      </div>
    </div>
  );
}
