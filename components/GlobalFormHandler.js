import { useState, useEffect } from 'react';
import DiscoverySessionForm from './DiscoverySessionForm';
import PTCEssentialsForm from './PTCEssentialsForm';

/**
 * Global Form Handler component for Pinnacle Thrive Coaching.
 * 
 * This component listens for the 'selectJourneyOption' event and displays
 * the appropriate form modal for the four main service options.
 */
export default function GlobalFormHandler() {
  const [selectedAction, setSelectedAction] = useState(null);

  // Listen for the selectJourneyOption event
  useEffect(() => {
    const handleJourneyOption = (event) => {
      const optionId = event.detail;
      console.log('GlobalFormHandler: Received selectJourneyOption event for:', optionId);
      setSelectedAction(optionId);
    };

    window.addEventListener('selectJourneyOption', handleJourneyOption);
    return () => {
      window.removeEventListener('selectJourneyOption', handleJourneyOption);
    };
  }, []);

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

  // Don't render anything if no action is selected
  if (!selectedAction) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={handleCloseModal}
      >
        {/* Modal Content */}
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 text-2xl font-bold bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            ×
          </button>
          
          {/* Form Content */}
          <div className="p-6">
            {renderForm()}
          </div>
        </div>
      </div>
    </>
  );
}
