import { useState } from 'react';

/**
 * Navigation bar component for Pinnacle Thrive Coaching.
 *
 * Features centered PTC logo with company name flanked by navigation tabs.
 * Now includes smooth scrolling navigation to sections on the same page.
 */
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gradient-to-r from-purple-200/30 to-blue-200/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Left Navigation Tabs */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('about-coach')}
              className="text-black hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-purple-50 cursor-pointer relative group"
            >
              About Your Coach
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-black hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-purple-50 cursor-pointer relative group"
            >
              Client Testimonials
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={() => scrollToSection('blogs')}
              className="text-black hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-purple-50 cursor-pointer relative group"
            >
              Blogs
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
          </div>

          {/* Center Logo & Company Name */}
          <div className="flex-shrink-0 flex items-center">
            {/* Vertical line before logo */}
            <div className="w-1 h-20 bg-gradient-to-b from-purple-600 via-purple-700 to-blue-600 mr-6 shadow-sm"></div>
            
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-4 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img 
                src="/rndPTClogo.png" 
                alt="PTC Logo" 
                className="h-16 w-auto object-contain"
              />
              <div className="text-center">
                <div className="text-2xl font-bold text-black">
                  <span className="font-tan-pearl text-3xl text-purple-800">Pinnacle</span> <span className="text-black">Thrive Coaching</span>
                </div>
                <div className="text-xs text-black font-semibold mb-1">Reflect. Reboot. Reinvent</div>
                <div className="text-sm text-black font-medium">Transform Your Life & Career</div>
              </div>
            </button>
            
            {/* Vertical line after company name */}
            <div className="w-1 h-20 bg-gradient-to-b from-purple-600 via-purple-700 to-blue-600 ml-6 shadow-sm"></div>
          </div>

          {/* Right Navigation Tabs */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('philosophy')}
              className="text-black hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-purple-100 cursor-pointer relative group"
            >
              PTC's 3R Pillars
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            
            {/* Contact PTC Dropdown */}
            <div className="relative">
              <button
                onClick={() => setContactDropdownOpen(!contactDropdownOpen)}
                className="text-black hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-purple-100 flex items-center relative group"
              >
                Contact PTC
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
              
              {contactDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-purple-200/50 py-2 z-50">
                  <a
                    href="mailto:ask@ptc4u.com"
                    className="block px-4 py-2 text-sm text-black hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    ask@ptc4u.com
                  </a>
                  <a
                    href="https://wa.me/919845106272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-black hover:bg-purple-50 hover:text-purple-600 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              )}
            </div>

            {/* Start Your Journey Button */}
            <button
              onClick={() => {
                const element = document.getElementById('journey-form');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="bg-blue-500 border-2 border-blue-500 hover:border-blue-600 text-white hover:text-white px-6 py-2 rounded-xl font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 button-text-white min-w-[180px]"
            >
              Start Your PTC Journey Now!
            </button>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-2">
              {/* LinkedIn Logo */}
              <a
                href="https://www.linkedin.com/in/sairam-bollapragada/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-blue-50 transition-all duration-300 hover:scale-110 shadow-md border border-gray-200"
              >
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* WordPress Logo */}
              <a
                href="https://itservicesdelivery.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-blue-50 transition-all duration-300 hover:scale-110 shadow-md border border-gray-200 overflow-hidden"
              >
                <img 
                  src="/images/wp.png" 
                  alt="WordPress" 
                  className="w-5 h-5 object-contain"
                />
              </a>
              
              {/* Instagram Logo */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-pink-50 transition-all duration-300 hover:scale-110 shadow-md border border-gray-200"
              >
                <svg className="w-4 h-4" fill="url(#instagram-gradient)" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#833AB4" />
                      <stop offset="50%" stopColor="#E1306C" />
                      <stop offset="100%" stopColor="#F77737" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-purple-600 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-neutral-200">
              <button
                onClick={() => scrollToSection('about-coach')}
                className="text-black hover:text-purple-600 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left relative group"
              >
                About Your Coach
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-black hover:text-purple-600 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left relative group"
              >
                Client Testimonials
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
              <button
                onClick={() => scrollToSection('blogs')}
                className="text-black hover:text-purple-600 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left relative group"
              >
                Blogs
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
              <button
                onClick={() => scrollToSection('philosophy')}
                className="text-black hover:text-purple-600 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left relative group"
              >
                PTC's 3R Pillars
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

