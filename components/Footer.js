import VisitorCounter from './VisitorCounter';

/**
 * Footer component for Pinnacle Thrive Coaching.
 * Provides navigation links, contact information, and social media links.
 * Fully responsive with proper mobile/tablet/desktop layouts.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl sm:text-2xl font-bold text-gray-800">
                <span className="font-tan-pearl text-purple-800">Pinnacle</span>
                {' '}
                <span className="text-gray-800">Thrive Coaching</span>
              </span>
            </div>
            <p className="text-gray-700 mb-6 max-w-md text-sm sm:text-base">
              Professional executive coaching services designed for senior leaders and corporate executives.
              We help you enhance leadership effectiveness, drive organizational success, and achieve strategic objectives.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/pinnacle-thrive-coaching/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.032-3.047-1.032 0-1.26 1.317-1.26 3.047v5.569h-3.554V9h3.554v1.561c.703-1.096 1.96-1.325 2.554-1.325 2.722 0 3.203 1.778 3.203 4.092v6.124z"/>
                  <path d="M5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/ask.ptc4u"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-purple-600 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-gray-800">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#journey" className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors">
                  Discovery Session
                </a>
              </li>
              <li>
                <a href="#journey" className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors">
                  PTC Essentials
                </a>
              </li>
              <li>
                <a href="#journey" className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors">
                  PTC Professional
                </a>
              </li>
              <li>
                <a href="#journey" className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors">
                  Executive Workshops
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-gray-800">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#about-coach" className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors">
                  About Coach
                </a>
              </li>
              <li>
                <a href="#blogs" className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors">
                  <span className="text-blue-700">Knowledge</span> Base
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors">
                  Join Us
                </a>
              </li>
              <li>
                <a href="#journey" className="text-sm sm:text-base text-gray-700 hover:text-blue-600 transition-colors">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-700 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear}{' '}
              <span className="font-tan-pearl text-purple-800">Pinnacle</span>{' '}
              <span className="text-gray-800">Thrive Coaching</span>. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="bg-white/80 backdrop-blur-sm border border-purple-300 rounded-lg px-4 py-2 shadow-sm">
                <VisitorCounter />
              </div>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                <a href="mailto:ask@ptc4u.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contact Us
                </a>
                <a href="https://www.linkedin.com/company/pinnacle-thrive-coaching/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
