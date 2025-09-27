import StableMonthlyCalendar from './StableMonthlyCalendar';

/**
 * Global Google Calendar Widget component for Pinnacle Thrive Coaching.
 *
 * Displays a fixed Google Calendar widget on the right side of all pages.
 */
export default function GlobalGoogleCalendarWidget() {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-white rounded-l-2xl border border-purple-200/30 shadow-2xl p-2 overflow-hidden" style={{ width: '380px', height: '600px' }}>
        {/* Header */}
        <div className="text-center mb-2 bg-gradient-to-r from-purple-50/50 to-blue-50/50 rounded-lg p-2 border border-purple-200/30">
          <h3 className="text-xs font-bold text-black">
            PTC Calendar
          </h3>
        </div>
        
        {/* Monthly Calendar Widget Container */}
        <div className="h-full overflow-hidden rounded-lg relative bg-white" style={{ fontSize: '11px' }}>
          <StableMonthlyCalendar />
        </div>
      </div>
    </div>
  );
}
