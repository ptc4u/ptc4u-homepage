import Head from 'next/head';
import NavBar from '../components/NavBar';
import MarqueeSection from '../components/MarqueeSection';
import GlobalCalendlyWidget from '../components/GlobalCalendlyWidget';
import BlogsSection from '../components/BlogsSection';
import QuickActionsSection from '../components/QuickActionsSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>Blogs & Articles - Pinnacle Thrive Coaching</title>
        <meta
          name="description"
          content="Explore insightful articles and blogs on personal development, career growth, and life transformation from Pinnacle Thrive Coaching."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <NavBar />
        <MarqueeSection />
        <GlobalCalendlyWidget />
        <main className="flex-grow pt-24 lg:pl-72 lg:pr-80">
          <BlogsSection />
          <QuickActionsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
