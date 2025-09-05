import { useEffect, useRef } from 'react';

const CalendlyWidget = () => {
  const calendlyRef = useRef(null);

  useEffect(() => {
    // Load Calendly script if not already loaded
    if (typeof window !== 'undefined' && !window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // Wait for Calendly to be available and initialize
    if (typeof window !== 'undefined') {
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          console.log('Calendly script loaded');
          clearInterval(checkCalendly);
          // Hide loading state
          const loadingElement = document.getElementById('calendly-loading');
          if (loadingElement) {
            loadingElement.style.display = 'none';
          }
        }
      }, 100);

      // Cleanup after 10 seconds
      setTimeout(() => {
        clearInterval(checkCalendly);
        // Hide loading state after timeout
        const loadingElement = document.getElementById('calendly-loading');
        if (loadingElement) {
          loadingElement.style.display = 'none';
        }
      }, 10000);
    }
  }, []);

  return (
    <div className="w-full h-full">
      <div 
        className="calendly-inline-widget w-full h-full" 
        data-url="https://calendly.com/bsairam-2002/30min"
        style={{minWidth: '300px', height: '350px', fontSize: '13px'}}
      ></div>
    </div>
  );
};

export default CalendlyWidget;
