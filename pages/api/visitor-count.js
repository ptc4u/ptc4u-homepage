import fs from 'fs';
import path from 'path';

const VISITOR_COUNT_FILE = path.join(process.cwd(), 'visitor-count.json');

/**
 * API route to track and return visitor count.
 * Uses a JSON file to persist visitor count across server restarts.
 */
export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Read current visitor count
      let visitorCount = 0;
      
      if (fs.existsSync(VISITOR_COUNT_FILE)) {
        const data = fs.readFileSync(VISITOR_COUNT_FILE, 'utf8');
        const parsed = JSON.parse(data);
        visitorCount = parsed.count || 0;
      }

      return res.status(200).json({ count: visitorCount });
    } catch (error) {
      console.error('Error reading visitor count:', error);
      return res.status(500).json({ error: 'Failed to read visitor count' });
    }
  } else if (req.method === 'POST') {
    try {
      // Increment visitor count
      let visitorCount = 0;
      
      if (fs.existsSync(VISITOR_COUNT_FILE)) {
        const data = fs.readFileSync(VISITOR_COUNT_FILE, 'utf8');
        const parsed = JSON.parse(data);
        visitorCount = parsed.count || 0;
      }

      visitorCount += 1;

      // Save updated count
      fs.writeFileSync(
        VISITOR_COUNT_FILE,
        JSON.stringify({ count: visitorCount, lastUpdated: new Date().toISOString() }, null, 2),
        'utf8'
      );

      return res.status(200).json({ count: visitorCount });
    } catch (error) {
      console.error('Error updating visitor count:', error);
      return res.status(500).json({ error: 'Failed to update visitor count' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}

