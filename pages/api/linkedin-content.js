/**
 * API endpoint to fetch LinkedIn content
 * Note: LinkedIn doesn't have a public API for personal posts
 * This is a placeholder for manual content management
 */
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Try to fetch from comprehensive LinkedIn fetcher first
    const comprehensiveResponse = await fetch(`${req.headers.origin || 'http://localhost:3000'}/api/linkedin-comprehensive-fetch`);
    const comprehensiveData = await comprehensiveResponse.json();
    
    if (comprehensiveData.success && comprehensiveData.content.length > 0) {
      // Use comprehensive fetched content (all posts including non-CSI)
      const linkedinContent = comprehensiveData.content;
      
      res.status(200).json({
        success: true,
        content: linkedinContent,
        total: linkedinContent.length,
        source: comprehensiveData.source,
        note: `All ${linkedinContent.length} posts from LinkedIn company page (comprehensive fetch)`,
        lastUpdated: comprehensiveData.lastUpdated,
        authenticationRequired: comprehensiveData.authenticationRequired || false
      });
      return;
    }
    
    // Fallback to enhanced LinkedIn fetcher
    const fetchResponse = await fetch(`${req.headers.origin || 'http://localhost:3000'}/api/linkedin-fetch`);
    const fetchData = await fetchResponse.json();
    
    if (fetchData.success && fetchData.content.length > 0) {
      // Use enhanced fetched content (no limit on posts)
      const linkedinContent = fetchData.content;
      
      res.status(200).json({
        success: true,
        content: linkedinContent,
        total: linkedinContent.length,
        source: fetchData.source,
        note: `All ${linkedinContent.length} posts from LinkedIn company page`,
        lastUpdated: fetchData.lastUpdated
      });
      return;
    }
    
    // Fallback to basic scraper if enhanced fetch fails
    const scraperResponse = await fetch(`${req.headers.origin || 'http://localhost:3000'}/api/linkedin-scraper`);
    const scraperData = await scraperResponse.json();
    
    if (scraperData.success && scraperData.content.length > 0) {
      // Use scraped content (no limit on posts)
      const linkedinContent = scraperData.content;
      
      res.status(200).json({
        success: true,
        content: linkedinContent,
        total: linkedinContent.length,
        source: 'linkedin-scraper',
        note: `All ${linkedinContent.length} posts from LinkedIn company page`
      });
      return;
    }
    
    // No hardcoded content - return empty array to prevent date inconsistencies
    res.status(200).json({
      success: true,
      content: [],
      total: 0,
      note: 'No LinkedIn content available. Please add LinkedIn posts manually in the content manager to ensure correct publication dates.'
    });

  } catch (error) {
    console.error('LinkedIn API Error:', error);
    
    // Return empty content instead of fallback with incorrect dates
    res.status(200).json({
      success: true,
      content: [],
      total: 0,
      note: 'LinkedIn content requires manual management. Please add your LinkedIn posts manually to the content manager with correct publication dates.',
      error: error.message
    });
  }
}