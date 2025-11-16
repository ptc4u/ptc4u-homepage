import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CompactTestimonialsSection from './CompactTestimonialsSection';

/**
 * About Coach section component for Pinnacle Thrive Coaching.
 * Displays information about the coach and a carousel of images.
 * Fully responsive across all device sizes.
 */
export default function AboutCoachSection() {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const saiImages = [
    '/images/Sai4.jpg',
    '/images/saisnpsht8.jpg',
    '/images/SAIPP1.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === saiImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [saiImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === saiImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? saiImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section section-card" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center leading-tight ${isHomePage ? 'text-slate-900' : 'text-blue-700'}`}>
          About Your <span className={isHomePage ? 'text-blue-700' : 'text-blue-700'}>Coach</span>
        </h2>

        {/* Top Row - Picture and About Coach Section */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Image Carousel */}
          <div className="w-full lg:w-1/3">
            <div className="relative h-64 sm:h-80">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md h-full">
                <img
                  src={saiImages[currentImageIndex]}
                  alt={`Sairam Bollapragada - Pinnacle Thrive Coaching ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Indicators */}
              <div className="flex justify-center mt-3 space-x-2">
                {saiImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-blue-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* About Coach Section */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-200/50 p-4 sm:p-6 h-64 sm:h-80 flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                <span className="text-gray-900">Sairam</span> Bollapragada
              </h3>

              <div className="text-gray-900 space-y-3 sm:space-y-4 flex-grow overflow-y-auto text-sm sm:text-base">
                <p className="leading-relaxed">
                  <strong>Sairam Bollapragada</strong> is a distinguished digital transformation leader and coach with over three plus decades of cross-sector experience spanning the Ministry of Defence, Global technology enterprises, and Academia. Starting his career as a Scientist with the MoD, he went on to lead large-scale delivery operations for Fortune 500 IT giants, driving innovation, growth, and enterprise agility with his last stint as Professor in the academia.
                </p>

                <p className="leading-relaxed">
                  Beyond corporate leadership, Sairam has been instrumental in shaping the careers of numerous professionals and leaders, guiding them to discover their potential, redefine their goals, and transform into the leaders they aspired to be. His coaching style uniquely balances strategic clarity with personal accountability, helping clients align professional success with personal fulfilment.
                </p>

                <p className="leading-relaxed">
                  Apart from being an active member of multiple engineering Boards of Studies, he has authored the book titled <strong>&quot;Being Your Best&quot;</strong> (available at Amazon, Flipkart, Rakuten Kobo, Notion Press, etc, worldwide) continues to influence and inspire future generations of technologists and leaders.
                </p>

                <p className="leading-relaxed">
                  With his rare ability to bridge strategy, execution, and leadership transformation, Sairam stands out as a trusted partner for professionals and organizations seeking to reinvent themselves and thrive beyond the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Testimonials and Book */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Testimonials */}
          <div className="w-full lg:w-3/4">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-2 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border border-gray-200/50 h-[420px] sm:h-[28rem] flex flex-col">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-4">
                <span className="text-gray-900">Client</span> Testimonials
              </h4>
              <div className="flex-grow overflow-hidden">
                <CompactTestimonialsSection />
              </div>
            </div>
          </div>

          {/* Self Development Book */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-gray-200/50 p-4 text-center flex flex-col justify-center h-auto lg:h-[28rem]">
              <div className="mb-3 sm:mb-4">
                <img
                  src="/images/BYB.png"
                  alt="Being Your Best Book"
                  className="w-16 h-20 sm:w-20 sm:h-24 object-cover rounded-lg mx-auto shadow-md"
                />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                Self Development Book by Sairam
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                Transform your life with proven strategies and exercises
              </p>
              <a
                href="https://www.amazon.in/Being-Your-Best-potential-exercises/dp/B0BZHY3N34"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Your Copy
                <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
