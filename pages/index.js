import Head from 'next/head';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

/**
 * The home page of the Pinnacle Thrive Coaching website. It stitches together
 * several composable sections and injects appropriate metadata via the
 * Head component. Each section is defined in the components folder.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Pinnacle Thrive Coaching - Transform Your Life & Career</title>
        <meta
          name="description"
          content="Transform your life and career with expert coaching. Pinnacle Thrive Coaching offers life coaching, corporate coaching, and leadership development to help you reach your full potential."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="life coaching, corporate coaching, leadership development, career coaching, personal growth, transformation" />
        <meta name="author" content="Pinnacle Thrive Coaching" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pinnaclethrivecoaching.com/" />
        <meta property="og:title" content="Pinnacle Thrive Coaching - Transform Your Life & Career" />
        <meta property="og:description" content="Transform your life and career with expert coaching. Reach your full potential with personalized guidance and proven strategies." />
        <meta property="og:image" content="/images/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pinnaclethrivecoaching.com/" />
        <meta property="twitter:title" content="Pinnacle Thrive Coaching - Transform Your Life & Career" />
        <meta property="twitter:description" content="Transform your life and career with expert coaching. Reach your full potential with personalized guidance and proven strategies." />
        <meta property="twitter:image" content="/images/og-image.png" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral-50">
        <NavBar />
        <main className="flex-grow">
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <TestimonialsSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
}
