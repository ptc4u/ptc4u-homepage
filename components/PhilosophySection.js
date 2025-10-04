/**
 * PTC's 3R Philosophy section component for Pinnacle Thrive Coaching.
 *
 * Explains the core philosophy and methodology of PTC coaching.
 */
export default function PhilosophySection() {
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

  return (
    <section className="py-20 pt-24 mt-8 bg-gradient-to-br from-purple-50 via-white to-emerald-50 min-h-screen" id="philosophy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            PTC's <span className="text-black">3R</span> Pillars
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium">
            Our proven coaching methodology that transforms lives and careers through 
            systematic reflection, reframing, and realization of potential.
          </p>
        </div>

        {/* Philosophy Overview */}
        <div className="text-center mb-16">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-6">
              The <span className="text-black">Foundation</span> of Transformation
            </h3>
            <p className="text-lg text-black leading-relaxed mb-6">
              The 3R Philosophy is the cornerstone of our coaching approach, developed over three decades 
              of experience helping professionals and leaders achieve breakthrough results. This systematic 
              methodology ensures sustainable transformation by addressing the mind, perspective, and action.
            </p>
            <p className="text-lg text-black leading-relaxed">
              Each 'R' represents a critical phase in the transformation journey, building upon the previous 
              one to create lasting change and unlock your full potential.
            </p>
          </div>
        </div>

        {/* 3R Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {philosophyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Letter Badge */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg button-text-white">
                  {point.letter}
                </div>
              </div>

              {/* Icon */}
              <div className="text-6xl mb-6 text-center">{point.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-4 text-center">
                {point.title}
              </h3>

              {/* Description */}
              <p className="text-black mb-6 leading-relaxed text-center font-medium">
                {point.description}
              </p>

              {/* Details */}
              <ul className="space-y-3">
                {point.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-black text-sm font-medium">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-black mb-12 text-center">
            How the <span className="text-black">3R</span> Process Works
          </h3>
          
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
        </div>

      </div>
    </section>
  );
}
