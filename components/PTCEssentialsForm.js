import { useState } from 'react';
import { createMailtoLink, openMailtoWithFallback } from './FormUtils';

/**
 * PTC Essentials Signup Form component for Pinnacle Thrive Coaching.
 *
 * This component provides a form for signing up for the 6-session coaching program.
 */
export default function PTCEssentialsForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentRole: '',
    company: '',
    experience: '',
    timezone: '',
    preferredSchedule: '',
    goals: '',
    challenges: '',
    expectations: '',
    commitment: '',
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
New PTC Essentials Signup Request

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Current Role: ${formData.currentRole}
Company: ${formData.company}
Years of Experience: ${formData.experience}
Timezone: ${formData.timezone}
Preferred Schedule: ${formData.preferredSchedule}
Goals: ${formData.goals}
Current Challenges: ${formData.challenges}
Program Expectations: ${formData.expectations}
Commitment Level: ${formData.commitment}
How did you hear about us: ${formData.howHeard}
Additional Notes: ${formData.additionalNotes}

---
This request was submitted through the PTC website.
      `;

      // Create mailto link with improved fallback
      const subject = 'PTC Essentials Signup - ' + formData.fullName;
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
        experience: '',
        timezone: '',
        preferredSchedule: '',
        goals: '',
        challenges: '',
        expectations: '',
        commitment: '',
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

  const experienceLevels = [
    { value: '', label: 'Select your experience level' },
    { value: 'entry', label: 'Entry Level (0-2 years)' },
    { value: 'mid', label: 'Mid Level (3-7 years)' },
    { value: 'senior', label: 'Senior Level (8-15 years)' },
    { value: 'executive', label: 'Executive Level (15+ years)' }
  ];

  const scheduleOptions = [
    { value: '', label: 'Select preferred schedule' },
    { value: 'weekday-morning', label: 'Weekday Mornings (9 AM - 12 PM)' },
    { value: 'weekday-afternoon', label: 'Weekday Afternoons (12 PM - 5 PM)' },
    { value: 'weekday-evening', label: 'Weekday Evenings (5 PM - 8 PM)' },
    { value: 'weekend', label: 'Weekends' },
    { value: 'flexible', label: 'Flexible - any time works' }
  ];

  const commitmentLevels = [
    { value: '', label: 'Select your commitment level' },
    { value: 'high', label: 'High - Ready to fully commit to the process' },
    { value: 'medium', label: 'Medium - Committed but need flexibility' },
    { value: 'exploring', label: 'Exploring - Want to understand expectations first' }
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
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-200/50 text-center">
        <div className="text-6xl mb-6"></div>
        <h2 className="text-3xl font-bold text-black mb-4">PTC Essentials Signup Submitted!</h2>
        <p className="text-lg text-black mb-8">
          Your PTC Essentials signup request has been sent to our team. We'll contact you within 24 hours
          to discuss your 6-session coaching program and get you started on your transformation journey.
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
          PTC <span className="text-black">Essentials</span> Signup
        </h2>
        <p className="text-base sm:text-lg text-black">
          Focused, impactful, and results-driven—six powerful sessions to help you reflect, reboot, and reinvent your career path.
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

        {/* Experience and Scheduling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-black mb-2">
              Years of Experience *
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              {experienceLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="preferredSchedule" className="block text-sm font-medium text-black mb-2">
              Preferred Schedule *
            </label>
            <select
              id="preferredSchedule"
              name="preferredSchedule"
              value={formData.preferredSchedule}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              {scheduleOptions.map((option) => (
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
            What are your main career goals for this program? *
          </label>
          <textarea
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            placeholder="Describe what you hope to achieve through the 6-session PTC Essentials program..."
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
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            placeholder="Tell us about the obstacles or difficulties you're experiencing in your career..."
          />
        </div>

        {/* Program Expectations */}
        <div>
          <label htmlFor="expectations" className="block text-sm font-medium text-black mb-2">
            What are your expectations from this coaching program? *
          </label>
          <textarea
            id="expectations"
            name="expectations"
            value={formData.expectations}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            placeholder="What do you hope to gain from the 6-session coaching experience?"
          />
        </div>

        {/* Commitment and Referral */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="commitment" className="block text-sm font-medium text-black mb-2">
              Commitment Level *
            </label>
            <select
              id="commitment"
              name="commitment"
              value={formData.commitment}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              {commitmentLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
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
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            placeholder="Anything else you'd like us to know before starting your PTC Essentials journey..."
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
              'Sign Up for PTC Essentials'
            )}
          </button>
        </div>

        {/* CTA Message */}
        <div className="text-center mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-black font-medium">
            Focused, impactful, and results-driven—six powerful sessions to help you reflect, reboot, and reinvent your career path.
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
