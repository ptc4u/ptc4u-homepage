/**
 * API endpoint to publish approved content directly to the blog page
 * This endpoint accepts approved content from the content manager and publishes it
 */

import { setApprovedContent, setPublishedContent, getPublishedContent, getLastPublished, replaceAllContent, clearAllContent } from './content-store';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { approvedContent } = req.body;
    
    if (!approvedContent || !Array.isArray(approvedContent) || approvedContent.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No approved content provided',
        message: 'Please approve some content first before publishing'
      });
    }

    console.log(`Publishing ${approvedContent.length} approved articles...`);
    
    // FIRST: Clear all existing content to ensure no old content remains
    clearAllContent();
    console.log('Cleared all existing content');
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // THEN: Add only the new approved content
    replaceAllContent(approvedContent);
    
    // Get the final published content count
    const publishedContent = getPublishedContent();
    
    console.log(`REPLACED all content. Published ${publishedContent.length} approved articles (from ${approvedContent.length} total approved)`);
    console.log('Published articles:', publishedContent.map(c => c.id));
    console.log('Published article titles:', publishedContent.map(c => c.title));
    
    res.status(200).json({
      success: true,
      message: 'Content published successfully to blog page',
      publishedAt: new Date().toISOString(),
      contentCount: publishedContent.length,
      totalApproved: approvedContent.length,
      lastPublished: getLastPublished(),
      details: `Published ${publishedContent.length} latest articles to the blog page`
    });

  } catch (error) {
    console.error('Publish approved content error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to publish approved content',
      message: error.message
    });
  }
}
