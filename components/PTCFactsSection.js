/**
 * PTC Facts section component for Pinnacle Thrive Coaching.
 *
 * Displays key statistics and achievements in a horizontal layout.
 */
export default function PTCFactsSection() {
  const facts = [
    {
      number: "102",
      label: "Clients Served",
      description: "Successful transformations"
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Client satisfaction"
    },
    {
      number: "1000+",
      label: "Hours Coaching",
      description: "Experience delivered"
    },
    {
      number: "4.65",
      label: "Rating",
      description: "Average client rating"
    }
  ];

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-gradient-to-b from-blue-400 to-blue-500 rounded-l-2xl shadow-2xl border-l-4 border-blue-600 overflow-hidden backdrop-blur-sm" style={{ width: '280px', height: '400px' }}>
        {/* Header */}
        <div className="bg-blue-600 px-4 py-3 text-center border-b border-blue-700">
          <h3 className="text-white font-semibold text-sm tracking-wide button-text-white">
            PTC Facts & Figures
          </h3>
        </div>
        
        {/* Facts Content */}
        <div className="p-4 space-y-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-2xl font-bold text-white button-text-white mb-1">
                {fact.number}
              </div>
              <div className="text-sm font-semibold text-white button-text-white mb-1">
                {fact.label}
              </div>
              <div className="text-xs text-white/80 button-text-white">
                {fact.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
