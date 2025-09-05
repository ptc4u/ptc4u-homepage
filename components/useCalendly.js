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

      // Calendly script is loaded via next/script in index.js
      // Just wait for it to be available
      if (document.querySelector('script[src*="calendly.com"]')) {
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
