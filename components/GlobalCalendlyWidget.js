import CalendlyWidget from './CalendlyWidget';

/**
 * Global Calendly Widget component for Pinnacle Thrive Coaching.
 *
 * Displays a fixed Calendly booking widget on the right side of all pages.
 */
export default function GlobalCalendlyWidget() {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="bg-white rounded-l-2xl border border-purple-200/30 shadow-2xl p-2 overflow-hidden" style={{ width: '380px', height: '600px' }}>
        {/* Header */}
        <div className="text-center mb-2 bg-gradient-to-r from-purple-50/50 to-blue-50/50 rounded-lg p-2 border border-purple-200/30">
          <h3 className="text-xs font-bold text-black">
            PTC Calendar
          </h3>
        </div>
        
        {/* Calendly Widget Container */}
        <div className="h-full overflow-hidden rounded-lg relative bg-white" style={{ fontSize: '11px' }}>
          <CalendlyWidget />
          {/* Loading fallback */}
          <div className="absolute inset-0 flex items-center justify-center bg-white" id="calendly-loading">
            <div className="text-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600 mx-auto mb-1"></div>
              <p className="text-xs text-gray-600">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
