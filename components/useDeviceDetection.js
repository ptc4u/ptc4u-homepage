import { useState, useEffect } from 'react';

/**
 * Custom hook to detect if the user is on a mobile device
 * Returns true for mobile devices (phones and tablets), false for desktop
 * Handles SSR properly to prevent hydration mismatches
 */
export default function useDeviceDetection() {
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
        const isMobileScreen = window.innerWidth <= 768;
        
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
        console.error('Error in device detection:', error);
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

  return { isMobile, isLoading };
}
