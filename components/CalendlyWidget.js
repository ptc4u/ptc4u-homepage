import { useEffect, useRef } from 'react';

const CalendlyWidget = () => {
  const calendlyRef = useRef(null);

  useEffect(() => {
    // Load Calendly script only on client side
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        // Script loaded, widget will initialize automatically
        console.log('Calendly script loaded');
      };
      document.head.appendChild(script);

      return () => {
        // Cleanup script when component unmounts
        const existingScript = document.querySelector('script[src*="calendly.com"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200/50">
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/bsairam-2002/30min"
          style={{minWidth: '320px', height: '600px'}}
        ></div>
      </div>
    </div>
  );
};

export default CalendlyWidget;
