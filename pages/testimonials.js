import Head from 'next/head';
import NavBar from '../components/NavBar';
import MarqueeSection from '../components/MarqueeSection';
import GlobalCalendlyWidget from '../components/GlobalCalendlyWidget';
import TestimonialsSection from '../components/TestimonialsSection';
import QuickActionsSection from '../components/QuickActionsSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';

export default function TestimonialsPage() {
  return (
    <>
      <Head>
        <title>Client Testimonials - Pinnacle Thrive Coaching</title>
        <meta
          name="description"
          content="Read inspiring success stories from our clients who have transformed their lives and careers through Pinnacle Thrive Coaching programs."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <NavBar />
        <MarqueeSection />
        <GlobalCalendlyWidget />
        <main className="flex-grow pt-24 lg:pl-72 lg:pr-80">
          <TestimonialsSection />
          <QuickActionsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
