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
      title: "Discovery & Assessment",
      description: "We start with a comprehensive discovery session to understand your current situation, challenges, and aspirations.",
      details: [
        "Initial consultation call",
        "Goal assessment and clarification",
        "Current state analysis",
        "Challenge identification"
      ],
      icon: "🔍"
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Together, we create a personalized coaching plan with clear objectives, milestones, and action steps.",
      details: [
        "Custom coaching plan development",
        "Goal setting and prioritization",
        "Timeline and milestone creation",
        "Resource and support identification"
      ],
      icon: "📋"
    },
    {
      number: "03",
      title: "Implementation & Coaching",
      description: "Regular coaching sessions where we work through challenges, celebrate wins, and adjust strategies as needed.",
      details: [
        "Weekly or bi-weekly sessions",
        "Progress tracking and accountability",
        "Challenge resolution and support",
        "Strategy refinement and adaptation"
      ],
      icon: "🚀"
    },
    {
      number: "04",
      title: "Transformation & Results",
      description: "Achieve your goals and develop sustainable habits that continue to serve you long after coaching ends.",
      details: [
        "Goal achievement and celebration",
        "Sustainable habit formation",
        "Long-term success strategies",
        "Ongoing support and resources"
      ],
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-purple-50" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Your Coaching Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our proven coaching process is designed to create lasting transformation.
            Each step builds upon the previous one, ensuring sustainable results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-emerald-600 to-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="bg-white p-8 rounded-2xl border border-neutral-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 pt-12">
                <div className="text-4xl mb-4 text-center">{step.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{step.title}</h3>
                <p className="text-slate-600 mb-6 text-center leading-relaxed">{step.description}</p>

                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700">{detail}</span>
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
            <h3 className="text-xl font-bold text-slate-900 mb-2">Flexible Scheduling</h3>
            <p className="text-slate-600">Sessions that fit your busy lifestyle with options for in-person, virtual, or hybrid coaching.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Confidential & Safe</h3>
            <p className="text-slate-600">Complete privacy and confidentiality in a supportive, judgment-free environment.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ongoing Support</h3>
            <p className="text-slate-600">Access to resources, tools, and support between sessions to maintain momentum.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
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
