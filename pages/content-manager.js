import Head from 'next/head';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import MarqueeSection from '../components/MarqueeSection';
import AdditionalMarqueeSection from '../components/AdditionalMarqueeSection';
import GlobalGoogleCalendarWidget from '../components/GlobalGoogleCalendarWidget';
import LinkedInContentManager from '../components/WordPressContentManager';
import AdminAuth from '../components/AdminAuth';
import QuickActionsSection from '../components/QuickActionsSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';
import PreviewButtons from '../components/PreviewButtons';

export default function ContentManagerPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentDevice, setCurrentDevice] = useState('laptop');

  const handleAuthentication = (authenticated) => {
    setIsAuthenticated(authenticated);
  };

  return (
    <>
      <Head>
        <title>Content Manager - Pinnacle Thrive Coaching</title>
        <meta
          name="description"
          content="Admin access to manage and curate content for the PTC website. Restricted access for content management."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <PreviewButtons onPreviewChange={setCurrentDevice} currentDevice={currentDevice} />
      <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <NavBar />
        <div className="hidden lg:block">
          <MarqueeSection />
          <AdditionalMarqueeSection />
        </div>
        <GlobalGoogleCalendarWidget />
        <main className="flex-grow pt-28 sm:pt-32 lg:pt-36 px-4 sm:px-6 lg:px-8 lg:pl-16 lg:pr-20 pb-24 overflow-y-auto">
          {isAuthenticated ? (
            <LinkedInContentManager />
          ) : (
            <AdminAuth onAuthenticated={handleAuthentication} />
          )}
        </main>
        
        {/* Fixed QuickActionsSection at bottom */}
        <QuickActionsSection />
        
        <Footer />
      </div>
    </>
  );
}
