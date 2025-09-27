import { useEffect, useRef, useState } from 'react';

const CalendlyWidget = () => {
  const calendlyRef = useRef(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Load Calendly script if not already loaded
    if (typeof window !== 'undefined' && !window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        console.log('Calendly script loaded successfully');
      };
      script.onerror = (error) => {
        console.error('Failed to load Calendly script:', error);
        setHasError(true);
      };
      document.head.appendChild(script);
    }

    // Wait for Calendly to be available and initialize
    if (typeof window !== 'undefined') {
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          console.log('Calendly script loaded and available');
          clearInterval(checkCalendly);
          // Hide loading state
          const loadingElement = document.getElementById('calendly-loading');
          if (loadingElement) {
            loadingElement.style.display = 'none';
          }
          
          // Initialize the widget with a small delay to ensure DOM is ready
          setTimeout(() => {
            try {
              console.log('Attempting to initialize Calendly widget...');
              console.log('Parent element:', calendlyRef.current);
              console.log('Calendly object:', window.Calendly);
              
              if (calendlyRef.current) {
                // Try to validate the URL first
                fetch('https://calendly.com/bsairam-2002/30min', { method: 'HEAD' })
                  .then(response => {
                    if (response.ok) {
                      console.log('Calendly URL is valid, initializing widget...');
                      window.Calendly.initInlineWidget({
                        url: 'https://calendly.com/bsairam-2002/30min',
                        parentElement: calendlyRef.current,
                        minWidth: '280px',
                        height: '500px',
                        prefill: {},
                        utm: {}
                      });
                      console.log('Calendly widget initialized successfully');
                    } else {
                      console.error('Calendly URL returned error:', response.status);
                      setHasError(true);
                    }
                  })
                  .catch(error => {
                    console.error('Error validating Calendly URL:', error);
                    setHasError(true);
                  });
              } else {
                console.error('Parent element not found for Calendly widget');
                setHasError(true);
              }
            } catch (error) {
              console.error('Error initializing Calendly widget:', error);
              setHasError(true);
            }
          }, 100);
        }
      }, 100);

      // Cleanup after 5 seconds (reduced timeout)
      setTimeout(() => {
        clearInterval(checkCalendly);
        // Hide loading state after timeout
        const loadingElement = document.getElementById('calendly-loading');
        if (loadingElement) {
          loadingElement.style.display = 'none';
        }
        console.log('Calendly loading timeout reached - showing fallback');
        setHasError(true);
      }, 5000);
    }
  }, []);

  if (hasError) {
    return (
      <div className="w-full h-full bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-blue-500 mb-2">📅</div>
          <p className="text-sm text-gray-600 mb-2">Schedule Your Session</p>
          <p className="text-xs text-gray-500 mb-3">Click below to book your 30-minute coaching session</p>
          <a 
            href="https://calendly.com/bsairam-2002/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors mb-2"
          >
            Book Now
          </a>
          <p className="text-xs text-gray-400">Opens in new window</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white">
      <div 
        ref={calendlyRef}
        className="calendly-inline-widget w-full h-full bg-white" 
        data-url="https://calendly.com/bsairam-2002/30min"
        data-auto-load="false"
        data-embed-type="inline"
        data-embed-widget="inline"
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
