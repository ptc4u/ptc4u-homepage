import Head from 'next/head';
import DevicePreview from '../components/DevicePreview';
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

/**
 * Content Manager Preview Page with Device Preview
 * 
 * This page shows how the content manager interface renders across different devices:
 * - Laptop (Desktop)
 * - Tablet  
 * - Mobile
 */
export default function ContentManagerPreviewPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = (authenticated) => {
    setIsAuthenticated(authenticated);
  };

  return (
    <>
      <Head>
        <title>Content Manager Preview - Pinnacle Thrive Coaching</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <DevicePreview>
        {/* Content Manager Content - Same as content-manager.js but without the outer container */}
        <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <NavBar />
        <div className="hidden lg:block">
          <MarqueeSection />
          <AdditionalMarqueeSection />
        </div>
        <GlobalGoogleCalendarWidget />
          
          <main className="flex-grow pt-32 sm:pt-36 lg:pt-40 px-4 sm:px-6 lg:px-8 lg:pl-16 lg:pr-20 pb-24 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              {!isAuthenticated ? (
                <AdminAuth onAuthenticated={handleAuthentication} />
              ) : (
                <LinkedInContentManager />
              )}
            </div>
          </main>
          
          {/* Fixed QuickActionsSection at bottom */}
          <QuickActionsSection />
          
          <Footer />
        </div>
      </DevicePreview>
    </>
  );
}
