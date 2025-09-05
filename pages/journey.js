import Head from 'next/head';
import NavBar from '../components/NavBar';
import MarqueeSection from '../components/MarqueeSection';
import GlobalCalendlyWidget from '../components/GlobalCalendlyWidget';
import JourneyFormSection from '../components/JourneyFormSection';
import QuickActionsSection from '../components/QuickActionsSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';

export default function JourneyPage() {
  return (
    <>
      <Head>
        <title>Start Your Journey - Pinnacle Thrive Coaching</title>
        <meta
          name="description"
          content="Begin your transformation journey with Pinnacle Thrive Coaching. Choose from our coaching programs and start your path to success."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <NavBar />
        <MarqueeSection />
        <GlobalCalendlyWidget />
        <main className="flex-grow pt-24 lg:pl-72 lg:pr-80">
          <JourneyFormSection />
          <QuickActionsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
