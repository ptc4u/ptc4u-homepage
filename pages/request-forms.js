import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import MarqueeSection from '../components/MarqueeSection';
import AdditionalMarqueeSection from '../components/AdditionalMarqueeSection';
import WorkshopRequestForm from '../components/WorkshopRequestForm';
import PartnershipRequestForm from '../components/PartnershipRequestForm';
import QuickActionsSection from '../components/QuickActionsSection';
import Footer from '../components/Footer';
import ImageWatermark from '../components/ImageWatermark';

export default function RequestFormsPage() {
  const [activeForm, setActiveForm] = useState(null);
  const router = useRouter();

  // Check for URL parameters on component mount
  useEffect(() => {
    if (router.query.form) {
      setActiveForm(router.query.form);
    }
  }, [router.query.form]);

  const handleFormSelection = (formType) => {
    setActiveForm(formType);
  };

  const handleBackToSelection = () => {
    setActiveForm(null);
  };

  return (
    <>
      <Head>
        <title>Request Forms - Pinnacle Thrive Coaching</title>
        <meta
          name="description"
          content="Request coaching workshops or long-term partnerships with Pinnacle Thrive Coaching. Choose the right engagement for your organization."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col min-h-screen bg-neutral-50 relative z-50">
        <ImageWatermark />
        <NavBar />
        <MarqueeSection />
        <AdditionalMarqueeSection />
        
        <main className="flex-grow pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 lg:pl-72 lg:pr-96 pb-24 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {!activeForm ? (
              // Form Selection Screen
              <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-purple-50 rounded-2xl shadow-lg">
                <div className="text-center mb-12">
                  <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                    Choose Your <span className="text-black">Coaching Journey</span>
                  </h1>
                  <p className="text-lg text-black max-w-3xl mx-auto">
                    Select the type of coaching engagement that best fits your needs. 
                    Whether you're looking for a one-time workshop or a long-term partnership, 
                    we're here to help you achieve your goals.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Workshop Request Card */}
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-200/50 hover:shadow-2xl transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4"></div>
                      <h2 className="text-2xl font-bold text-black mb-4">
                        Request a <span className="text-black">Coaching Workshop</span>
                      </h2>
                      <p className="text-black mb-6">
                        Perfect for corporates and individuals seeking a one-time or short-term workshop 
                        to address specific challenges or goals.
                      </p>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-3">✓</span>
                        <span className="text-black">Leadership Growth workshops</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-3">✓</span>
                        <span className="text-black">Career Transition & Reinvention</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-3">✓</span>
                        <span className="text-black">Team Collaboration & Communication</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-blue-500 mr-3">✓</span>
                        <span className="text-black">Custom themes tailored to your needs</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleFormSelection('workshop')}
                      className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 button-text-white"
                    >
                      Request Workshop
                    </button>
                  </div>

                  {/* Partnership Request Card */}
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-emerald-200/50 hover:shadow-2xl transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4"></div>
                      <h2 className="text-2xl font-bold text-black mb-4">
                        Request a <span className="text-black">Long-Term Partnership</span>
                      </h2>
                      <p className="text-black mb-6">
                        Ideal for organizations seeking ongoing coaching engagement (6-12 months+) 
                        to drive sustained transformation and growth.
                      </p>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <span className="text-emerald-500 mr-3">✓</span>
                        <span className="text-black">Executive Coaching (1:1)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-emerald-500 mr-3">✓</span>
                        <span className="text-black">Leadership Team Coaching</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-emerald-500 mr-3">✓</span>
                        <span className="text-black">Career Transition Programs</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-emerald-500 mr-3">✓</span>
                        <span className="text-black">Ongoing Faculty/Corporate Training</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleFormSelection('partnership')}
                      className="w-full bg-gradient-to-r from-emerald-400 to-emerald-500 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 button-text-white"
                    >
                      Request Partnership
                    </button>
                  </div>
                </div>

              </section>
            ) : (
              // Form Display Screen
              <section className="py-8">
                <div className="mb-8">
                  <button
                    onClick={handleBackToSelection}
                    className="flex items-center text-black hover:text-black font-medium transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Form Selection
                  </button>
                </div>

                {activeForm === 'workshop' && <WorkshopRequestForm />}
                {activeForm === 'partnership' && <PartnershipRequestForm />}
              </section>
            )}
          </div>
        </main>
        
        {/* Fixed QuickActionsSection at bottom */}
        <QuickActionsSection />
        
        <Footer />
      </div>
    </>
  );
}
