import Head from 'next/head';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// Layout optimization - ensure production matches localhost padding
import NavBar from '../components/NavBar';
import UniversalHomeIcon from '../components/UniversalHomeIcon';
import HeroSection from '../components/HeroSection';
import FlippingTestimonialsSection from '../components/FlippingTestimonialsSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';
import PTCFactsSection from '../components/PTCFactsSection';
import AboutCoachSection from '../components/AboutCoachSection';
import ArticlesInsightsSection from '../components/ArticlesInsightsSection';
import dynamic from 'next/dynamic';

import JourneyOptionsSection from '../components/JourneyOptionsSection';
import JobsSection from '../components/JobsSection';
import MobileDropdown from '../components/MobileDropdown';
import GlobalFormHandler from '../components/GlobalFormHandler';
/**
 * The home page of the Pinnacle Thrive Coaching website. It stitches together
 * several composable sections and injects appropriate metadata via the
 * Head component. Each section is defined in the components folder.
 */
export default function Home() {
  const router = useRouter();
  const [currentDevice, setCurrentDevice] = useState('laptop');
  
  // Redirect to minimalist version if on port 3001
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.port === '3001') {
      router.push('/minimalist');
    }
  }, [router]);

  
  // Removed welcome page redirect - landing page loads directly
  
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
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative z-50" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #bae6fd 100%)' }}>
        <ImageWatermark />
        <UniversalHomeIcon />
        <NavBar />
        
        <main className="flex-grow px-4 sm:px-6 lg:px-8 lg:pl-16 lg:pr-20 pb-24 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #bae6fd 100%)' }}>
          <div id="hero">
            <HeroSection />
          </div>
          
          {/* Divider line after hero */}
          <div className="section-divider"></div>
          
          {/* Journey Options Section */}
          <JourneyOptionsSection />
          
          
          <div id="about-coach">
            <AboutCoachSection />
          </div>
          
          {/* Divider line after about coach */}
          <div className="section-divider"></div>
          
          <div id="blogs">
            <ArticlesInsightsSection />
          </div>
          
          {/* Divider line after blogs */}
          <div className="section-divider"></div>
          
          
          
          
          
          <div id="careers">
            <JobsSection />
          </div>
          
          {/* Divider line after careers */}
          <div className="section-divider"></div>
          
          <div id="contact">
            <ContactForm />
          </div>
        </main>
        
        {/* Divider line before footer */}
        <div className="section-divider-thick"></div>
        
        <Footer />
        
        {/* Mobile Dropdown - Temporarily disabled to fix hydration */}
        {/* <MobileDropdown /> */}
        
        {/* Global Form Handler for service options */}
        <GlobalFormHandler />
        </div>
    </>
  );
}
