import { useState } from 'react';

/**
 * Blog page component for Pinnacle Thrive Coaching.
 *
 * Three-column layout: left for last blog links, middle for major blog content,
 * right for search functionality.
 */
export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Dummy blog data - in real implementation, this would come from WordPress API
  const recentBlogs = [
    {
      id: 1,
      title: "The Power of Reflection in Leadership",
      excerpt: "Discover how reflection can transform your leadership approach...",
      date: "2024-01-15",
      category: "Leadership"
    },
    {
      id: 2,
      title: "Building Resilience in Times of Change",
      excerpt: "Learn practical strategies to navigate uncertainty...",
      date: "2024-01-10",
      category: "Resilience"
    },
    {
      id: 3,
      title: "Goal Setting That Actually Works",
      excerpt: "Transform your goal-setting process with proven methods...",
      date: "2024-01-05",
      category: "Goal Achievement"
    },
    {
      id: 4,
      title: "Work-Life Balance: Myth or Reality?",
      excerpt: "Explore the truth about achieving harmony in life...",
      date: "2024-01-01",
      category: "Work-Life Balance"
    }
  ];

  const featuredBlog = {
    title: "The 3R Philosophy: A Complete Guide to Personal Transformation",
    content: `
      <p>Personal transformation is not just about making changes—it's about creating lasting, meaningful shifts in how you think, act, and live. At Pinnacle Thrive Coaching, we've developed the 3R Philosophy as a comprehensive framework for achieving this transformation.</p>
      
      <h2>Understanding the 3R Philosophy</h2>
      <p>The 3R Philosophy consists of three interconnected phases: Reflect, Reboot, and Reinvent. Each phase builds upon the previous one, creating a powerful progression toward lasting change.</p>
      
      <h3>Phase 1: Reflect</h3>
      <p>Reflection is the foundation of all meaningful change. It's about taking an honest look at your current situation, understanding what's working and what isn't, and identifying the patterns that may be holding you back.</p>
      
      <h3>Phase 2: Reboot</h3>
      <p>Rebooting is about clearing the mental and emotional clutter that prevents growth. It's not about starting over—it's about creating space for new possibilities and approaching challenges with renewed energy and clarity.</p>
      
      <h3>Phase 3: Reinvent</h3>
      <p>Reinvention is where the magic happens. This is where you take control of your story and shape your life into what you've always envisioned. It's about becoming the best version of yourself.</p>
      
      <h2>Why the 3R Philosophy Works</h2>
      <p>This approach works because it addresses transformation at multiple levels: cognitive, emotional, and behavioral. It's not just about changing what you do—it's about changing who you are becoming.</p>
      
      <p>Ready to start your transformation journey? Contact us to learn more about how the 3R Philosophy can help you achieve your goals.</p>
    `,
    author: "Sairam Bollapragada",
    date: "2024-01-20",
    category: "Coaching Philosophy"
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // In real implementation, this would search through blog content
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            PTC <span className="font-tan-pearl text-purple-800">Blog</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Insights, strategies, and wisdom to support your transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Recent Blog Links */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Recent Posts</h3>
              <div className="space-y-4">
                {recentBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="p-4 rounded-xl border border-purple-100 hover:border-purple-300 transition-colors cursor-pointer"
                    onClick={() => setSelectedBlog(blog)}
                  >
                    <h4 className="font-semibold text-slate-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h4>
                    <p className="text-sm text-slate-600 mb-2 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{blog.category}</span>
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-purple-200">
                <a
                  href="https://www.linkedin.com/company/pinnacle-thrive-coaching/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
                >
                  <span>View All Posts on LinkedIn</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column - Major Blog Content */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200/50">
              {selectedBlog ? (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {selectedBlog.title}
                  </h2>
                  <p className="text-slate-700 mb-6">
                    {selectedBlog.excerpt}
                  </p>
                  <div className="text-sm text-slate-500 mb-4">
                    {selectedBlog.category} • {new Date(selectedBlog.date).toLocaleDateString()}
                  </div>
                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    ← Back to Featured Post
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    {featuredBlog.title}
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: featuredBlog.content }} />
                  </div>
                  <div className="mt-8 pt-6 border-t border-purple-200">
                    <div className="text-sm text-slate-500 mb-4">
                      By {featuredBlog.author} • {new Date(featuredBlog.date).toLocaleDateString()} • {featuredBlog.category}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Search */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-purple-200/50">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Search Blog</h3>
              <form onSubmit={handleSearch} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for keywords..."
                    className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300"
                >
                  Search
                </button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-purple-200">
                <h4 className="font-semibold text-slate-900 mb-4">Popular Categories</h4>
                <div className="space-y-2">
                  {['Leadership', 'Career Growth', 'Personal Development', 'Work-Life Balance', 'Goal Setting'].map((category) => (
                    <button
                      key={category}
                      className="block w-full text-left px-3 py-2 text-sm text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
