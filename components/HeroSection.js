/**
 * Hero section component for Pinnacle Thrive Coaching.
 *
 * This section introduces Pinnacle Thrive Coaching with compelling messaging that reflects
 * life and corporate coaching services. Features a modern, clean design with coaching-focused
 * visual hierarchy and messaging.
 */
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-purple-50 overflow-hidden pt-20" id="hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 text-emerald-600 rounded-full text-sm font-medium mb-8 border border-emerald-200/50">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            Transform Your Life & Career
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-slate-900 mb-8 leading-tight">
            Reach Your{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-purple-500 to-emerald-600 bg-clip-text text-transparent">
              Pinnacle
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Transform your life and career with expert coaching. We help you break through barriers,
            discover your potential, and create lasting change through personalized guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
            >
              Start Your Journey
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 font-semibold text-lg bg-white/50 backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">🌟</div>
              <div className="text-lg font-semibold text-slate-900 mb-1">Life Coaching</div>
              <div className="text-sm text-slate-600">Personal Growth & Transformation</div>
            </div>
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg">
              <div className="text-4xl font-bold text-purple-500 mb-2">💼</div>
              <div className="text-lg font-semibold text-slate-900 mb-1">Corporate Coaching</div>
              <div className="text-sm text-slate-600">Leadership & Career Development</div>
            </div>
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg">
              <div className="text-4xl font-bold text-emerald-600 mb-2">🎯</div>
              <div className="text-lg font-semibold text-slate-900 mb-1">Goal Achievement</div>
              <div className="text-sm text-slate-600">Proven Strategies & Results</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-sm text-slate-500 mb-6">Trusted by professionals and individuals worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-slate-400">👨‍💼 Executives</div>
            <div className="text-2xl font-bold text-slate-400">🚀 Entrepreneurs</div>
            <div className="text-2xl font-bold text-slate-400">👩‍🎓 Students</div>
            <div className="text-2xl font-bold text-slate-400">🏢 Teams</div>
          </div>
        </div>
      </div>
    </section>
  );
}
