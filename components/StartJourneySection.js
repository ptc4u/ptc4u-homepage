import { useState } from 'react';

/**
 * Start Journey section component for Pinnacle Thrive Coaching.
 *
 * Shows the 3R Process content and 4 journey options when "Start Your PTC Journey" is clicked.
 */
export default function StartJourneySection({ onClose }) {
  const philosophyPoints = [
    {
      letter: "R",
      title: "Reflect",
      description: "When was the last time you paused to think about you – not deadlines, not others' expectations, but your own journey? Reflecting helps you uncover what's working, what's draining you, and what's quietly holding you back. Without reflection, you're just running faster on the same treadmill. With reflection, you finally see the path to the life and career you truly want.",
      icon: "",
      details: [
        "Pause and think about your own journey",
        "Uncover what's working and what's draining you",
        "Identify what's quietly holding you back",
        "See the path to the life and career you truly want"
      ]
    },
    {
      letter: "R",
      title: "Reboot",
      description: "Imagine pressing a reset button on the stress, the chaos, and the self-doubt. Rebooting doesn't mean starting over – it means clearing the clutter, shifting your energy, and creating space for new growth. It's your chance to recharge, to breathe again, and to approach challenges with clarity instead of overwhelm.",
      icon: "",
      details: [
        "Press reset on stress, chaos, and self-doubt",
        "Clear the clutter and shift your energy",
        "Create space for new growth",
        "Approach challenges with clarity instead of overwhelm"
      ]
    },
    {
      letter: "R",
      title: "Reinvent",
      description: "This is where real transformation happens. Reinventing means taking control of your story – shaping your career, your leadership, and your life into what you've always envisioned. It's not about becoming someone else; it's about becoming the best version of you. Reinventing is where you stop surviving… and start thriving.",
      icon: "",
      details: [
        "Take control of your story",
        "Shape your career, leadership, and life",
        "Become the best version of you",
        "Stop surviving and start thriving"
      ]
    }
  ];

  const journeyOptions = [
    {
      id: 'discovery',
      title: 'Free Discovery Call',
      description: 'Book a complimentary 30-minute session to explore your goals and see how coaching can help you.',
      icon: '',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    {
      id: 'consultation',
      title: 'Strategy Consultation',
      description: 'Get personalized insights and a roadmap for your transformation journey.',
      icon: '',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700'
    },
    {
      id: 'program',
      title: 'Coaching Program',
      description: 'Join our comprehensive coaching program designed for lasting transformation.',
      icon: '',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      description: 'Have questions? Reach out to us directly for personalized assistance.',
      icon: '',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700'
    }
  ];

  const handleJourneyOption = (optionId) => {
    // Emit event for JourneyFormSection to handle
    const event = new CustomEvent('selectJourneyOption', { detail: optionId });
    window.dispatchEvent(event);
    
    // Close this section
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-black">Start Your PTC Journey</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {/* 3R Process Section */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-black mb-6 text-center">
              How the <span className="text-black">3R</span> Process Works
            </h3>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">Assessment Phase</h4>
                  <p className="text-black text-sm">
                    We begin with a comprehensive assessment of your current situation, goals, and challenges.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">Coaching Sessions</h4>
                  <p className="text-black text-sm">
                    Structured coaching sessions guide you through each phase of the 3R methodology.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3">Implementation</h4>
                  <p className="text-black text-sm">
                    You implement strategies and practices to achieve sustainable transformation.
                  </p>
                </div>
              </div>
            </div>

            {/* 3R Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {philosophyPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-purple-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Letter Badge */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {point.letter}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 text-center">{point.icon}</div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-black mb-3 text-center">
                    {point.title}
                  </h4>

                  {/* Description */}
                  <p className="text-black mb-4 leading-relaxed text-sm text-center">
                    {point.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {point.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <svg className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black text-xs font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Options */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">
              Choose Your <span className="text-black">Journey</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {journeyOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleJourneyOption(option.id)}
                  className={`bg-gradient-to-r ${option.color} ${option.hoverColor} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-left`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{option.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-2">{option.title}</h4>
                      <p className="text-sm opacity-90">{option.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
