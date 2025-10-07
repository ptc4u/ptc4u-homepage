import { useState, useEffect } from 'react';

/**
 * Compact Testimonials section component for About Your Coach page.
 * 
 * This is a smaller version of the testimonials section designed to fit
 * within the About Your Coach page layout with ratings positioned at top right.
 */
export default function CompactTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

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
      rating: 5,
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
      rating: 4.6,
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

  // Auto-flip testimonials every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsFlipping(false);
      }, 300); // Half of the flip animation duration
    }, 20000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      const starIndex = i + 1;
      const isFullStar = starIndex <= Math.floor(rating);
      const isPartialStar = starIndex === Math.ceil(rating) && rating % 1 !== 0;
      const partialFill = isPartialStar ? (rating % 1) : 1;
      
      return (
        <div key={i} className="relative w-4 h-4">
          {/* Background star (always gray) */}
          <div className="w-4 h-4 bg-gray-300 rounded-sm absolute inset-0 opacity-30"></div>
          
          {/* Golden star image (full or partial) */}
          {(isFullStar || isPartialStar) && (
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/images/gldstr.jpeg"
                alt="Golden star"
                className="w-4 h-4 absolute inset-0 object-cover"
                style={{
                  filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))'
                }}
              />
              
              {/* Right-justified partial star mask */}
              {isPartialStar && (
                <div 
                  className="absolute inset-0 bg-white"
                  style={{
                    clipPath: `polygon(${partialFill * 100}% 0, 100% 0, 100% 100%, ${partialFill * 100}% 100%)`
                  }}
                ></div>
              )}
            </div>
          )}
        </div>
      );
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="h-full flex flex-col">
      {/* Compact Testimonial Card */}
      <div className="flex-grow flex items-center">
        <div className="relative w-full">
          <div 
            className={`bg-white p-4 rounded-lg border border-purple-200/50 shadow-md transition-all duration-600 transform ${
              isFlipping ? 'rotateY-180' : 'rotateY-0'
            }`}
            style={{
              transform: isFlipping ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
            {/* Rating positioned at top right */}
            <div className="flex items-center justify-end mb-3">
              <div className="flex items-center space-x-1">
                {renderStars(currentTestimonial.rating)}
              </div>
              <span className="ml-2 text-xs text-gray-600">({currentTestimonial.rating})</span>
            </div>

            {/* Content */}
            <blockquote className="text-black mb-4 italic leading-relaxed text-base">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Category Badge */}
            <div className="inline-block bg-gray-100 text-black px-3 py-1 rounded-full text-xs font-semibold mb-3">
              {currentTestimonial.category}
            </div>

            {/* Author */}
            <div className="flex items-center">
              <div className="w-10 h-10 mr-3 rounded-full overflow-hidden">
                <img
                  src={currentTestimonial.avatar}
                  alt={`${currentTestimonial.name} - ${currentTestimonial.role}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-emerald-100 flex items-center justify-center text-sm">
                  {currentTestimonial.name.charAt(0)}
                </div>
              </div>
              <div>
                <div className="font-semibold text-black text-base">{currentTestimonial.name}</div>
                <div className="text-sm text-gray-600">{currentTestimonial.role}</div>
                <div className="text-sm text-gray-600">{currentTestimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-1 mt-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsFlipping(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsFlipping(false);
              }, 300);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes flip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(90deg); }
          100% { transform: rotateY(0deg); }
        }
        
        .rotateY-180 {
          animation: flip 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
}
