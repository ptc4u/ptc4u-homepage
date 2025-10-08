import { useState, useEffect } from 'react';
import DiscoverySessionForm from './DiscoverySessionForm';
import PTCEssentialsForm from './PTCEssentialsForm';
import WorkshopRequestForm from './WorkshopRequestForm';
import PartnershipRequestForm from './PartnershipRequestForm';

/**
 * Global Form Handler component for Pinnacle Thrive Coaching.
 *
 * This component listens for the 'selectJourneyOption' event and displays
 * the appropriate form modal for all service options (main and corporate).
 */
export default function GlobalFormHandler() {
  const [selectedAction, setSelectedAction] = useState(null);

  // Listen for the selectJourneyOption event
  useEffect(() => {
    const handleJourneyOption = (event) => {
      const optionId = event.detail;
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

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && selectedAction) {
        handleCloseModal();
      }
    };

    if (selectedAction) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [selectedAction]);

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
      case 'workshop':
        return <WorkshopRequestForm />;
      case 'partnership':
        return <PartnershipRequestForm />;
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
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4"
        onClick={handleCloseModal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Content */}
        <div
          className="bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative mx-2 sm:mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 text-2xl font-bold bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label="Close modal"
          >
            ×
          </button>

          {/* Form Content */}
          <div className="p-4 sm:p-6">
            {renderForm()}
          </div>
        </div>
      </div>
    </>
  );
}
