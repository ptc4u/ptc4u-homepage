/**
 * Tools & Resources section component for Pinnacle Thrive Coaching.
 *
 * Provides access to coaching tools, resources, and materials.
 */
export default function ToolsSection() {
  const tools = [
    {
      title: "Goal Setting Template",
      description: "Structured template to help you set clear, achievable goals with measurable milestones.",
      icon: "🎯",
      category: "Planning",
      downloadUrl: "#"
    },
    {
      title: "Leadership Assessment",
      description: "Comprehensive self-assessment tool to evaluate your leadership strengths and areas for growth.",
      icon: "👑",
      category: "Leadership",
      downloadUrl: "#"
    },
    {
      title: "Time Management Matrix",
      description: "Eisenhower Matrix tool to prioritize tasks and manage your time more effectively.",
      category: "Productivity",
      downloadUrl: "#"
    },
    {
      title: "Communication Framework",
      description: "Proven communication strategies for difficult conversations and team collaboration.",
      category: "Communication",
      downloadUrl: "#"
    },
    {
      title: "Stress Management Guide",
      description: "Practical techniques and exercises to manage stress and maintain work-life balance.",
      category: "Wellness",
      downloadUrl: "#"
    },
    {
      title: "Career Planning Workbook",
      description: "Step-by-step workbook to plan your career path and identify growth opportunities.",
      icon: "📚",
      category: "Career",
      downloadUrl: "#"
    }
  ];

  const categories = ["All", "Planning", "Leadership", "Productivity", "Communication", "Wellness", "Career"];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-purple-50" id="tools">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            <span className="text-black">Tools</span> & Resources
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium">
            Access our curated collection of coaching tools, templates, and resources 
            to accelerate your personal and professional development journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white border border-purple-200 text-black rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 font-semibold"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-purple-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 text-center">{tool.icon}</div>

              {/* Category Badge */}
              <div className="inline-block bg-purple-100 text-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {tool.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-4">{tool.title}</h3>

              {/* Description */}
              <p className="text-black mb-6 leading-relaxed">{tool.description}</p>

              {/* Download Button */}
              <button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Download Tool
              </button>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-black mb-6">
            More <span className="text-black">Resources</span> Coming Soon
          </h3>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            We're constantly developing new tools and resources based on our coaching experience 
            and client feedback. Stay tuned for more valuable materials.
          </p>
          <div className="bg-white p-8 rounded-3xl border border-purple-200/50 shadow-xl max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-black mb-4">
              <span className="text-black">Premium</span> Resources
            </h4>
            <p className="text-black mb-6">
              Get exclusive access to advanced coaching tools, video tutorials, and personalized 
              resources when you join our coaching programs.
            </p>
            <a
              href="#journey"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Access Premium Resources
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
