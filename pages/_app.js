import '../styles/globals.css';
import ErrorBoundary from '../components/ErrorBoundary';
import AnalyticsTracker from '../components/AnalyticsTracker';

/**
 * The custom App component initializes pages with global styles and analytics.
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <AnalyticsTracker />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
