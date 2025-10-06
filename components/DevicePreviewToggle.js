import { useState, useEffect } from 'react';

/**
 * Device Preview Toggle Component
 * 
 * Allows users to preview how the site appears on different devices:
 * - Laptop (default)
 * - Mobile
 * - Tablet
 */
export default function DevicePreviewToggle({ children }) {
  const [currentDevice, setCurrentDevice] = useState('laptop'); // Default to laptop
  const [isLoading, setIsLoading] = useState(false);

  // Device configurations
  const devices = {
    laptop: {
      name: 'Laptop',
      icon: '💻',
      width: '100%',
      maxWidth: 'none',
      className: 'laptop-preview'
    },
    tablet: {
      name: 'Tablet',
      icon: '📱',
      width: '768px',
      maxWidth: '768px',
      className: 'tablet-preview'
    },
    mobile: {
      name: 'Mobile',
      icon: '📱',
      width: '375px',
      maxWidth: '375px',
      className: 'mobile-preview'
    }
  };

  // Handle device change
  const changeDevice = (device) => {
    setIsLoading(true);
    setCurrentDevice(device);
    
    // Small delay to show loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  // Apply device-specific styling
  useEffect(() => {
    // Remove all device classes
    document.body.classList.remove('laptop-preview-mode', 'tablet-preview-mode', 'mobile-preview-mode');
    
    // Add current device class
    if (currentDevice !== 'laptop') {
      document.body.classList.add(`${currentDevice}-preview-mode`);
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('laptop-preview-mode', 'tablet-preview-mode', 'mobile-preview-mode');
    };
  }, [currentDevice]);

  const currentDeviceConfig = devices[currentDevice];

  return (
    <div className="relative">
      {/* Device Preview Toggle Panel */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2">
          <div className="flex items-center space-x-1">
            {Object.entries(devices).map(([deviceKey, deviceConfig]) => (
              <button
                key={deviceKey}
                onClick={() => changeDevice(deviceKey)}
                disabled={isLoading}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                  currentDevice === deviceKey
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                title={`Preview ${deviceConfig.name}`}
              >
                {isLoading && currentDevice === deviceKey ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-xs">Loading...</span>
                  </>
                ) : (
                  <>
                    <span className="text-sm">{deviceConfig.icon}</span>
                    <span className="text-xs hidden sm:inline">{deviceConfig.name}</span>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Device Preview Indicator */}
      {currentDevice !== 'laptop' && (
        <div className="fixed top-16 right-4 z-40 bg-blue-600 text-white px-3 py-2 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <span className="text-sm">{currentDeviceConfig.icon}</span>
            <span className="text-sm font-medium">{currentDeviceConfig.name} Preview Active</span>
            <span className="text-xs opacity-75">({currentDeviceConfig.width})</span>
          </div>
        </div>
      )}

      {/* Content with device-specific styling */}
      <div 
        className={`device-preview-container ${currentDeviceConfig.className}`}
        style={{
          width: currentDeviceConfig.width,
          maxWidth: currentDeviceConfig.maxWidth,
          margin: currentDevice !== 'laptop' ? '0 auto' : '0',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        {children}
      </div>
    </div>
  );
}
