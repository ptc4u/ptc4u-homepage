/**
 * Services section component for Pinnacle Thrive Coaching.
 *
 * This section showcases the different coaching services offered, including
 * life coaching, corporate coaching, and specialized programs.
 */
export default function ServicesSection() {
  const services = [
    {
      icon: "🌟",
      title: "Life Coaching",
      description: "Transform your personal life with guidance on relationships, health, purpose, and overall well-being.",
      features: [
        "Personal goal setting and achievement",
        "Relationship and communication skills",
        "Health and wellness optimization",
        "Life purpose and meaning discovery",
        "Stress management and work-life balance"
      ],
      color: "emerald"
    },
    {
      icon: "💼",
      title: "Corporate Coaching",
      description: "Elevate your professional performance with leadership development and career advancement strategies.",
      features: [
        "Executive leadership development",
        "Team building and collaboration",
        "Career transition and advancement",
        "Communication and presentation skills",
        "Strategic thinking and decision making"
      ],
      color: "purple"
    },
    {
      icon: "🎯",
      title: "Goal Achievement",
      description: "Break through barriers and achieve your most ambitious goals with proven methodologies.",
      features: [
        "Goal clarity and vision setting",
        "Action planning and accountability",
        "Overcoming limiting beliefs",
        "Progress tracking and celebration",
        "Sustainable habit formation"
      ],
      color: "emerald"
    },
    {
      icon: "🚀",
      title: "Performance Coaching",
      description: "Maximize your potential in sports, business, or any area where peak performance matters.",
      features: [
        "Performance mindset development",
        "Confidence and resilience building",
        "Focus and concentration techniques",
        "Recovery and stress management",
        "Continuous improvement strategies"
      ],
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our Coaching Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the coaching service that best fits your needs. Each program is designed
            to help you break through barriers and achieve extraordinary results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-${service.color}-50 to-white p-8 rounded-2xl border border-${service.color}-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className={`w-5 h-5 text-${service.color}-500 mt-0.5 mr-3 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-50 to-purple-50 p-12 rounded-2xl border border-emerald-200/50">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Book a free discovery call to discuss your goals and find the perfect coaching program for you.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
          >
            Book Free Discovery Call
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
