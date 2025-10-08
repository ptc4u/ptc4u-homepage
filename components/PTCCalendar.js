import { useRouter } from 'next/router';

/**
 * Book Appointment button component
 * Professional CTA that redirects to the journey page to start the coaching process
 */
export default function PTCCalendar({ asDiv = false }) {
  const router = useRouter();

  const handleBookAppointment = () => {
    // Scroll to services section
    const servicesSection = document.getElementById('journey');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleKeyPress = (event) => {
    if (asDiv && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      handleBookAppointment();
    }
  };

  const ButtonOrDiv = asDiv ? 'div' : 'button';

  return (
    <ButtonOrDiv
      onClick={handleBookAppointment}
      onKeyDown={asDiv ? handleKeyPress : undefined}
      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-1 sm:gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-sm sm:text-base"
      aria-label="Get Started with Coaching"
      role={asDiv ? 'button' : undefined}
      tabIndex={asDiv ? 0 : undefined}
    >
      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="hidden sm:inline">Get Started</span>
      <span className="sm:hidden">Start</span>
    </ButtonOrDiv>
  );
}