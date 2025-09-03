import { useState, useEffect } from 'react';

export const useCalendly = (url) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCalendly = () => {
      // Check if we're on the client side
      if (typeof window === 'undefined') return;

      // If Calendly is already available
      if (window.Calendly) {
        setIsLoaded(true);
        setIsLoading(false);
        return;
      }

      // Load Calendly script if not already loaded
      if (!document.querySelector('script[src*="calendly.com"]')) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          setIsLoaded(true);
          setIsLoading(false);
        };
        script.onerror = () => {
          setIsLoading(false);
        };
        document.head.appendChild(script);
      } else {
        // Script exists, wait for it to load
        const checkCalendly = setInterval(() => {
          if (window.Calendly) {
            setIsLoaded(true);
            setIsLoading(false);
            clearInterval(checkCalendly);
          }
        }, 100);

        // Cleanup after 10 seconds
        setTimeout(() => {
          clearInterval(checkCalendly);
          if (!window.Calendly) {
            setIsLoading(false);
          }
        }, 10000);
      }
    };

    loadCalendly();
  }, []);

  const initWidget = (parentElement) => {
    if (window.Calendly && parentElement) {
      try {
        window.Calendly.initInlineWidget({
          url,
          parentElement,
          minWidth: '320px',
          height: '600px'
        });
        console.log('Calendly widget initialized successfully');
      } catch (error) {
        console.error('Error initializing Calendly widget:', error);
      }
    } else {
      console.log('Calendly not ready or parent element not found');
    }
  };

  return { isLoaded, isLoading, initWidget };
};
