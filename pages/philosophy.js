import Head from 'next/head';
import NavBar from '../components/NavBar';
import PhilosophySection from '../components/PhilosophySection';
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
        <main className="flex-grow pt-24">
          <PhilosophySection />
        </main>
        <Footer />
      </div>
    </>
  );
}
