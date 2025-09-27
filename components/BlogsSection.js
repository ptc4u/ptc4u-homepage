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
    },
    {
      id: 'wp-2',
      title: "Innovation in the Slowdown Part 6: Overcoming Innovation Resistance During a Recession",
      excerpt: "How to overcome Innovation resistance during the recession. Innovation is a fundamental driver of business success and growth, irrespective of economic circumstances.",
      category: 'Leadership',
      author: "Sairam Bollapragada",
      readTime: "6 min read",
      date: "May 19, 2023",
      featured: true,
      source: 'wordpress',
      wordpressUrl: 'https://itservicesdelivery.wordpress.com/2023/05/19/innovation-in-the-slowdown-part-6-overcoming-innovation-resistance-during-a-recession/',
      coachingContext: 'Excellent for leaders navigating organizational change and innovation',
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
    // Note: li-2 is not approved yet, so it won't appear to visitors
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
    },
    {
      id: 3,
      title: "Mindful Decision Making: The Coach's Guide to Better Choices",
      excerpt: "Master the art of making clear, confident decisions under pressure using mindfulness techniques and strategic thinking frameworks.",
      fullContent: `Decision-making under pressure is one of the most critical skills for leaders. When stakes are high and time is limited, the ability to make clear, confident choices can determine success or failure.

**The Mindful Decision Framework:**

1. **Pause and Breathe**: Before reacting, take a moment to center yourself. Deep breathing activates the parasympathetic nervous system, allowing for clearer thinking.

2. **Clarify the Core Issue**: Often, what appears to be the problem is actually a symptom. Ask "What is the real issue here?" and "What outcome do I truly want?"

3. **Gather Essential Information**: In time-pressured situations, focus on the most critical data points. What information is absolutely necessary for this decision?

4. **Consider Multiple Perspectives**: How would different stakeholders view this decision? What are the potential unintended consequences?

5. **Trust Your Intuition**: After analyzing the facts, what does your gut tell you? Intuition is often the integration of years of experience and pattern recognition.

6. **Make the Decision**: Once you've gone through the process, commit fully to your choice. Second-guessing yourself undermines confidence and effectiveness.

**Common Decision Traps to Avoid:**
- Analysis paralysis
- Confirmation bias
- Sunk cost fallacy
- Groupthink
- Emotional decision-making

The key is developing a consistent decision-making process that you can rely on even under pressure. Practice this framework with smaller decisions to build confidence for high-stakes situations.`,
      category: 'coaching',
      author: "Sairam Bollapragada",
      readTime: "7 min read",
      date: "March 15, 2024",
      featured: true,
      source: 'ptc'
    },
    {
      id: 4,
      title: "Building High-Performance Teams: The Leadership Blueprint",
      excerpt: "Discover the key principles for creating teams that consistently deliver exceptional results and exceed expectations.",
      fullContent: `High-performance teams don't happen by accident. They're the result of intentional leadership, clear processes, and a culture that fosters excellence. Here's how to build teams that consistently exceed expectations.

**The High-Performance Team Framework:**

1. **Clear Vision and Goals**: Every team member must understand not just what they're doing, but why it matters. Connect individual tasks to larger organizational objectives.

2. **Right People, Right Roles**: Focus on strengths rather than trying to fix weaknesses. Place people in roles that leverage their natural talents and provide growth opportunities.

3. **Psychological Safety**: Create an environment where team members feel safe to take risks, ask questions, and admit mistakes without fear of judgment or retribution.

4. **Effective Communication**: Establish clear communication protocols, regular check-ins, and feedback mechanisms. Ensure information flows freely in all directions.

5. **Accountability and Ownership**: Each team member should have clear responsibilities and be held accountable for their commitments. Ownership drives engagement and results.

6. **Continuous Learning**: Foster a growth mindset where mistakes are learning opportunities and innovation is encouraged.

**Key Leadership Behaviors:**
- Lead by example
- Provide regular feedback
- Remove obstacles
- Celebrate wins
- Invest in development

Building high-performance teams is an ongoing process that requires consistent attention and adaptation. The investment in team development pays dividends in engagement, productivity, and results.`,
      category: 'leadership',
      author: "Sairam Bollapragada",
      readTime: "9 min read",
      date: "March 12, 2024",
      featured: false,
      source: 'ptc'
    },
    {
      id: 5,
      title: "Goal Achievement Mastery: From Vision to Reality",
      excerpt: "Master the science of goal setting and achievement with proven methodologies and accountability systems.",
      fullContent: `Goal achievement is both an art and a science. While many people set goals, few consistently achieve them. The difference lies in the systems and processes you put in place to bridge the gap between vision and reality.

**The SMART-ER Goal Framework:**

1. **Specific**: Vague goals lead to vague results. Define exactly what you want to achieve, when, and how you'll measure success.

2. **Measurable**: Establish clear metrics and milestones. What gets measured gets managed, and what gets managed gets improved.

3. **Achievable**: Set goals that stretch you but remain within the realm of possibility. Unrealistic goals lead to frustration and abandonment.

4. **Relevant**: Ensure your goals align with your values, long-term vision, and current priorities. Relevance drives motivation.

5. **Time-bound**: Set specific deadlines and create urgency. Without time constraints, goals often remain dreams.

6. **Evaluated**: Regularly assess progress and adjust strategies as needed. What's working? What needs to change?

7. **Reviewed**: Schedule regular goal reviews to celebrate progress, identify obstacles, and maintain momentum.

**The Implementation System:**

- Break large goals into smaller, manageable tasks
- Schedule regular progress reviews
- Create accountability partnerships
- Celebrate small wins along the way
- Learn from setbacks and adjust strategies

Remember, goal achievement is not about perfection—it's about progress. Focus on consistent action toward your objectives, and the results will follow.`,
      category: 'personal-growth',
      author: "Sairam Bollapragada",
      readTime: "5 min read",
      date: "March 10, 2024",
      featured: false,
      source: 'ptc'
    },
    {
      id: 6,
      title: "Digital Transformation Leadership: Thriving in the Age of Change",
      excerpt: "Navigate the complexities of digital transformation with leadership strategies that drive innovation and organizational success.",
      fullContent: `Digital transformation is not just about technology—it's about fundamentally changing how organizations operate, compete, and create value. Leaders who successfully navigate this transformation understand that it's primarily a human challenge requiring new ways of thinking and leading.

**The Digital Leadership Mindset:**

1. **Embrace Continuous Learning**: Technology evolves rapidly. Leaders must commit to ongoing education and stay current with digital trends and opportunities.

2. **Foster Innovation Culture**: Create environments where experimentation is encouraged, failure is viewed as learning, and new ideas are welcomed.

3. **Build Digital Literacy**: While you don't need to be a technical expert, understanding digital concepts and their business implications is crucial.

4. **Lead Through Change**: Digital transformation often requires significant organizational change. Leaders must communicate vision, manage resistance, and maintain momentum.

**Key Success Factors:**

- **Customer-Centric Approach**: Use digital tools to better understand and serve customers
- **Data-Driven Decisions**: Leverage analytics and insights to inform strategic choices
- **Agile Methodologies**: Adopt flexible approaches to project management and product development
- **Talent Development**: Invest in upskilling your team for the digital future
- **Partnership Strategy**: Collaborate with technology partners and startups to accelerate innovation

**Common Pitfalls to Avoid:**
- Focusing on technology without considering people and processes
- Underestimating the change management required
- Neglecting cybersecurity and data privacy
- Moving too fast without proper planning
- Ignoring the importance of digital culture

Successful digital transformation requires balancing innovation with stability, speed with quality, and technology with human needs. The leaders who master this balance will thrive in the digital age.`,
      category: 'transformation',
      author: "Sairam Bollapragada",
      readTime: "10 min read",
      date: "March 8, 2024",
      featured: false,
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

        {/* Search Bar */}
        <div className="mb-12">
          <div className="flex justify-center">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Latest 6 Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Latest <span className="text-black">Articles</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                onClick={() => handleArticleClick(blog)}
              >
                {/* Content Source Indicator */}
                {blog.source === 'wordpress' && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      From WordPress
                    </span>
                  </div>
                )}
                {blog.source === 'linkedin' && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      From LinkedIn
                    </span>
                  </div>
                )}

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

                {/* Excerpt (Intro part only) */}
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Click to read more indicator */}
                <div className="text-center">
                  <span className="text-purple-600 text-sm font-medium hover:text-purple-800 transition-colors">
                    Click to read full article →
                  </span>
                </div>

                {/* Author & Meta */}
                <div className="text-center mt-4">
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
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-black px-3 py-1 rounded text-sm font-medium">
                      {selectedArticle.category}
                    </span>
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
