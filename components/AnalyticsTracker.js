/**
 * Analytics Tracker component for tracking page views and user behavior.
 * Tracks page views, referrers, user agents, and session information.
 */
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AnalyticsTracker() {
  const router = useRouter();

  useEffect(() => {
    // Get or create session ID
    const sessionKey = 'ptc4u_analytics_session';
    let sessionId = sessionStorage.getItem(sessionKey);
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
      sessionStorage.setItem(sessionKey, sessionId);
    }

    const trackPageView = async (path, referrer = '') => {
      try {
        // Get basic browser and device information
        const analyticsData = {
          path,
          referrer: referrer || document.referrer || 'direct',
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          sessionId, // Include session ID
        };

        // Send to analytics API
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(analyticsData),
        });
      } catch (error) {
        // Silently fail analytics tracking
        console.error('Analytics tracking error:', error);
      }
    };

    // Track initial page view
    trackPageView(router.asPath);

    // Track route changes
    const handleRouteChange = (url) => {
      trackPageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Track exit (beforeunload) - using fetch with keepalive
    const handleBeforeUnload = () => {
      const data = JSON.stringify({
        path: router.asPath,
        event: 'page_exit',
        timestamp: new Date().toISOString(),
        sessionId, // Include session ID
      });
      // Use fetch with keepalive for reliable exit tracking
      fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
        keepalive: true,
      }).catch(() => {});
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Track scroll depth (optional)
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        ((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight) * 100
      );
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        // Track 25%, 50%, 75%, 100% scroll milestones
        if ([25, 50, 75, 100].includes(scrollPercent)) {
          fetch('/api/analytics/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              path: router.asPath,
              event: 'scroll',
              scrollDepth: scrollPercent,
              timestamp: new Date().toISOString(),
              sessionId, // Include session ID
            }),
          }).catch(() => {});
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router]);

  return null; // This component doesn't render anything
}

