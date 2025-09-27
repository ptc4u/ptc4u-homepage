/**
 * Vertical Marquee section component for Pinnacle Thrive Coaching.
 *
 * Displays rotating messages vertically on the left side of the page.
 */
export default function MarqueeSection() {
  const messages = [
    "790% ROI on coaching",
    "70% boost in performance",
    "12% higher productivity",
    "46% better team engagement",
    "75% CEOs improved performance",
    "80% gained self-confidence",
    "20% more promotions earned",
    "67% higher employee engagement",
    "48% better retention rates",
    "96% would repeat coaching"
  ];

  return (
    <div className="fixed left-4 top-1/3 transform -translate-y-1/4 z-40 hidden lg:block">
      <div className="bg-gradient-to-b from-blue-400 to-blue-500 rounded-r-2xl shadow-2xl border-r-4 border-blue-600 overflow-hidden backdrop-blur-sm" style={{ width: '260px', height: '460px' }}>
        {/* Header */}
        <div className="bg-blue-600 px-4 py-3 text-center border-b border-blue-700">
          <h3 className="text-white font-semibold text-base tracking-wide button-text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
            Coaching Facts/Figures
          </h3>
        </div>
        
        {/* Scrolling Content */}
        <div className="relative h-full overflow-hidden">
          <div className="flex flex-col animate-vertical-marquee">
            {/* First set of messages */}
            {messages.map((message, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center px-4 py-4 text-white border-b border-blue-600/50 hover:bg-blue-600/30 transition-all duration-300"
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
                className="flex items-center px-4 py-4 text-white border-b border-blue-600/50 hover:bg-blue-600/30 transition-all duration-300"
              >
                <span className="text-base font-medium leading-relaxed button-text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                  {message}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-blue-500 to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-blue-500 to-transparent pointer-events-none z-10"></div>
      </div>
      
      <style jsx>{`
        @keyframes vertical-marquee {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        .animate-vertical-marquee {
          animation: vertical-marquee 30s linear infinite;
        }
        
        .animate-vertical-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
