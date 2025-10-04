/**
 * API endpoint to clear content store and force reload with new content
 * This will clear the persistent content store and force it to use the updated default content
 */

import { clearAllContent } from './content-store';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    console.log('Clearing content store to force reload with updated content...');
    
    // Clear all content from the store
    clearAllContent();
    
    // Force delete the content store file to ensure complete reset
    const fs = require('fs');
    const path = require('path');
    const contentStoreFile = path.join(process.cwd(), 'content-store.json');
    
    try {
      if (fs.existsSync(contentStoreFile)) {
        fs.unlinkSync(contentStoreFile);
        console.log('Content store file deleted successfully');
      }
    } catch (fileError) {
      console.log('Could not delete content store file:', fileError.message);
    }
    
    console.log('Content store cleared successfully');
    
    res.status(200).json({
      success: true,
      message: 'Content store cleared successfully',
      clearedAt: new Date().toISOString(),
      note: 'Next page load will use updated default content with fullContent fields'
    });

  } catch (error) {
    console.error('Clear content error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to clear content store',
      message: error.message
    });
  }
}