import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useDeviceDetection from './useDeviceDetection';
import PTCCalendar from './PTCCalendar';

/**
 * Navigation bar component for Pinnacle Thrive Coaching.
 *
 * Features centered PTC logo with company name flanked by navigation tabs.
 * Now includes smooth scrolling navigation to sections on the same page.
 */
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const router = useRouter();
  const { isMobile } = useDeviceDetection();

  // Safety check for router - but don't prevent rendering
  if (!router) {
    // Router not available yet, using fallback navigation
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

  // Handle hover with delay to prevent flickering
  const handleMouseEnter = (dropdownType) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    if (dropdownType === 'contact') {
      setContactDropdownOpen(true);
    }
  };

  const handleMouseLeave = (dropdownType) => {
    const timeout = setTimeout(() => {
      if (dropdownType === 'contact') {
        setContactDropdownOpen(false);
      }
    }, 150); // 150ms delay
    setHoverTimeout(timeout);
  };


  // Navigate to homepage function
  const navigateToHomepage = () => {
    // Close mobile menu if open
    setIsMenuOpen(false);
    
    // Always navigate to homepage - simplified logic
    try {
      window.location.href = '/';
    } catch (error) {
      // Fallback
      window.location.replace('/');
    }
  };

  // Simple navigation function
  const navigateToSection = (sectionId, pagePath = null) => {
    // Close mobile menu
    setIsMenuOpen(false);
    
    // Try to find element and scroll to it
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else if (pagePath) {
      window.location.href = pagePath;
    }
  };


  // Handle outside clicks to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        setContactDropdownOpen(false);
        setAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <nav className="relative z-50 bg-gradient-to-r from-white via-purple-50/30 to-white backdrop-blur-lg shadow-xl border-b border-purple-100/50">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center h-32 sm:h-36 lg:h-40 pr-20 sm:pr-24">
          {/* Centered Navigation Container */}
          <div className="flex items-center justify-center space-x-8 lg:space-x-16 w-full max-w-7xl">
            {/* Left Navigation Items */}
            <div className="flex items-center space-x-6">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigateToSection('about-coach', '/about');
                }}
                className="text-black hover:text-purple-600 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-purple-100 hover:shadow-lg hover:shadow-md cursor-pointer relative group"
              >
                About Your Coach
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigateToSection('blogs', '/blogs');
                }}
                className="text-black hover:text-purple-600 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-purple-100 hover:shadow-lg hover:shadow-md cursor-pointer relative group"
              >
                PTC Knowledge Base
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
              
              {/* Services Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  router.push('/?showJourney=true');
                }}
                className="text-black hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-purple-100 hover:shadow-lg flex items-center relative group"
              >
                Services
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
            </div>

            {/* Vertical line before logo */}
            <div className="hidden sm:block w-1 h-28 sm:h-32 lg:h-36 bg-gradient-to-b from-purple-600 via-purple-700 to-blue-600 shadow-sm flex-shrink-0"></div>
            
            {/* Center Logo & Company Name - Enhanced with creative styling */}
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                navigateToHomepage();
              }}
              className="flex items-center justify-center space-x-8 hover:scale-105 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-2xl p-4 min-w-[320px] sm:min-w-[380px] lg:min-w-[420px] flex-1 bg-gradient-to-br from-white via-purple-50/40 to-blue-50/40 shadow-lg border border-purple-100/60 hover:shadow-xl hover:border-purple-200/80 overflow-hidden"
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <div className="relative">
                <img 
                  src="/rndPTClogo.png" 
                  alt="PTC Logo" 
                  className="h-24 sm:h-26 lg:h-28 w-auto object-contain rounded-xl flex-shrink-0 shadow-md"
                />
              </div>
              <div className="text-center flex flex-col justify-center items-center flex-1 px-4">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                  <span className="font-tan-pearl text-xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800 bg-clip-text text-transparent font-semibold drop-shadow-sm">Pinnacle</span>
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                  <span className="text-black font-semibold drop-shadow-sm">Thrive Coaching</span>
                </div>
                <div className="text-base font-semibold reflect-text bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">Reflect. Reboot. Reinvent</div>
                <div className="text-sm text-gray-600 font-medium -mb-2">Transform Your Life & Career</div>
              </div>
            </div>
            
            {/* Vertical line after company name */}
            <div className="hidden sm:block w-1 h-28 sm:h-32 lg:h-36 bg-gradient-to-b from-purple-600 via-purple-700 to-blue-600 shadow-sm flex-shrink-0"></div>

            {/* Right Navigation Items */}
            <div className="flex items-center space-x-6">
              {/* Join Us Link */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigateToSection('careers', '/careers');
                }}
                className="text-black hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-purple-100 hover:shadow-lg flex items-center relative group"
              >
                Join Us (New)
                {newSections.careers && (
                  <span className="ml-2 inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">NEW</span>
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              </button>
              
              {/* Contact PTC Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('contact')}
                onMouseLeave={() => handleMouseLeave('contact')}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setContactDropdownOpen(!contactDropdownOpen);
                  }}
                  className="text-black hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-purple-100 hover:shadow-lg flex items-center relative group"
                >
                  Contact PTC
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
                </button>
                
                {contactDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-purple-200/50 py-2 z-50">
                    <a
                      href="mailto:ask@ptc4u.com"
                      className="block px-4 py-2 text-sm text-black hover:bg-purple-100 hover:shadow-lg hover:shadow-md hover:text-purple-600 transition-colors"
                    >
                      ask@ptc4u.com
                    </a>
                    <a
                      href="https://wa.me/919845106272"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-black hover:bg-purple-100 hover:shadow-lg hover:shadow-md hover:text-purple-600 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                )}
              </div>
              
              {/* PTC Calendar Button */}
              <PTCCalendar />
              
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden absolute left-4 top-1/2 transform -translate-y-1/2">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-purple-600 hover:bg-purple-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300"
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

        {/* Mobile Navigation - Simplified */}
        {isMenuOpen && (
          <div className="sm:hidden mobile-menu">
            <div className="px-4 py-4 space-y-1">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigateToSection('about-coach', '/about');
                }}
                className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-100 hover:shadow-lg hover:shadow-md rounded-lg transition-colors"
              >
                About Your Coach
              </button>
              <div className="border-t border-gray-200 my-2"></div>
              <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Join Us (New)</div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigateToSection('careers', '/careers');
                }}
                className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-100 hover:shadow-lg hover:shadow-md rounded-lg transition-colors"
              >
                Open Positions
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigateToSection('careers', '/careers');
                }}
                className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-100 hover:shadow-lg hover:shadow-md rounded-lg transition-colors"
              >
                Careers
                {newSections.careers && (
                  <span className="ml-2 inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">NEW</span>
                )}
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigateToSection('blogs', '/blogs');
                }}
                className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-100 hover:shadow-lg hover:shadow-md rounded-lg transition-colors"
              >
                PTC Knowledge Base
              </button>
              <div className="border-t border-gray-200 my-2"></div>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  router.push('/?showJourney=true');
                }}
                className="w-full text-left px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide hover:text-purple-600 hover:bg-purple-100 rounded-lg transition-colors"
              >
                Services
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  navigateToSection('careers', '/careers');
                }}
                className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-100 hover:shadow-lg hover:shadow-md rounded-lg transition-colors"
              >
                Careers
                {newSections.careers && (
                  <span className="ml-2 inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">NEW</span>
                )}
              </button>
              <a
                href="/request-forms"
                className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-100 hover:shadow-lg hover:shadow-md rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Forms
              </a>
              <a
                href="mailto:ask@ptc4u.com"
                className="block w-full text-left py-3 px-4 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-100 hover:shadow-lg hover:shadow-md rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact PTC
              </a>
            </div>
          </div>
        )}
      </div>

    </nav>
  );
}

