
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-emerald-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 via-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-blue-400/6 to-purple-400/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge removed as requested */}

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 mb-10 leading-tight">
            Warm Greetings from <span className="font-tan-pearl text-purple-800">Pinnacle</span> <span className="text-blue-900">Thrive Coaching</span>
          </h1>

          {/* Welcome Message */}
          <div className="text-lg sm:text-xl lg:text-2xl text-black mb-16 leading-relaxed max-w-4xl mx-auto font-normal space-y-6">
            <p>
              This is your space to pause, breathe, and rediscover yourself.
            </p>
            <p>
              Here, we don't just talk about goals — we walk with you as you reshape your career, your leadership, and your life.
            </p>
            <p>
              Every story of transformation begins with a single step, and yours can begin today.
            </p>
            <p>
              At PTC, we believe in your potential, your resilience, and your ability to rise higher than you ever imagined.
            </p>
            
            <p className="font-semibold text-purple-800 mt-8">
              Your journey to Reflect, Reboot, and Reinvent starts here.
            </p>
          </div>



          {/* Trust Indicators and Rating/Repeatability */}
          <div className="mt-20 text-center">
            <p className="text-black text-sm mb-6 font-medium">Trusted by professionals worldwide</p>
            <div className="flex items-center justify-center space-x-4 text-black flex-wrap gap-2">
              <span className="text-xs bg-white/80 px-4 py-2 rounded-full shadow-sm border border-purple-200/50 backdrop-blur-sm">✓ 30+ Years Experience</span>
              <span className="text-xs bg-white/80 px-4 py-2 rounded-full shadow-sm border border-purple-200/50 backdrop-blur-sm">✓ Fortune 500 Leadership</span>
              <span className="text-xs bg-white/80 px-4 py-2 rounded-full shadow-sm border border-purple-200/50 backdrop-blur-sm">✓ Published Author</span>
              <span className="text-xs bg-white/80 px-4 py-2 rounded-full shadow-sm border border-purple-200/50 backdrop-blur-sm">4.65/5 Rating</span>
              <span className="text-xs bg-white/80 px-4 py-2 rounded-full shadow-sm border border-purple-200/50 backdrop-blur-sm">95% Repeatability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
