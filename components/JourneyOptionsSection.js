import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Professional Coaching Services section component for Pinnacle Thrive Coaching.
 * Enterprise-focused design with clean, professional styling.
 * Fully responsive across all device sizes.
 */
export default function JourneyOptionsSection() {
  const [showOptions, setShowOptions] = useState(false);
  const router = useRouter();

  // Check for URL parameter to automatically show journey options
  useEffect(() => {
    if (router.query.showJourney === 'true') {
      setShowOptions(true);
      setTimeout(() => {
        const journeySection = document.getElementById('journey-options');
        if (journeySection) {
          journeySection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [router.query.showJourney]);

  const journeyOptions = [
    {
      id: 'discovery',
      title: 'Discovery Session',
      description: 'Take the first step—discover how coaching can unlock clarity, growth, and direction for your career.',
      duration: '30 min',
      type: 'Consultation',
      color: 'border-l-blue-600',
      bgColor: 'bg-gradient-to-br from-white to-slate-100 hover:from-slate-50 hover:to-slate-200'
    },
    {
      id: 'essentials',
      title: 'PTC Essentials',
      description: 'Focused, impactful, and results-driven sessions to help you reflect, reboot, and reinvent your career path.',
      duration: '6 sessions',
      type: 'Program',
      color: 'border-l-purple-600',
      bgColor: 'bg-gradient-to-br from-white to-slate-100 hover:from-slate-50 hover:to-slate-200'
    },
    {
      id: 'pro',
      title: 'PTC Pro',
      description: 'Go deeper, go further—designed for lasting transformation, leadership growth, and long-term career success.',
      duration: '10 sessions',
      type: 'Program',
      color: 'border-l-emerald-600',
      bgColor: 'bg-gradient-to-br from-white to-slate-100 hover:from-slate-50 hover:to-slate-200'
    },
    {
      id: 'unsure',
      title: 'Unsure?',
      description: 'Not sure where to start? Let\'s talk and find the clarity to decide your next step with confidence.',
      duration: '30 min',
      type: 'Clarity Guidance Conversation',
      color: 'border-l-slate-600',
      bgColor: 'bg-gradient-to-br from-white to-slate-100 hover:from-slate-50 hover:to-slate-200'
    }
  ];

  const handleJourneyOption = (optionId) => {
    // All services now show on the same page
    const event = new CustomEvent('selectJourneyOption', { detail: optionId });
    window.dispatchEvent(event);
  };

  // Listen for the journey button click
  useEffect(() => {
    const handleJourneyClick = () => {
      setShowOptions(true);
    };

    window.addEventListener('showJourneyOptions', handleJourneyClick);
    return () => {
      window.removeEventListener('showJourneyOptions', handleJourneyClick);
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white" id="journey-options">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Choose Your <span className="text-blue-700">Journey</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Select the path that best fits your current needs and begin your transformation journey with Pinnacle Thrive Coaching.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {journeyOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => handleJourneyOption(option.id)}
              className={`bg-white ${option.color} border-l-4 border-t border-r border-b border-slate-300 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:border-slate-400 hover:-translate-y-2 relative overflow-hidden group shadow-lg`}
            >
              {/* Completely opaque background - blocks watermark */}
              <div className="absolute inset-0 bg-white"></div>
              {/* Subtle gradient overlay for metallic effect - completely opaque */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-slate-100 group-hover:to-slate-200 transition-colors duration-500"></div>
              <div className="mb-4 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors duration-300">
                      {option.title}
                    </h3>
                    <div className="flex flex-col gap-2">
                      <span className="font-semibold bg-gradient-to-r from-slate-300 to-slate-400 px-3 py-1.5 rounded-full shadow-md text-slate-800 w-fit border border-slate-400/50">{option.duration}</span>
                      <span className="font-medium text-slate-700 text-sm bg-gradient-to-r from-slate-200 to-slate-300 px-2 py-1 rounded-md w-fit border border-slate-300/50">{option.type}</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-full bg-white group-hover:bg-slate-100 transition-all duration-300 group-hover:scale-110 border border-slate-300 shadow-sm">
                    <svg className="w-5 h-5 text-slate-500 group-hover:text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed relative z-10 group-hover:text-slate-600 transition-colors duration-300 mt-0">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        {/* Corporate Services - Seamless Continuation */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-4">
              <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-purple-700">Corporate Solutions</span>
            </div>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm">
              Specialized enterprise coaching and consulting services for organizations and executive teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div
              onClick={() => handleJourneyOption('workshop')}
              className="group bg-gradient-to-br from-indigo-50 via-blue-50 to-indigo-100 border-2 border-indigo-200 hover:border-indigo-400 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105 relative overflow-hidden"
            >
              {/* Premium background effects */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400 to-indigo-400 rounded-full translate-y-16 -translate-x-16"></div>
              </div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-700 mb-2 transition-colors duration-300">
                    Executive Workshops
                  </h4>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="font-semibold bg-gradient-to-r from-indigo-200 to-blue-200 text-indigo-800 px-3 py-1.5 rounded-full shadow-sm">Custom</span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                    <span className="font-medium">Enterprise</span>
                  </div>
                </div>
                <div className="p-2 rounded-full bg-white/60 group-hover:bg-white/90 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-indigo-500 group-hover:text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed relative z-10 group-hover:text-slate-600 transition-colors duration-300">
                Customized leadership development workshops for executive teams and senior management.
              </p>
            </div>

            <div
              onClick={() => handleJourneyOption('partnership')}
              className="group bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 border-2 border-emerald-200 hover:border-emerald-400 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105 relative overflow-hidden"
            >
              {/* Premium background effects */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-400 to-emerald-400 rounded-full translate-y-16 -translate-x-16"></div>
              </div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 mb-2 transition-colors duration-300">
                    Strategic Partnership
                  </h4>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="font-semibold bg-gradient-to-r from-emerald-200 to-teal-200 text-emerald-800 px-3 py-1.5 rounded-full shadow-sm">Long-term</span>
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                    <span className="font-medium">Enterprise</span>
                  </div>
                </div>
                <div className="p-2 rounded-full bg-white/60 group-hover:bg-white/90 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-5 h-5 text-emerald-500 group-hover:text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed relative z-10 group-hover:text-slate-600 transition-colors duration-300">
                Long-term strategic coaching partnerships for sustained organizational transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}