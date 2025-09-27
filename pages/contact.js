import Head from 'next/head';
import NavBar from '../components/NavBar';
import MarqueeSection from '../components/MarqueeSection';
import AdditionalMarqueeSection from '../components/AdditionalMarqueeSection';
import PTCFactsSection from '../components/PTCFactsSection';
import GlobalGoogleCalendarWidget from '../components/GlobalGoogleCalendarWidget';
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
        <AdditionalMarqueeSection />
        <PTCFactsSection />
        <GlobalGoogleCalendarWidget />
        <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 lg:pl-72 lg:pr-96 pb-24 overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
          <ContactForm />
        </main>
        
        {/* Fixed QuickActionsSection at bottom */}
        <QuickActionsSection />
        
        <Footer />
      </div>
    </>
  );
}
