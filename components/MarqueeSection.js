/**
 * Marquee section component for Pinnacle Thrive Coaching.
 *
 * Displays rotating messages between hero and main body sections.
 */
export default function MarqueeSection() {
  const messages = [
    "Confidential & Safe",
    "Flexible schedule",
    "Access to toolkits and dashboards",
    "Next free Webinar on March 25th, 2024",
    "30+ years of experience",
    "Fortune 500 leadership expertise",
    "Published author & speaker",
    "Transform your life & career"
  ];

  return (
    <section className="py-6 bg-gradient-to-r from-purple-800 to-purple-900 border-y-2 border-purple-600 shadow-lg" style={{ minHeight: '60px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          {/* Marquee Container */}
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First set of messages */}
            {messages.map((message, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center mx-8 text-white font-chancery text-xl font-semibold"
                style={{ fontFamily: "'Dancing Script', cursive, serif" }}
              >
                <span className="text-yellow-300 mr-3 text-xl">✨</span>
                {message}
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {messages.map((message, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center mx-8 text-white font-chancery text-xl font-semibold"
                style={{ fontFamily: "'Dancing Script', cursive, serif" }}
              >
                <span className="text-yellow-300 mr-3 text-xl">✨</span>
                {message}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        /* Ensure marquee is visible */
        .animate-marquee > div {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
