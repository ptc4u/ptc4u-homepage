import '../styles/globals.css';
import ImageWatermark from '../components/ImageWatermark';

/**
 * The custom App component initializes pages with global styles and watermark.
 * This is the original landing page setup without authentication requirements.
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* 
        Watermark Options:
        1. Use SVG design: <ImageWatermark />
        2. Use image file (current): <ImageWatermark imageSrc="/images/watermark.png" />
        3. Customize opacity: <ImageWatermark opacity={0.03} />
        4. Customize size: <ImageWatermark size="xl" />
      */}
      <ImageWatermark imageSrc="/images/watermark.png" opacity={0.15} />
      <Component {...pageProps} />
    </>
  );
}
