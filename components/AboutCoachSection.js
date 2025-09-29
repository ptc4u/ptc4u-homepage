import { useState, useEffect } from 'react';

/**
 * About Coach section component for Pinnacle Thrive Coaching.
 *
 * Displays information about the coach and a carousel of images.
 */
export default function AboutCoachSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Updated image array with the specific Sai images
  const saiImages = [
    '/images/Sai4.jpg',
    '/images/saisnpsht8.jpg',
    '/images/SAIPP1.jpg',
    '/images/Sai4.jpg'
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
    <section className="py-8 mt-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 text-center mt-16">
          About Your <span className="text-black">Coach</span>
        </h2>
        
        {/* Top Row - Picture and About Coach Section Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Image Carousel */}
          <div className="relative h-96">
            <div className="relative overflow-hidden rounded-xl shadow-md h-full">
              <img
                src={saiImages[currentImageIndex]}
                alt={`Sairam Bollapragada - Pinnacle Thrive Coaching ${currentImageIndex + 1}`}
                className="w-full h-full object-contain transition-all duration-500 ease-in-out"
                onError={(e) => {
                  console.error(`Failed to load image: ${saiImages[currentImageIndex]}`);
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
                onLoad={() => {
                  console.log(`Successfully loaded image: ${saiImages[currentImageIndex]}`);
                }}
              />
              {/* Fallback if image doesn't load */}
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center hidden">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-black mb-2">
                    <span className="text-black">Sairam</span> - Your Coach
                  </h3>
                  <p className="text-black font-medium text-sm">
                    Transformational Leadership Coach
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black hover:text-black p-1.5 rounded-full shadow-md transition-all duration-300 hover:scale-110"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black hover:text-black p-1.5 rounded-full shadow-md transition-all duration-300 hover:scale-110"
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
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* About Coach Section */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200/50 p-4 h-96 flex flex-col">
            <h3 className="text-2xl font-bold text-black mb-3">
              <span className="text-black">Sairam</span> Bollapragada
            </h3>
            
            <div className="prose prose-sm text-black space-y-3 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200" style={{ scrollbarWidth: 'auto' }}>
              <p className="text-sm leading-relaxed">
                <strong>Sairam Bollapragada</strong> is a distinguished digital transformation leader and coach with over three plus decades of cross-sector experience spanning the Ministry of Defence, Global technology enterprises, and Academia. Starting his career as a Scientist with the MoD, he went on to lead large-scale delivery operations for Fortune 500 IT giants, driving innovation, growth, and enterprise agility with his last stint as Professor in the academia.
              </p>
              
              <p className="text-sm leading-relaxed">
                Beyond corporate leadership, Sairam has been instrumental in shaping the careers of numerous professionals and leaders, guiding them to discover their potential, redefine their goals, and transform into the leaders they aspired to be. His coaching style uniquely balances strategic clarity with personal accountability, helping clients align professional success with personal fulfilment.
              </p>
              
              <p className="text-sm leading-relaxed">
                Apart from being an active member of multiple engineering Boards of Studies, he has authored the book titled <strong>"Being Your Best"</strong> (available at Amazon, Flipkart, Rakuten Kobo, Notion Press, etc, worldwide) continues to influence and inspire future generations of technologists and leaders.
              </p>
              
              <p className="text-sm leading-relaxed">
                With his rare ability to bridge strategy, execution, and leadership transformation, Sairam stands out as a trusted partner for professionals and organizations seeking to reinvent themselves and thrive beyond the digital age.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row - Achievements and Self Development Book Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Key Achievements */}
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200/50 h-72 flex flex-col">
            <h4 className="text-lg font-bold text-black mb-6">
              <span className="text-black">Key</span> Achievements
            </h4>
            <ul className="space-y-2 flex-grow">
              <li className="flex items-start">
                <svg className="w-4 h-4 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-black font-medium text-sm">30+ years of cross-sector experience</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-black font-medium text-sm">Former Scientist at Ministry of Defence</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-black font-medium text-sm">Fortune 500 IT leadership experience</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-black font-medium text-sm">Published author of "Being Your Best"</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 text-black mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-black font-medium text-sm">Academic Professor & Board Member</span>
              </li>
            </ul>
          </div>

          {/* Self Development Book */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200/50 p-6 text-center flex flex-col justify-center h-72">
            <div className="mb-4">
              <img 
                src="/images/BYB.png" 
                alt="Being Your Best Book" 
                className="w-20 h-28 object-cover rounded-lg mx-auto shadow-md"
              />
            </div>
            <h4 className="text-lg font-bold text-black mb-2">Self Development Book by Sairam</h4>
            <p className="text-sm text-black mb-4">Transform your life with proven strategies and exercises</p>
            <a
              href="https://www.amazon.in/Being-Your-Best-potential-exercises/dp/B0BZHY3N34/ref=sr_1_1?crid=18P5C1WXBHNUY&dib=eyJ2IjoiMSJ9.SdvunFSwWiSOlV6qhIh-Sw.8oYQaXqPHjOO-yDq-Qr0fp_g65Zji_6gGZMFdTy5EXM&dib_tag=se&keywords=being+your+best%2C+sairam&qid=1756609432&sprefix=being+your+best%2C+saira%2Caps%2C298&sr=8-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Your Copy
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
