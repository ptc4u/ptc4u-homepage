import { useState } from 'react';

/**
 * Blogs section component for Pinnacle Thrive Coaching.
 *
 * Features grid layout, categories, search bar, and preview of latest blogs.
 */
export default function BlogsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'career', name: 'Career Development' },
    { id: 'personal-growth', name: 'Personal Growth' },
    { id: 'coaching', name: 'Coaching Insights' },
    { id: 'transformation', name: 'Transformation' }
  ];

  const blogs = [
    {
      id: 1,
      title: "The 5 Pillars of Executive Presence: Building Leadership Authority",
      excerpt: "Discover the fundamental elements that create authentic executive presence and how to develop them to enhance your leadership effectiveness and career advancement.",
      category: 'leadership',
      author: "Sairam Bollapragada",
      readTime: "8 min read",
      date: "March 20, 2024",
      featured: true
    },
    {
      id: 2,
      title: "Breaking Through Career Plateaus: Strategies for Professional Growth",
      excerpt: "Learn proven techniques to overcome stagnation, identify growth opportunities, and accelerate your career progression with strategic planning and execution.",
      category: 'career',
      author: "Sairam Bollapragada",
      readTime: "6 min read",
      date: "March 18, 2024",
      featured: true
    },
    {
      id: 3,
      title: "Mindful Decision Making: The Coach's Guide to Better Choices",
      excerpt: "Master the art of making clear, confident decisions under pressure using mindfulness techniques and strategic thinking frameworks.",
      category: 'coaching',
      author: "Sairam Bollapragada",
      readTime: "7 min read",
      date: "March 15, 2024",
      featured: true
    },
    {
      id: 4,
      title: "Building High-Performance Teams: The Leadership Blueprint",
      excerpt: "Discover the key principles for creating teams that consistently deliver exceptional results and exceed expectations.",
      category: 'leadership',
      author: "Sairam Bollapragada",
      readTime: "9 min read",
      date: "March 12, 2024",
      featured: false
    },
    {
      id: 5,
      title: "Goal Achievement Mastery: From Vision to Reality",
      excerpt: "Master the science of goal setting and achievement with proven methodologies and accountability systems.",
      category: 'personal-growth',
      author: "Sairam Bollapragada",
      readTime: "5 min read",
      date: "March 10, 2024",
      featured: false
    },
    {
      id: 6,
      title: "Digital Transformation Leadership: Thriving in the Age of Change",
      excerpt: "Navigate the complexities of digital transformation with leadership strategies that drive innovation and organizational success.",
      category: 'transformation',
      author: "Sairam Bollapragada",
      readTime: "10 min read",
      date: "March 8, 2024",
      featured: false
    }
  ];

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredBlogs = blogs.filter(blog => blog.featured).slice(0, 3);

  return (
    <section className="py-20 bg-white" id="blogs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8 font-helvetica">
            PTC Coaching Insights
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

        {/* Featured Blogs Preview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black mb-8 text-center">
            Featured <span className="text-black">Articles</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Category & Meta */}
                <div className="flex items-center justify-center mb-4">
                  <span className="inline-block bg-gray-100 text-black px-3 py-1 rounded text-sm font-medium">
                    {categories.find(cat => cat.id === blog.category)?.name}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-black mb-4 leading-tight text-center">
                  {blog.title}
                </h4>

                {/* Excerpt */}
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  {blog.excerpt}
                </p>

                {/* Author & Meta */}
                <div className="text-center">
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

        {/* All Blogs Grid */}
        {filteredBlogs.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-black mb-8 text-center">
              All <span className="text-black">Articles</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Category */}
                  <div className="mb-3 text-center">
                    <span className="inline-block bg-gray-100 text-black px-3 py-1 rounded text-sm font-medium">
                      {categories.find(cat => cat.id === blog.category)?.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-black mb-3 leading-tight text-center">
                    {blog.title}
                  </h4>

                  {/* Excerpt */}
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="text-center">
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
        )}

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
    </section>
  );
}
