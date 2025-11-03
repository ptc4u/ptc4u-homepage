/**
 * VisitorCounter component for displaying personalized visitor number.
 * Shows "You are visitor number #X" for each unique visitor.
 */
import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [visitorNumber, setVisitorNumber] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Track visitor count (only once per session)
    const trackVisitor = async () => {
      try {
        // Check if we've already assigned a visitor number for this session
        const visitorNumberKey = 'ptc4u_visitor_number';
        const storedVisitorNumber = sessionStorage.getItem(visitorNumberKey);

        if (storedVisitorNumber) {
          // Use the stored visitor number
          setVisitorNumber(parseInt(storedVisitorNumber, 10));
          setLoading(false);
        } else {
          // New visitor - increment counter and get their number
          const response = await fetch('/api/visitor-count', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            const newVisitorNumber = data.count;
            
            // Store the visitor number for this session
            sessionStorage.setItem(visitorNumberKey, newVisitorNumber.toString());
            setVisitorNumber(newVisitorNumber);
          }
          setLoading(false);
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
        setLoading(false);
      }
    };

    trackVisitor();
  }, []);

  if (loading) {
    return (
      <div className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">
        <span className="text-purple-800">Loading...</span>
      </div>
    );
  }

  if (visitorNumber === null) {
    return (
      <div className="text-gray-700 text-xs sm:text-sm md:text-base font-medium">
        <span className="text-purple-800">---</span>
      </div>
    );
  }

  return (
    <div className="text-gray-800 text-xs sm:text-sm md:text-base font-medium">
      <div className="text-purple-800 font-bold text-lg">#{visitorNumber.toLocaleString()}</div>
      <div className="text-gray-600 text-xs">Visitor</div>
    </div>
  );
}

