import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

/**
 * API endpoint to handle deployment approval
 * This endpoint commits and pushes changes when a preview is approved
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { device, version, adminPassword } = req.body;

    // Verify admin password
    if (adminPassword !== 'PTCAdm*7') {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Validate required fields
    if (!device || !version) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Git operations
    const timestamp = new Date().toISOString();
    const commitMessage = `Deploy ${device} preview v${version} - ${timestamp}`;
    
    // Stage all changes
    await execAsync('git add .');
    
    // Commit changes
    await execAsync(`git commit -m "${commitMessage}"`);
    
    // Push to repository
    await execAsync('git push origin main');

    // Log the deployment
    console.log(`Deployment approved: ${device} preview v${version} at ${timestamp}`);

    res.status(200).json({
      success: true,
      message: 'Deployment approved and pushed successfully',
      timestamp,
      device,
      version,
      commitMessage
    });

  } catch (error) {
    console.error('Deployment error:', error);
    
    // Check if it's a Git error
    if (error.message.includes('git')) {
      return res.status(500).json({
        error: 'Git operation failed',
        details: error.message
      });
    }

    res.status(500).json({
      error: 'Deployment failed',
      details: error.message
    });
  }
}
