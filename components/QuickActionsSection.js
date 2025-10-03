import { useState, useEffect } from 'react';
import DiscoverySessionForm from './DiscoverySessionForm';
import PTCEssentialsForm from './PTCEssentialsForm';

/**
 * Quick Actions section component for Pinnacle Thrive Coaching.
 *
 * Horizontal sub-section below marquee with action buttons that open popup forms.
 */
export default function QuickActionsSection() {
  const [selectedAction, setSelectedAction] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsLoading(false);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const actions = [
    {
      id: 'discovery',
      title: 'Book Discovery Session',
      description: 'Free 30-minute consultation',
      color: 'from-blue-500 to-blue-500'
    },
    {
      id: 'essentials',
      title: 'PTC Essentials Signup',
      description: '6-session coaching program',
      color: 'from-blue-500 to-blue-500'
    },
    {
      id: 'pro',
      title: 'PTC Pro Signup',
      description: '10-session coaching program',
      color: 'from-blue-500 to-blue-500'
    },
    {
      id: 'unsure',
      title: 'Unsure?',
      description: '30-min clarity conversation',
      color: 'from-blue-500 to-blue-500'
    }
  ];

  const handleActionClick = (actionId) => {
    setSelectedAction(actionId);
  };

  const handleCloseModal = () => {
    setSelectedAction(null);
  };

  const renderForm = () => {
    switch (selectedAction) {
      case 'discovery':
        return <DiscoverySessionForm />;
      case 'essentials':
        return <PTCEssentialsForm />;
      case 'pro':
        return <PTCEssentialsForm />; // Using same form for now, can be customized later
      case 'unsure':
        return <DiscoverySessionForm />; // Using discovery form for "unsure" option
      default:
        return null;
    }
  };

  // Always render the QuickActionsSection for all devices
  // The mobile dropdown can coexist with this section

  return (
    <>
      <section className="fixed bottom-0 left-0 right-0 z-40 py-4 bg-gradient-to-b from-white to-slate-50 border-t border-slate-200 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {actions.map((action) => (
              <button
                key={action.id}
                onClick={() => handleActionClick(action.id)}
                className={`bg-blue-500 border-2 border-blue-500 hover:border-blue-600 text-white hover:text-white px-3 sm:px-4 py-2 rounded-xl font-medium text-xs sm:text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 min-w-[120px] sm:min-w-[140px] group`}
              >
                <div className="flex flex-col items-center space-y-1">
                  <div className="text-center">
                    <div className="font-semibold text-xs sm:text-sm button-text-white">{action.title}</div>
                    <div className="text-xs button-text-white">{action.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {selectedAction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-bold text-gray-900">
                {actions.find(action => action.id === selectedAction)?.title}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              {renderForm()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
