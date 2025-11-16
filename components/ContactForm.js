import { useState } from 'react';
import { validateFormData, createMailtoLink, openMailtoWithFallback } from './FormUtils';

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

  const [callbackData, setCallbackData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [showCallbackForm, setShowCallbackForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCallbackInputChange = (e) => {
    const { name, value } = e.target;
    setCallbackData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateWhatsAppMessage = (data) => {
    const fullPhoneNumber = `${data.countryCode} ${data.phone}`;
    const message = `Hi! I would like to request a callback from Pinnacle Thrive Coaching.

Name: ${data.name}
Phone: ${fullPhoneNumber}
Message: ${data.message}

Please call me back at your convenience. Thank you!`;

    return encodeURIComponent(message);
  };

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (!callbackData.name || !callbackData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const whatsappMessage = generateWhatsAppMessage(callbackData);
    const whatsappUrl = `https://wa.me/919845106272?text=${whatsappMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Reset form
    setCallbackData({
      name: '',
      countryCode: '+91',
      phone: '',
      message: ''
    });
    setShowCallbackForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Clear previous validation errors
    setValidationErrors({});

    // Validate form data
    const validationRules = {
      firstName: { required: 'First name is required' },
      lastName: { required: 'Last name is required' },
      email: { required: 'Email is required', email: true },
      message: { required: 'Message is required' }
    };

    const errors = validateFormData(formData, validationRules);

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Create email content
      const emailContent = `
New Contact Form Submission

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interest: ${formData.service}
Preferred Contact: ${formData.preferredContact}
Timezone: ${formData.timezone}
Urgency: ${formData.urgency}
Message: ${formData.message}

---
This message was submitted through the PTC website.
      `;

      // Create mailto link with fallback
      const subject = 'Contact Form - ' + formData.firstName + ' ' + formData.lastName;
      const mailtoLink = createMailtoLink('ask@ptc4u.com', subject, emailContent);

      // Open email client with fallback
      openMailtoWithFallback(mailtoLink, emailContent);

      // Set success status
      setSubmitStatus('success');

      // Reset form
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
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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

  const countryCodes = [
    { value: '+91', label: '+91 (India)' },
    { value: '+1', label: '+1 (USA/Canada)' },
    { value: '+44', label: '+44 (UK)' },
    { value: '+61', label: '+61 (Australia)' },
    { value: '+49', label: '+49 (Germany)' },
    { value: '+33', label: '+33 (France)' },
    { value: '+81', label: '+81 (Japan)' },
    { value: '+86', label: '+86 (China)' },
    { value: '+55', label: '+55 (Brazil)' },
    { value: '+7', label: '+7 (Russia)' },
    { value: '+971', label: '+971 (UAE)' },
    { value: '+966', label: '+966 (Saudi Arabia)' },
    { value: '+65', label: '+65 (Singapore)' },
    { value: '+60', label: '+60 (Malaysia)' },
    { value: '+66', label: '+66 (Thailand)' },
    { value: '+63', label: '+63 (Philippines)' },
    { value: '+84', label: '+84 (Vietnam)' },
    { value: '+62', label: '+62 (Indonesia)' },
    { value: '+880', label: '+880 (Bangladesh)' },
    { value: '+92', label: '+92 (Pakistan)' },
    { value: '+94', label: '+94 (Sri Lanka)' },
    { value: '+977', label: '+977 (Nepal)' },
    { value: '+975', label: '+975 (Bhutan)' },
    { value: '+960', label: '+960 (Maldives)' }
  ];



  if (submitStatus === 'success') {
  return (
    <section className="section bg-gradient-to-br from-emerald-50 via-white to-purple-50 rounded-2xl" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-emerald-200/50">
            <div className="text-4xl sm:text-6xl mb-6">✓</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-lg text-black mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours
              to schedule your free discovery call and discuss how we can help you reach your goals.
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors button-text-white"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (submitStatus === 'error') {
  return (
    <section className="section bg-gradient-to-br from-emerald-50 via-white to-purple-50 rounded-2xl" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-red-200/50">
            <div className="text-4xl sm:text-6xl mb-6">✗</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Submission Error</h2>
            <p className="text-lg text-black mb-8">
              There was an error submitting your request. Please check your information and try again, or contact us directly.
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors button-text-white"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section card" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-700 mb-4">
            Start Your <span className="text-blue-700">Transformation</span> Today
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${
                    validationErrors.firstName ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Your first name"
                />
                {validationErrors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.firstName}</p>
                )}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${
                    validationErrors.lastName ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="Your last name"
                />
                {validationErrors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.lastName}</p>
                )}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${
                    validationErrors.email ? 'border-red-500' : 'border-slate-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                )}
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
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors ${
                  validationErrors.message ? 'border-red-500' : 'border-slate-300'
                }`}
                placeholder="Describe what you're looking to achieve and any challenges you're facing..."
              />
              {validationErrors.message && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.message}</p>
              )}
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
                className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed button-text-white"
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

            {!showCallbackForm ? (
              <button
                onClick={() => setShowCallbackForm(true)}
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 button-text-white"
              >
                Request Call Back
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            ) : (
              <div className="max-w-md mx-auto">
                <form onSubmit={handleCallbackSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="callbackName" className="block text-sm font-medium text-black mb-2 text-left">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="callbackName"
                      name="name"
                      value={callbackData.name}
                      onChange={handleCallbackInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="callbackPhone" className="block text-sm font-medium text-black mb-2 text-left">
                      Phone Number *
                    </label>
                    <div className="flex space-x-2">
                      <select
                        name="countryCode"
                        value={callbackData.countryCode}
                        onChange={handleCallbackInputChange}
                        className="px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white min-w-[120px]"
                      >
                        {countryCodes.map((code) => (
                          <option key={code.value} value={code.value}>
                            {code.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        id="callbackPhone"
                        name="phone"
                        value={callbackData.phone}
                        onChange={handleCallbackInputChange}
                        required
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="callbackMessage" className="block text-sm font-medium text-black mb-2 text-left">
                      Message (Optional)
                    </label>
                    <textarea
                      id="callbackMessage"
                      name="message"
                      value={callbackData.message}
                      onChange={handleCallbackInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Tell us briefly what you'd like to discuss..."
                    />
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 button-text-white"
                    >
                      Send via WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCallbackForm(false)}
                      className="px-6 py-3 border border-slate-300 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <p className="text-sm text-black mt-4">
              Or call us directly: <a href="tel:+919845106272" className="text-black hover:text-black font-semibold">+91 98451 06272</a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
