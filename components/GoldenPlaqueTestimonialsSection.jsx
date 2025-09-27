import { useState, useEffect } from 'react';

/**
 * Golden Plaque Testimonials section component for Pinnacle Thrive Coaching.
 *
 * This section showcases client testimonials on revolving golden plaques,
 * with each testimonial displayed on a separate wall-like section.
 */
export default function GoldenPlaqueTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevolving, setIsRevolving] = useState(false);

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

  // Auto-revolve testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRevolving(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsRevolving(false);
      }, 800); // Half of the revolve animation duration
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      const starIndex = i + 1;
      let starClass = 'text-gray-300';
      
      if (starIndex <= Math.floor(rating)) {
        // Full star
        starClass = 'text-yellow-500';
      } else if (starIndex === Math.ceil(rating) && rating % 1 !== 0) {
        // Half star for ratings like 4.5
        starClass = 'text-yellow-500';
      }
      
      return (
        <svg
          key={i}
          className={`w-6 h-6 ${starClass} drop-shadow-sm`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden" id="testimonials">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/5 via-amber-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            Client <span className="text-black">Testimonials</span>
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium">
            Hear from our clients who have transformed their lives and careers through
            our coaching programs. Real results from real people.
          </p>
        </div>

        {/* Golden Plaque Wall */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-5xl">
            {/* Wall Background */}
            <div className="bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 rounded-3xl p-8 shadow-2xl border-4 border-stone-300 relative overflow-hidden">
              {/* Wall Texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-stone-300/20 via-transparent to-stone-400/20 rounded-3xl"></div>
              <div className="absolute top-4 left-4 right-4 h-1 bg-gradient-to-r from-stone-400 to-stone-500 rounded-full"></div>
              <div className="absolute bottom-4 left-4 right-4 h-1 bg-gradient-to-r from-stone-400 to-stone-500 rounded-full"></div>
              
              {/* Golden Plaque Container */}
              <div className="relative z-10 flex justify-center">
                <div 
                  className="relative transition-all duration-1000 ease-in-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isRevolving ? 'rotateY(180deg)' : 'rotateY(0deg)',
                    animation: isRevolving ? 'revolve 1.6s ease-in-out' : 'none'
                  }}
                >
                  {/* Golden Plaque */}
                  <div className="relative bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-600 rounded-2xl p-8 shadow-2xl border-4 border-amber-500 transform perspective-1000">
                    {/* Plaque Ornamental Border */}
                    <div className="absolute inset-2 border-2 border-amber-600 rounded-xl"></div>
                    <div className="absolute inset-4 border border-yellow-300 rounded-lg"></div>
                    
                    {/* Plaque Corner Decorations */}
                    <div className="absolute top-2 left-2 w-6 h-6 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full shadow-lg"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full shadow-lg"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full shadow-lg"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-full shadow-lg"></div>
                    
                    {/* Plaque Content */}
                    <div className="relative z-10 text-center">
                      {/* Rating */}
                      <div className="flex items-center justify-center mb-6">
                        {renderStars(currentTestimonial.rating)}
                        <span className="ml-3 text-lg font-bold text-amber-900">({currentTestimonial.rating})</span>
                      </div>

                      {/* Quote Icon */}
                      <div className="text-6xl text-amber-800 mb-6">"</div>

                      {/* Content */}
                      <blockquote className="text-amber-900 mb-8 italic leading-relaxed text-lg font-medium px-4">
                        {currentTestimonial.content}
                      </blockquote>

                      {/* Closing Quote Icon */}
                      <div className="text-6xl text-amber-800 mb-6 transform rotate-180">"</div>

                      {/* Category Badge */}
                      <div className="inline-block bg-amber-800 text-yellow-100 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-lg border-2 border-amber-900">
                        {currentTestimonial.category}
                      </div>

                      {/* Author */}
                      <div className="flex items-center justify-center">
                        <div className="w-20 h-20 mr-6 rounded-full overflow-hidden border-4 border-amber-600 shadow-lg">
                          <img
                            src={currentTestimonial.avatar}
                            alt={`${currentTestimonial.name} - ${currentTestimonial.role}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="w-full h-full bg-gradient-to-br from-amber-200 to-yellow-300 flex items-center justify-center text-3xl font-bold text-amber-800">
                            {currentTestimonial.name.charAt(0)}
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="font-bold text-amber-900 text-xl">{currentTestimonial.name}</div>
                          <div className="text-amber-800 font-semibold">{currentTestimonial.role}</div>
                          <div className="text-amber-700">{currentTestimonial.company}</div>
                        </div>
                      </div>
                    </div>

                    {/* Plaque Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 via-transparent to-amber-600/20 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsRevolving(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsRevolving(false);
                }, 800);
              }}
              className={`w-4 h-4 rounded-full transition-all duration-300 shadow-lg ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-yellow-400 to-amber-500 scale-125 shadow-amber-400/50' 
                  : 'bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>


      </div>
    </section>
  );
}
