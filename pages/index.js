import Head from 'next/head';
import Script from 'next/script';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import UniversalHomeIcon from '../components/UniversalHomeIcon';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';
import AboutCoachSection from '../components/AboutCoachSection';
import ArticlesInsightsSection from '../components/ArticlesInsightsSection';
import JourneyOptionsSection from '../components/JourneyOptionsSection';
import JobsSection from '../components/JobsSection';
import GlobalFormHandler from '../components/GlobalFormHandler';
import VisitorCounter from '../components/VisitorCounter';

/**
 * The home page of Pinnacle Thrive Coaching website.
 * Renders key sections including hero, services, about, blog, careers, and contact.
 */
export default function Home() {
  const router = useRouter();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleWidgetClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push('/admin/analytics');
  };

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
        <meta property="og:url" content="https://ptc4u.com/" />
        <meta property="og:title" content="Pinnacle Thrive Coaching - Transform Your Life & Career" />
        <meta property="og:description" content="Transform your life and career with expert coaching. Reach your full potential with personalized guidance and proven strategies." />
        <meta property="og:image" content="/images/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ptc4u.com/" />
        <meta property="twitter:title" content="Pinnacle Thrive Coaching - Transform Your Life & Career" />
        <meta property="twitter:description" content="Transform your life and career with expert coaching. Reach your full potential with personalized guidance and proven strategies." />
        <meta property="twitter:image" content="/images/og-image.png" />

        {/* Favicon - Using PTC Logo */}
        <link rel="icon" type="image/png" href="/rndPTClogo.png" />
        <link rel="apple-touch-icon" href="/rndPTClogo.png" />
        <link rel="shortcut icon" href="/rndPTClogo.png" />
      </Head>


      <div className="min-h-screen" style={{ background: 'var(--gradient-bg)' }}>
                <ImageWatermark size="xl" opacity={0.12} />
        <UniversalHomeIcon />
        <NavBar />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-18">
          {/* Hero Section */}
          <section id="hero" className="section">
            <HeroSection />
          </section>

          <div className="section-divider" />

          {/* About Coach Section */}
          <section id="about-coach" className="section">
            <AboutCoachSection />
          </section>

          <div className="section-divider" />

          {/* Journey Options Section */}
          <section id="journey" className="section">
            <JourneyOptionsSection />
          </section>

          <div className="section-divider" />

          {/* Knowledge Base Section */}
          <section id="blogs" className="section">
            <ArticlesInsightsSection />
          </section>

          <div className="section-divider" />

          {/* Careers Section */}
          <section id="careers" className="section">
            <JobsSection />
          </section>

          <div className="section-divider" />

        </main>

        <div className="section-divider-thick" />

        <Footer />

        {/* Global Form Handler for service options */}
        <GlobalFormHandler />

        {/* Fixed Visitor Counter - Bottom of Screen */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-purple-600 shadow-lg">
          <div 
            className="container mx-auto px-4 py-3 cursor-pointer hover:bg-purple-50 transition-colors"
            onClick={handleWidgetClick}
            title="Click to view analytics dashboard"
          >
            <VisitorCounter />
          </div>
        </div>

      </div>
    </>
  );
}
