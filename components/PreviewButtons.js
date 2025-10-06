import React, { useState, useEffect } from 'react';

/**
 * Preview Buttons Component
 * 
 * Provides preview functionality for laptop and mobile versions with admin approval workflow.
 * When approved, the version is committed and pushed to the repository.
 */
export default function PreviewButtons({ onPreviewChange, currentDevice = 'laptop' }) {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [approvalStatus, setApprovalStatus] = useState('pending'); // pending, approved, deployed
  const [componentError, setComponentError] = useState(null);

  // Error boundary for component
  if (componentError) {
    return (
      <div className="fixed top-4 left-4 z-50 bg-red-100 border border-red-300 rounded-lg p-3 max-w-sm">
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-red-800">Preview component error</span>
        </div>
        <button 
          onClick={() => setComponentError(null)}
          className="mt-2 text-xs text-red-600 hover:text-red-800"
        >
          Retry
        </button>
      </div>
    );
  }

  // Check if admin is already authenticated
  useEffect(() => {
    try {
      const authStatus = sessionStorage.getItem('ptc_admin_authenticated');
      if (authStatus === 'true') {
        setIsAdminAuthenticated(true);
      }
    } catch (err) {
      console.error('Error checking authentication:', err);
      setComponentError('Authentication check failed');
    }
  }, []);

  const handleDeviceChange = (device) => {
    try {
      // Navigate to preview URL in the same tab
      const currentUrl = window.location.href;
      const baseUrl = currentUrl.split('?')[0]; // Remove any existing query parameters
      
      // Create device-specific URL parameters
      const deviceParams = new URLSearchParams();
      deviceParams.set('device', device);
      deviceParams.set('preview', 'true');
      
      const previewUrl = `${baseUrl}?${deviceParams.toString()}`;
      
      // Navigate to preview URL
      window.location.href = previewUrl;
      
      // Also call the original handler for backward compatibility
      if (onPreviewChange) {
        onPreviewChange(device);
      }
    } catch (err) {
      console.error('Error opening device preview:', err);
      setComponentError('Device preview failed');
    }
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const adminPassword = 'PTCAdm*7'; // Admin password for content approval
    
    if (password === adminPassword) {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('ptc_admin_authenticated', 'true');
      setShowAuthModal(false);
      setPassword('');
    } else {
      setError('Invalid password. Please try again.');
    }
    
    setIsLoading(false);
  };

  const handleApprove = async () => {
    setIsApproving(true);
    setError(''); // Clear any previous errors
    
    try {
      // Call the API to commit and push changes
      const response = await fetch('/api/approve-deployment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          device: currentDevice,
          version: '1.0.0', // You can make this dynamic
          adminPassword: 'PTCAdm*7'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Network error' }));
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      setApprovalStatus('approved');
      
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

  const handleLogout = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('ptc_admin_authenticated');
    setApprovalStatus('pending');
  };

  return (
    <>
      {/* Preview Buttons */}
      <div className="fixed top-4 left-4 z-50">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => handleDeviceChange('laptop')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                currentDevice === 'laptop'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              title="Preview Laptop Version"
            >
              <span className="text-sm">💻</span>
              <span className="text-xs hidden sm:inline">Laptop</span>
            </button>
            
            <button
              onClick={() => handleDeviceChange('tablet')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                currentDevice === 'tablet'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              title="Preview Tablet Version"
            >
              <span className="text-sm">📱</span>
              <span className="text-xs hidden sm:inline">Tablet</span>
            </button>
            
            <button
              onClick={() => handleDeviceChange('mobile')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                currentDevice === 'mobile'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              title="Preview Mobile Version"
            >
              <span className="text-sm">📱</span>
              <span className="text-xs hidden sm:inline">Mobile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Admin Approval Section */}
      {isAdminAuthenticated && (
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-800">Admin Controls</h3>
              <button
                onClick={handleLogout}
                className="text-xs text-gray-500 hover:text-gray-700"
              >
                Logout
              </button>
            </div>
            
              <div className="space-y-3">
              <div className="text-xs text-gray-600">
                Current Device: <span className="font-medium capitalize">{currentDevice}</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${
                  approvalStatus === 'pending' ? 'bg-yellow-400' :
                  approvalStatus === 'approved' ? 'bg-green-400' :
                  'bg-blue-400'
                }`}></div>
                <span className="text-xs text-gray-600">
                  Status: <span className="font-medium capitalize">{approvalStatus}</span>
                </span>
              </div>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-xs">
                  {error}
                </div>
              )}
              
              <button
                onClick={handleApprove}
                disabled={isApproving || approvalStatus === 'deployed'}
                className={`w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  approvalStatus === 'deployed'
                    ? 'bg-green-100 text-green-700 cursor-not-allowed'
                    : isApproving
                    ? 'bg-blue-100 text-blue-700 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isApproving ? (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Approving...</span>
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
      )}

      {/* Admin Login Button */}
      {!isAdminAuthenticated && (
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setShowAuthModal(true)}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition-colors text-sm font-medium"
          >
            Admin Login
          </button>
        </div>
      )}

      {/* Admin Authentication Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-black mb-2">Admin Access Required</h2>
              <p className="text-gray-600 text-sm">Enter admin password to approve preview versions</p>
            </div>

            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label htmlFor="admin-password" className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  id="admin-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter admin password"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAuthModal(false)}
                  className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Authenticating...' : 'Login'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
