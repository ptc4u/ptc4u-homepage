import React from 'react';

const Watermark = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Watermark container */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        {/* Watermark SVG - recreating the mandala design */}
        <svg 
          width="400" 
          height="400" 
          viewBox="0 0 400 400" 
          className="w-full h-full max-w-2xl max-h-2xl"
          style={{ transform: 'rotate(0deg)' }}
        >
          {/* Background circle */}
          <circle cx="200" cy="200" r="180" fill="none" stroke="#1e40af" strokeWidth="1" opacity="0.1"/>
          
          {/* Central yellow circle */}
          <circle cx="200" cy="200" r="8" fill="#fbbf24"/>
          
          {/* Eight-pointed star petals */}
          <g stroke="#ffffff" strokeWidth="2" fill="none">
            {/* Main star petals */}
            <path d="M 200 200 L 200 120 M 200 200 L 280 200 M 200 200 L 200 280 M 200 200 L 120 200" opacity="0.3"/>
            <path d="M 200 200 L 240 160 M 200 200 L 240 240 M 200 200 L 160 240 M 200 200 L 160 160" opacity="0.3"/>
            
            {/* Inner decorative elements */}
            <circle cx="200" cy="140" r="15" opacity="0.2"/>
            <circle cx="260" cy="200" r="15" opacity="0.2"/>
            <circle cx="200" cy="260" r="15" opacity="0.2"/>
            <circle cx="140" cy="200" r="15" opacity="0.2"/>
          </g>
          
          {/* Outer flowing patterns */}
          <g stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.15">
            {/* Curved outer elements */}
            <path d="M 50 200 Q 100 150 150 200 Q 200 250 250 200 Q 300 150 350 200" />
            <path d="M 200 50 Q 150 100 200 150 Q 250 200 200 250 Q 150 300 200 350" />
            
            {/* Diagonal flowing elements */}
            <path d="M 80 80 Q 120 120 160 160 Q 200 200 240 240 Q 280 280 320 320" />
            <path d="M 320 80 Q 280 120 240 160 Q 200 200 160 240 Q 120 280 80 320" />
          </g>
          
          {/* Additional decorative circles */}
          <g fill="#ffffff" opacity="0.1">
            <circle cx="100" cy="100" r="8"/>
            <circle cx="300" cy="100" r="8"/>
            <circle cx="100" cy="300" r="8"/>
            <circle cx="300" cy="300" r="8"/>
            <circle cx="150" cy="150" r="6"/>
            <circle cx="250" cy="150" r="6"/>
            <circle cx="150" cy="250" r="6"/>
            <circle cx="250" cy="250" r="6"/>
          </g>
        </svg>
      </div>
      
      {/* Additional subtle watermark text */}
      <div className="absolute bottom-8 right-8 text-blue-900 opacity-10 font-light text-sm pointer-events-none">
        <span className="font-tan-pearl">Pinnacle</span> Thrive Coaching
      </div>
    </div>
  );
};

export default Watermark;
