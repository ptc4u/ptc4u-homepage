import { useEffect, useState } from 'react';
import Head from 'next/head';

/**
 * Mobile Wrapper Component
 * 
 * This component conditionally loads mobile-specific CSS and components
 * only on mobile devices, keeping desktop and mobile versions completely separate.
 */
export default function MobileWrapper({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') {
      setIsLoading(false);
      return;
    }

    const checkDevice = () => {
      try {
        // Check screen width first (most reliable for responsive design)
        const isMobileScreen = window.innerWidth <= 1023;
        
        // Check for mobile user agent as secondary check
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const mobilePatterns = [
          /Android/i,
          /webOS/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i,
          /Mobile/i
        ];
        const isMobileUserAgent = mobilePatterns.some(pattern => pattern.test(userAgent));
        
        // Consider it mobile if either user agent or screen size indicates mobile
        const isMobileDevice = isMobileScreen || isMobileUserAgent;
        
        setIsMobile(isMobileDevice);
        setIsLoading(false);
      } catch (error) {
        console.error('Error in mobile detection:', error);
        setIsMobile(false);
        setIsLoading(false);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      checkDevice();
    }, 100);

    // Add resize listener to handle orientation changes and window resizing
    const handleResize = () => {
      checkDevice();
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Show loading state during device detection
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      {/* Load mobile CSS only on mobile devices */}
      {isMobile && (
        <Head>
          <link rel="stylesheet" href="/styles/mobile.css" />
        </Head>
      )}
      
      {/* Add mobile class to body for additional mobile-specific styling */}
      {isMobile && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.body.classList.add('mobile-device');
            `,
          }}
        />
      )}
      
      {/* Render children with mobile context */}
      <div className={isMobile ? 'mobile-device' : 'desktop-device'}>
        {children}
      </div>
    </>
  );
}
