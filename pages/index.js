import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';
import MarqueeSection from '../components/MarqueeSection';
import AdditionalMarqueeSection from '../components/AdditionalMarqueeSection';
import PTCFactsSection from '../components/PTCFactsSection';
import GlobalCalendlyWidget from '../components/GlobalCalendlyWidget';
import QuickActionsSection from '../components/QuickActionsSection';
import AboutCoachSection from '../components/AboutCoachSection';
import BlogsSection from '../components/BlogsSection';
import PhilosophySection from '../components/PhilosophySection';
import JourneyFormSection from '../components/JourneyFormSection';
import MobileDropdown from '../components/MobileDropdown';
import useDeviceDetection from '../components/useDeviceDetection';

/**
 * The home page of the Pinnacle Thrive Coaching website. It stitches together
 * several composable sections and injects appropriate metadata via the
 * Head component. Each section is defined in the components folder.
 */
export default function Home() {
  const { isMobile, isLoading } = useDeviceDetection();
  
  // Ensure page scrolls to hero section on every refresh
  useEffect(() => {
    // Scroll to top of the page on component mount (page refresh)
    window.scrollTo(0, 0);
    
    // Also scroll the main content area to top
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTop = 0;
    }
  }, []);

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
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <NavBar />
        <MarqueeSection />
        <AdditionalMarqueeSection />
        <PTCFactsSection />
        <GlobalCalendlyWidget />
        
        <main className="flex-grow px-4 sm:px-6 lg:px-8 lg:pl-72 lg:pr-96 pb-24 overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
          <div id="hero">
            <HeroSection />
          </div>
          
          {/* Divider line after hero */}
          <div className="section-divider"></div>
          
          {/* QuickActionsSection is now fixed at bottom of page */}
          
          <div id="about-coach">
            <AboutCoachSection />
          </div>
          
          {/* Divider line after about coach */}
          <div className="section-divider"></div>
          
          <div id="blogs">
            <BlogsSection />
          </div>
          
          {/* Divider line after blogs */}
          <div className="section-divider"></div>
          
          <div id="philosophy">
            <PhilosophySection />
          </div>
          
          {/* Divider line after philosophy */}
          <div className="section-divider"></div>
          
          <div id="journey-form">
            <JourneyFormSection />
          </div>
          
          {/* Divider line after journey form */}
          <div className="section-divider"></div>
          
          <div id="services">
            <ServicesSection />
          </div>
          
          {/* Divider line after services */}
          <div className="section-divider"></div>
          
          <div id="process">
            <ProcessSection />
          </div>
          
          {/* Divider line after process */}
          <div className="section-divider"></div>
          
          <div id="testimonials">
            <TestimonialsSection />
          </div>
          
          {/* Divider line after testimonials */}
          <div className="section-divider"></div>
          
          <div id="contact">
            <ContactForm />
          </div>
        </main>
        
        {/* Fixed QuickActionsSection at bottom */}
        <QuickActionsSection />
        
        {/* Divider line before footer */}
        <div className="section-divider-thick"></div>
        
        <Footer />
        
        {/* Mobile Dropdown - Only show on mobile devices */}
        {!isLoading && isMobile && <MobileDropdown />}
      </div>
    </>
  );
}
