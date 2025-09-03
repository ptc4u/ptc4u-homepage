import dynamic from 'next/dynamic';

// Dynamically import CalendlyWidget with no SSR
const CalendlyWidget = dynamic(() => import('./CalendlyWidget'), {
  ssr: false,
  loading: () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200/50">
        <div className="flex items-center justify-center h-[600px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-slate-600">Loading booking calendar...</p>
          </div>
        </div>
      </div>
    </div>
  ),
});

export default CalendlyWidget;
