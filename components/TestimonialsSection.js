/**
 * Testimonials section component for Pinnacle Thrive Coaching.
 *
 * This section showcases client success stories and testimonials to build trust
 * and demonstrate the effectiveness of the coaching services.
 */
export default function TestimonialsSection() {
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
      content: "I was, in particular, very lucky to get an opportunity to sign up with Sairam as my coach on Risk Taking, Decision making and Managing change spaces. His coaching style enabled me to discover myself afresh, greatly improve my risk taking abilities and look beyond my own barriers when it came to my career. I will always remain thankful to Sairam for getting coached by a knowledge powerhouse like him. He is somebody who can really make you discover yourself and realize your performance to your true capabilities. Thank you Sairam for all your coaching and guidance.",
      rating: 4.6,
      category: "Risk Management",
      avatar: "/images/av6.png"
    },
    {
      name: "A Senior Product Manager at an MNC",
      role: "Product Manager",
      company: "Multinational Corporation",
      content: "Sairam, as my coach, played a crucial role in my understanding of myself and the true purpose of a coach. A few months ago, I was lost and uncertain, but I decided to try coaching with Sairam. He provided me with 6 sessions that were around 45 minutes each. He is an excellent listener, and his unique coaching methods were highly effective for me, gaining valuable insights from each that helped me improve my morale and make solid progress. After just a few sessions, I gained unshakable confidence in myself and got a clear vision for my future. This helped me trust that the best things were yet to come for me, both in my professional and personal life. Sairam is a results-driven coach. I highly recommend him to anyone struggling to achieve their professional and personal goals. Thank you, Sairam, for your exceptional guidance and support. You have the ability to help many more people reach their full potential.",
      rating: 5,
      category: "Personal Development",
      avatar: "/images/av7.png"
    },
    {
      name: "A Senior Professional",
      role: "Senior Professional",
      company: "Corporate",
      content: "I found him going out of his way when you ask for some help and guidance. His expertise as a Coach and a guide is tremendous, and it has helped come up with more efficient strategic solutions. Personally, for me, getting coached on my Time Management issue was a life-changing lesson. In a short span, he coached me to effectively redraw my work-life balance. Thanks a lot, Sairam Sir! You made me a much better professional, again.",
      rating: 5,
      category: "Time Management",
      avatar: "/images/av1.png"
    },
    {
      name: "A Senior Experienced Leader",
      role: "Senior Leader",
      company: "Corporate",
      content: "I consider myself so fortunate to have got the opportunity to get coached by such a well-qualified professional like Sairam. As we walked through the coaching sessions, he helped me discover myself with so much compassion, honesty and love. He helped me look into the mirror to understand my own capabilities, and I was amazed at the way I resolved my two largest problems in the short time for which I had signed up with him. As they say, coaching is not about pointing out others' mistakes, it's about making someone realize his/her potentials, explore the true-self and prioritise their goals. This is what I accomplished through Sairam's coaching sessions. My respect to him for the humbleness you can experience when you are in a conversation with him, especially for the knowledge and experience, which probably helps you to explore yourself better. If you are at a crossroads (we are at some point in time in life), you should be blessed to have somebody like Sairam. I was lucky he was there when I needed this help most. Thank you Sir!!",
      rating: 5,
      category: "Life Coaching",
      avatar: "/images/av1.png"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => {
      const starIndex = i + 1;
      const isFullStar = starIndex <= Math.floor(rating);
      const isPartialStar = starIndex === Math.ceil(rating) && rating % 1 !== 0;
      const partialFill = isPartialStar ? (rating % 1) : 1;
      
      return (
        <div key={i} className="relative w-6 h-6">
          {/* Background star (always gray) */}
          <div className="w-6 h-6 bg-gray-300 rounded-sm absolute inset-0 opacity-30"></div>
          
          {/* Golden star image (full or partial) */}
          {(isFullStar || isPartialStar) && (
            <div className="relative w-full h-full overflow-hidden">
              <img
                src="/images/gldstr.jpeg"
                alt="Golden star"
                className="w-6 h-6 absolute inset-0 object-cover"
                style={{
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
                  transform: 'perspective(1000px) rotateX(15deg) rotateY(5deg) scale(1.1)'
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

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-white p-10 rounded-3xl border border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Rating */}
              <div className="flex items-center justify-end mb-4">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-black">({testimonial.rating})</span>
              </div>

              {/* Content */}
              <blockquote className="text-black mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Category Badge */}
              <div className="inline-block bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {testimonial.category}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 mr-4 rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} - ${testimonial.role}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-emerald-100 flex items-center justify-center text-2xl">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-sm text-black">{testimonial.role}</div>
                  <div className="text-sm text-black">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
