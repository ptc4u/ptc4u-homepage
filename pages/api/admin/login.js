/**
 * API route for admin login authentication
 * Uses a simple password check. For production, consider using more secure methods.
 */
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { password } = req.body;

    // Get password from environment variable or use default
    // Set ADMIN_PASSWORD environment variable in production to override
    const adminPassword = process.env.ADMIN_PASSWORD || 'Mani*123';

    if (!password || password !== adminPassword) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate a simple token (for production, use a proper JWT library)
    const token = `admin_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;

    // Return success
    return res.status(200).json({
      success: true,
      token,
      message: 'Login successful',
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Login failed' });
  }
}

