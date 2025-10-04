/**
 * API endpoint to refresh content by fetching fresh content from all sources
 * This endpoint fetches new content from WordPress and LinkedIn, then updates the content store
 */

import { getApprovedContent, setApprovedContent, setPublishedContent, getPublishedContent, replaceAllContent } from './content-store';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    console.log('Refreshing content from all sources...');
    
    const allContent = [];
    const sources = [];
    
    // Skip WordPress content - focus only on LinkedIn
    console.log('Skipping WordPress content fetch - LinkedIn only mode');
    
    // Fetch LinkedIn content with auto refresh
    try {
      const linkedinResponse = await fetch(`${req.headers.origin || 'http://localhost:3000'}/api/linkedin-content`);
      const linkedinData = await linkedinResponse.json();
      
      if (linkedinData.success && linkedinData.content) {
        allContent.push(...linkedinData.content);
        sources.push('LinkedIn');
        console.log(`Fetched ${linkedinData.content.length} LinkedIn posts`);
      }
    } catch (error) {
      console.error('LinkedIn fetch error:', error);
    }
    
    // Add existing approved content to preserve it
    const existingApproved = getApprovedContent();
    if (existingApproved && existingApproved.length > 0) {
      allContent.push(...existingApproved);
      sources.push('Existing Approved');
      console.log(`Preserved ${existingApproved.length} existing approved articles`);
    }
    
    // Remove duplicates based on ID
    const uniqueContent = allContent.filter((item, index, self) => 
      index === self.findIndex(t => t.id === item.id)
    );
    
    // Sort by date (newest first)
    const sortedContent = uniqueContent.sort((a, b) => {
      const dateA = new Date(a.publishedDate || a.date);
      const dateB = new Date(b.publishedDate || b.date);
      return dateB - dateA;
    });
    
    // Update content store with fresh content
    replaceAllContent(sortedContent);
    
    const publishedContent = getPublishedContent();
    
    console.log(`Content refresh complete: ${publishedContent.length} total articles from ${sources.join(', ')}`);
    
    res.status(200).json({
      success: true,
      message: 'Content refreshed successfully',
      refreshedAt: new Date().toISOString(),
      totalArticles: publishedContent.length,
      sources: sources,
      contentCount: publishedContent.length,
      details: `Refreshed content from ${sources.join(', ')} - now showing ${publishedContent.length} latest articles`
    });

  } catch (error) {
    console.error('Content refresh error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to refresh content',
      message: error.message
    });
  }
}
