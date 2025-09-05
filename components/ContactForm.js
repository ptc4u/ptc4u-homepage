import { useState } from 'react';

/**
 * Contact form component for Pinnacle Thrive Coaching.
 *
 * This component provides a comprehensive contact form for potential clients
 * to reach out and book coaching sessions or discovery calls.
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'email',
    timezone: '',
    urgency: 'medium'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredContact: 'email',
        timezone: '',
        urgency: 'medium'
      });
    }, 2000);
  };

  const services = [
    { value: '', label: 'Select a service' },
    { value: 'life-coaching', label: 'Life Coaching' },
    { value: 'corporate-coaching', label: 'Corporate Coaching' },
    { value: 'goal-achievement', label: 'Goal Achievement' },
    { value: 'performance-coaching', label: 'Performance Coaching' },
    { value: 'not-sure', label: 'Not sure yet - need guidance' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - Just exploring options' },
    { value: 'medium', label: 'Medium - Ready to start soon' },
    { value: 'high', label: 'High - Need immediate support' }
  ];



  if (submitStatus === 'success') {
    return (
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-purple-50" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-2xl shadow-lg border border-emerald-200/50">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-black mb-4">Thank You!</h2>
            <p className="text-lg text-black mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours
              to schedule your free discovery call and discuss how we can help you reach your goals.
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-purple-50" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            Start Your <span className="text-black">Transformation</span> Today
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Ready to break through barriers and achieve your goals? Fill out the form below
            and we'll get back to you within 24 hours to schedule your free discovery call.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-purple-200/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  placeholder="Your last name"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-black mb-2">
                Which service are you interested in? *
              </label>
                              <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                >
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-black mb-2">
                  How urgent is your need?
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                >
                  {urgencyLevels.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timezone" className="block text-sm font-medium text-black mb-2">
                  Your Timezone
                </label>
                <input
                  type="text"
                  id="timezone"
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                  placeholder="e.g., EST, PST, GMT+5:30"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Tell us about your goals and challenges *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                placeholder="Describe what you're looking to achieve and any challenges you're facing..."
              />
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-sm font-medium text-black mb-3">
                Preferred contact method
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleInputChange}
                    className="mr-2 text-black focus:ring-purple-500"
                  />
                  <span className="text-black">Email</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleInputChange}
                    className="mr-2 text-black focus:ring-purple-500"
                  />
                  <span className="text-black">Phone</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>

            {/* Privacy Notice */}
            <p className="text-sm text-black text-center">
              By submitting this form, you agree to receive communications from Pinnacle Thrive Coaching.
              We respect your privacy and will never share your information with third parties.
            </p>
          </form>
        </div>

        {/* Request Call Back Section */}
        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200/50">
            <h3 className="text-2xl font-bold text-black mb-4">
              Prefer a <span className="text-black">Call Back</span>?
            </h3>
            <p className="text-lg text-black mb-6 max-w-2xl mx-auto">
              If you'd prefer to speak with us directly, we're happy to call you back at your convenience.
            </p>
            <a
              href="tel:+919845106272"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              📞 Request Call Back
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="text-sm text-black mt-4">
              Or call us directly: <a href="tel:+919845106272" className="text-black hover:text-black font-semibold">+91 98451 06272</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
