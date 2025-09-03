import CalendlyWidget from './CalendlyWidget';

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
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/15 to-purple-600/15 text-purple-700 rounded-full text-sm font-semibold mb-10 border border-purple-200/50 shadow-sm">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></span>
            Professional Life & Career Coaching
          </div>

          {/* Main Heading */}
          <h1 className="text-sm font-bold text-black mb-8 leading-tight opacity-25">
            Warm Greetings from <span className="font-tan-pearl text-purple-800">Pinnacle Thrive Coaching</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-black mb-12 leading-relaxed max-w-3xl mx-auto font-normal">
            Unlock your full potential with expert coaching guidance. Break through barriers,
            discover your true purpose, and create lasting transformation in every area of your life.
          </p>

          {/* Social Media Links */}
          <div className="flex items-center justify-center mb-10 space-x-4">
            {/* LinkedIn Logo */}
            <a
              href="https://www.linkedin.com/in/sairam-bollapragada/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* WordPress Logo */}
            <a
              href="https://itservicesdelivery.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-6.211c0 .568-.447 1.029-1 1.029s-1-.461-1-1.029V9.64c0-.568.447-1.029 1-1.029s1 .461 1 1.029v6.149zm-1-8.068c-.552 0-1-.447-1-1s.448-1 1-1 1 .447 1 1-.448 1-1 1z"/>
              </svg>
            </a>
            
            {/* Instagram Logo */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Calendly Booking Widget - Square on Right Side */}
          <div className="absolute top-8 right-8 w-64 h-64 bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200/50 shadow-lg p-3 z-10">
            <div className="text-center mb-2">
              <h3 className="text-sm font-semibold text-black mb-1">Book Your <span className="font-tan-pearl text-purple-800">Free Discovery Call</span></h3>
              <p className="text-xs text-black">Schedule a 30-minute complimentary session</p>
            </div>
            <CalendlyWidget />
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-black text-sm mb-4">Trusted by professionals worldwide</p>
            <div className="flex items-center justify-center space-x-8 text-black">
              <span className="text-xs">✓ 30+ Years Experience</span>
              <span className="text-xs">✓ Fortune 500 Leadership</span>
              <span className="text-xs">✓ Published Author</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
