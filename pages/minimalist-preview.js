import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import UniversalHomeIcon from '../components/UniversalHomeIcon';

/**
 * Minimalist Device Preview Page
 * 
 * Clean device preview interface that matches the minimalist design.
 */
export default function MinimalistPreview() {
  const router = useRouter();
  const [previewDevice, setPreviewDevice] = useState('laptop');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  // Handle URL parameters for device preview
  useEffect(() => {
    if (router.isReady) {
      const { device, preview } = router.query;
      if (preview === 'true' && device) {
        setPreviewDevice(device);
        setIsPreviewMode(true);
      }
    }
  }, [router.isReady, router.query]);

  // Apply device-specific styling for preview mode
  useEffect(() => {
    if (isPreviewMode) {
      document.body.classList.add(`${previewDevice}-preview-mode`);
      
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta) {
        if (previewDevice === 'mobile') {
          viewportMeta.setAttribute('content', 'width=375, initial-scale=1');
        } else if (previewDevice === 'tablet') {
          viewportMeta.setAttribute('content', 'width=768, initial-scale=1');
        }
      }
      
      return () => {
        document.body.classList.remove('laptop-preview-mode', 'tablet-preview-mode', 'mobile-preview-mode');
      };
    }
  }, [isPreviewMode, previewDevice]);

  if (isPreviewMode) {
    return (
      <>
        <Head>
          <title>Device Preview - Pinnacle Thrive Coaching</title>
          <meta name="viewport" content={isPreviewMode ? (previewDevice === 'mobile' ? "width=375, initial-scale=1" : previewDevice === 'tablet' ? "width=768, initial-scale=1" : "width=device-width, initial-scale=1") : "width=device-width, initial-scale=1"} />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        
        <div className={`${previewDevice}-preview-container`}>
          {/* Universal Home Icon */}
          <UniversalHomeIcon />
          
          {/* Back to Admin Button */}
          <div className="fixed top-4 left-4 z-50">
            <button
              onClick={() => {
                const currentUrl = window.location.href;
                const baseUrl = currentUrl.split('?')[0];
                window.location.href = baseUrl;
              }}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm font-medium">Back to Admin</span>
            </button>
          </div>
          
          {/* Device Preview Indicator */}
          <div className="fixed top-4 right-4 z-50">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg">
                  {previewDevice === 'laptop' ? '💻' : previewDevice === 'tablet' ? '📱' : '📱'}
                </span>
                <div>
                  <div className="text-sm font-semibold text-gray-800 capitalize">{previewDevice} Preview</div>
                  <div className="text-xs text-gray-500">
                    {previewDevice === 'mobile' ? '375px width' : 
                     previewDevice === 'tablet' ? '768px width' : 
                     'Full desktop view'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`${previewDevice}-preview`}>
            {/* Render the minimalist homepage content */}
            <div className="min-h-screen bg-white">
              {/* Navigation */}
              <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                      <Link href="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-lg">P</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">Pinnacle Thrive Coaching</span>
                      </Link>
                    </div>
                    <div className="flex items-center space-x-8">
                      <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
                      <Link href="/journey" className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
                      <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
                    </div>
                  </div>
                </div>
              </nav>

              {/* Hero Section */}
              <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                      Transform Your Life with
                      <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Expert Coaching
                      </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                      Unlock your potential and achieve your goals with personalized coaching sessions 
                      designed to help you thrive in every aspect of life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="#contact" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                        Start Your Journey
                      </Link>
                      <Link href="#about" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services Grid */}
              <section id="services" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Comprehensive coaching solutions tailored to your unique needs and goals.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Life Coaching</h3>
                      <p className="text-gray-600 mb-6">
                        Personal development and goal achievement through one-on-one coaching sessions.
                      </p>
                      <Link href="#contact" className="text-purple-600 hover:text-purple-700 font-medium">
                        Learn More →
                      </Link>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Career Coaching</h3>
                      <p className="text-gray-600 mb-6">
                        Professional development and career advancement strategies for success.
                      </p>
                      <Link href="#contact" className="text-purple-600 hover:text-purple-700 font-medium">
                        Learn More →
                      </Link>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Wellness Coaching</h3>
                      <p className="text-gray-600 mb-6">
                        Holistic approach to mental and physical well-being for a balanced life.
                      </p>
                      <Link href="#contact" className="text-purple-600 hover:text-purple-700 font-medium">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Normal admin preview mode
  return (
    <>
      <Head>
        <title>Device Preview - Pinnacle Thrive Coaching</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Device Preview</span>
              </div>
              <Link href="/minimalist-admin" className="text-gray-600 hover:text-gray-900 font-medium">
                Back to Admin
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Device Preview</h1>
            <p className="text-gray-600">Preview how your website looks on different devices</p>
          </div>

          {/* Device Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <button
              onClick={() => {
                const currentUrl = window.location.href;
                const baseUrl = currentUrl.split('?')[0];
                window.location.href = `${baseUrl}?device=laptop&preview=true`;
              }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Laptop Preview</h3>
              <p className="text-gray-600 mb-4">Full desktop experience</p>
              <span className="text-purple-600 font-medium">Preview →</span>
            </button>

            <button
              onClick={() => {
                const currentUrl = window.location.href;
                const baseUrl = currentUrl.split('?')[0];
                window.location.href = `${baseUrl}?device=tablet&preview=true`;
              }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tablet Preview</h3>
              <p className="text-gray-600 mb-4">768px width experience</p>
              <span className="text-purple-600 font-medium">Preview →</span>
            </button>

            <button
              onClick={() => {
                const currentUrl = window.location.href;
                const baseUrl = currentUrl.split('?')[0];
                window.location.href = `${baseUrl}?device=mobile&preview=true`;
              }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Preview</h3>
              <p className="text-gray-600 mb-4">375px width experience</p>
              <span className="text-purple-600 font-medium">Preview →</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/minimalist" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center">
              View Website
            </Link>
            <Link href="/minimalist-admin" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center">
              Back to Admin
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
