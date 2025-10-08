import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PTCCalendar from './PTCCalendar';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navigateToHome = () => {
    setIsMenuOpen(false);
    router.push('/');
  };

  const showServices = () => {
    setIsMenuOpen(false);
    router.push('/?showJourney=true');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-gradient-to-r from-gray-100/98 to-white/98 backdrop-blur-xl shadow-2xl border-b-2 border-gray-300/70'
        : 'bg-gradient-to-r from-gray-100/95 to-white/95 backdrop-blur-lg shadow-xl border-b-2 border-gray-300/60'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20 gap-4">
          {/* Left Side - Hamburger Menu Button */}
          <div className="flex justify-start">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-purple-600 hover:bg-purple-50/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Center - Logo & Brand - Always Centered */}
          <div className="flex justify-center">
            <div
              onClick={navigateToHome}
              className="flex items-center space-x-2 sm:space-x-4 px-2 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl cursor-pointer
                         bg-gradient-to-r from-white via-slate-50/50 to-white
                         border border-slate-200/60 shadow-lg
                         hover:shadow-xl hover:border-slate-300/80 hover:scale-105
                         transition-all duration-300 group"
            >
              <div className="relative flex-shrink-0">
                <img
                  src="/rndPTClogo.png"
                  alt="PTC Logo"
                  className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain rounded-lg shadow-sm"
                />
              </div>
              <div className="text-center min-w-0">
                <div className="text-sm sm:text-base lg:text-lg font-bold truncate">
                  <span className="font-tan-pearl text-purple-700">Pinnacle</span>
                  {' '}
                  <span className="text-slate-800">Thrive Coaching</span>
                </div>
                <div className="text-xs font-medium reflect-text hidden sm:block">
                  Reflect. Reboot. Reinvent
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Calendar Button Only */}
          <div className="flex justify-end items-center">
            <PTCCalendar />
          </div>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-gray-100 via-white to-gray-50 shadow-2xl border-b-2 border-gray-400/60 py-4 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-1">
                <button
                  onClick={() => scrollToSection('about-coach')}
                  className="w-full text-left px-4 py-3 text-slate-800 hover:text-purple-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 rounded-lg transition-all duration-200 font-medium border border-transparent hover:border-gray-200/50"
                >
                  About Your Coach
                </button>
                <button
                  onClick={showServices}
                  className="w-full text-left px-4 py-3 text-slate-800 hover:text-purple-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 rounded-lg transition-all duration-200 font-medium border border-transparent hover:border-gray-200/50"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('blogs')}
                  className="w-full text-left px-4 py-3 text-slate-800 hover:text-purple-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 rounded-lg transition-all duration-200 font-medium border border-transparent hover:border-gray-200/50"
                >
                  PTC Knowledge Base
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="w-full text-left px-4 py-3 text-slate-800 hover:text-purple-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 rounded-lg transition-all duration-200 font-medium border border-transparent hover:border-gray-200/50"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full text-left px-4 py-3 text-slate-800 hover:text-purple-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 rounded-lg transition-all duration-200 font-medium border border-transparent hover:border-gray-200/50"
                >
                  Contact
                </button>
                <button
                  onClick={() => scrollToSection('careers')}
                  className="w-full text-left px-4 py-3 text-slate-800 hover:text-purple-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 rounded-lg transition-all duration-200 font-medium border border-transparent hover:border-gray-200/50"
                >
                  Join Us
                </button>

                <div className="pt-2 mt-2 border-t border-gray-300/60">
                  <div className="text-sm font-semibold text-slate-600 px-4 py-2">Contact PTC</div>
                  <a
                    href="mailto:ask@ptc4u.com"
                    className="flex items-center w-full px-4 py-3 text-slate-800 hover:text-purple-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-200/50"
                  >
                    <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    ask@ptc4u.com
                  </a>
                  <a
                    href="https://wa.me/919845106272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-full px-4 py-3 text-slate-800 hover:text-purple-600 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 rounded-lg transition-all duration-200 border border-transparent hover:border-gray-200/50"
                  >
                    <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>

                <div className="pt-2 mt-2 border-t border-gray-300/60 px-4">
                  <PTCCalendar asDiv={true} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}