import { useState, useEffect } from 'react';

const MonthlyCalendarWidget = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showFallback, setShowFallback] = useState(false);

  // Remove the automatic fallback timer since this is a custom calendar that should always work
  // useEffect(() => {
  //   // Show fallback after 3 seconds if calendar doesn't load properly
  //   const timer = setTimeout(() => {
  //     setShowFallback(true);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getMonthName = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const navigateMonth = (direction) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + direction);
      return newDate;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = 
        day === new Date().getDate() && 
        currentDate.getMonth() === new Date().getMonth() && 
        currentDate.getFullYear() === new Date().getFullYear();

      days.push(
        <div
          key={day}
          className={`h-8 flex items-center justify-center text-sm cursor-pointer hover:bg-blue-50 rounded ${
            isToday ? 'bg-blue-600 text-white font-semibold' : 'text-gray-700 hover:text-blue-600'
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  if (showFallback) {
    return (
      <div className="w-full h-full bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-blue-500 mb-2">📅</div>
          <p className="text-sm text-gray-600 mb-2">Schedule Your Session</p>
          <p className="text-xs text-gray-500 mb-3">Click below to view our calendar</p>
          <a 
            href="https://calendar.google.com/calendar/u/6/r" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors mb-2"
          >
            View Calendar
          </a>
          <p className="text-xs text-gray-400">Opens in new window</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-white p-2">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => navigateMonth(-1)}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h3 className="text-sm font-semibold text-gray-800">
          {getMonthName(currentDate)}
        </h3>
        
        <button
          onClick={() => navigateMonth(1)}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {/* Day headers */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="h-6 flex items-center justify-center text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-1">
        {renderCalendar()}
      </div>

      {/* Calendar Footer */}
      <div className="mt-3 pt-2 border-t border-gray-200">
        <div className="text-center">
          <a 
            href="https://calendar.google.com/calendar/u/6/r" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
          >
            View Full Calendar →
          </a>
        </div>
      </div>
    </div>
  );
};

export default MonthlyCalendarWidget;
