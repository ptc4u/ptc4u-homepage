import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/**
 * Journey Form section component for Pinnacle Thrive Coaching.
 *
 * Features 4 main options for users to start their transformation journey.
 */
export default function JourneyFormSection() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({});
  const router = useRouter();

  // Handle URL parameters and events from QuickActionsSection
  useEffect(() => {
    // Check for URL parameter first
    if (router.query.option) {
      setSelectedOption(router.query.option);
    }

    // Listen for events from QuickActionsSection (fallback)
    const handleJourneyOption = (event) => {
      setSelectedOption(event.detail);
    };

    window.addEventListener('selectJourneyOption', handleJourneyOption);
    return () => {
      window.removeEventListener('selectJourneyOption', handleJourneyOption);
    };
  }, [router.query.option]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { option: selectedOption, data: formData });
    alert('Thank you! We will contact you soon to discuss your journey.');
  };

  const renderForm = () => {
    switch (selectedOption) {
      case 'discovery':
        return (
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200/50">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">
              Book Your <span className="text-black">Discovery Session</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Phone Contact # *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Email ID *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">Time Zone *</label>
                  <select
                    name="timezone"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select Time Zone</option>
                    <option value="IST">IST (India)</option>
                    <option value="EST">EST (US East Coast)</option>
                    <option value="PST">PST (US West Coast)</option>
                    <option value="GMT">GMT (UK)</option>
                    <option value="CET">CET (Central Europe)</option>
                    <option value="JST">JST (Japan)</option>
                    <option value="AEST">AEST (Australia)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">WhatsApp Contact #</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">One Line Problem Statement *</label>
                <input
                  type="text"
                  name="problemStatement"
                  required
                  onChange={handleInputChange}
                  placeholder="e.g., Career plateau, Leadership challenges, Work-life balance"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Profession *</label>
                <input
                  type="text"
                  name="profession"
                  required
                  onChange={handleInputChange}
                  placeholder="e.g., Software Engineer, Manager, Entrepreneur"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Tell us about your goals and challenges *</label>
                <textarea
                  name="goalsChallenges"
                  required
                  rows="4"
                  onChange={handleInputChange}
                  placeholder="Describe your current situation, what you want to achieve, and any specific challenges you're facing..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Requested Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  required
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-3 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Discovery Session
              </button>
            </form>
          </div>
        );

      case 'transformation':
        return (
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200/50">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">
              Sign Up for <span className="text-white">My Transformation Journey</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Contact # *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email ID *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Time Zone *</label>
                  <select
                    name="timezone"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select Time Zone</option>
                    <option value="IST">IST (India)</option>
                    <option value="EST">EST (US East Coast)</option>
                    <option value="PST">PST (US West Coast)</option>
                    <option value="GMT">GMT (UK)</option>
                    <option value="CET">CET (Central Europe)</option>
                    <option value="JST">JST (Japan)</option>
                    <option value="AEST">AEST (Australia)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">WhatsApp Contact #</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">One Line Problem Statement *</label>
                <input
                  type="text"
                  name="problemStatement"
                  required
                  onChange={handleInputChange}
                  placeholder="e.g., Career plateau, Leadership challenges, Work-life balance"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Profession *</label>
                <input
                  type="text"
                  name="profession"
                  required
                  onChange={handleInputChange}
                  placeholder="e.g., Software Engineer, Manager, Entrepreneur"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Tell us about your goals and challenges *</label>
                <textarea
                  name="goalsChallenges"
                  required
                  rows="4"
                  onChange={handleInputChange}
                  placeholder="Describe your current situation, what you want to achieve, and any specific challenges you're facing..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Coaching Program *</label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="program"
                      value="essentials"
                      required
                      onChange={handleInputChange}
                      className="mr-3 text-black focus:ring-gray-500"
                    />
                    <span className="text-slate-700 font-medium">6-session PTC Essentials Coaching</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="program"
                      value="pro"
                      required
                      onChange={handleInputChange}
                      className="mr-3 text-black focus:ring-gray-500"
                    />
                    <span className="text-slate-700 font-medium">10-session PTC Pro Coaching</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Requested Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  required
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-3 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start My Transformation Journey
              </button>
            </form>
          </div>
        );

      case 'unsure':
        return (
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Need <span className="text-black">Clarity</span>? Let's Talk!
            </h3>
            <p className="text-center text-slate-700 mb-6">
              Book a 30-minute conversation with PTC to discover your needs and get clarity on your next steps.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Contact # *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email ID *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Time Zone *</label>
                  <select
                    name="timezone"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select Time Zone</option>
                    <option value="IST">IST (India)</option>
                    <option value="EST">EST (US East Coast)</option>
                    <option value="PST">PST (US West Coast)</option>
                    <option value="GMT">GMT (UK)</option>
                    <option value="CET">CET (Central Europe)</option>
                    <option value="JST">JST (Japan)</option>
                    <option value="AEST">AEST (Australia)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">WhatsApp Contact #</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Your Profession *</label>
                <input
                  type="text"
                  name="profession"
                  required
                  onChange={handleInputChange}
                  placeholder="e.g., Software Engineer, Manager, Entrepreneur"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Please type your clarification question *</label>
                <textarea
                  name="clarificationQuestion"
                  required
                  rows="4"
                  onChange={handleInputChange}
                  placeholder="What would you like to clarify? What are you unsure about? What would help you make a decision?"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-3 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book Clarity Conversation
              </button>
            </form>
          </div>
        );

      case 'workshop':
        return (
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Request a <span className="text-black">Workshop</span>
            </h3>
            <p className="text-center text-slate-700 mb-6">
              For academicians, corporate leaders, and team coaching workshops.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Organisation Name *</label>
                  <input
                    type="text"
                    name="organisationName"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Line of Business *</label>
                  <input
                    type="text"
                    name="lineOfBusiness"
                    required
                    onChange={handleInputChange}
                    placeholder="e.g., Technology, Healthcare, Education"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Contact # *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email ID *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Website</label>
                  <input
                    type="url"
                    name="website"
                    onChange={handleInputChange}
                    placeholder="https://example.com"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Person Representing *</label>
                  <input
                    type="text"
                    name="personRepresenting"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Designation *</label>
                  <input
                    type="text"
                    name="designation"
                    required
                    onChange={handleInputChange}
                    placeholder="e.g., HR Manager, Director, Professor"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Type of Workshop *</label>
                  <select
                    name="workshopType"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select Type</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Location *</label>
                  <input
                    type="text"
                    name="location"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Time Zone *</label>
                  <select
                    name="timezone"
                    required
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Select Time Zone</option>
                    <option value="IST">IST (India)</option>
                    <option value="EST">EST (US East Coast)</option>
                    <option value="PST">PST (US West Coast)</option>
                    <option value="GMT">GMT (UK)</option>
                    <option value="CET">CET (Central Europe)</option>
                    <option value="JST">JST (Japan)</option>
                    <option value="AEST">AEST (Australia)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">WhatsApp Contact #</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Tell us about your goals and challenges *</label>
                <textarea
                  name="goalsChallenges"
                  required
                  rows="4"
                  onChange={handleInputChange}
                  placeholder="Describe what you want to achieve through this workshop, any specific challenges your team/organization is facing..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Requested Potential Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  required
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-3 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request Workshop
              </button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-emerald-50" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Start Your <span className="text-white">Journey</span> Now!
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium">
            Choose the path that best fits your current needs and begin your transformation journey 
            with Pinnacle Thrive Coaching.
          </p>
        </div>

        {/* Journey Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <button
            onClick={() => setSelectedOption('discovery')}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedOption === 'discovery'
                ? 'border-purple-600 bg-purple-50 shadow-lg'
                : 'border-purple-200 bg-white hover:border-purple-400 hover:shadow-md'
            }`}
          >
            <h3 className="text-lg font-bold text-slate-900 mb-2">Discovery Session</h3>
            <p className="text-sm text-slate-700">Book your next discovery session to explore coaching possibilities.</p>
          </button>

          <button
            onClick={() => setSelectedOption('transformation')}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedOption === 'transformation'
                ? 'border-purple-600 bg-purple-50 shadow-lg'
                : 'border-purple-200 bg-white hover:border-purple-400 hover:shadow-md'
            }`}
          >
            <h3 className="text-lg font-bold text-white mb-2">Transformation Journey</h3>
            <p className="text-sm text-slate-700">Sign up for PTC Essentials (6 sessions) or PTC Pro (10 sessions).</p>
          </button>

          <button
            onClick={() => setSelectedOption('unsure')}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedOption === 'unsure'
                ? 'border-purple-600 bg-purple-50 shadow-lg'
                : 'border-purple-200 bg-white hover:border-purple-400 hover:shadow-md'
            }`}
          >
            <h3 className="text-lg font-bold text-slate-900 mb-2">Need Clarity?</h3>
            <p className="text-sm text-slate-700">30-minute conversation to discover your needs and get clarity.</p>
          </button>

          <button
            onClick={() => setSelectedOption('workshop')}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedOption === 'workshop'
                ? 'border-purple-600 bg-purple-50 shadow-lg'
                : 'border-purple-200 bg-white hover:border-purple-400 hover:shadow-md'
            }`}
          >
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Workshop Request</h3>
            <p className="text-sm text-slate-700">For academicians, corporate leaders, and team coaching.</p>
          </button>
        </div>

        {/* Form Display */}
        {selectedOption && (
          <div className="max-w-4xl mx-auto">
            {renderForm()}
          </div>
        )}

        {/* Back Button */}
        {selectedOption && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                setSelectedOption(null);
                setFormData({});
              }}
              className="inline-flex items-center text-black hover:text-black font-semibold transition-colors"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Choose Different Option
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
