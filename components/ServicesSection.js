/**
 * Services section component for Pinnacle Thrive Coaching.
 *
 * This section showcases the different coaching services offered, including
 * life coaching, corporate coaching, and specialized programs.
 */
export default function ServicesSection() {
  const services = [
    {
      icon: "🚀",
      title: "PTC Essentials",
      description: "Transform your life and career with our foundational 6-session coaching program designed for sustainable growth.",
      features: [
        "6 focused coaching sessions",
        "Personal goal setting and achievement",
        "Work-life balance strategies",
        "Habit formation and behavior change",
        "Stress management and wellness"
      ],
      color: "emerald"
    },
    {
      icon: "⭐",
      title: "PTC Pro",
      description: "Comprehensive 10-session coaching program for deep transformation and lasting change in all areas of life.",
      features: [
        "10 comprehensive coaching sessions",
        "Advanced leadership development",
        "Strategic career planning",
        "Complete life transformation",
        "Ongoing support and accountability"
      ],
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
            <span className="font-tan-pearl">Professional</span> Coaching Services
          </h2>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto font-medium">
            Choose the coaching service that best fits your transformation journey. Each program is designed
            to help you break through barriers and achieve extraordinary results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-white p-10 rounded-3xl border border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl mb-8">{service.icon}</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h3>
              <p className="text-slate-700 mb-8 leading-relaxed text-lg font-medium">{service.description}</p>

                              <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-6 h-6 text-purple-600 mt-0.5 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 font-medium text-base">{feature}</span>
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
