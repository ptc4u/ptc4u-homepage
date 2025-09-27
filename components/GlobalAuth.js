import { useState, useEffect } from 'react';

/**
 * Global authentication component for Pinnacle Thrive Coaching.
 * 
 * This provides site-wide authentication that must be passed before accessing any content.
 * Users must authenticate before they can see the main website.
 */
export default function GlobalAuth({ onAuthenticated, children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  // Check if already authenticated (localStorage for persistence)
  useEffect(() => {
    const authStatus = localStorage.getItem('ptc_site_authenticated');
    const authTimestamp = localStorage.getItem('ptc_auth_timestamp');
    
    // Check if authentication is still valid (24 hours)
    if (authStatus === 'true' && authTimestamp) {
      const now = new Date().getTime();
      const authTime = parseInt(authTimestamp);
      const hoursSinceAuth = (now - authTime) / (1000 * 60 * 60);
      
      if (hoursSinceAuth < 24) {
        setIsAuthenticated(true);
        onAuthenticated(true);
      } else {
        // Authentication expired
        localStorage.removeItem('ptc_site_authenticated');
        localStorage.removeItem('ptc_auth_timestamp');
      }
    }
    
    setIsChecking(false);
  }, [onAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Site access password (you can change this)
    const sitePassword = 'PTC2024Welcome!'; // Change this to your preferred password
    
    if (password === sitePassword) {
      setIsAuthenticated(true);
      localStorage.setItem('ptc_site_authenticated', 'true');
      localStorage.setItem('ptc_auth_timestamp', new Date().getTime().toString());
      onAuthenticated(true);
    } else {
      setError('Invalid access code. Please try again.');
    }
    
    setIsLoading(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('ptc_site_authenticated');
    localStorage.removeItem('ptc_auth_timestamp');
    onAuthenticated(false);
    setPassword('');
  };

  // Show loading while checking authentication
  if (isChecking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <p className="text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  // If authenticated, show the main content
  if (isAuthenticated) {
    return (
      <div className="relative">
        {/* Admin logout button - top right */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors shadow-lg"
          >
            Logout
          </button>
        </div>
        {children}
      </div>
    );
  }

  // Authentication form
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to <span className="text-blue-600">Pinnacle Thrive Coaching</span>
          </h2>
          <p className="text-gray-600 mb-8">
            Please enter your access code to continue to our coaching platform.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Access Code
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center text-lg"
              placeholder="Enter your access code"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 shadow-lg"
          >
            {isLoading ? 'Authenticating...' : 'Access Platform'}
          </button>
        </form>

        <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">About Pinnacle Thrive Coaching</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Transform your life and career with expert coaching. Our 3R Philosophy (Reflect, Reboot, Reinvent) 
            helps you break through barriers and achieve extraordinary results in both personal and professional growth.
          </p>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            This is a private coaching platform. Access is restricted to authorized users only.
          </p>
        </div>
      </div>
    </div>
  );
}
