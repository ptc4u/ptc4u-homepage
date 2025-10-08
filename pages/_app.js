import '../styles/globals.css';
import ErrorBoundary from '../components/ErrorBoundary';

/**
 * The custom App component initializes pages with global styles.
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
