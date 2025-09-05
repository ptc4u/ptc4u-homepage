import Head from 'next/head';
import NavBar from '../components/NavBar';
import MarqueeSection from '../components/MarqueeSection';
import AdditionalMarqueeSection from '../components/AdditionalMarqueeSection';
import PTCFactsSection from '../components/PTCFactsSection';
import GlobalCalendlyWidget from '../components/GlobalCalendlyWidget';
import PhilosophySection from '../components/PhilosophySection';
import QuickActionsSection from '../components/QuickActionsSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';

export default function PhilosophyPage() {
  return (
    <>
      <Head>
        <title>PTC's 3R Philosophy - Pinnacle Thrive Coaching</title>
        <meta
          name="description"
          content="Discover PTC's transformative 3R Philosophy: Reflect, Reboot, and Reinvent. Learn how this proven methodology drives lasting change and personal growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <NavBar />
        <MarqueeSection />
        <AdditionalMarqueeSection />
        <PTCFactsSection />
        <GlobalCalendlyWidget />
        <main className="flex-grow pt-24 lg:pl-72 lg:pr-96 pb-24 overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
          <PhilosophySection />
        </main>
        
        {/* Fixed QuickActionsSection at bottom */}
        <QuickActionsSection />
        
        <Footer />
      </div>
    </>
  );
}
