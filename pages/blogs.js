import Head from 'next/head';
import NavBar from '../components/NavBar';
import MarqueeSection from '../components/MarqueeSection';
import AdditionalMarqueeSection from '../components/AdditionalMarqueeSection';
import GlobalGoogleCalendarWidget from '../components/GlobalGoogleCalendarWidget';
import ArticlesInsightsSection from '../components/ArticlesInsightsSection';
import QuickActionsSection from '../components/QuickActionsSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>Articles & Insights - Pinnacle Thrive Coaching</title>
        <meta
          name="description"
          content="Latest insights and articles from Pinnacle Thrive Coaching LinkedIn content. Leadership development, career growth, and professional transformation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <NavBar />
        <div className="hidden lg:block">
          <MarqueeSection />
          <AdditionalMarqueeSection />
        </div>
        <GlobalGoogleCalendarWidget />
        <main className="flex-grow pt-28 sm:pt-32 lg:pt-36 px-4 sm:px-6 lg:px-8 lg:pl-16 lg:pr-20 pb-24 overflow-y-auto">
          <ArticlesInsightsSection />
        </main>
        
        {/* Fixed QuickActionsSection at bottom */}
        <QuickActionsSection />
        
        <Footer />
      </div>
    </>
  );
}
