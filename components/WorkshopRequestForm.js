import { useState } from 'react';
import { createMailtoLink, openMailtoWithFallback } from './FormUtils';

/**
 * Workshop Request Form component for Pinnacle Thrive Coaching.
 * 
 * This component provides a form for corporates/individuals requesting 
 * a one-time or short-term workshop.
 */
export default function WorkshopRequestForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    workshopType: '',
    customTheme: '',
    preferredMode: '',
    tentativeDates: '',
    numberOfParticipants: '',
    keyObjective: '',
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
    console.log('Workshop form submission started');

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.organization || !formData.workshopType) {
      console.log('Form validation failed');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Form validation passed, creating email content');
      // Create email content
      const emailContent = `
New Workshop Request

Full Name: ${formData.fullName}
Organization/Institution: ${formData.organization}
Email: ${formData.email}
Phone: ${formData.phone}
Workshop Type: ${formData.workshopType}${formData.customTheme ? ` (Custom: ${formData.customTheme})` : ''}
Preferred Mode: ${formData.preferredMode}
Tentative Dates: ${formData.tentativeDates}
Number of Participants: ${formData.numberOfParticipants}
Key Objective/Focus Area: ${formData.keyObjective}
Additional Notes: ${formData.additionalNotes}

---
This request was submitted through the PTC website.
      `;

      // Create mailto link with improved fallback
      const subject = 'Workshop Request - ' + formData.fullName;
      const mailtoLink = createMailtoLink('ask@ptc4u.com', subject, emailContent);
      
      // Open email client with fallback
      openMailtoWithFallback(mailtoLink, emailContent);
      
      // Set success status immediately
      setSubmitStatus('success');
      console.log('Form submitted successfully');
      
      // Reset form
      setFormData({
        fullName: '',
        organization: '',
        email: '',
        phone: '',
        workshopType: '',
        customTheme: '',
        preferredMode: '',
        tentativeDates: '',
        numberOfParticipants: '',
        keyObjective: '',
        additionalNotes: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const workshopTypes = [
    { value: '', label: 'Select workshop type' },
    { value: 'leadership-growth', label: 'Leadership Growth' },
    { value: 'career-transition', label: 'Career Transition & Reinvention' },
    { value: 'team-collaboration', label: 'Team Collaboration & Communication' },
    { value: 'custom', label: 'Custom Theme' }
  ];

  const preferredModes = [
    { value: '', label: 'Select preferred mode' },
    { value: 'in-person', label: 'In-person' },
    { value: 'virtual', label: 'Virtual' },
    { value: 'hybrid', label: 'Hybrid' }
  ];

  if (submitStatus === 'success') {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-200/50 text-center">
        <div className="text-6xl mb-6"></div>
        <h2 className="text-3xl font-bold text-black mb-4">Request Submitted!</h2>
        <p className="text-lg text-black mb-8">
          Your workshop request has been sent to our team. We'll connect with you within 48 hours 
          to design a workshop tailored to your needs.
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
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-200/50">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-4">
          Request a <span className="text-black">Coaching Workshop</span>
        </h2>
        <p className="text-lg text-black">
          For corporates/individuals requesting a one-time or short-term workshop.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-black mb-2">
              Organization / Institution *
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="Your organization name"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
              Email *
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
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Workshop Type */}
        <div>
          <label htmlFor="workshopType" className="block text-sm font-medium text-black mb-2">
            Workshop Type *
          </label>
          <select
            id="workshopType"
            name="workshopType"
            value={formData.workshopType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
          >
            {workshopTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Custom Theme Input */}
        {formData.workshopType === 'custom' && (
          <div>
            <label htmlFor="customTheme" className="block text-sm font-medium text-black mb-2">
              Custom Theme *
            </label>
            <input
              type="text"
              id="customTheme"
              name="customTheme"
              value={formData.customTheme}
              onChange={handleInputChange}
              required={formData.workshopType === 'custom'}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="Please specify your custom theme"
            />
          </div>
        )}

        {/* Preferred Mode */}
        <div>
          <label htmlFor="preferredMode" className="block text-sm font-medium text-black mb-2">
            Preferred Mode *
          </label>
          <select
            id="preferredMode"
            name="preferredMode"
            value={formData.preferredMode}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
          >
            {preferredModes.map((mode) => (
              <option key={mode.value} value={mode.value}>
                {mode.label}
              </option>
            ))}
          </select>
        </div>

        {/* Workshop Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="tentativeDates" className="block text-sm font-medium text-black mb-2">
              Tentative Dates *
            </label>
            <input
              type="text"
              id="tentativeDates"
              name="tentativeDates"
              value={formData.tentativeDates}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="e.g., March 15-17, 2024"
            />
          </div>
          <div>
            <label htmlFor="numberOfParticipants" className="block text-sm font-medium text-black mb-2">
              Number of Participants *
            </label>
            <input
              type="text"
              id="numberOfParticipants"
              name="numberOfParticipants"
              value={formData.numberOfParticipants}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="e.g., 25-30 participants"
            />
          </div>
        </div>

        {/* Key Objective */}
        <div>
          <label htmlFor="keyObjective" className="block text-sm font-medium text-black mb-2">
            Key Objective / Focus Area *
          </label>
          <textarea
            id="keyObjective"
            name="keyObjective"
            value={formData.keyObjective}
            onChange={handleInputChange}
            required
            rows={3}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            placeholder="Describe the main objectives and focus areas for this workshop..."
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
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            placeholder="Any additional information or special requirements..."
          />
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
                Submitting...
              </span>
            ) : (
              'Submit Workshop Request'
            )}
          </button>
        </div>

        {/* CTA Message */}
        <div className="text-center mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-black font-medium">
            Submit your request and our team will connect with you within 48 hours to design a workshop tailored to your needs.
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
