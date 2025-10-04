import { useState } from 'react';

/**
 * Device Preview Component for Admin Login
 * 
 * Shows how the admin login interface renders across different device sizes:
 * - Laptop (Desktop)
 * - Tablet
 * - Mobile
 */
export default function DevicePreview({ children }) {
  const [previewMode, setPreviewMode] = useState('laptop');
  
  const deviceConfigs = {
    laptop: {
      name: 'Laptop',
      width: '100%',
      height: '100vh',
      maxWidth: '1200px',
      icon: '💻'
    },
    tablet: {
      name: 'Tablet',
      width: '768px',
      height: '1024px',
      maxWidth: '768px',
      icon: '📱'
    },
    mobile: {
      name: 'Mobile',
      width: '375px',
      height: '667px',
      maxWidth: '375px',
      icon: '📱'
    }
  };

  const currentConfig = deviceConfigs[previewMode];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Preview Controls */}
      <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Device Preview</h2>
          <div className="text-sm text-gray-600">
            See how your admin login looks across different devices
          </div>
        </div>
        
        {/* Device Selection Buttons */}
        <div className="flex space-x-2">
          {Object.entries(deviceConfigs).map(([mode, config]) => (
            <button
              key={mode}
              onClick={() => setPreviewMode(mode)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                previewMode === mode
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <span className="text-lg">{config.icon}</span>
              <span>{config.name}</span>
            </button>
          ))}
        </div>
        
        {/* Current Device Info */}
        <div className="mt-3 text-sm text-gray-600">
          <span className="font-medium">Current:</span> {currentConfig.name} 
          <span className="ml-2 text-gray-500">
            ({currentConfig.width} × {currentConfig.height})
          </span>
        </div>
      </div>

      {/* Preview Container */}
      <div className="flex justify-center">
        <div 
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300"
          style={{
            width: currentConfig.width,
            height: currentConfig.height,
            maxWidth: currentConfig.maxWidth,
            transform: previewMode === 'mobile' ? 'scale(0.8)' : previewMode === 'tablet' ? 'scale(0.9)' : 'scale(1)',
            transformOrigin: 'top center'
          }}
        >
          {/* Device Frame */}
          <div className="relative w-full h-full">
            {/* Device Status Bar (for mobile/tablet) */}
            {(previewMode === 'mobile' || previewMode === 'tablet') && (
              <div className="bg-gray-800 text-white text-xs px-3 py-1 flex justify-between items-center">
                <span>9:41</span>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                </div>
                <span>100%</span>
              </div>
            )}
            
            {/* Content Area */}
            <div className="w-full h-full overflow-auto">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Preview Instructions */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-medium text-blue-800">Preview Instructions</h3>
            <div className="mt-2 text-sm text-blue-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Use the device buttons above to switch between laptop, tablet, and mobile views</li>
                <li>The preview shows exactly how your admin login will appear on each device</li>
                <li>Mobile and tablet views are scaled down to fit the preview window</li>
                <li>Test the login functionality in each preview mode</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
