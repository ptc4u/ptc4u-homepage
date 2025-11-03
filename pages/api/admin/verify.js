/**
 * API route to verify admin authentication
 */
export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check for authorization header or token
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.replace('Bearer ', '');

    // For simple session-based auth, check if token exists
    // In production, verify JWT token properly
    if (token && token.startsWith('admin_')) {
      return res.status(200).json({ authenticated: true });
    }

    return res.status(401).json({ authenticated: false });
  } catch (error) {
    console.error('Auth verification error:', error);
    return res.status(500).json({ authenticated: false });
  }
}

