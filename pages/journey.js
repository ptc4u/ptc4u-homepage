import Head from 'next/head';
import NavBar from '../components/NavBar';
import JourneyFormSection from '../components/JourneyFormSection';
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
        <main className="flex-grow pt-24">
          <JourneyFormSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
