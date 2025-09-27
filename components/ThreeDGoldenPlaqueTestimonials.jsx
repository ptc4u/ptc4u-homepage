import { useState, useEffect, useRef } from 'react';

/**
 * 3D Golden Plaque Testimonials section component for Pinnacle Thrive Coaching.
 *
 * This section showcases client testimonials on individual 3D revolving golden plaques,
 * with horizontal scrolling and dynamic metal ratings: Gold (>4.5), Silver (4-4.5), Bronze (<4)
 */
export default function ThreeDGoldenPlaqueTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevolving, setIsRevolving] = useState(false);
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
      rating: 3.8,
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
      rating: 4.2,
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

  // Auto-scroll testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
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

  const render3DStars = (rating, metalType) => {
    const colors = getMetalColors(metalType);
    
    return Array.from({ length: 5 }, (_, i) => {
      const starIndex = i + 1;
      let starClass = 'text-gray-300';
      
      if (starIndex <= Math.floor(rating)) {
        // Full star
        starClass = colors.star;
      } else if (starIndex === Math.ceil(rating) && rating % 1 !== 0) {
        // Half star for ratings like 4.5
        starClass = colors.star;
      }
      
      return (
        <div key={i} className="relative">
          <svg
            className={`w-8 h-8 ${starClass} drop-shadow-lg transform transition-all duration-300 hover:scale-110`}
            fill="currentColor"
            viewBox="0 0 20 20"
            style={{
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
              transform: 'perspective(1000px) rotateX(15deg) rotateY(5deg)'
            }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {/* 3D shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-sm pointer-events-none"></div>
        </div>
      );
    });
  };

  // Render individual plaque
  const renderPlaque = (testimonial, index) => {
    const metalType = getMetalType(testimonial.rating);
    const colors = getMetalColors(metalType);
    const isActive = index === currentIndex;

    return (
      <div key={index} className="flex-shrink-0 w-96 mx-4">
        {/* 3D Plaque Wall */}
        <div className="relative">
          {/* Wall Background */}
          <div className="bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 rounded-3xl p-6 shadow-2xl border-4 border-stone-300 relative overflow-hidden">
            {/* Wall Texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-stone-300/20 via-transparent to-stone-400/20 rounded-3xl"></div>
            <div className="absolute top-3 left-3 right-3 h-1 bg-gradient-to-r from-stone-400 to-stone-500 rounded-full"></div>
            <div className="absolute bottom-3 left-3 right-3 h-1 bg-gradient-to-r from-stone-400 to-stone-500 rounded-full"></div>
            
            {/* 3D Plaque Container */}
            <div className="relative z-10 flex justify-center">
              <div 
                className={`relative transition-all duration-1000 ease-in-out ${
                  isActive ? 'scale-105' : 'scale-95'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isActive ? 'perspective(1000px) rotateX(5deg) rotateY(-5deg)' : 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
                }}
              >
                {/* 3D Metal Plaque */}
                <div className={`relative bg-gradient-to-br ${colors.primary} rounded-2xl p-6 shadow-2xl border-4 ${colors.border} transform perspective-1000`}
                     style={{
                       transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
                       boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)`
                     }}>
                  
                  {/* Plaque Ornamental Border */}
                  <div className={`absolute inset-2 border-2 ${colors.border} rounded-xl`}></div>
                  <div className="absolute inset-3 border border-white/20 rounded-lg"></div>
                  
                  {/* Plaque Corner Decorations */}
                  <div className={`absolute top-1 left-1 w-6 h-6 bg-gradient-to-br ${colors.secondary} rounded-full shadow-lg`}></div>
                  <div className={`absolute top-1 right-1 w-6 h-6 bg-gradient-to-br ${colors.secondary} rounded-full shadow-lg`}></div>
                  <div className={`absolute bottom-1 left-1 w-6 h-6 bg-gradient-to-br ${colors.secondary} rounded-full shadow-lg`}></div>
                  <div className={`absolute bottom-1 right-1 w-6 h-6 bg-gradient-to-br ${colors.secondary} rounded-full shadow-lg`}></div>
                  
                  {/* Plaque Content */}
                  <div className="relative z-10 text-center">
                    {/* Metal Type Badge */}
                    <div className={`inline-block ${colors.secondary} text-white px-3 py-1 rounded-full text-xs font-bold mb-4 shadow-lg border-2 ${colors.border} capitalize`}>
                      {metalType} Rating
                    </div>

                    {/* 3D Star Rating */}
                    <div className="flex items-center justify-center mb-6 space-x-1">
                      {render3DStars(testimonial.rating, metalType)}
                      <span className={`ml-3 text-lg font-bold ${colors.text}`}>({testimonial.rating})</span>
                    </div>

                    {/* Quote Icon */}
                    <div className={`text-4xl ${colors.accent} mb-4`}>"</div>

                    {/* Content */}
                    <blockquote className={`${colors.text} mb-6 italic leading-relaxed text-sm font-medium px-2`}>
                      {testimonial.content}
                    </blockquote>

                    {/* Closing Quote Icon */}
                    <div className={`text-4xl ${colors.accent} mb-4 transform rotate-180`}>"</div>

                    {/* Category Badge */}
                    <div className={`inline-block ${colors.secondary} text-white px-4 py-2 rounded-full text-xs font-bold mb-6 shadow-lg border-2 ${colors.border}`}>
                      {testimonial.category}
                    </div>

                    {/* Author */}
                    <div className="flex items-center justify-center">
                      <div className={`w-16 h-16 mr-4 rounded-full overflow-hidden border-3 ${colors.border} shadow-lg`}>
                        <img
                          src={testimonial.avatar}
                          alt={`${testimonial.name} - ${testimonial.role}`}
                          className="w-full h-full object-cover"
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
                        <div className={`font-bold ${colors.text} text-sm`}>{testimonial.name}</div>
                        <div className={`${colors.accent} font-semibold text-xs`}>{testimonial.role}</div>
                        <div className={`${colors.text} text-xs`}>{testimonial.company}</div>
                      </div>
                    </div>
                  </div>

                  {/* 3D Plaque Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
                  
                  {/* 3D Depth Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-black/20 to-transparent rounded-2xl blur-sm -z-10"></div>
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
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-5 w-48 h-48 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-64 h-64 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Client <span className="text-black">Testimonials</span>
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto font-medium">
            Hear from our clients who have transformed their lives and careers through
            our coaching programs. Real results from real people.
          </p>
        </div>

        {/* Horizontal Scrolling Plaques */}
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
            {testimonials.map((testimonial, index) => renderPlaque(testimonial, index))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => {
            const dotMetalType = getMetalType(testimonials[index].rating);
            const dotColors = getMetalColors(dotMetalType);
            
            return (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 shadow-lg ${
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
          @keyframes revolve {
            0% { transform: rotateY(0deg); }
            50% { transform: rotateY(90deg); }
            100% { transform: rotateY(0deg); }
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
