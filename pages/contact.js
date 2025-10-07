import Head from 'next/head';
import NavBar from '../components/NavBar';
import UniversalHomeIcon from '../components/UniversalHomeIcon';
import GlobalGoogleCalendarWidget from '../components/GlobalGoogleCalendarWidget';
import ContactForm from '../components/ContactForm';
import QuickActionsSection from '../components/QuickActionsSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';
import GlobalFormHandler from '../components/GlobalFormHandler';

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
        <UniversalHomeIcon />
        <NavBar />
        <div className="hidden lg:block">
        </div>
        <GlobalGoogleCalendarWidget />
        <main className="flex-grow px-4 sm:px-6 lg:px-8 lg:pl-16 lg:pr-20 pb-24 overflow-y-auto flex items-center justify-center page-main-content">
          <div className="max-w-7xl mx-auto w-full">
            <ContactForm />
          </div>
        </main>
        
        {/* Fixed QuickActionsSection at bottom */}
        <QuickActionsSection />
        
        <Footer />
        
        {/* Global Form Handler for service options */}
        <GlobalFormHandler />
      </div>
    </>
  );
}
