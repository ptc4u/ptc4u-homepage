/**
 * Services section component for Pinnacle Thrive Coaching.
 *
 * This section showcases the different coaching services offered, including
 * life coaching, corporate coaching, and specialized programs.
 */
export default function ServicesSection() {
  const services = [
    {
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
    <section className="py-12 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            <span className="text-black">Professional</span> Coaching Services
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium">
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
              <h3 className="text-3xl font-bold text-black mb-6">{service.title}</h3>
              <p className="text-black mb-8 leading-relaxed text-lg font-medium">{service.description}</p>

                              <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-6 h-6 text-black mt-0.5 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-black font-medium text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
      </div>
    </section>
  );
}
