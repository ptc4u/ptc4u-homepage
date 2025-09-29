import StableMonthlyCalendar from './StableMonthlyCalendar';

/**
 * Global Google Calendar Widget component for Pinnacle Thrive Coaching.
 *
 * Displays a fixed Google Calendar widget on the right side of all pages.
 */
export default function GlobalGoogleCalendarWidget() {
  return (
    <div className="fixed right-4 top-1/3 transform -translate-y-1/4 z-50 hidden lg:block bg-white rounded-2xl shadow-2xl p-2">
      {/* Booking Tag */}
      <div className="mb-2 text-center">
        <span className="bg-blue-500 border-2 border-blue-500 hover:border-blue-600 text-white hover:text-white px-3 sm:px-4 py-2 rounded-xl font-medium text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 min-w-[120px] sm:min-w-[140px] group button-text-white">
          Please book your slot here
        </span>
      </div>
      
      <div className="bg-gradient-to-b from-blue-400 to-blue-500 rounded-2xl shadow-2xl border-4 border-blue-600 overflow-hidden backdrop-blur-sm bg-white" style={{ width: '320px', height: '320px' }}>
        {/* Header */}
        <div className="bg-blue-600 px-4 py-3 text-center border-b border-blue-700">
          <h3 className="text-white font-semibold text-lg tracking-wide button-text-white" style={{ color: 'white' }}>
            PTC Calendar
          </h3>
        </div>
        
        {/* Square Calendar Widget Container */}
        <div className="h-full overflow-hidden rounded-b-2xl relative bg-white" style={{ fontSize: '10px' }}>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=bsairam-2002%40gmail.com&ctz=Asia%2FKolkata&mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&wkst=1&showEventDetails=0&showEventTimes=0&showToday=1"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '0 0 16px 16px',
              backgroundColor: 'transparent'
            }}
            title="PTC Booking Calendar"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
