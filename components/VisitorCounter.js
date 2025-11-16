/**
 * VisitorCounter component for displaying personalized visitor number.
 * Shows "You are visitor number #X" for each unique visitor.
 * Always visible and clickable to view analytics.
 */
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function VisitorCounter() {
  const router = useRouter();
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
      <div className="text-gray-700 text-sm sm:text-base md:text-lg font-medium text-center">
        <span className="text-purple-800">Loading...</span>
      </div>
    );
  }

  if (visitorNumber === null) {
    return (
      <div className="text-gray-700 text-sm sm:text-base md:text-lg font-medium text-center">
        <span className="text-purple-800">---</span>
      </div>
    );
  }

  const handleClick = () => {
    // Navigate to analytics dashboard when clicked
    router.push('/admin/analytics');
  };

  return (
    <div 
      className="text-gray-800 text-sm sm:text-base md:text-lg font-medium cursor-pointer text-center"
      onClick={handleClick}
    >
      <span className="text-gray-800">You are visitor </span>
      <span className="text-purple-800 font-bold">#{visitorNumber.toLocaleString()}</span>
    </div>
  );
}

