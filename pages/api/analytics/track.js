import fs from 'fs';
import path from 'path';

const ANALYTICS_FILE = path.join(process.cwd(), 'analytics-data.json');

/**
 * API route to track analytics events (page views, scrolls, etc.)
 */
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Read existing analytics data
    let analyticsData = {
      pageViews: [],
      events: [],
      lastUpdated: new Date().toISOString(),
    };

    if (fs.existsSync(ANALYTICS_FILE)) {
      const data = fs.readFileSync(ANALYTICS_FILE, 'utf8');
      analyticsData = JSON.parse(data);
    }

    const eventData = req.body;
    
    // Use provided session ID or generate one based on timestamp and user agent
    if (!eventData.sessionId) {
      eventData.sessionId = generateSessionId(eventData.userAgent || '', Date.now());
    }

    // Add IP address if available (for server-side tracking)
    eventData.ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket.remoteAddress || 'unknown';

    // Get geolocation data for page views (async, non-blocking)
    // We'll enrich the data in the stats endpoint for better performance

    // Add to appropriate array
    if (eventData.event === 'scroll' || eventData.event === 'page_exit') {
      analyticsData.events.push(eventData);
    } else {
      // Page view
      analyticsData.pageViews.push(eventData);
    }

    // Limit data size (keep last 10000 page views)
    if (analyticsData.pageViews.length > 10000) {
      analyticsData.pageViews = analyticsData.pageViews.slice(-10000);
    }

    if (analyticsData.events.length > 5000) {
      analyticsData.events = analyticsData.events.slice(-5000);
    }

    // Update last updated timestamp
    analyticsData.lastUpdated = new Date().toISOString();

    // Save to file
    fs.writeFileSync(ANALYTICS_FILE, JSON.stringify(analyticsData, null, 2), 'utf8');

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return res.status(500).json({ error: 'Failed to track analytics' });
  }
}

function generateSessionId(userAgent, timestamp) {
  // Simple session ID generation
  try {
    const hash = Buffer.from(userAgent + timestamp).toString('base64').slice(0, 16);
    return hash.replace(/[^a-zA-Z0-9]/g, '');
  } catch (e) {
    // Fallback if Buffer is not available
    const str = userAgent + timestamp;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(36).substring(0, 16);
  }
}

