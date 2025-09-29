import { useState } from 'react';
import { createMailtoLink, openMailtoWithFallback } from './FormUtils';

/**
 * Long-term Partnership Request Form component for Pinnacle Thrive Coaching.
 * 
 * This component provides a form for organizations seeking an ongoing 
 * coaching engagement (6-12 months+).
 */
export default function PartnershipRequestForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    designation: '',
    email: '',
    phone: '',
    partnershipTypes: [],
    expectedDuration: '',
    customDuration: '',
    numberOfParticipants: '',
    goalsOfPartnership: '',
    preferredMode: '',
    budgetRange: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        partnershipTypes: checked 
          ? [...prev.partnershipTypes, value]
          : prev.partnershipTypes.filter(type => type !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.organization || formData.partnershipTypes.length === 0) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create email content
      const emailContent = `
New Long-term Partnership Request

Full Name: ${formData.fullName}
Organization: ${formData.organization}
Designation: ${formData.designation}
Email: ${formData.email}
Phone: ${formData.phone}
Type of Partnership: ${formData.partnershipTypes.join(', ')}
Expected Duration: ${formData.expectedDuration}${formData.customDuration ? ` (${formData.customDuration})` : ''}
Number of Participants/Teams: ${formData.numberOfParticipants}
Goals of Partnership: ${formData.goalsOfPartnership}
Preferred Mode: ${formData.preferredMode}
Budget Range: ${formData.budgetRange || 'Not specified'}
Additional Notes: ${formData.additionalNotes}

---
This request was submitted through the PTC website.
      `;

      // Create mailto link with improved fallback
      const subject = 'Long-term Partnership Request - ' + formData.fullName;
      const mailtoLink = createMailtoLink('ask@ptc4u.com', subject, emailContent);
      
      // Open email client with fallback
      openMailtoWithFallback(mailtoLink, emailContent);
      
      // Set success status
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        fullName: '',
        organization: '',
        designation: '',
        email: '',
        phone: '',
        partnershipTypes: [],
        expectedDuration: '',
        customDuration: '',
        numberOfParticipants: '',
        goalsOfPartnership: '',
        preferredMode: '',
        budgetRange: '',
        additionalNotes: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const partnershipTypes = [
    { value: 'executive-coaching', label: 'Executive Coaching (1:1)' },
    { value: 'leadership-team-coaching', label: 'Leadership Team Coaching' },
    { value: 'career-transition-programs', label: 'Career Transition Programs' },
    { value: 'ongoing-training', label: 'Ongoing Faculty/Corporate Training' }
  ];

  const expectedDurations = [
    { value: '', label: 'Select expected duration' },
    { value: '6-months', label: '6 months' },
    { value: '12-months', label: '12 months' },
    { value: 'other', label: 'Other' }
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
        <h2 className="text-3xl font-bold text-black mb-4">Partnership Request Submitted!</h2>
        <p className="text-lg text-black mb-8">
          Your partnership request has been sent to our team. We'll reach out with a tailored proposal 
          to co-create a long-term coaching journey that drives transformation.
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
          Request a <span className="text-black">Long-Term Coaching Partnership</span>
        </h2>
        <p className="text-lg text-black">
          For organizations seeking an ongoing coaching engagement (6-12 months+).
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
              Organization *
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

        {/* Professional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="designation" className="block text-sm font-medium text-black mb-2">
              Designation *
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="Your job title/designation"
            />
          </div>
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
        </div>

        {/* Contact Information */}
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

        {/* Partnership Types */}
        <div>
          <label className="block text-sm font-medium text-black mb-3">
            Type of Partnership (select all that apply) *
          </label>
          <div className="space-y-3">
            {partnershipTypes.map((type) => (
              <label key={type.value} className="flex items-center">
                <input
                  type="checkbox"
                  name="partnershipTypes"
                  value={type.value}
                  checked={formData.partnershipTypes.includes(type.value)}
                  onChange={handleInputChange}
                  className="mr-3 text-purple-500 focus:ring-purple-500"
                />
                <span className="text-black">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Expected Duration */}
        <div>
          <label htmlFor="expectedDuration" className="block text-sm font-medium text-black mb-2">
            Expected Duration *
          </label>
          <select
            id="expectedDuration"
            name="expectedDuration"
            value={formData.expectedDuration}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
          >
            {expectedDurations.map((duration) => (
              <option key={duration.value} value={duration.value}>
                {duration.label}
              </option>
            ))}
          </select>
        </div>

        {/* Custom Duration Input */}
        {formData.expectedDuration === 'other' && (
          <div>
            <label htmlFor="customDuration" className="block text-sm font-medium text-black mb-2">
              Please specify duration *
            </label>
            <input
              type="text"
              id="customDuration"
              name="customDuration"
              value={formData.customDuration}
              onChange={handleInputChange}
              required={formData.expectedDuration === 'other'}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="e.g., 18 months, 2 years"
            />
          </div>
        )}

        {/* Partnership Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="numberOfParticipants" className="block text-sm font-medium text-black mb-2">
              Number of Participants / Teams *
            </label>
            <input
              type="text"
              id="numberOfParticipants"
              name="numberOfParticipants"
              value={formData.numberOfParticipants}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              placeholder="e.g., 15 executives, 3 teams"
            />
          </div>
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
        </div>

        {/* Goals of Partnership */}
        <div>
          <label htmlFor="goalsOfPartnership" className="block text-sm font-medium text-black mb-2">
            Goals of Partnership *
          </label>
          <textarea
            id="goalsOfPartnership"
            name="goalsOfPartnership"
            value={formData.goalsOfPartnership}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            placeholder="Describe the main goals and objectives for this long-term partnership..."
          />
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="budgetRange" className="block text-sm font-medium text-black mb-2">
            Budget Range (Optional)
          </label>
          <input
            type="text"
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            placeholder="e.g., $50,000 - $100,000 annually"
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
              'Submit Partnership Request'
            )}
          </button>
        </div>

        {/* CTA Message */}
        <div className="text-center mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-black font-medium">
            Let's co-create a long-term coaching journey that drives transformation. Submit this form, 
            and we'll reach out with a tailored proposal.
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
