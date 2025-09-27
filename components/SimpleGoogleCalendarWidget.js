import { useEffect, useRef, useState } from 'react';

const SimpleGoogleCalendarWidget = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to show fallback if loading takes too long
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.log('Google Calendar loading timeout - showing fallback');
        setHasError(true);
        setIsLoading(false);
      }
    }, 8000); // 8 second timeout

    // Simulate loading completion after a short delay
    const loadingDelay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(loadingDelay);
    };
  }, [isLoading]);

  if (hasError) {
    return (
      <div className="w-full h-full bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-blue-500 mb-2">📅</div>
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
      
      {/* Direct iframe embed with monthly calendar view */}
      <iframe
        src="https://calendar.google.com/calendar/embed?src=bsairam-2002%40gmail.com&ctz=America%2FNew_York&mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&wkst=1"
        style={{
          width: '100%',
          height: '500px',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: 'white'
        }}
        title="Google Calendar - Monthly View"
        loading="lazy"
        onLoad={() => {
          console.log('Google Calendar monthly view loaded');
          setIsLoading(false);
        }}
        onError={() => {
          console.error('Google Calendar iframe failed to load');
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
};

export default SimpleGoogleCalendarWidget;
