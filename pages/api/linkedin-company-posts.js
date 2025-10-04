/**
 * LinkedIn Company Posts API endpoint
 * Note: This requires LinkedIn Marketing API access and proper authentication
 * You'll need to set up LinkedIn Marketing API credentials
 */
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // LinkedIn Marketing API credentials (you'll need to set these up)
    const LINKEDIN_CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
    const LINKEDIN_CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
    const LINKEDIN_ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN;
    const COMPANY_ID = '108140833'; // Your LinkedIn company ID

    if (!LINKEDIN_CLIENT_ID || !LINKEDIN_CLIENT_SECRET || !LINKEDIN_ACCESS_TOKEN) {
      return res.status(200).json({
        success: true,
        content: [],
        total: 0,
        note: 'LinkedIn Marketing API credentials not configured. Please set up LinkedIn Marketing API access.'
      });
    }

    // LinkedIn Marketing API endpoint for company posts
    const linkedinApiUrl = `https://api.linkedin.com/v2/organizationalEntityAcls?q=roleAssignee&role=ADMINISTRATOR&organizationalTarget=${COMPANY_ID}`;
    
    const response = await fetch(linkedinApiUrl, {
      headers: {
        'Authorization': `Bearer ${LINKEDIN_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'X-Restli-Protocol-Version': '2.0.0'
      }
    });

    if (!response.ok) {
      throw new Error(`LinkedIn API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Transform LinkedIn posts to our content format
    const transformedPosts = data.elements?.map((post, index) => ({
      id: `li-${post.id}`,
      title: post.text || 'LinkedIn Post',
      excerpt: post.text?.substring(0, 200) + '...' || 'LinkedIn company post',
      category: 'Social Media',
      author: 'Sairam Bollapragada',
      date: new Date(post.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      readTime: '2 min read',
      linkedinUrl: `https://www.linkedin.com/company/${COMPANY_ID}/posts/`,
      status: 'pending',
      ptcRelevance: 'To be reviewed',
      coachingContext: 'To be reviewed',
      source: 'linkedin',
      featured: index < 3,
      publishedDate: post.createdAt
    })) || [];

    res.status(200).json({
      success: true,
      content: transformedPosts,
      total: transformedPosts.length
    });

  } catch (error) {
    console.error('LinkedIn API Error:', error);
    res.status(200).json({
      success: true,
      content: [],
      total: 0,
      note: 'LinkedIn API access not available. Please manually add LinkedIn posts to the content manager.',
      error: error.message
    });
  }
}
