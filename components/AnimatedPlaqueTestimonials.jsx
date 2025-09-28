import { useState, useEffect, useRef } from 'react';

/**
 * Animated Plaque Testimonials component for Pinnacle Thrive Coaching.
 *
 * This component showcases client testimonials on individual animated golden plaques
 * with flipping, moving, and 3D effects. Each testimonial is displayed on its own plaque
 * with smooth animations and interactive elements.
 */
export default function AnimatedPlaqueTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      name: "A seasoned Practice Leader",
      role: "Practice Leader",
      company: "Healthcare",
      content: "I reached out to Sairam at the lowest point of my professional journey, struggling to keep my practice afloat. His coaching helped me rediscover my strengths and identify fresh opportunities. By reskilling and shifting my mindset, I found myself on a renewed growth trajectory and leading my team with confidence again. Sairam's guidance truly redefined my career path.",
      rating: 5,
      category: "Career Transformation",
      avatar: "/images/av5.png"
    },
    {
      name: "A senior IT Services Delivery Leader",
      role: "Delivery Leader",
      company: "IT Services",
      content: "Managing work as a delivery leader, while caring for my family as a mother and daughter, felt overwhelming. With Sairam's coaching, I learned practical strategies for balancing my roles and mastering time management. His empathetic approach empowered me to bring structure to my days, feel more present at home, and become more effective at work. I now enjoy greater harmony and fulfillment in all areas of my life.",
      rating: 4.5,
      category: "Work-Life Balance",
      avatar: "/images/av2.png"
    },
    {
      name: "Product Sales Head for an MNC",
      role: "Sales Head",
      company: "Multinational Corporation",
      content: "As a sales leader, I hesitated to develop new skillsets and accept change, fearing failure. Sairam helped me see how I was blocking my own progress. Through his coaching, I overcame my doubts and took bold steps, delivering quick results that built my confidence. The trust I gained from my organization led to new opportunities and bigger responsibilities. Sairam's support made the difference.",
      rating: 5,
      category: "Leadership Development",
      avatar: "/images/av4.png"
    },
    {
      name: "A Senior Development Lead",
      role: "Development Lead",
      company: "Technology",
      content: "I was, in particular, very lucky to get an opportunity to sign up with Sairam as my coach on Risk Taking, Decision making and Managing change spaces. His coaching style enabled me to discover myself afresh, greatly improve my risk taking abilities and look beyond my own barriers when it came to my career. I will always remain thankful to Sairam for getting coached by a knowledge powerhouse like him.",
      rating: 5,
      category: "Risk Management",
      avatar: "/images/av6.png"
    },
    {
      name: "A Senior Product Manager at an MNC",
      role: "Product Manager",
      company: "Multinational Corporation",
      content: "Sairam, as my coach, played a crucial role in my understanding of myself and the true purpose of a coach. A few months ago, I was lost and uncertain, but I decided to try coaching with Sairam. He provided me with 6 sessions that were around 45 minutes each. He is an excellent listener, and his unique coaching methods were highly effective for me, gaining valuable insights from each that helped me improve my morale and make solid progress.",
      rating: 5,
      category: "Personal Development",
      avatar: "/images/av7.png"
    },
    {
      name: "A Senior Professional",
      role: "Senior Professional",
      company: "Corporate",
      content: "I found him going out of his way when you ask for some help and guidance. His expertise as a Coach and a guide is tremendous, and it has helped come up with more efficient strategic solutions. Personally, for me, getting coached on my Time Management issue was a life-changing lesson. In a short span, he coached me to effectively redraw my work-life balance.",
      rating: 5,
      category: "Time Management",
      avatar: "/images/av1.png"
    },
    {
      name: "A Senior Experienced Leader",
      role: "Senior Leader",
      company: "Corporate",
      content: "I consider myself so fortunate to have got the opportunity to get coached by such a well-qualified professional like Sairam. As we walked through the coaching sessions, he helped me discover myself with so much compassion, honesty and love. He helped me look into the mirror to understand my own capabilities, and I was amazed at the way I resolved my two largest problems in the short time for which I had signed up with him.",
      rating: 5,
      category: "Life Coaching",
      avatar: "/images/av1.png"
    }
  ];

  // Auto-flip testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setIsMoving(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsFlipping(false);
        setIsMoving(false);
      }, 1000); // Half of the flip animation duration
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Scroll to current testimonial
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const plaqueWidth = container.children[0]?.offsetWidth || 0;
      const scrollPosition = currentIndex * (plaqueWidth + 32); // 32px gap
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  // Determine metal type and colors based on rating
  const getMetalType = (rating) => {
    if (rating > 4.5) return 'gold';
    if (rating >= 4) return 'silver';
    return 'bronze';
  };

  const getMetalColors = (metalType) => {
    switch (metalType) {
      case 'gold':
        return {
          primary: 'from-yellow-400 via-amber-400 to-yellow-600',
          secondary: 'from-yellow-500 to-amber-600',
          border: 'border-amber-500',
          text: 'text-amber-900',
          accent: 'text-yellow-600',
          star: 'text-yellow-500',
          shadow: 'shadow-yellow-400/50'
        };
      case 'silver':
        return {
          primary: 'from-gray-300 via-gray-200 to-gray-400',
          secondary: 'from-gray-400 to-gray-500',
          border: 'border-gray-400',
          text: 'text-gray-800',
          accent: 'text-gray-600',
          star: 'text-gray-400',
          shadow: 'shadow-gray-400/50'
        };
      case 'bronze':
        return {
          primary: 'from-amber-600 via-orange-500 to-amber-700',
          secondary: 'from-amber-700 to-orange-600',
          border: 'border-amber-600',
          text: 'text-amber-900',
          accent: 'text-orange-600',
          star: 'text-amber-600',
          shadow: 'shadow-amber-400/50'
        };
      default:
        return {
          primary: 'from-yellow-400 via-amber-400 to-yellow-600',
          secondary: 'from-yellow-500 to-amber-600',
          border: 'border-amber-500',
          text: 'text-amber-900',
          accent: 'text-yellow-600',
          star: 'text-yellow-500',
          shadow: 'shadow-yellow-400/50'
        };
    }
  };

  const renderAnimatedStars = (rating, metalType) => {
    const colors = getMetalColors(metalType);
    
    return Array.from({ length: 5 }, (_, i) => {
      const starIndex = i + 1;
      let starClass = 'text-gray-300';
      
      if (starIndex <= Math.floor(rating)) {
        starClass = colors.star;
      } else if (starIndex === Math.ceil(rating) && rating % 1 !== 0) {
        starClass = colors.star;
      }
      
      return (
        <div key={i} className="relative group">
          <svg
            className={`w-8 h-8 ${starClass} drop-shadow-lg transform transition-all duration-500 hover:scale-125 hover:rotate-12`}
            fill="currentColor"
            viewBox="0 0 20 20"
            style={{
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
              transform: 'perspective(1000px) rotateX(15deg) rotateY(5deg)',
              animation: `starTwinkle ${2 + i * 0.5}s ease-in-out infinite alternate`
            }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-sm pointer-events-none animate-pulse"></div>
        </div>
      );
    });
  };

  // Render individual animated plaque
  const renderAnimatedPlaque = (testimonial, index) => {
    const metalType = getMetalType(testimonial.rating);
    const colors = getMetalColors(metalType);
    const isActive = index === currentIndex;
    const isHovered = hoveredIndex === index;

    return (
      <div key={index} className="flex-shrink-0 w-96 mx-4">
        {/* Animated Plaque Wall */}
        <div className="relative group">
          {/* Wall Background */}
          <div className="bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 rounded-3xl p-6 shadow-2xl border-4 border-stone-300 relative overflow-hidden transition-all duration-500 hover:shadow-3xl">
            {/* Wall Texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-stone-300/20 via-transparent to-stone-400/20 rounded-3xl"></div>
            <div className="absolute top-3 left-3 right-3 h-1 bg-gradient-to-r from-stone-400 to-stone-500 rounded-full"></div>
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-gradient-to-r from-stone-400 to-stone-500 rounded-full"></div>
            
            {/* Animated Plaque Container */}
            <div className="relative z-10 flex justify-center">
              <div 
                className={`relative transition-all duration-1000 ease-in-out ${
                  isActive ? 'scale-110' : 'scale-100'
                } ${isHovered ? 'scale-105' : ''}`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipping 
                    ? 'perspective(1000px) rotateY(180deg) rotateX(10deg)' 
                    : isActive 
                      ? 'perspective(1000px) rotateX(5deg) rotateY(-5deg)' 
                      : isHovered
                        ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg)'
                        : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  animation: isMoving ? 'plaqueFloat 2s ease-in-out infinite' : 'none'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated Metal Plaque */}
                <div className={`relative bg-gradient-to-br ${colors.primary} rounded-2xl p-6 shadow-2xl border-4 ${colors.border} transform perspective-1000 transition-all duration-500 hover:shadow-3xl`}
                     style={{
                       transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
                       boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)`,
                       animation: isActive ? 'plaqueGlow 3s ease-in-out infinite' : 'none'
                     }}>
                  
                  {/* Plaque Ornamental Border */}
                  <div className={`absolute inset-2 border-2 ${colors.border} rounded-xl transition-all duration-300`}></div>
                  <div className="absolute inset-3 border border-white/20 rounded-lg"></div>
                  
                  {/* Animated Corner Decorations */}
                  <div className={`absolute top-1 left-1 w-6 h-6 bg-gradient-to-br ${colors.secondary} rounded-full shadow-lg transition-all duration-300 hover:scale-110`}></div>
                  <div className={`absolute top-1 right-1 w-6 h-6 bg-gradient-to-br ${colors.secondary} rounded-full shadow-lg transition-all duration-300 hover:scale-110`}></div>
                  <div className={`absolute bottom-1 left-1 w-6 h-6 bg-gradient-to-br ${colors.secondary} rounded-full shadow-lg transition-all duration-300 hover:scale-110`}></div>
                  <div className={`absolute bottom-1 right-1 w-6 h-6 bg-gradient-to-br ${colors.secondary} rounded-full shadow-lg transition-all duration-300 hover:scale-110`}></div>
                  
                  {/* Plaque Content */}
                  <div className="relative z-10 text-center">
                    {/* Metal Type Badge */}
                    <div className={`inline-block ${colors.secondary} text-white px-3 py-1 rounded-full text-xs font-bold mb-4 shadow-lg border-2 ${colors.border} capitalize transition-all duration-300 hover:scale-105`}>
                      {metalType} Rating
                    </div>

                    {/* Animated Star Rating */}
                    <div className="flex items-center justify-center mb-6 space-x-1">
                      {renderAnimatedStars(testimonial.rating, metalType)}
                      <span className={`ml-3 text-lg font-bold ${colors.text} transition-all duration-300`}>({testimonial.rating})</span>
                    </div>

                    {/* Animated Quote Icons */}
                    <div className={`text-4xl ${colors.accent} mb-4 transition-all duration-500 hover:scale-110`} style={{animation: 'quoteFloat 2s ease-in-out infinite'}}>"</div>

                    {/* Content */}
                    <blockquote className={`${colors.text} mb-6 italic leading-relaxed text-sm font-medium px-2 transition-all duration-300`}>
                      {testimonial.content}
                    </blockquote>

                    {/* Animated Closing Quote Icon */}
                    <div className={`text-4xl ${colors.accent} mb-4 transform rotate-180 transition-all duration-500 hover:scale-110`} style={{animation: 'quoteFloat 2s ease-in-out infinite reverse'}}>"</div>

                    {/* Category Badge */}
                    <div className={`inline-block ${colors.secondary} text-white px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-lg border-2 ${colors.border} transition-all duration-300 hover:scale-105`}>
                      {testimonial.category}
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-center">
                      <div className={`w-16 h-16 mr-4 rounded-full overflow-hidden border-3 ${colors.border} shadow-lg transition-all duration-300 hover:scale-110`}>
                        <img
                          src={testimonial.avatar}
                          alt={`${testimonial.name} - ${testimonial.role}`}
                          className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className={`w-full h-full bg-gradient-to-br ${colors.primary} flex items-center justify-center text-xl font-bold ${colors.text}`}>
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                      <div className="text-left">
                        <div className={`font-bold ${colors.text} text-sm transition-all duration-300`}>{testimonial.name}</div>
                        <div className={`${colors.accent} font-semibold text-xs transition-all duration-300`}>{testimonial.role}</div>
                        <div className={`${colors.text} text-xs transition-all duration-300`}>{testimonial.company}</div>
                      </div>
                    </div>
                  </div>

                  {/* Animated Plaque Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-2xl pointer-events-none animate-pulse"></div>
                  
                  {/* Animated Depth Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-black/20 to-transparent rounded-2xl blur-sm -z-10 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-12 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden" id="testimonials">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 w-48 h-48 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-64 h-64 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500/5 via-amber-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Client <span className="text-black">Testimonials</span>
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium">
            Hear from our clients who have transformed their lives and careers through
            our coaching programs. Real results from real people.
          </p>
        </div>

        {/* Horizontal Scrolling Animated Plaques */}
        <div className="mb-8">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-4 px-4 py-2"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {testimonials.map((testimonial, index) => renderAnimatedPlaque(testimonial, index))}
          </div>
        </div>

        {/* Enhanced Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => {
            const dotMetalType = getMetalType(testimonials[index].rating);
            const dotColors = getMetalColors(dotMetalType);
            
            return (
              <button
                key={index}
                onClick={() => {
                  setIsFlipping(true);
                  setIsMoving(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsFlipping(false);
                    setIsMoving(false);
                  }, 500);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 shadow-lg hover:scale-125 ${
                  index === currentIndex 
                    ? `bg-gradient-to-r ${dotColors.primary} scale-125 ${dotColors.shadow}` 
                    : 'bg-stone-300 hover:bg-stone-400'
                }`}
                title={`${testimonials[index].name} - ${testimonials[index].rating} stars (${dotMetalType})`}
              />
            );
          })}
        </div>

        <style jsx>{`
          @keyframes starTwinkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.1); }
          }
          
          @keyframes plaqueFloat {
            0%, 100% { transform: translateY(0px) rotateX(5deg) rotateY(-5deg); }
            50% { transform: translateY(-10px) rotateX(8deg) rotateY(-8deg); }
          }
          
          @keyframes plaqueGlow {
            0%, 100% { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2); }
            50% { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 20px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2); }
          }
          
          @keyframes quoteFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-5px) scale(1.05); }
          }
          
          .perspective-1000 {
            perspective: 1000px;
          }
          
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          .border-3 {
            border-width: 3px;
          }
        `}</style>
      </div>
    </section>
  );
}
