/**
 * VisitorCounter component for displaying personalized visitor number.
 * Shows "You are visitor number #X" for each unique visitor.
 * Only visible to authenticated admin users. Clickable to login or view analytics.
 */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function VisitorCounter({ onLoginClick }) {
  const router = useRouter();
  const [visitorNumber, setVisitorNumber] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    // Check if running on localhost
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      setIsLocalhost(hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0');
    }

    // Check if user is authenticated as admin
    const checkAdminAuth = () => {
      if (typeof window !== 'undefined') {
        const isAuth = sessionStorage.getItem('admin_authenticated') === 'true';
        const token = sessionStorage.getItem('admin_token');
        setIsAdmin(isAuth && !!token);
      }
    };

    checkAdminAuth();
    
    // Listen for storage changes (in case user logs in/out in another tab)
    const handleStorageChange = (e) => {
      if (e.key === 'admin_authenticated' || e.key === 'admin_token') {
        checkAdminAuth();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    // Listen for custom login/logout events
    window.addEventListener('adminLogin', checkAdminAuth);
    window.addEventListener('adminLogout', checkAdminAuth);
    
    // Also check periodically (for same-tab login)
    const interval = setInterval(checkAdminAuth, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('adminLogin', checkAdminAuth);
      window.removeEventListener('adminLogout', checkAdminAuth);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Track visitor count (only once per session)
    const trackVisitor = async () => {
      try {
        // Check if we've already assigned a visitor number for this session
        const visitorNumberKey = 'ptc4u_visitor_number';
        const storedVisitorNumber = sessionStorage.getItem(visitorNumberKey);

        if (storedVisitorNumber) {
          // Use the stored visitor number
          setVisitorNumber(parseInt(storedVisitorNumber, 10));
          setLoading(false);
        } else {
          // New visitor - increment counter and get their number
          const response = await fetch('/api/visitor-count', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            const newVisitorNumber = data.count;
            
            // Store the visitor number for this session
            sessionStorage.setItem(visitorNumberKey, newVisitorNumber.toString());
            setVisitorNumber(newVisitorNumber);
          }
          setLoading(false);
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
        setLoading(false);
      }
    };

    // Show counter if admin OR if on localhost
    if (isAdmin || isLocalhost) {
      trackVisitor();
    } else {
      setLoading(false);
    }
  }, [isAdmin, isLocalhost]);

  // Show login prompt icon if not admin and not on localhost
  if (!isAdmin && !isLocalhost) {
    return (
      <div className="flex flex-col items-center text-center">
        <svg className="w-6 h-6 text-purple-800 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <div className="text-xs text-gray-600">Login</div>
        <div className="text-gray-500 text-xs mt-1 italic">Click to login</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">
        <span className="text-purple-800">Loading...</span>
      </div>
    );
  }

  if (visitorNumber === null) {
    return (
      <div className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">
        <span className="text-purple-800">---</span>
      </div>
    );
  }

  const handleClick = () => {
    if (isAdmin) {
      // Navigate to analytics dashboard when admin clicks
      router.push('/admin/analytics');
    } else if (isLocalhost) {
      // On localhost, clicking can still navigate to analytics (for testing)
      router.push('/admin/analytics');
    }
  };

  return (
    <div 
      className="text-gray-800 text-xs sm:text-sm md:text-base font-medium"
      onClick={isLocalhost ? handleClick : undefined}
      style={isLocalhost ? { cursor: 'pointer' } : {}}
    >
      <div className="text-purple-800 font-bold text-lg">#{visitorNumber.toLocaleString()}</div>
      <div className="text-gray-600 text-xs">Visitor</div>
      {isAdmin && (
        <div className="text-gray-500 text-xs mt-1 italic">Click to view analytics</div>
      )}
      {isLocalhost && !isAdmin && (
        <div className="text-gray-500 text-xs mt-1 italic">Localhost - Click to view analytics</div>
      )}
    </div>
  );
}

