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
    <div className="w-full h-full bg-white">
      <div 
        className="calendly-inline-widget w-full h-full bg-white" 
        data-url="https://calendly.com/bsairam-2002/30min"
        style={{
          minWidth: '280px', 
          height: '500px', 
          fontSize: '11px',
          backgroundColor: 'white',
          background: 'white'
        }}
      ></div>
      
      <style jsx>{`
        .calendly-inline-widget {
          background-color: white !important;
          background: white !important;
        }
        
        .calendly-inline-widget iframe {
          background-color: white !important;
          background: white !important;
          border: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        
        /* Compact Calendly styling */
        .calendly-inline-widget iframe {
          transform: scale(0.95) !important;
          transform-origin: top left !important;
        }
        
        /* Adjust vertical gaps within Calendly widget */
        .calendly-inline-widget iframe {
          line-height: 1.2 !important;
        }
        
        /* Target Calendly content for tighter spacing */
        .calendly-inline-widget iframe * {
          line-height: 1.0 !important;
          margin-top: 1px !important;
          margin-bottom: 1px !important;
        }
        
        /* Specific spacing adjustments for Calendly elements */
        .calendly-inline-widget iframe .calendly-event {
          margin-bottom: 2px !important;
        }
        
        .calendly-inline-widget iframe .calendly-event-title {
          margin-bottom: 1px !important;
        }
        
        .calendly-inline-widget iframe .calendly-event-time {
          margin-bottom: 1px !important;
        }
        
        .calendly-inline-widget iframe .calendly-event-duration {
          margin-bottom: 2px !important;
        }
        
        /* Hide name/header elements to reclaim space */
        .calendly-inline-widget iframe .calendly-popup-header,
        .calendly-inline-widget iframe .calendly-popup-header-content,
        .calendly-inline-widget iframe .calendly-popup-header-content h1,
        .calendly-inline-widget iframe .calendly-popup-header-content h2,
        .calendly-inline-widget iframe .calendly-popup-header-content h3,
        .calendly-inline-widget iframe .calendly-popup-header-content .calendly-popup-header-text,
        .calendly-inline-widget iframe .calendly-popup-header-content .calendly-popup-header-text *,
        .calendly-inline-widget iframe .calendly-popup-header-content .calendly-popup-header-text p,
        .calendly-inline-widget iframe .calendly-popup-header-content .calendly-popup-header-text div,
        .calendly-inline-widget iframe .calendly-popup-header-content .calendly-popup-header-text span,
        .calendly-inline-widget iframe .calendly-popup-header-content .calendly-popup-header-text strong,
        .calendly-inline-widget iframe .calendly-popup-header-content .calendly-popup-header-text b,
        .calendly-inline-widget iframe .calendly-popup-header-content .calendly-popup-header-text em,
        .calendly-inline-widget iframe .calendly-popup-header-content .calendly-popup-header-text i,
        .calendly-inline-widget iframe .calendly-popup-header-content .calendly-popup-header-text .calendly-popup-header-text-content,
        .calendly-inline-widget iframe .calendly-popup-header-content .calendly-popup-header-text .calendly-popup-header-text-content * {
          display: none !important;
          height: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
          visibility: hidden !important;
        }
      `}</style>
    </div>
  );
};

export default CalendlyWidget;
