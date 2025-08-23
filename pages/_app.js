import '../styles/globals.css';

/**
 * The custom App component initializes pages. We import global styles here so
 * Tailwind's base and utility classes are available throughout the app.
 */
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
