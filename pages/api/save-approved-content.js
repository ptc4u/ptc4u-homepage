/**
 * API endpoint to save approved content to the content store
 * This endpoint handles saving approved content from the content manager
 */

import { getApprovedContent, setApprovedContent, getPublishedContent, setPublishedContent, addApprovedContent } from './content-store';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { content, action } = req.body;
    
    if (!content) {
      return res.status(400).json({
        success: false,
        error: 'Content is required'
      });
    }

    if (action === 'approve') {
      // Add new approved content (this automatically updates published content)
      addApprovedContent(content);
      
      // Get updated counts
      const currentApproved = getApprovedContent();
      const currentPublished = getPublishedContent();
      
      console.log(`Content ${content.id} approved and published`);
      
      res.status(200).json({
        success: true,
        message: 'Content approved and published successfully',
        contentId: content.id,
        totalApproved: currentApproved.length,
        totalPublished: currentPublished.length,
        message: `Content approved! Now showing ${currentPublished.length} latest articles on blog page.`
      });
    } else {
      return res.status(400).json({
        success: false,
        error: 'Invalid action'
      });
    }

  } catch (error) {
    console.error('Save approved content error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to save approved content',
      message: error.message
    });
  }
}
