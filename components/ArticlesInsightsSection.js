/**
 * Articles & Insights section component for Pinnacle Thrive Coaching.
 * 
 * Features 4 tiles: LinkedIn, WordPress, Instagram, and PTC's 3R Pillars
 */
export default function ArticlesInsightsSection() {
  const tiles = [
    {
      id: 'linkedin',
      title: 'LinkedIn',
      description: 'Professional insights and career development articles',
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      link: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:bg-blue-100'
    },
    {
      id: 'wordpress',
      title: 'WordPress',
      description: 'Detailed blog posts and comprehensive articles',
      icon: (
        <img 
          src="/images/wp.png" 
          alt="WordPress" 
          className="w-12 h-12 object-contain"
        />
      ),
      link: 'https://itservicesdelivery.wordpress.com/',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      hoverColor: 'hover:bg-gray-100'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      description: 'Visual content and quick insights',
      icon: (
        <svg className="w-12 h-12" fill="url(#instagram-gradient)" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#833AB4" />
              <stop offset="50%" stopColor="#E1306C" />
              <stop offset="100%" stopColor="#F77737" />
            </linearGradient>
          </defs>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      link: 'https://instagram.com/ask.ptc4u',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      hoverColor: 'hover:bg-pink-100'
    },
    {
      id: 'ptc-pillars',
      title: 'PTC\'s 3R Pillars',
      description: 'Reflect. Reboot. Reinvent - Our core philosophy',
      icon: (
        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">3R</span>
        </div>
      ),
      link: '#services',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      hoverColor: 'hover:bg-purple-100'
    }
  ];

  return (
    <section className="py-8 mt-12 bg-white rounded-2xl shadow-lg" id="blogs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4 font-helvetica">
            Articles & Insights
          </h2>
          <p className="text-lg text-gray-600">
            Explore our content across different platforms
          </p>
        </div>

        {/* 4-Tile Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiles.map((tile) => (
            <a
              key={tile.id}
              href={tile.link}
              target={tile.id === 'ptc-pillars' ? '_self' : '_blank'}
              rel={tile.id === 'ptc-pillars' ? '' : 'noopener noreferrer'}
              className={`block p-6 rounded-xl border-2 ${tile.bgColor} ${tile.borderColor} ${tile.hoverColor} transition-all duration-300 hover:shadow-lg group`}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {tile.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-purple-600 transition-colors">
                  {tile.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tile.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
