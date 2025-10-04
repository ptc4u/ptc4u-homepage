/**
 * API endpoint to debug content store and check what content is available
 * This helps diagnose content issues
 */

import { getApprovedContent, getPublishedContent, getContentStore } from './content-store';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const contentStore = getContentStore();
    const approvedContent = getApprovedContent();
    const publishedContent = getPublishedContent();
    
    // Check if articles have fullContent
    const contentAnalysis = {
      totalApproved: approvedContent.length,
      totalPublished: publishedContent.length,
      articlesWithFullContent: approvedContent.filter(article => article.fullContent).length,
      articlesWithoutFullContent: approvedContent.filter(article => !article.fullContent).length,
      sampleArticle: approvedContent.length > 0 ? {
        id: approvedContent[0].id,
        title: approvedContent[0].title,
        hasFullContent: !!approvedContent[0].fullContent,
        hasExcerpt: !!approvedContent[0].excerpt,
        fullContentLength: approvedContent[0].fullContent ? approvedContent[0].fullContent.length : 0,
        excerptLength: approvedContent[0].excerpt ? approvedContent[0].excerpt.length : 0
      } : null
    };
    
    console.log('Content Debug Analysis:', contentAnalysis);
    
    res.status(200).json({
      success: true,
      contentStore: contentStore,
      analysis: contentAnalysis,
      approvedContent: approvedContent,
      publishedContent: publishedContent,
      debugAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Debug content error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to debug content store',
      message: error.message
    });
  }
}
