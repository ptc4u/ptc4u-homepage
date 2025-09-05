import CalendlyWidget from './CalendlyWidget';

/**
 * Global Calendly Widget component for Pinnacle Thrive Coaching.
 *
 * Displays a fixed Calendly booking widget on the right side of all pages.
 */
export default function GlobalCalendlyWidget() {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-white/98 backdrop-blur-md rounded-l-2xl border border-gradient-to-b from-purple-200/30 to-blue-200/30 shadow-2xl p-3 overflow-hidden" style={{ width: '320px', height: '500px' }}>
        {/* Header */}
        <div className="text-center mb-3 bg-gradient-to-r from-purple-50/50 to-blue-50/50 rounded-lg p-3 border border-purple-200/30">
          <h3 className="text-sm font-bold text-black mb-1">
            Coach Availability Calendar
          </h3>
        </div>
        
        {/* Calendly Widget Container */}
        <div className="h-full overflow-hidden rounded-lg" style={{ fontSize: '12px' }}>
          <CalendlyWidget />
        </div>
      </div>
    </div>
  );
}
