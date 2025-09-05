import { useEffect, useRef } from 'react';

const CalendlyWidget = () => {
  const calendlyRef = useRef(null);

  useEffect(() => {
    // Calendly script is loaded via next/script in index.js
    // Just wait for it to be available
    if (typeof window !== 'undefined') {
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          console.log('Calendly script loaded');
          clearInterval(checkCalendly);
        }
      }, 100);

      // Cleanup after 10 seconds
      setTimeout(() => {
        clearInterval(checkCalendly);
      }, 10000);
    }
  }, []);

  return (
    <div className="w-full h-full">
      <div 
        className="calendly-inline-widget w-full h-full" 
        data-url="https://calendly.com/bsairam-2002/30min"
        style={{minWidth: '300px', height: '450px', fontSize: '13px'}}
      ></div>
    </div>
  );
};

export default CalendlyWidget;
