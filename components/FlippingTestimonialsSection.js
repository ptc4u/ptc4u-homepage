import { useState, useEffect } from 'react';

/**
 * Flipping Testimonials section component for Pinnacle Thrive Coaching.
 *
 * This section showcases client testimonials with a flipping card animation.
 */
export default function FlippingTestimonialsSection() {
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
      name: "A Grateful Professional",
      role: "Professional",
      company: "Corporate",
      content: "I consider myself so fortunate to have got the opportunity to get coached by such a well-qualified professional like Sairam. As we walked through the coaching sessions, he helped me discover myself with so much compassion, honesty and love. He helped me look into the mirror to understand my own capabilities, and I was amazed at the way I resolved my two largest problems in the short time for which I had signed up with him.",
      rating: 5,
      category: "Life Coaching",
      avatar: "/images/av1.png"
    }
  ];

  // Auto-flip testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsFlipping(false);
      }, 300); // Half of the flip animation duration
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            Client <span className="text-black">Success</span> Stories
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium">
            Hear from our clients who have transformed their lives and careers through
            our coaching programs. Real results from real people.
          </p>
        </div>

        {/* Flipping Testimonial Card */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-4xl">
            <div 
              className={`bg-gradient-to-br from-purple-50 to-white p-10 rounded-3xl border border-purple-200/50 shadow-xl transition-all duration-600 transform ${
                isFlipping ? 'rotateY-180' : 'rotateY-0'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transform: isFlipping ? 'rotateY(180deg)' : 'rotateY(0deg)'
              }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(currentTestimonial.rating)}
                <span className="ml-2 text-sm text-black">({currentTestimonial.rating}.0)</span>
              </div>

              {/* Content */}
              <blockquote className="text-black mb-6 italic leading-relaxed text-lg">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Category Badge */}
              <div className="inline-block bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {currentTestimonial.category}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-16 h-16 mr-6 rounded-full overflow-hidden">
                  <img
                    src={currentTestimonial.avatar}
                    alt={`${currentTestimonial.name} - ${currentTestimonial.role}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-emerald-100 flex items-center justify-center text-2xl">
                    {currentTestimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-black text-lg">{currentTestimonial.name}</div>
                  <div className="text-sm text-black">{currentTestimonial.role}</div>
                  <div className="text-sm text-black">{currentTestimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-16">
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-emerald-600 mb-2">102</div>
            <div className="text-black">Clients Served</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-black">Success Rate</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-emerald-600 mb-2">1000+</div>
            <div className="text-black">Coaching Hours</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">4.65</div>
            <div className="text-black">Client Rating</div>
          </div>
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
    </section>
  );
}
