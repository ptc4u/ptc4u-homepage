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
import AdminLoginModal from '../components/AdminLoginModal';

/**
 * The home page of Pinnacle Thrive Coaching website.
 * Renders key sections including hero, services, about, blog, careers, and contact.
 */
export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Check admin authentication status
  useEffect(() => {
    const checkAdminAuth = () => {
      if (typeof window !== 'undefined') {
        const isAuth = sessionStorage.getItem('admin_authenticated') === 'true';
        const token = sessionStorage.getItem('admin_token');
        setIsAdmin(isAuth && !!token);
      }
    };

    checkAdminAuth();

    // Listen for login/logout events
    const handleAuthChange = () => {
      checkAdminAuth();
    };

    window.addEventListener('adminLogin', handleAuthChange);
    window.addEventListener('adminLogout', handleAuthChange);
    window.addEventListener('storage', (e) => {
      if (e.key === 'admin_authenticated' || e.key === 'admin_token') {
        checkAdminAuth();
      }
    });

    // Check periodically
    const interval = setInterval(checkAdminAuth, 1000);

    return () => {
      window.removeEventListener('adminLogin', handleAuthChange);
      window.removeEventListener('adminLogout', handleAuthChange);
      clearInterval(interval);
    };
  }, []);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    setIsAdmin(true);
  };

  const handleWidgetClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAdmin) {
      router.push('/admin/analytics');
    } else {
      handleLoginClick();
    }
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

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-20">
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

        {/* Fixed Visitor Counter - Right Side (Desktop) */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:block">
          <div 
            className="bg-white border-2 border-purple-600 rounded-lg shadow-xl px-4 py-3 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer select-none active:scale-95"
            onClick={handleWidgetClick}
            title={isAdmin ? "Click to view analytics dashboard" : "Click to login as admin"}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-2">
                <svg className="w-8 h-8 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <VisitorCounter onLoginClick={handleLoginClick} />
            </div>
          </div>
        </div>

        {/* Fixed Visitor Counter - Bottom Right (Mobile) */}
        <div className="fixed bottom-4 right-4 z-40 md:hidden">
          <div 
            className="bg-white border-2 border-purple-600 rounded-lg shadow-xl px-3 py-2 hover:shadow-2xl hover:scale-105 transition-all cursor-pointer select-none active:scale-95"
            onClick={handleWidgetClick}
            title={isAdmin ? "Click to view analytics dashboard" : "Click to login as admin"}
          >
            <VisitorCounter onLoginClick={handleLoginClick} />
          </div>
        </div>

        {/* Admin Login Modal */}
        {showLoginModal && (
          <AdminLoginModal
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
            onSuccess={handleLoginSuccess}
          />
        )}
      </div>
    </>
  );
}
