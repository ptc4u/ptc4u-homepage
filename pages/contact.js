import Head from 'next/head';
import NavBar from '../components/NavBar';
import MarqueeSection from '../components/MarqueeSection';
import GlobalCalendlyWidget from '../components/GlobalCalendlyWidget';
import ContactForm from '../components/ContactForm';
import QuickActionsSection from '../components/QuickActionsSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact PTC - Pinnacle Thrive Coaching</title>
        <meta
          name="description"
          content="Get in touch with Pinnacle Thrive Coaching. Contact us via email, WhatsApp, or schedule a consultation to start your transformation journey."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <NavBar />
        <MarqueeSection />
        <GlobalCalendlyWidget />
        <main className="flex-grow pt-24 lg:pl-72 lg:pr-80">
          <ContactForm />
          <QuickActionsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
