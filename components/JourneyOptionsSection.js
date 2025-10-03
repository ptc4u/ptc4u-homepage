import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Journey Options section component for Pinnacle Thrive Coaching.
 *
 * Shows the 4 journey options when "Start Your PTC Journey" is clicked.
 */
export default function JourneyOptionsSection() {
  const [showOptions, setShowOptions] = useState(false);
  const router = useRouter();

  // Check for URL parameter to automatically show journey options
  useEffect(() => {
    if (router.query.showJourney === 'true') {
      setShowOptions(true);
      // Scroll to the journey options section
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
      title: 'Book Discovery Session',
      subtitle: 'Free 30-minute consultation',
      description: 'Take the first step—discover how coaching can unlock clarity, growth, and direction for your career in just 30 minutes.',
      icon: '',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'essentials',
      title: 'PTC Essentials Signup',
      subtitle: '6-session coaching program',
      description: 'Focused, impactful, and results-driven—six powerful sessions to help you reflect, reboot, and reinvent your career path.',
      icon: '',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'pro',
      title: 'PTC Pro Signup',
      subtitle: '10-session coaching program',
      description: 'Go deeper, go further—ten sessions designed for lasting transformation, leadership growth, and long-term career success.',
      icon: '',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'unsure',
      title: 'Unsure?',
      subtitle: '30-min clarity conversation',
      description: 'Not sure where to start? Let\'s talk. In 30 minutes, you\'ll find the clarity to decide your next step with confidence.',
      icon: '',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  const handleJourneyOption = (optionId) => {
    console.log('JourneyOptionsSection: Button clicked for option', optionId);
    
    // Handle workshop and partnership requests with direct navigation
    if (optionId === 'workshop') {
      router.push('/request-forms?form=workshop');
      return;
    }
    
    if (optionId === 'partnership') {
      router.push('/request-forms?form=partnership');
      return;
    }
    
    // For other options, emit event for JourneyFormSection to handle
    const event = new CustomEvent('selectJourneyOption', { detail: optionId });
    window.dispatchEvent(event);
    console.log('JourneyOptionsSection: Event dispatched');
  };

  // Listen for the journey button click
  useEffect(() => {
    const handleJourneyClick = () => {
      console.log('JourneyOptionsSection: showJourneyOptions event received');
      setShowOptions(true);
    };

    window.addEventListener('showJourneyOptions', handleJourneyClick);
    return () => {
      window.removeEventListener('showJourneyOptions', handleJourneyClick);
    };
  }, []);

  if (!showOptions) {
    return null;
  }

  return (
    <section className="pt-16 pb-12 bg-gradient-to-br from-blue-50 to-purple-50" id="journey-options">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Choose Your <span className="text-black">Journey</span>
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium">
            Select the path that best fits your current needs and begin your transformation journey 
            with Pinnacle Thrive Coaching.
          </p>
        </div>

        {/* Four Quadrants Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {journeyOptions.map((option, index) => (
            <button
              key={option.id}
              onClick={() => handleJourneyOption(option.id)}
              className={`${option.bgColor} ${option.borderColor} border-2 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-left group animate-fade-in-up`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'both'
              }}
            >
              <div className="flex items-start space-x-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{option.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-2">{option.title}</h3>
                  <p className="text-lg font-semibold text-black mb-4">{option.subtitle}</p>
                  <p className="text-black leading-relaxed">{option.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Thin Bar Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto mt-8">
          <button
            onClick={() => handleJourneyOption('workshop')}
            className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white py-4 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up button-text-white"
            style={{
              animationDelay: '800ms',
              animationFillMode: 'both'
            }}
          >
            Request for Workshop
          </button>
          <button
            onClick={() => handleJourneyOption('partnership')}
            className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-4 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up button-text-white"
            style={{
              animationDelay: '1000ms',
              animationFillMode: 'both'
            }}
          >
            Request Long Term Partnership
          </button>
        </div>
      </div>
    </section>
  );
}
