import { useState, useEffect } from 'react';

export default function TestGoldenPlaque() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Test Client",
      content: "This is a test testimonial to verify the component works.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            Client <span className="text-black">Testimonials</span>
          </h2>
        </div>

        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-5xl">
            <div className="bg-gradient-to-br from-stone-200 via-stone-100 to-stone-200 rounded-3xl p-8 shadow-2xl border-4 border-stone-300">
              <div className="relative bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-600 rounded-2xl p-8 shadow-2xl border-4 border-amber-500">
                <div className="text-center">
                  <div className="text-amber-900 mb-6 italic leading-relaxed text-lg">
                    "{currentTestimonial.content}"
                  </div>
                  <div className="font-bold text-amber-900 text-xl">{currentTestimonial.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
