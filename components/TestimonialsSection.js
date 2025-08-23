/**
 * Testimonials section component for Pinnacle Thrive Coaching.
 *
 * This section showcases client success stories and testimonials to build trust
 * and demonstrate the effectiveness of the coaching services.
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Tech Solutions Inc.",
      content: "Working with Pinnacle Thrive Coaching transformed my leadership approach. I went from managing a team of 5 to leading a department of 25 with confidence and clarity. The strategies I learned continue to serve me every day.",
      rating: 5,
      category: "Corporate Coaching",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Entrepreneur",
      company: "Startup Founder",
      content: "The life coaching sessions helped me overcome my fear of failure and take the leap to start my own business. I'm now running a successful company and living the life I always dreamed of.",
      rating: 5,
      category: "Life Coaching",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Healthcare Professional",
      company: "City General Hospital",
      content: "I was struggling with work-life balance and burnout. Through goal achievement coaching, I learned to set boundaries, prioritize effectively, and now I'm thriving both professionally and personally.",
      rating: 5,
      category: "Goal Achievement",
      avatar: "👩‍⚕️"
    },
    {
      name: "David Thompson",
      role: "Sales Manager",
      company: "Global Enterprises",
      content: "The performance coaching program helped me break through my sales plateau. I increased my team's performance by 40% and was promoted to Regional Director within 6 months.",
      rating: 5,
      category: "Performance Coaching",
      avatar: "👨‍💼"
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from our clients who have transformed their lives and careers through
            our coaching programs. Real results from real people.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-slate-600">({testimonial.rating}.0)</span>
              </div>

              {/* Content */}
              <blockquote className="text-slate-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Category Badge */}
              <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {testimonial.category}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-sm text-slate-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
            <div className="text-slate-600">Clients Transformed</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-slate-600">Success Rate</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-emerald-600 mb-2">1000+</div>
            <div className="text-slate-600">Coaching Hours</div>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-slate-600">Client Rating</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-emerald-50 to-purple-50 p-12 rounded-2xl border border-emerald-200/50">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Join Our Success Stories
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
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
