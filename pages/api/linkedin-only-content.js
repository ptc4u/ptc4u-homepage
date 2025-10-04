/**
 * LinkedIn-only content API
 * Returns the latest LinkedIn articles for the Articles & Insights page
 * Fetches real content with actual publication dates
 */

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    // Get limit from query parameter, default to 12
    const limit = parseInt(req.query.limit) || 12;
    console.log(`Fetching real LinkedIn content with actual publication dates (limit: ${limit})`);
    
    // Fetch directly from LinkedIn company page
    console.log('Fetching LinkedIn articles from company page...');
    
    // Try LinkedIn company feed first
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

        // Sort by publication date and take the latest articles
        const sortedContent = sairamsArticles.sort((a, b) => {
          const dateA = new Date(a.publishedDate || a.date || '1970-01-01');
          const dateB = new Date(b.publishedDate || b.date || '1970-01-01');
          return dateB - dateA; // Most recent first
        });
        
        const linkedinContent = sortedContent.slice(0, limit);
        console.log(`Found ${linkedinContent.length} LinkedIn articles (not blogs) authored by Sairam from company feed`);
        return res.status(200).json({
          success: true,
          content: linkedinContent,
          total: linkedinContent.length,
          source: 'linkedin-company-feed',
          note: `Latest ${linkedinContent.length} LinkedIn articles (not blogs) authored by Sairam Bollapragada`
        });
      }
    }
    
    // If LinkedIn company feed fails, try comprehensive fetch
    console.log('Trying LinkedIn comprehensive fetch...');
    const linkedinComprehensiveResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/linkedin-comprehensive-fetch?t=${Date.now()}&v=${Math.random()}`);
    
    if (linkedinComprehensiveResponse.ok) {
      const comprehensiveData = await linkedinComprehensiveResponse.json();
      if (comprehensiveData.success && comprehensiveData.content && comprehensiveData.content.length > 0) {
        // Filter for LinkedIn content only and sort by date
        const linkedinContent = comprehensiveData.content
          .filter(article => article.source === 'linkedin' || article.source === 'linkedin-latest')
          .sort((a, b) => {
            const dateA = new Date(a.publishedDate || a.date || '1970-01-01');
            const dateB = new Date(b.publishedDate || b.date || '1970-01-01');
            return dateB - dateA; // Most recent first
          })
          .slice(0, limit);
        
        if (linkedinContent.length > 0) {
          console.log(`Found ${linkedinContent.length} LinkedIn articles from comprehensive fetch`);
          return res.status(200).json({
            success: true,
            content: linkedinContent,
            total: linkedinContent.length,
            source: 'linkedin-comprehensive',
            note: `Latest ${linkedinContent.length} LinkedIn articles from comprehensive fetch`
          });
        }
      }
    }
    
    // Final fallback: Return empty array instead of fake content
    console.log('No LinkedIn content available, returning empty array');
    return res.status(200).json({
      success: true,
      content: [],
      total: 0,
      source: 'none',
      note: 'No LinkedIn content available. Please check your LinkedIn integration or add content manually.'
    });
    
  } catch (error) {
    console.error('LinkedIn-only content fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch LinkedIn content',
      message: error.message
    });
  }
}