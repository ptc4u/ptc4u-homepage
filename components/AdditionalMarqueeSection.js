/**
 * Additional Marquee section component for Pinnacle Thrive Coaching.
 *
 * Displays rotating messages vertically on the left side of the page,
 * positioned below the main Coaching Facts/Figures marquee.
 */
export default function AdditionalMarqueeSection() {
  const messages = [
    "Transform your mindset",
    "Unlock your potential",
    "Achieve breakthrough results",
    "Build lasting confidence",
    "Master leadership skills",
    "Create work-life balance",
    "Overcome limiting beliefs",
    "Develop emotional intelligence",
    "Accelerate career growth",
    "Live with purpose"
  ];

  return (
    <div className="fixed left-0 top-1/2 transform translate-y-32 z-40 hidden lg:block">
      <div className="bg-gradient-to-b from-purple-400 to-purple-500 rounded-r-2xl shadow-2xl border-r-4 border-purple-600 overflow-hidden backdrop-blur-sm" style={{ width: '280px', height: '400px' }}>
        {/* Header */}
        <div className="bg-purple-600 px-4 py-3 text-center border-b border-purple-700">
          <h3 className="text-white font-semibold text-base tracking-wide button-text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
            Transformational Messages
          </h3>
        </div>
        
        {/* Scrolling Content */}
        <div className="relative h-full overflow-hidden">
          <div className="flex flex-col animate-vertical-marquee-reverse">
            {/* First set of messages */}
            {messages.map((message, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center px-4 py-4 text-white border-b border-purple-600/50 hover:bg-purple-600/30 transition-all duration-300"
              >
                <span className="text-base font-medium leading-relaxed button-text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {message}
                </span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {messages.map((message, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center px-4 py-4 text-white border-b border-purple-600/50 hover:bg-purple-600/30 transition-all duration-300"
              >
                <span className="text-base font-medium leading-relaxed button-text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {message}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-purple-500 to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-purple-500 to-transparent pointer-events-none z-10"></div>
      </div>
      
      <style jsx>{`
        @keyframes vertical-marquee-reverse {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        
        .animate-vertical-marquee-reverse {
          animation: vertical-marquee-reverse 30s linear infinite;
        }
        
        .animate-vertical-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
