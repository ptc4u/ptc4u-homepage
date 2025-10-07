import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import DiscoverySessionForm from '../components/DiscoverySessionForm';
import PTCEssentialsForm from '../components/PTCEssentialsForm';
import UniversalHomeIcon from '../components/UniversalHomeIcon';

/**
 * Minimalist PTC Homepage
 * 
 * A clean, modern, and responsive design that works seamlessly across all devices.
 * Features tiled content layout with simple navigation.
 */
export default function MinimalistHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Pinnacle Thrive Coaching - Transform Your Life</title>
        <meta name="description" content="Professional life coaching services to help you achieve your goals and transform your life." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Universal Home Icon */}
        <UniversalHomeIcon />
        
        {/* Navigation - Enhanced with Creative Design */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-purple-50/30 to-white backdrop-blur-lg shadow-xl border-b border-purple-100/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo - Enhanced with Real PTC Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-4 group">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 border border-purple-100">
                      <img 
                        src="/rndPTClogo.png" 
                        alt="PTC Logo" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-tan-pearl text-2xl font-semibold bg-gradient-to-r from-purple-800 via-purple-700 to-purple-800 bg-clip-text text-transparent drop-shadow-sm">
                      Pinnacle
                    </span>
                    <span className="text-lg font-semibold text-black drop-shadow-sm">Thrive Coaching</span>
                    <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Reflect. Reboot. Reinvent
                    </span>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation - Enhanced */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="#about" className="text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-all duration-300 font-medium">About</Link>
                <Link href="/journey" className="text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-all duration-300 font-medium">Services</Link>
                <Link href="#testimonials" className="text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-all duration-300 font-medium">Testimonials</Link>
                <Link href="#contact" className="text-gray-700 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-all duration-300 font-medium">Contact</Link>
                <Link href="/" className="text-gray-700 hover:text-purple-600 p-2 rounded-lg hover:bg-purple-50 transition-all duration-300 font-medium" title="Go to Homepage">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </Link>
                <Link href="#contact" className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold shadow-md">
                  Start Your Journey
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu - Enhanced */}
          {isMenuOpen && (
            <div className="md:hidden bg-gradient-to-br from-white via-purple-50/20 to-white border-t border-purple-100/50 backdrop-blur-lg">
              <div className="px-4 py-6 space-y-4">
                <Link href="/" className="block text-gray-700 hover:text-purple-600 px-4 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-medium flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                <Link href="#about" className="block text-gray-700 hover:text-purple-600 px-4 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-medium">About</Link>
                <Link href="/journey" className="block text-gray-700 hover:text-purple-600 px-4 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-medium">Services</Link>
                <Link href="#testimonials" className="block text-gray-700 hover:text-purple-600 px-4 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-medium">Testimonials</Link>
                <Link href="#contact" className="block text-gray-700 hover:text-purple-600 px-4 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-medium">Contact</Link>
                <Link href="#contact" className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl text-center font-semibold shadow-lg">
                  Start Your Journey
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section - Enhanced */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform Your Life with
                <span className="block bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent drop-shadow-sm">
                  Expert Coaching
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Unlock your potential and achieve your goals with personalized coaching sessions 
                designed to help you thrive in every aspect of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="#contact" className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold shadow-lg overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Start Your Journey</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="#about" className="border-2 border-purple-200 text-gray-700 px-8 py-4 rounded-2xl hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 font-medium shadow-sm hover:shadow-md">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive coaching solutions tailored to your unique needs and goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* PTC Essentials - Real Service */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50 hover:border-purple-200/80 group">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">PTC Essentials</h3>
                <p className="text-gray-600 mb-4">
                  Transform your life and career with our foundational 6-session coaching program designed for sustainable growth.
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li>• 6 focused coaching sessions</li>
                  <li>• Personal goal setting and achievement</li>
                  <li>• Work-life balance strategies</li>
                  <li>• Habit formation and behavior change</li>
                  <li>• Stress management and wellness</li>
                </ul>
                <Link href="#contact" className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* PTC Pro - Real Service */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50 hover:border-purple-200/80 group">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">PTC Pro</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive 10-session coaching program for deep transformation and lasting change in all areas of life.
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  <li>• 10 comprehensive coaching sessions</li>
                  <li>• Advanced leadership development</li>
                  <li>• Strategic career planning</li>
                  <li>• Complete life transformation</li>
                  <li>• Ongoing support and accountability</li>
                </ul>
                <Link href="#contact" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn More 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Real Content */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Pinnacle Thrive Coaching</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Led by Sairam Bollapragada, a seasoned professional with over 20 years of experience in IT services delivery, 
                  Pinnacle Thrive Coaching specializes in helping individuals and teams achieve breakthrough results through 
                  our proven 3R methodology: Reflect, Reboot, and Reinvent.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our coaching approach combines practical business experience with cutting-edge coaching methodologies 
                  to deliver transformative results in career development, leadership growth, and work-life balance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contact" className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold">
                    Start Your Journey
                  </Link>
                  <Link href="#testimonials" className="border-2 border-purple-200 text-gray-700 px-6 py-3 rounded-xl hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 font-medium">
                    Read Success Stories
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden">
                  <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white font-bold text-2xl">PTC</span>
                      </div>
                      <p className="text-gray-600 font-medium">Professional Coaching Services</p>
                      <p className="text-sm text-gray-500 mt-2">Reflect. Reboot. Reinvent.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Real Client Stories */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">
                Real stories from professionals who have transformed their lives with our coaching.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Real Testimonial 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">PL</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Practice Leader</h4>
                    <p className="text-gray-600">Healthcare</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "I reached out to Sairam at the lowest point of my professional journey, struggling to keep my practice afloat. His coaching helped me rediscover my strengths and identify fresh opportunities. By reskilling and shifting my mindset, I found myself on a renewed growth trajectory and leading my team with confidence again."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">Career Transformation</span>
                </div>
              </div>

              {/* Real Testimonial 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">DL</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Delivery Leader</h4>
                    <p className="text-gray-600">IT Services</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Managing work as a delivery leader, while caring for my family as a mother and daughter, felt overwhelming. With Sairam's coaching, I learned practical strategies for balancing my roles and mastering time management. His empathetic approach empowered me to bring structure to my days, feel more present at home, and become more effective at work."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">Work-Life Balance</span>
                </div>
              </div>

              {/* Real Testimonial 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">PM</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Product Manager</h4>
                    <p className="text-gray-600">Multinational Corporation</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Sairam, as my coach, played a crucial role in my understanding of myself and the true purpose of a coach. A few months ago, I was lost and uncertain, but I decided to try coaching with Sairam. He provided me with 6 sessions that were around 45 minutes each. He is an excellent listener, and his unique coaching methods were highly effective for me."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">Personal Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Real Contact Info */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Life?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Start your journey with a free discovery session. Book your 30-minute consultation today.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">ask@ptc4u.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">+91 98451 06272</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Free Discovery Session</p>
                      <p className="text-gray-600">30-minute consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Book Your Free Discovery Session</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">What to Expect:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Personal goal assessment</li>
                      <li>• Challenge identification</li>
                      <li>• Coaching approach discussion</li>
                      <li>• No obligation consultation</li>
                    </ul>
                  </div>
                  <Link 
                    href="https://wa.me/919845106272" 
                    target="_blank"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-center block"
                  >
                    Book via WhatsApp
                  </Link>
                  <Link 
                    href="mailto:ask@ptc4u.com" 
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-center block"
                  >
                    Send Email
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Real Information */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md border border-purple-200">
                    <img 
                      src="/rndPTClogo.png" 
                      alt="PTC Logo" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-tan-pearl text-xl font-semibold text-purple-800">Pinnacle</span>
                    <span className="text-base font-semibold text-white">Thrive Coaching</span>
                    <span className="text-sm font-semibold text-purple-300">Reflect. Reboot. Reinvent</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  Transform your life and career with our proven 3R methodology: Reflect, Reboot, and Reinvent.
                </p>
                <p className="text-sm text-gray-500">
                  Led by Sairam Bollapragada, a seasoned professional with over 20 years of experience.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link href="#about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
                  <Link href="/journey" className="block text-gray-400 hover:text-white transition-colors">Services</Link>
                  <Link href="#testimonials" className="block text-gray-400 hover:text-white transition-colors">Testimonials</Link>
                  <Link href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Contact Info</h3>
                <div className="space-y-2 text-gray-400">
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    ask@ptc4u.com
                  </p>
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 98451 06272
                  </p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Pinnacle Thrive Coaching. All rights reserved.</p>
              <p className="text-sm mt-2">Reflect. Reboot. Reinvent.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
