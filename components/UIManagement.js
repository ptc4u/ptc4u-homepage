import React, { useState, useEffect } from 'react';

/**
 * UI Management Component
 * 
 * Manages device preview and approval for website layouts
 */
export default function UIManagement({ onReturn }) {
  const [currentDevice, setCurrentDevice] = useState('laptop');
  const [isApproving, setIsApproving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [approvalStatus, setApprovalStatus] = useState('pending'); // pending, approved, deployed

  const devices = {
    laptop: {
      name: 'Laptop',
      icon: '💻',
      width: '100%',
      maxWidth: 'none',
      description: 'Desktop and laptop view (default)'
    },
    tablet: {
      name: 'Tablet',
      icon: '📱',
      width: '768px',
      maxWidth: '768px',
      description: 'Tablet and medium screen view'
    },
    mobile: {
      name: 'Mobile',
      icon: '📱',
      width: '375px',
      maxWidth: '375px',
      description: 'Mobile and small screen view'
    }
  };

  const handleDeviceChange = (device) => {
    setCurrentDevice(device);
    setApprovalStatus('pending');
    setError('');
    setSuccess('');
  };

  const handleApprove = async () => {
    setIsApproving(true);
    setError('');
    setSuccess('');

    try {
      // Call the API to commit and push changes
      const response = await fetch('/api/approve-deployment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          device: currentDevice,
          version: '1.0.0',
          adminPassword: 'PTCAdm*7'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Network error' }));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      setApprovalStatus('approved');
      setSuccess(`UI layout for ${devices[currentDevice].name} view has been approved and deployed!`);
      
      // Show success message briefly
      setTimeout(() => {
        setApprovalStatus('deployed');
        setIsApproving(false);
      }, 2000);
      
    } catch (error) {
      console.error('Approval failed:', error);
      setError(`Deployment failed: ${error.message}`);
      setIsApproving(false);
    }
  };

  const handleReturnToDefault = () => {
    setCurrentDevice('laptop');
    setApprovalStatus('pending');
    setError('');
    setSuccess('');
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

  return (
    <div className="max-w-6xl w-full space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">UI Management</h2>
          <p className="text-gray-600">Preview and approve website layouts for different devices</p>
        </div>
        <button
          onClick={onReturn}
          className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Admin
        </button>
      </div>

      {/* Status Messages */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          {success}
        </div>
      )}

      {/* Device Selection */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Device Preview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(devices).map(([deviceKey, deviceConfig]) => (
            <button
              key={deviceKey}
              onClick={() => handleDeviceChange(deviceKey)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                currentDevice === deviceKey
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{deviceConfig.icon}</div>
                <h4 className="font-semibold mb-1">{deviceConfig.name}</h4>
                <p className="text-sm opacity-75">{deviceConfig.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Current Preview Status */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Current Preview</h3>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              approvalStatus === 'pending' ? 'bg-yellow-400' :
              approvalStatus === 'approved' ? 'bg-green-400' :
              'bg-blue-400'
            }`}></div>
            <span className="text-sm text-gray-600 capitalize">{approvalStatus}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-700">
              <strong>{devices[currentDevice].name}</strong> view is currently active
            </p>
            <p className="text-sm text-gray-500">
              Width: {devices[currentDevice].width} | Max Width: {devices[currentDevice].maxWidth}
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={handleReturnToDefault}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Return to Default
            </button>
            
            <button
              onClick={handleApprove}
              disabled={isApproving || approvalStatus === 'deployed'}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                approvalStatus === 'deployed'
                  ? 'bg-green-100 text-green-700 cursor-not-allowed'
                  : isApproving
                  ? 'bg-blue-100 text-blue-700 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isApproving ? (
                <div className="flex items-center">
                  <svg className="animate-spin h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Approving...
                </div>
              ) : approvalStatus === 'deployed' ? (
                'Deployed ✓'
              ) : (
                'Approve & Deploy'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Preview Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Preview Instructions:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Select a device type to preview the website layout</li>
          <li>• The preview will show how the site appears on that device</li>
          <li>• Click "Approve & Deploy" to push the layout to production</li>
          <li>• Use "Return to Default" to reset to laptop view</li>
        </ul>
      </div>
    </div>
  );
}
