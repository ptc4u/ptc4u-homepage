import { useState } from 'react';

/**
 * Navigation bar component for Pinnacle Thrive Coaching.
 *
 * Features a responsive design with mobile menu toggle and smooth scrolling
 * to different sections of the page. Uses the coaching brand colors.
 */
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              <span className="text-3xl">🏔️</span>
              <span>Pinnacle Thrive</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Success Stories
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
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
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-neutral-200">
            <button
              onClick={() => scrollToSection('services')}
              className="text-neutral-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-neutral-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-neutral-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-neutral-700 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Contact
            </button>
            <div className="pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-lg"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
