import dynamic from 'next/dynamic';

// Dynamically import CalendlyWidget with no SSR
const CalendlyWidget = dynamic(() => import('./CalendlyWidget'), {
  ssr: false,
  loading: () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-4 rounded-2xl shadow-xl border border-purple-200/50">
        <div className="flex items-center justify-center h-[350px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-2"></div>
            <p className="text-sm text-slate-600">Loading calendar...</p>
          </div>
        </div>
      </div>
    </div>
  ),
});

export default CalendlyWidget;
