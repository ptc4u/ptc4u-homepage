import Head from 'next/head';
import NavBar from '../components/NavBar';
import MarqueeSection from '../components/MarqueeSection';
import GlobalCalendlyWidget from '../components/GlobalCalendlyWidget';
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
        <GlobalCalendlyWidget />
        <main className="flex-grow pt-24 lg:pl-72 lg:pr-80">
          <AboutCoachSection />
          <QuickActionsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
