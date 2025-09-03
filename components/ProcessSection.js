/**
 * Process section component for Pinnacle Thrive Coaching.
 *
 * This section outlines the coaching process and journey that clients will experience,
 * from initial discovery to achieving their goals.
 */
export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Free Webinar",
      description: "Start your journey with our complimentary webinar to understand our coaching approach and the 3R methodology.",
      details: [
        "Complimentary access to our webinar",
        "Learn about the 3R Philosophy",
        "Understand coaching methodologies",
        "Meet our coaching team"
      ],
      icon: "🎓"
    },
    {
      number: "02",
      title: "Discovery Session",
      description: "Book your free 30-minute discovery session to discuss your specific goals and see how we can help you achieve them.",
      details: [
        "Free 30-minute discovery call",
        "Personal goal assessment",
        "Challenge identification",
        "Coaching approach discussion"
      ],
      icon: "🔍"
    },
    {
      number: "03",
      title: "Choose Your Path",
      description: "Select between PTC Essentials (6 sessions) or PTC Pro (10 sessions) based on your transformation goals and timeline.",
      details: [
        "PTC Essentials: 6-session program",
        "PTC Pro: 10-session program",
        "Customized coaching plan",
        "Flexible scheduling options"
      ],
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-purple-50" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            Your <span className="font-tan-pearl text-purple-800">Transformation</span> Journey
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium">
            Our proven coaching process is designed to create lasting transformation.
            Each step builds upon the previous one, ensuring sustainable results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-xl">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="bg-white p-10 rounded-3xl border border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 pt-16">
                <div className="text-5xl mb-6 text-center">{step.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-6 text-center">{step.title}</h3>
                <p className="text-black mb-8 text-center leading-relaxed text-lg font-medium">{step.description}</p>

                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-base">
                      <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl font-bold text-black mb-2">Flexible Scheduling</h3>
            <p className="text-black">Sessions that fit your busy lifestyle with options for in-person, virtual, or hybrid coaching.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-black mb-2">Confidential & Safe</h3>
            <p className="text-black">Complete privacy and confidentiality in a supportive, judgment-free environment.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-black mb-2">Ongoing Support</h3>
            <p className="text-black">Access to resources, tools, and support between sessions to maintain momentum.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-black mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            The first step is the most important. Book your free discovery call today and start your transformation.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
          >
            Start Your Journey
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
