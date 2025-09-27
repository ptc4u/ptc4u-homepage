import { useState } from 'react';

/**
 * Blogs section component for Pinnacle Thrive Coaching.
 *
 * Features grid layout, categories, search bar, and preview of latest blogs.
 * Shows 6 latest articles with intro parts and clickable headings for full content.
 */
export default function BlogsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'career', name: 'Career Development' },
    { id: 'personal-growth', name: 'Personal Growth' },
    { id: 'coaching', name: 'Coaching Insights' },
    { id: 'transformation', name: 'Transformation' }
  ];

  // APPROVED WordPress content (only approved content appears to visitors)
  const wordpressContent = [
    {
      id: 'wp-1',
      title: "The Looming Shadow: Cybersecurity Threats and the Urgent Need for Robust Strategies",
      excerpt: "Data-Driven Insights into an Evolving Threat Landscape. The cyber threat landscape is not merely a theoretical concept; it is a tangible reality with quantifiable consequences.",
      category: 'Digital Transformation',
      author: "Sairam Bollapragada",
      readTime: "8 min read",
      date: "December 13, 2023",
      featured: true,
      source: 'wordpress',
      wordpressUrl: 'https://itservicesdelivery.wordpress.com/2023/12/13/the-looming-shadow-cybersecurity-threats-and-the-urgent-need-for-robust-strategies/',
      coachingContext: 'Perfect for executives dealing with digital transformation challenges',
      status: 'approved' // Only approved content appears to visitors
    }
  ];

  // APPROVED LinkedIn content (only approved content appears to visitors)
  const linkedinContent = [
    {
      id: 'li-1',
      title: "Leadership in Digital Transformation: Key Success Factors",
      excerpt: "Leading digital transformation requires more than just technology adoption. It demands visionary leadership, cultural change, and strategic execution.",
      category: 'Leadership',
      author: "Sairam Bollapragada",
      readTime: "3 min read",
      date: "January 15, 2024",
      featured: true,
      source: 'linkedin',
      linkedinUrl: 'https://www.linkedin.com/posts/sairam-bollapragada_digitaltransformation-leadership-innovation-activity-1234567890/',
      coachingContext: 'Essential for leaders driving digital change in their organizations',
      status: 'approved' // Only approved content appears to visitors
    }
  ];

  // Original PTC coaching content with full content
  const coachingBlogs = [
    {
      id: 1,
      title: "The 5 Pillars of Executive Presence: Building Leadership Authority",
      excerpt: "Discover the fundamental elements that create authentic executive presence and how to develop them to enhance your leadership effectiveness and career advancement.",
      fullContent: `Executive presence is that elusive quality that sets exceptional leaders apart. It's not just about what you say, but how you say it, how you carry yourself, and the confidence you exude in every interaction.

The 5 Pillars of Executive Presence:

1. **Authentic Confidence**: True executive presence stems from genuine self-assurance built on competence and self-awareness. It's not arrogance, but a quiet certainty in your abilities and decisions.

2. **Strategic Communication**: Master the art of clear, concise, and compelling communication. Your words should inspire action and build trust among your team and stakeholders.

3. **Emotional Intelligence**: The ability to read the room, understand others' perspectives, and respond appropriately is crucial for building strong relationships and navigating complex situations.

4. **Professional Gravitas**: This encompasses your physical presence, body language, and the way you handle pressure. It's about being calm under fire and maintaining composure in challenging situations.

5. **Visionary Thinking**: Executive presence includes the ability to articulate a compelling vision and inspire others to follow your lead toward that future.

Building these pillars requires consistent practice, self-reflection, and a commitment to personal growth. Start by identifying which pillar needs the most attention in your current role, and develop a targeted improvement plan.`,
      category: 'leadership',
      author: "Sairam Bollapragada",
      readTime: "8 min read",
      date: "March 20, 2024",
      featured: true,
      source: 'ptc'
    },
    {
      id: 2,
      title: "Breaking Through Career Plateaus: Strategies for Professional Growth",
      excerpt: "Learn proven techniques to overcome stagnation, identify growth opportunities, and accelerate your career progression with strategic planning and execution.",
      fullContent: `Career plateaus are inevitable, but they don't have to be permanent. When you feel stuck in your professional journey, it's time to take strategic action to break through to the next level.

**Recognizing the Plateau:**
- Feeling unchallenged in your current role
- Limited opportunities for advancement
- Decreased motivation and engagement
- Skills becoming outdated or underutilized

**Strategies for Breakthrough:**

1. **Skill Diversification**: Identify emerging skills in your industry and invest in learning them. This could include technical skills, leadership capabilities, or industry-specific knowledge.

2. **Network Expansion**: Build relationships beyond your immediate team. Attend industry events, join professional associations, and connect with thought leaders in your field.

3. **Visibility Enhancement**: Take on high-impact projects, volunteer for cross-functional teams, and ensure your contributions are recognized by key stakeholders.

4. **Mentorship and Coaching**: Seek guidance from senior professionals who can provide insights into career advancement and help you navigate organizational politics.

5. **Strategic Job Crafting**: Redesign your current role to include more challenging responsibilities or propose new initiatives that align with organizational goals.

Remember, career growth is not always linear. Sometimes lateral moves or skill-building periods are necessary stepping stones to your ultimate goals.`,
      category: 'career',
      author: "Sairam Bollapragada",
      readTime: "6 min read",
      date: "March 18, 2024",
      featured: true,
      source: 'ptc'
    }
  ];

  // Combine all content and filter to only show approved content to visitors
  const allContent = [...wordpressContent, ...linkedinContent, ...coachingBlogs];
  const blogs = allContent.filter(content => 
    content.status === 'approved' || content.source === 'ptc' // PTC content is always approved
  );

  // Get the 6 latest articles (sorted by date, most recent first)
  const latestArticles = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);

  const filteredBlogs = latestArticles.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <section className="py-20 bg-white" id="blogs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Fixed spacing to avoid navigation overlap */}
        <div className="text-center mb-16 pt-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 font-helvetica">
            PTC Blogs and Insights
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium">
            Discover valuable insights, practical strategies, and transformative perspectives
            to accelerate your personal and professional growth journey.
          </p>
        </div>

        {/* Search and Filter Section - Optimized Layout */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search Bar - Left aligned for better space utilization */}
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter - Right aligned */}
            <div className="flex flex-wrap gap-2 lg:flex-nowrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Results Counter */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              Showing {filteredBlogs.length} of {latestArticles.length} articles
              {searchTerm && ` matching "${searchTerm}"`}
              {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            </span>
          </div>
        </div>

        {/* Latest 6 Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Latest <span className="text-black">Articles</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer h-full flex flex-col"
                onClick={() => handleArticleClick(blog)}
              >
                {/* Content Source Indicator - Enhanced visibility */}
                <div className="absolute top-4 right-4 z-10">
                  {blog.source === 'wordpress' && (
                    <span className="bg-white border-2 border-blue-500 text-blue-700 px-3 py-2 rounded-lg text-xs font-semibold shadow-lg flex items-center gap-2">
                      <img 
                        src="/images/wp.png" 
                        alt="WordPress" 
                        className="w-4 h-4 object-contain"
                      />
                      WordPress
                    </span>
                  )}
                  {blog.source === 'linkedin' && (
                    <span className="bg-white border-2 border-blue-600 text-blue-800 px-3 py-2 rounded-lg text-xs font-semibold shadow-lg flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </span>
                  )}
                  {blog.source === 'ptc' && (
                    <span className="bg-white border-2 border-purple-600 text-purple-700 px-3 py-2 rounded-lg text-xs font-semibold shadow-lg flex items-center gap-2">
                      <img 
                        src="/rndPTClogo.png" 
                        alt="PTC" 
                        className="w-4 h-4 object-contain"
                      />
                      PTC Original
                    </span>
                  )}
                </div>

                {/* Category */}
                <div className="mb-4 text-center">
                  <span className="inline-block bg-gray-100 text-black px-3 py-1 rounded text-sm font-medium">
                    {blog.category}
                  </span>
                </div>

                {/* Clickable Title */}
                <h4 className="text-lg font-bold text-black mb-4 leading-tight text-center hover:text-purple-600 transition-colors">
                  {blog.title}
                </h4>

                {/* Excerpt (Intro part only) - Flex grow to fill space */}
                <p className="text-gray-700 mb-4 text-sm leading-relaxed flex-grow">
                  {blog.excerpt}
                </p>

                {/* Click to read more indicator */}
                <div className="text-center mb-4">
                  <span className="text-purple-600 text-sm font-medium hover:text-purple-800 transition-colors">
                    Click to read full article →
                  </span>
                </div>

                {/* Author & Meta - Pushed to bottom */}
                <div className="text-center mt-auto">
                  <div className="text-sm text-gray-600 mb-2">
                    By <span className="font-semibold">{blog.author}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <span>{blog.readTime}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready for More <span className="text-black">Insights</span>?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Explore our complete blog repository for comprehensive articles, case studies, and expert guidance.
          </p>
          <a
            href="#blog-repository"
            className="inline-flex items-center justify-center bg-blue-500 border-2 border-blue-500 hover:border-blue-600 text-white px-6 py-3 rounded-lg font-medium text-base shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 button-text-white"
          >
            Read More on Our Blog
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Full Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-block bg-gray-100 text-black px-3 py-1 rounded text-sm font-medium">
                      {selectedArticle.category}
                    </span>
                    {/* Source indicator in modal */}
                    {selectedArticle.source === 'wordpress' && (
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.655-.98 1.42-1.805 2.25-2.445C13.44 2.825 10.26 1.5 6.5 1.5c-1.03 0-2.05.15-3.02.44 1.27 1.19 2.18 2.66 2.66 4.34-.5.15-1.05.25-1.64.25-1.5 0-2.8-.5-3.8-1.4C.5 5.5 0 7.2 0 9c0 2.2 1.2 4.1 3 5.2-.5-1.5-.5-3.1 0-4.6 1.5-1.5 3.5-2.4 5.5-2.4 1.1 0 2.1.3 3 .8.9-.5 1.9-.8 3-.8 2 0 4 1 5.5 2.4.5 1.5.5 3.1 0 4.6 1.8-1.1 3-3 3-5.2 0-1.8-.5-3.5-1.4-4.8-1-.9-2.3-1.4-3.8-1.4-.6 0-1.1-.1-1.6-.25.5-1.7 1.4-3.15 2.7-4.35-.97-.29-1.99-.44-3.02-.44-3.76 0-6.94 1.325-9.188 3.485.83.64 1.595 1.465 2.25 2.445.655.98 1.18 2.02 1.57 3.1.39 1.08.58 2.22.58 3.4 0 1.18-.19 2.32-.58 3.4-.39 1.08-.915 2.12-1.57 3.1-.655.98-1.42 1.805-2.25 2.445C3.56 21.175 6.74 22.5 10.5 22.5c1.03 0 2.05-.15 3.02-.44-1.27-1.19-2.18-2.66-2.66-4.34.5-.15 1.05-.25 1.64-.25 1.5 0 2.8.5 3.8 1.4 1 .9 1.4 2.1 1.4 3.8 0 2.2-1.2 4.1-3 5.2.5-1.5.5-3.1 0-4.6-1.5-1.5-3.5-2.4-5.5-2.4-1.1 0-2.1.3-3 .8-.9.5-1.9.8-3 .8-2 0-4-1-5.5-2.4-.5-1.5-.5-3.1 0-4.6-1.8 1.1-3 3-3 5.2 0 1.8.5 3.5 1.4 4.8 1 .9 2.3 1.4 3.8 1.4.6 0 1.1-.1 1.6-.25-.5 1.7-1.4 3.15-2.7 4.35.97.29 1.99.44 3.02.44 3.76 0 6.94-1.325 9.188-3.485-.83-.64-1.595-1.465-2.25-2.445-.655-.98-1.18-2.02-1.57-3.1-.39-1.08-.58-2.22-.58-3.4 0-1.18.19-2.32.58-3.4.39-1.08.915-2.12 1.57-3.1z"/>
                        </svg>
                        WordPress
                      </span>
                    )}
                    {selectedArticle.source === 'linkedin' && (
                      <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </span>
                    )}
                    {selectedArticle.source === 'ptc' && (
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        PTC Original
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-black mb-4">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span>By <span className="font-semibold">{selectedArticle.author}</span></span>
                    <span>•</span>
                    <span>{selectedArticle.readTime}</span>
                    <span>•</span>
                    <span>{selectedArticle.date}</span>
                  </div>
                </div>
                <button
                  onClick={handleCloseArticle}
                  className="ml-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Full Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {selectedArticle.fullContent}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    {selectedArticle.source === 'wordpress' && 'Originally published on WordPress'}
                    {selectedArticle.source === 'linkedin' && 'Originally published on LinkedIn'}
                    {selectedArticle.source === 'ptc' && 'Pinnacle Thrive Coaching Original Content'}
                  </div>
                  <button
                    onClick={handleCloseArticle}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
