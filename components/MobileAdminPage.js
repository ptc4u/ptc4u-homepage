import Link from 'next/link';

/**
 * Mobile-Specific Admin Page Component
 * 
 * Simplified admin interface optimized for mobile devices
 */
export default function MobileAdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mobile-simplified">
        <div className="mobile-center mb-6">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="mobile-heading">Admin Access</h1>
          <p className="mobile-text">Pinnacle Thrive Coaching Content Management</p>
        </div>

        <div className="mobile-stack">
          {/* Content Manager Button */}
          <Link
            href="/content-manager"
            className="mobile-button"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Content Manager
          </Link>

          {/* Device Preview Section */}
          <div className="mobile-card bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <h3 className="mobile-heading text-lg flex items-center mb-3">
              <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Device Preview
            </h3>
            <p className="mobile-text mb-4">Test how your admin interface looks across different devices</p>
            
            <div className="mobile-stack">
              <Link
                href="/admin-preview"
                className="mobile-button bg-purple-600 hover:bg-purple-700"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Login Preview
              </Link>
              
              <Link
                href="/content-manager-preview"
                className="mobile-button bg-blue-600 hover:bg-blue-700"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Manager Preview
              </Link>
            </div>
          </div>

          {/* Publish Now Button */}
          <button
            onClick={async () => {
              try {
                const response = await fetch('/api/publish-content', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                });
                
                if (response.ok) {
                  alert('Content published successfully! Approved articles are now live on the blog page.');
                } else {
                  alert('Failed to publish content. Please try again.');
                }
              } catch (error) {
                console.error('Publish error:', error);
                alert('Error publishing content. Please try again.');
              }
            }}
            className="mobile-button bg-green-600 hover:bg-green-700"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Publish Now
          </button>

          {/* View Website Button */}
          <Link
            href="/"
            className="mobile-button bg-gray-600 hover:bg-gray-700"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            View Website
          </Link>

          {/* Exit Admin Button */}
          <button
            onClick={() => {
              // Clear all admin sessions
              sessionStorage.removeItem('ptc_admin_authenticated');
              localStorage.removeItem('ptc_site_authenticated');
              localStorage.removeItem('ptc_auth_timestamp');
              // Redirect to home page
              window.location.href = '/';
            }}
            className="mobile-button bg-red-600 hover:bg-red-700"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Exit Admin
          </button>
        </div>

        {/* Mobile-specific info cards */}
        <div className="mobile-stack mt-6">
          <div className="mobile-card bg-yellow-50 border-yellow-200">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-yellow-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-medium text-yellow-800 mb-1">Admin Access Only</h3>
                <p className="mobile-text text-yellow-700">This page is restricted to admin users only. Bookmark this page for quick access to content management.</p>
              </div>
            </div>
          </div>

          <div className="mobile-card bg-blue-50 border-blue-200">
            <h3 className="font-medium text-blue-800 mb-2">Quick Access Instructions:</h3>
            <ol className="mobile-text text-blue-700 space-y-1">
              <li>1. Click "Content Manager" to access the content curation system</li>
              <li>2. Enter the admin password when prompted</li>
              <li>3. Select and approve content from WordPress and LinkedIn</li>
              <li>4. Only approved content will appear to website visitors</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
