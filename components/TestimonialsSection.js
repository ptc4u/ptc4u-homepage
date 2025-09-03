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
      rating: 5,
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
      name: "A Grateful Professional",
      role: "Professional",
      company: "Corporate",
      content: "I consider myself so fortunate to have got the opportunity to get coached by such a well-qualified professional like Sairam. As we walked through the coaching sessions, he helped me discover myself with so much compassion, honesty and love. He helped me look into the mirror to understand my own capabilities, and I was amazed at the way I resolved my two largest problems in the short time for which I had signed up with him. As they say, coaching is not about pointing out others' mistakes, it's about making someone realize his/her potentials, explore the true-self and prioritise their goals. This is what I accomplished through Sairam's coaching sessions. My respect to him for the humbleness you can experience when you are in a conversation with him, especially for the knowledge and experience, which probably helps you to explore yourself better. If you are at a crossroads (we are at some point in time in life), you should be blessed to have somebody like Sairam. I was lucky he was there when I needed this help most. Thank you Sir!!",
      rating: 5,
      category: "Life Coaching",
      avatar: "/images/av1.png"
    }
  ];

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

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            Client <span className="font-tan-pearl text-purple-800">Success</span> Stories
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
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-black">({testimonial.rating}.0)</span>
              </div>

              {/* Content */}
              <blockquote className="text-black mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Category Badge */}
              <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
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

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
            <div className="text-black">Clients Transformed</div>
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
            <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-black">Client Rating</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-50 to-purple-50 p-12 rounded-2xl border border-emerald-200/50">
          <h3 className="text-3xl font-bold text-black mb-4">
            Join Our Success Stories
          </h3>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            Ready to transform your life and career? Book your free discovery call
            and start your journey to success today.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg"
          >
            Start Your Success Story
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
