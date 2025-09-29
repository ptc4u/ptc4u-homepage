import { useEffect, useRef, useState } from 'react';

const GoogleCalendarWidget = () => {
  const calendarRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Google Calendar embed
    if (typeof window !== 'undefined' && calendarRef.current) {
      try {
        // Create iframe for Google Calendar embed with proper parameters
        const iframe = document.createElement('iframe');
        
        // Use the correct Google Calendar embed URL format with monthly view
        const calendarUrl = 'https://calendar.google.com/calendar/embed?src=bsairam-2002%40gmail.com&ctz=America%2FNew_York&mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&wkst=1&height=500';
        
        iframe.src = calendarUrl;
        iframe.style.width = '100%';
        iframe.style.height = '500px';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '8px';
        iframe.title = 'Google Calendar';
        iframe.allowFullScreen = true;
        iframe.loading = 'lazy';
        
        // Set up timeout to prevent infinite loading
        const loadingTimeout = setTimeout(() => {
          console.log('Google Calendar loading timeout - showing fallback');
          setHasError(true);
          setIsLoading(false);
        }, 10000); // 10 second timeout
        
        iframe.onload = () => {
          console.log('Google Calendar loaded successfully');
          clearTimeout(loadingTimeout);
          setIsLoading(false);
        };
        
        iframe.onerror = (error) => {
          console.error('Failed to load Google Calendar:', error);
          clearTimeout(loadingTimeout);
          setHasError(true);
          setIsLoading(false);
        };
        
        // Clear the container and add the iframe
        calendarRef.current.innerHTML = '';
        calendarRef.current.appendChild(iframe);
        
        // Cleanup timeout on unmount
        return () => {
          clearTimeout(loadingTimeout);
        };
        
      } catch (error) {
        console.error('Error initializing Google Calendar widget:', error);
        setHasError(true);
        setIsLoading(false);
      }
    }
  }, []);

  if (hasError) {
    return (
      <div className="w-full h-full bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-blue-500 mb-2"></div>
          <p className="text-sm text-gray-600 mb-2">Schedule Your Session</p>
          <p className="text-xs text-gray-500 mb-3">Click below to view our calendar</p>
          <a 
            href="https://calendar.google.com/calendar/u/6/r" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors mb-2"
          >
            View Calendar
          </a>
          <p className="text-xs text-gray-400">Opens in new window</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Loading calendar...</p>
          </div>
        </div>
      )}
      
      <div 
        ref={calendarRef}
        className="w-full h-full bg-white" 
        style={{
          minWidth: '280px', 
          height: '500px',
          backgroundColor: 'white',
          background: 'white'
        }}
      ></div>
      
      <style jsx>{`
        .google-calendar-widget {
          background-color: white !important;
          background: white !important;
        }
        
        .google-calendar-widget iframe {
          background-color: white !important;
          background: white !important;
          border: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleCalendarWidget;
