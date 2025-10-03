import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useDeviceDetection from './useDeviceDetection';

/**
 * Navigation bar component for Pinnacle Thrive Coaching.
 *
 * Features centered PTC logo with company name flanked by navigation tabs.
 * Now includes smooth scrolling navigation to sections on the same page.
 */
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const router = useRouter();
  const { isMobile } = useDeviceDetection();

  // Safety check for router - but don't prevent rendering
  if (!router) {
    console.warn('Router not available yet, using fallback navigation');
  }

  // Track which sections have "New" content
  // To add a "NEW" callout to any menu item:
  // 1. Set the corresponding section to true in newSections
  // 2. Add the newSections check in the button JSX (see Careers example below)
  const newSections = {
    careers: true, // Careers section is newly added
    // Add other sections here when they get updated
    // philosophy: false,
    // services: false,
    // testimonials: false,
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigate to homepage function
  const navigateToHomepage = () => {
    console.log('=== navigateToHomepage function called ===');
    console.log('Navigate to homepage clicked');
    console.log('Current pathname:', window.location.pathname);
    console.log('Current URL:', window.location.href);
    console.log('Window object available:', typeof window !== 'undefined');
    
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // Always navigate to homepage - simplified logic
    console.log('Navigating to homepage from:', window.location.pathname);
    try {
      window.location.href = '/';
    } catch (error) {
      console.error('Navigation error:', error);
      // Fallback
      window.location.replace('/');
    }
  };

  // Smart navigation function that handles both scrolling and page navigation
  const navigateToSection = (sectionId, pagePath = null) => {
    console.log(`Navigation attempt: sectionId=${sectionId}, pagePath=${pagePath}, currentPath=${router?.pathname || 'unknown'}`);
    
    // Close mobile menu
    setIsMenuOpen(false);
    
    // If we're on the home page, try to scroll to the section first
    if (router?.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        console.log(`Found section element, scrolling to: ${sectionId}`);
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        return;
      } else {
        console.log(`Section element not found: ${sectionId}, navigating to page: ${pagePath}`);
      }
    }
    
    // If we're not on the home page, section doesn't exist, or no element found, navigate to the page
    if (pagePath) {
      console.log(`Navigating to: ${pagePath}`);
      
      // Use window.location for more reliable navigation
      if (window.location.pathname !== pagePath) {
        window.location.href = pagePath;
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gradient-to-r from-purple-200/30 to-blue-200/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 sm:h-20 lg:h-24">
          {/* All Navigation Elements - Centered */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Left Navigation Items */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigateToSection('about-coach', '/about');
              }}
              className="text-black hover:text-purple-600 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-purple-50 cursor-pointer relative group"
            >
              About Your Coach
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigateToSection('testimonials', '/testimonials');
              }}
              className="text-black hover:text-purple-600 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-purple-50 cursor-pointer relative group"
            >
              Client Testimonials
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigateToSection('blogs', '/blogs');
              }}
              className="text-black hover:text-purple-600 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-purple-50 cursor-pointer relative group"
            >
              Articles & Insights
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigateToSection('philosophy', '/philosophy');
              }}
              className="text-black hover:text-purple-600 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-purple-50 cursor-pointer relative group"
            >
              PTC's 3R Pillars
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMenuOpen(false);
                window.location.href = '/careers';
              }}
              className="text-black hover:text-purple-600 px-2 sm:px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:bg-purple-50 cursor-pointer relative group"
            >
              Careers
              {newSections.careers && (
                <span className="new-callout">NEW</span>
              )}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </button>

            {/* Vertical line before logo */}
            <div className="hidden sm:block w-1 h-12 sm:h-16 lg:h-20 bg-gradient-to-b from-purple-600 via-purple-700 to-blue-600 mx-2 sm:mx-4 shadow-sm"></div>
            
            {/* Center Logo & Company Name */}
            <div
              onClick={(e) => {
                console.log('Logo clicked - event triggered on page:', window.location.pathname);
                e.preventDefault();
                e.stopPropagation();
                console.log('About to call navigateToHomepage');
                navigateToHomepage();
              }}
              className="flex items-center space-x-2 sm:space-x-4 hover:opacity-80 transition-opacity cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-lg p-1 sm:p-2 -m-1 sm:-m-2"
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <img 
                src="/rndPTClogo.png" 
                alt="PTC Logo" 
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
              />
              <div className="text-center">
                <div className="text-xs sm:text-sm lg:text-lg font-bold text-black">
                  <span className="font-tan-pearl text-sm sm:text-base lg:text-xl text-purple-800">Pinnacle</span> <span className="text-black">Thrive Coaching</span>
                </div>
                <div className="text-xs font-semibold mb-1 reflect-text">Reflect. Reboot. Reinvent</div>
                <div className="text-xs text-black font-medium">Transform Your Life & Career</div>
              </div>
            </div>
            
            {/* Vertical line after company name */}
            <div className="hidden sm:block w-1 h-12 sm:h-16 lg:h-20 bg-gradient-to-b from-purple-600 via-purple-700 to-blue-600 mx-2 sm:mx-4 shadow-sm"></div>

            {/* Right Navigation Items */}
            {/* Contact PTC Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setContactDropdownOpen(!contactDropdownOpen);
                }}
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
                    href="/request-forms"
                    className="block px-4 py-2 text-sm text-black hover:bg-purple-50 hover:text-purple-600 transition-colors"
                    onClick={() => setContactDropdownOpen(false)}
                  >
                    Request Forms
                  </a>
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
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('NavBar: Start Your Journey button clicked');
                // Emit event to show journey options
                const event = new CustomEvent('showJourneyOptions');
                window.dispatchEvent(event);
                console.log('NavBar: showJourneyOptions event dispatched');
                // Scroll to journey options section
                const journeySection = document.getElementById('journey-options');
                if (journeySection) {
                  journeySection.scrollIntoView({ behavior: 'smooth' });
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
                  alt="" 
                  className="w-5 h-5 object-contain"
                />
              </a>
              
              {/* Instagram Logo */}
              <a
                href="https://instagram.com/ask.ptc4u"
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
              
              {/* Admin Icon */}
              <a
                href="/admin"
                className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-purple-50 transition-all duration-300 hover:scale-110 shadow-md border border-gray-200"
                title="Admin Access - Content Approval"
              >
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
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
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-neutral-200">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigateToSection('about-coach', '/about');
                }}
                className="text-black hover:text-purple-600 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left relative group"
              >
                About Your Coach
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigateToSection('testimonials', '/testimonials');
                }}
                className="text-black hover:text-purple-600 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left relative group"
              >
                Client Testimonials
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigateToSection('blogs', '/blogs');
                }}
                className="text-black hover:text-purple-600 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left relative group"
              >
                Articles & Insights
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigateToSection('philosophy', '/philosophy');
                }}
                className="text-black hover:text-purple-600 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left relative group"
              >
                PTC's 3R Pillars
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsMenuOpen(false);
                  window.location.href = '/careers';
                }}
                className="text-black hover:text-purple-600 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left relative group"
              >
                Careers
                {newSections.careers && (
                  <span className="new-callout">NEW</span>
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
              <a
                href="/request-forms"
                className="text-black hover:text-purple-600 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Forms
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a
                href="mailto:ask@ptc4u.com"
                className="text-black hover:text-purple-600 hover:bg-purple-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 w-full text-left relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact PTC
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

