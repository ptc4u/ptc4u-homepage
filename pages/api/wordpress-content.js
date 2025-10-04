/**
 * API endpoint to fetch latest WordPress content
 * Fetches the last 10 posts from your WordPress site
 */
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // WordPress REST API endpoint for your site
    const wordpressUrl = 'https://itservicesdelivery.wordpress.com/wp-json/wp/v2/posts';
    const params = new URLSearchParams({
      per_page: 10,
      orderby: 'date',
      order: 'desc',
      _embed: true
    });

    const response = await fetch(`${wordpressUrl}?${params}`);
    
    if (!response.ok) {
      console.log(`WordPress API not available: ${response.status}`);
      // Return empty content instead of fallback
      res.status(200).json({
        success: true,
        content: [],
        total: 0,
        note: 'WordPress REST API not available. No content to display.'
      });
      return;
    }

    const posts = await response.json();

    // Transform WordPress posts to our content format
    const transformedPosts = posts.map((post, index) => ({
      id: `wp-${post.id}`,
      title: post.title.rendered,
      excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ''), // Strip HTML tags
      fullContent: post.content.rendered.replace(/<[^>]*>/g, ''), // Full content with HTML stripped
      category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'General',
      author: post._embedded?.author?.[0]?.name || 'Sairam Bollapragada',
      date: new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      readTime: `${Math.ceil(post.content.rendered.split(' ').length / 200)} min read`,
      wordpressUrl: post.link,
      status: 'pending',
      ptcRelevance: 'To be reviewed',
      coachingContext: 'To be reviewed',
      source: 'wordpress',
      featured: index < 3, // First 3 posts are featured
      publishedDate: post.date
    }));

    res.status(200).json({
      success: true,
      content: transformedPosts,
      total: transformedPosts.length
    });

  } catch (error) {
    console.error('WordPress API Error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch WordPress content',
      message: error.message
    });
  }
}
