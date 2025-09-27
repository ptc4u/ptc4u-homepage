import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * Welcome landing page for Pinnacle Thrive Coaching.
 * 
 * This is the first page users see after authentication.
 * Provides an overview and navigation to the main site.
 */
export default function WelcomePage() {
  const router = useRouter();

  // Auto-redirect to main site after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('ptc_has_seen_welcome', 'true');
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  const handleContinue = () => {
    localStorage.setItem('ptc_has_seen_welcome', 'true');
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Welcome - Pinnacle Thrive Coaching</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          {/* Welcome Header */}
          <div className="mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Welcome to <span className="text-blue-600">Pinnacle Thrive Coaching</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your journey to transformation begins here. Discover our 3R Philosophy and unlock your full potential.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reflect</h3>
              <p className="text-gray-600 text-sm">Gain deep insights into your current situation and identify areas for growth.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reboot</h3>
              <p className="text-gray-600 text-sm">Reset your mindset and approach with fresh perspectives and strategies.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reinvent</h3>
              <p className="text-gray-600 text-sm">Transform yourself into the leader you aspire to be with lasting change.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Transformation?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Explore our coaching services, read our insights, and start your journey to extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContinue}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Explore Our Platform
              </button>
              <Link
                href="/journey"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors border-2 border-blue-400"
              >
                Start Your Journey
              </Link>
            </div>
          </div>

          {/* Auto-redirect notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-md mx-auto">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-yellow-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <p className="text-sm text-yellow-800">
                Redirecting to main platform in <span className="font-semibold">5 seconds</span>...
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Pinnacle Thrive Coaching - Transform Your Life & Career
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Reflect • Reboot • Reinvent
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
