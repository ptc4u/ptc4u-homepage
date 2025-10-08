import Head from 'next/head';
import NavBar from '../components/NavBar';
import UniversalHomeIcon from '../components/UniversalHomeIcon';
import ArticlesInsightsSection from '../components/ArticlesInsightsSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';
import GlobalFormHandler from '../components/GlobalFormHandler';

export default function BlogsPage() {
  return (
    <>
      <Head>
        <title>PTC Knowledge Base - Pinnacle Thrive Coaching</title>
        <meta
          name="description"
          content="Latest insights and articles from Pinnacle Thrive Coaching LinkedIn content. Leadership development, career growth, and professional transformation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <UniversalHomeIcon />
        <NavBar />
        <div className="hidden lg:block">
        </div>
        <main className="flex-grow px-4 sm:px-6 lg:px-8 lg:pl-16 lg:pr-20 pb-24 overflow-y-auto flex items-center justify-center">
          <ArticlesInsightsSection />
        </main>
        
        <Footer />
        
        {/* Global Form Handler for service options */}
        <GlobalFormHandler />
      </div>
    </>
  );
}
