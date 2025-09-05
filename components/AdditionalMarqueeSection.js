/**
 * Additional Marquee section component for Pinnacle Thrive Coaching.
 *
 * Displays rotating messages horizontally on the left side of the page,
 * positioned below the main Coaching Facts/Figures marquee with a one-line gap.
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
    "Live with purpose",
    "PTC Facts: 103 clients, 95% success rate, 1000 coaching hours, 4.9 Client Rating"
  ];

  return (
    <div className="fixed left-0 top-1/2 transform translate-y-56 z-40 hidden lg:block">
      <div className="bg-gradient-to-b from-purple-400 to-purple-500 rounded-r-2xl shadow-2xl border-r-4 border-purple-600 overflow-hidden backdrop-blur-sm" style={{ width: '280px', height: '50px' }}>
        {/* Horizontal Scrolling Content */}
        <div className="relative h-full overflow-hidden flex items-center justify-center">
          <div className="flex items-center animate-horizontal-marquee">
            {/* First set of messages */}
            {messages.map((message, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 px-6 text-white flex items-center"
              >
                <span className="font-bold italic button-text-white whitespace-nowrap flex items-center justify-center" style={{ fontFamily: 'Chancery, cursive', fontSize: '18px' }}>
                  {message}
                </span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {messages.map((message, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 px-6 text-white flex items-center"
              >
                <span className="font-bold italic button-text-white whitespace-nowrap flex items-center justify-center" style={{ fontFamily: 'Chancery, cursive', fontSize: '18px' }}>
                  {message}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-purple-500 to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-purple-500 to-transparent pointer-events-none z-10"></div>
      </div>
      
      <style jsx>{`
        @keyframes horizontal-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-horizontal-marquee {
          animation: horizontal-marquee 35s linear infinite;
        }
        
        .animate-horizontal-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
