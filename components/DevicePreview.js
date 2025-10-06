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
      icon: '💻',
      description: 'Desktop Experience',
      scale: 1
    },
    tablet: {
      name: 'Tablet',
      width: '768px',
      height: '1024px',
      maxWidth: '768px',
      icon: '📱',
      description: 'Tablet Experience',
      scale: 0.85
    },
    mobile: {
      name: 'Mobile',
      width: '375px',
      height: '667px',
      maxWidth: '375px',
      icon: '📱',
      description: 'Mobile Experience',
      scale: 0.7
    }
  };

  const currentConfig = deviceConfigs[previewMode];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Preview Controls */}
      <div className="mb-6 bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Device Preview</h2>
            <p className="text-gray-600">
              Test how your admin interface looks and works across different devices
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Current Device</div>
            <div className="text-lg font-semibold text-gray-800">{currentConfig.name}</div>
          </div>
        </div>
        
        {/* Device Selection Buttons */}
        <div className="grid grid-cols-3 gap-3">
          {Object.entries(deviceConfigs).map(([mode, config]) => (
            <button
              key={mode}
              onClick={() => setPreviewMode(mode)}
              className={`flex flex-col items-center space-y-2 p-4 rounded-xl font-medium transition-all duration-200 border-2 ${
                previewMode === mode
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg transform scale-105'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
              }`}
            >
              <span className="text-2xl">{config.icon}</span>
              <div className="text-center">
                <div className="font-semibold">{config.name}</div>
                <div className="text-xs opacity-75">{config.description}</div>
              </div>
            </button>
          ))}
        </div>
        
        {/* Device Info Panel */}
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-medium text-gray-800">Viewing:</span> {currentConfig.name}
              <span className="ml-2 text-gray-600">({currentConfig.width} × {currentConfig.height})</span>
            </div>
            <div className="text-sm text-gray-500">
              Scale: {Math.round(currentConfig.scale * 100)}%
            </div>
          </div>
        </div>
      </div>

      {/* Preview Container */}
      <div className="flex justify-center">
        <div 
          className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 border-2 border-gray-200"
          style={{
            width: currentConfig.width,
            height: currentConfig.height,
            maxWidth: currentConfig.maxWidth,
            transform: `scale(${currentConfig.scale})`,
            transformOrigin: 'top center'
          }}
        >
          {/* Device Frame */}
          <div className="relative w-full h-full">
            {/* Device Status Bar (for mobile/tablet) */}
            {(previewMode === 'mobile' || previewMode === 'tablet') && (
              <div className="bg-gray-900 text-white text-xs px-3 py-2 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">9:41</span>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-2 bg-white rounded-sm"></div>
                  <div className="w-3 h-2 bg-white rounded-sm"></div>
                  <div className="w-3 h-2 bg-white rounded-sm"></div>
                  <div className="w-3 h-2 bg-white rounded-sm"></div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-2 bg-white rounded-sm"></div>
                  <span className="text-xs">100%</span>
                </div>
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
      <div className="mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">How to Use Device Preview</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-700 mb-2">Device Testing</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Click device buttons to switch between views</li>
                  <li>• Test login functionality in each mode</li>
                  <li>• Verify responsive design works correctly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">Mobile Optimization</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Mobile view shows simplified interface</li>
                  <li>• Touch-friendly buttons and forms</li>
                  <li>• Optimized for small screens</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
