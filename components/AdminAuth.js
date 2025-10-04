import { useState, useEffect } from 'react';

/**
 * Simple admin authentication component for Pinnacle Thrive Coaching.
 * 
 * This provides basic authentication for the content management system.
 * In a production environment, you would use a more robust authentication system.
 */
export default function AdminAuth({ onAuthenticated }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Check if already authenticated (session storage)
  useEffect(() => {
    const authStatus = sessionStorage.getItem('ptc_admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      onAuthenticated(true);
    }
  }, [onAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simple password check (in production, use proper authentication)
    // For now, using a simple password - you can change this
    const adminPassword = 'PTCAdm*7'; // Admin password for content approval
    
    if (password === adminPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('ptc_admin_authenticated', 'true');
      onAuthenticated(true);
    } else {
      setError('Invalid password. Please try again.');
    }
    
    setIsLoading(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('ptc_admin_authenticated');
    onAuthenticated(false);
    setPassword('');
  };

  if (isAuthenticated) {
    return (
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-black mb-2">Admin Authenticated</h2>
          <p className="text-gray-600 mb-6">You have access to the content management system.</p>
          
          {/* Enhanced Close Admin Button */}
          <div className="space-y-3">
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center space-x-2 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Close Admin Session</span>
            </button>
            <p className="text-xs text-gray-500">This will end your admin session and return you to the admin dashboard</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-black mb-2">Admin Access Required</h2>
        <p className="text-gray-600">Please enter the admin password to access the content management system.</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Admin Password
          </label>
          <input
            type="password"
            id="password"
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

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 button-text-white"
        >
          {isLoading ? 'Authenticating...' : 'Access Content Manager'}
        </button>
      </form>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> This is a simple authentication system. For production use, implement proper user authentication with secure login credentials.
        </p>
      </div>
    </div>
  );
}
