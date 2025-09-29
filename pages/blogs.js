import Head from 'next/head';
import NavBar from '../components/NavBar';
import MarqueeSection from '../components/MarqueeSection';
import AdditionalMarqueeSection from '../components/AdditionalMarqueeSection';
import GlobalGoogleCalendarWidget from '../components/GlobalGoogleCalendarWidget';
import BlogsSection from '../components/BlogsSection';
import QuickActionsSection from '../components/QuickActionsSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>Blogs & Articles - Pinnacle Thrive Coaching</title>
        <meta
          name="description"
          content="Explore insightful articles and blogs on personal development, career growth, and life transformation from Pinnacle Thrive Coaching."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <NavBar />
        <MarqueeSection />
        <AdditionalMarqueeSection />
        <GlobalGoogleCalendarWidget />
        <main className="flex-grow pt-28 sm:pt-32 lg:pt-36 px-4 sm:px-6 lg:px-8 lg:pl-72 lg:pr-96 pb-24 overflow-y-auto flex items-center justify-center" style={{ height: 'calc(100vh - 80px)' }}>
          <BlogsSection />
        </main>
        
        {/* Fixed QuickActionsSection at bottom */}
        <QuickActionsSection />
        
        <Footer />
      </div>
    </>
  );
}
