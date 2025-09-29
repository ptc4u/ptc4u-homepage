import Head from 'next/head';
import NavBar from '../components/NavBar';
import MarqueeSection from '../components/MarqueeSection';
import AdditionalMarqueeSection from '../components/AdditionalMarqueeSection';
import GlobalGoogleCalendarWidget from '../components/GlobalGoogleCalendarWidget';
import JobsSection from '../components/JobsSection';
import QuickActionsSection from '../components/QuickActionsSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers - Join Our Team | Pinnacle Thrive Coaching</title>
        <meta
          name="description"
          content="Join our team at Pinnacle Thrive Coaching. We're hiring Sales Executives and Technical Interns. Be part of our mission to transform lives and careers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="careers, jobs, hiring, sales executive, technical intern, Pinnacle Thrive Coaching" />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <NavBar />
        <MarqueeSection />
        <AdditionalMarqueeSection />
        <GlobalGoogleCalendarWidget />
        <main className="flex-grow pt-36 sm:pt-40 lg:pt-44 px-4 sm:px-6 lg:px-8 lg:pl-16 lg:pr-16 pb-24 overflow-y-auto flex items-center justify-center" style={{ height: 'calc(100vh - 80px)' }}>
          <JobsSection />
        </main>
        
        {/* Fixed QuickActionsSection at bottom */}
        <QuickActionsSection />
        
        <Footer />
      </div>
    </>
  );
}
