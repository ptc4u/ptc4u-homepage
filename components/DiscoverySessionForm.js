import { useState } from 'react';
import { createMailtoLink, openMailtoWithFallback } from './FormUtils';

/**
 * Discovery Session Request Form component for Pinnacle Thrive Coaching.
 *
 * This component provides a form for booking a free 30-minute discovery session.
 */
export default function DiscoverySessionForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentRole: '',
    company: '',
    timezone: '',
    preferredTime: '',
    goals: '',
    challenges: '',
    howHeard: '',
    additionalNotes: ''
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

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create email content
      const emailContent = `
New Discovery Session Request

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Current Role: ${formData.currentRole}
Company: ${formData.company}
Timezone: ${formData.timezone}
Preferred Time: ${formData.preferredTime}
Goals: ${formData.goals}
Current Challenges: ${formData.challenges}
How did you hear about us: ${formData.howHeard}
Additional Notes: ${formData.additionalNotes}

---
This request was submitted through the PTC website.
      `;

      // Create mailto link with improved fallback
      const subject = 'Discovery Session Request - ' + formData.fullName;
      const mailtoLink = createMailtoLink('ask@ptc4u.com', subject, emailContent);

      // Open email client with fallback
      openMailtoWithFallback(mailtoLink, emailContent);

      // Set success status
      setSubmitStatus('success');

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        currentRole: '',
        company: '',
        timezone: '',
        preferredTime: '',
        goals: '',
        challenges: '',
        howHeard: '',
        additionalNotes: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    { value: '', label: 'Select preferred time' },
    { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
    { value: 'evening', label: 'Evening (5 PM - 8 PM)' },
    { value: 'flexible', label: 'Flexible - any time works' }
  ];

  const howHeardOptions = [
    { value: '', label: 'How did you hear about us?' },
    { value: 'website', label: 'PTC Website' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'referral', label: 'Referral from friend/colleague' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'search', label: 'Google Search' },
    { value: 'other', label: 'Other' }
  ];

  if (submitStatus === 'success') {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200/50 text-center">
        <div className="text-6xl mb-6"></div>
        <h2 className="text-3xl font-bold text-black mb-4">Discovery Session Requested!</h2>
        <p className="text-lg text-black mb-8">
          Your discovery session request has been sent to our team. We'll contact you within 24 hours
          to schedule your free 30-minute consultation.
        </p>
        <button
          onClick={() => setSubmitStatus(null)}
          className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors button-text-white"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  if (submitStatus === 'error') {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-200/50 text-center">
        <div className="text-6xl mb-6">❌</div>
        <h2 className="text-3xl font-bold text-black mb-4">Submission Error</h2>
        <p className="text-lg text-black mb-8">
          There was an error submitting your request. Please try again or contact us directly.
        </p>
        <button
          onClick={() => setSubmitStatus(null)}
          className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-colors button-text-white"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-blue-200/50">
      <div className="text-center mb-6 sm:mb-8">
        <div className="text-4xl sm:text-6xl mb-4"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
          Book Your <span className="text-black">Discovery Session</span>
        </h2>
        <p className="text-base sm:text-lg text-black">
          Free 30-minute consultation to discover how coaching can unlock clarity, growth, and direction for your career.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Your full name"
            />
          </div>
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
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="timezone" className="block text-sm font-medium text-black mb-2">
              Your Timezone *
            </label>
            <input
              type="text"
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="e.g., EST, PST, GMT+5:30"
            />
          </div>
        </div>

        {/* Professional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="currentRole" className="block text-sm font-medium text-black mb-2">
              Current Role *
            </label>
            <input
              type="text"
              id="currentRole"
              name="currentRole"
              value={formData.currentRole}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="e.g., Software Engineer, Manager, Director"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Your company name"
            />
          </div>
        </div>

        {/* Scheduling Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="preferredTime" className="block text-sm font-medium text-black mb-2">
              Preferred Time *
            </label>
            <select
              id="preferredTime"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              {timeSlots.map((slot) => (
                <option key={slot.value} value={slot.value}>
                  {slot.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="howHeard" className="block text-sm font-medium text-black mb-2">
              How did you hear about us? *
            </label>
            <select
              id="howHeard"
              name="howHeard"
              value={formData.howHeard}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              {howHeardOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Goals and Challenges */}
        <div>
          <label htmlFor="goals" className="block text-sm font-medium text-black mb-2">
            What are your main career goals? *
          </label>
          <textarea
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Describe your career aspirations and what you hope to achieve..."
          />
        </div>

        <div>
          <label htmlFor="challenges" className="block text-sm font-medium text-black mb-2">
            What challenges are you currently facing? *
          </label>
          <textarea
            id="challenges"
            name="challenges"
            value={formData.challenges}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Tell us about the obstacles or difficulties you're experiencing in your career..."
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="additionalNotes" className="block text-sm font-medium text-black mb-2">
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="Anything else you'd like us to know before our discovery session..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed button-text-white"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Book Discovery Session'
            )}
          </button>
        </div>

        {/* CTA Message */}
        <div className="text-center mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-black font-medium">
            Take the first step—discover how coaching can unlock clarity, growth, and direction for your career in just 30 minutes.
          </p>
        </div>

        {/* Privacy Notice */}
        <p className="text-sm text-black text-center">
          By submitting this form, you agree to receive communications from Pinnacle Thrive Coaching.
          We respect your privacy and will never share your information with third parties.
        </p>
      </form>
    </div>
  );
}
