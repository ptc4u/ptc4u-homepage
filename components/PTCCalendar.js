import { useState } from 'react';
import GoogleCalendarWidget from './GoogleCalendarWidget';

export default function PTCCalendar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCalendar = () => {
    setIsOpen(true);
  };

  const handleCloseCalendar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpenCalendar}
        className="text-black hover:text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-purple-100 hover:shadow-lg flex items-center relative group"
      >
        📅 PTC Calendar
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800">PTC Calendar</h2>
              <button
                onClick={handleCloseCalendar}
                className="text-gray-600 hover:text-gray-800 text-2xl font-bold bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <GoogleCalendarWidget />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
