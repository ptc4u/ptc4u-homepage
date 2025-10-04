/**
 * API endpoint to fetch approved content for public display
 * This endpoint returns only content that has been approved by admin
 */

import { getPublishedContent, getApprovedContent, setApprovedContent, setPublishedContent, getMaxPublishedItems, getContentVersion, forceRefreshContent } from './content-store';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    // Check if this is a force refresh request
    const { force, nuclear } = req.query;
    
    // Always use LinkedIn content directly (bypass content store)
    console.log('FETCHING LINKEDIN CONTENT: Using LinkedIn-only content directly');
    
    // Fetch LinkedIn content directly
    const linkedinResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/linkedin-company-feed?t=${Date.now()}&v=${Math.random()}`);
    
    if (linkedinResponse.ok) {
      const linkedinData = await linkedinResponse.json();
      if (linkedinData.success && linkedinData.content && linkedinData.content.length > 0) {
        // Filter for articles authored by Sairam only (exclude blogs)
        const sairamsArticles = linkedinData.content.filter(article => 
          article.author === 'Sairam Bollapragada' && 
          article.readTime !== '1 min read' && 
          !article.title.toLowerCase().includes('tip') &&
          !article.title.toLowerCase().includes('hack') &&
          !article.title.toLowerCase().includes('quick') &&
          !article.title.toLowerCase().includes('micro')
        );
        
        console.log(`Found ${sairamsArticles.length} LinkedIn articles (not blogs) authored by Sairam`);
        return res.status(200).json({
          success: true,
          content: sairamsArticles,
          total: sairamsArticles.length,
          maxItems: 12,
          contentVersion: Date.now(),
          lastPublished: new Date().toISOString(),
          message: `LinkedIn content: ${sairamsArticles.length} articles (not blogs) authored by Sairam Bollapragada - Version ${Date.now()}`
        });
      }
    }
    
    // Fallback: Return empty array if no LinkedIn content found
    console.log('No LinkedIn content found, returning empty array');
    return res.status(200).json({
      success: true,
      content: [],
      total: 0,
      maxItems: 12,
      contentVersion: Date.now(),
      lastPublished: new Date().toISOString(),
      message: 'No LinkedIn content available'
    });

  } catch (error) {
    console.error('Approved content fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch approved content',
      message: error.message
    });
  }
}