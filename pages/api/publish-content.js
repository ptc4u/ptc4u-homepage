/**
 * API endpoint to publish approved content to the blog page
 * This endpoint handles the publishing workflow for approved content
 */

import { getApprovedContent, setPublishedContent, getLastPublished } from './content-store';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    console.log('Publishing approved content...');
    
    // Get approved content from the content store
    const approvedContent = getApprovedContent();
    
    if (!approvedContent || approvedContent.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No approved content to publish',
        message: 'Please approve some content first before publishing'
      });
    }
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Publish the approved content (this will automatically sort and limit to max items)
    setPublishedContent(approvedContent);
    
    // Get the final published content count
    const publishedContent = getPublishedContent();
    
    console.log(`Published ${publishedContent.length} approved articles (from ${approvedContent.length} total approved)`);
    
    res.status(200).json({
      success: true,
      message: 'Content published successfully to blog page',
      publishedAt: new Date().toISOString(),
      contentCount: publishedContent.length,
      totalApproved: approvedContent.length,
      lastPublished: getLastPublished(),
      message: `Published ${publishedContent.length} latest articles to the blog page`
    });

  } catch (error) {
    console.error('Publish content error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to publish content',
      message: error.message
    });
  }
}
