import Head from 'next/head';
import NavBar from '../components/NavBar';
import MarqueeSection from '../components/MarqueeSection';
import AdditionalMarqueeSection from '../components/AdditionalMarqueeSection';
import GlobalGoogleCalendarWidget from '../components/GlobalGoogleCalendarWidget';
import AboutCoachSection from '../components/AboutCoachSection';
import QuickActionsSection from '../components/QuickActionsSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Your Coach - Pinnacle Thrive Coaching</title>
        <meta
          name="description"
          content="Meet your transformational coach at Pinnacle Thrive Coaching. Learn about our experienced coach's background, methodology, and commitment to your success."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <NavBar />
        <MarqueeSection />
        <AdditionalMarqueeSection />
        <GlobalGoogleCalendarWidget />
        <main className="flex-grow pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 lg:pl-72 lg:pr-96 pb-24 overflow-y-auto flex items-center justify-center" style={{ height: 'calc(100vh - 80px)' }}>
          <AboutCoachSection />
        </main>
        
        {/* Fixed QuickActionsSection at bottom */}
        <QuickActionsSection />
        
        <Footer />
      </div>
    </>
  );
}
