/**
 * Hero section component for Pinnacle Thrive Coaching.
 * Executive-focused design for senior tech and corporate leaders.
 * Clean, minimal, and sophisticated layout.
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20" id="hero">
      {/* Minimal background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-slate-100/30 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-blue-50/40 rounded-full blur-2xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Executive Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="mb-8">
              <span className="text-lg sm:text-xl font-tan-pearl text-slate-600 italic tracking-wide">
                Warm Greetings from
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="font-tan-pearl text-purple-800">Pinnacle</span>
              <span className="text-slate-900 ml-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Thrive Coaching</span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto mb-6"></div>
          </div>

          {/* Narrative Story Block */}
          <div className="mb-0">
            <div className="max-w-5xl mx-auto">
              {/* Opening Quote */}
              <div className="text-center mb-12">
                <div className="max-w-6xl mx-auto px-4">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-blue-700 leading-tight italic">
                    This is your space to pause, breathe, and rediscover yourself.
                  </p>
                </div>
              </div>

              {/* Story Flow */}
              <div className="max-w-4xl mx-auto">
                {/* Story Paragraphs */}
                <div className="text-left">
                  <p className="text-xl sm:text-2xl text-black leading-relaxed font-bold" style={{ fontFamily: 'Times New Roman, serif' }}>
                    Here, we don't just talk about goals — <em>we walk with you</em> as you reshape your career, your leadership, and your life. Every story of transformation begins with a single step, and yours can begin today. At PTC, we believe in <em>your potential</em>, <em>your resilience</em>, and your ability to rise higher than you ever imagined.
                  </p>
                </div>

                {/* The Call to Action */}
                <div className="text-center pt-12">
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
                    <div className="relative">
                      <div className="absolute -top-2 -left-2 text-4xl text-purple-300 font-serif">"</div>
                      <p className="text-xl sm:text-2xl font-semibold text-slate-900 leading-tight italic px-6">
                        Your journey to <span className="bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent font-bold">Reflect, Reboot, and Reinvent</span> starts here.
                      </p>
                      <div className="absolute -bottom-2 -right-2 text-4xl text-purple-300 font-serif">"</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Credentials */}
          <div className="text-center">
            <p className="text-sm font-medium text-slate-600 mb-6">
              Professional Credentials
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                <div className="text-xl sm:text-2xl font-semibold text-slate-800 mb-1">30+</div>
                <div className="text-xs font-medium text-slate-600">Years Experience</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                <div className="text-xl sm:text-2xl font-semibold text-slate-800 mb-1">F500</div>
                <div className="text-xs font-medium text-slate-600">Fortune 500 Leadership</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                <div className="text-xl sm:text-2xl font-semibold text-slate-800 mb-1">Author</div>
                <div className="text-xs font-medium text-slate-600">Published Works</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                <div className="text-xl sm:text-2xl font-semibold text-slate-800 mb-1">4.65</div>
                <div className="text-xs font-medium text-slate-600">Client Rating</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg col-span-2 lg:col-span-1">
                <div className="text-xl sm:text-2xl font-semibold text-slate-800 mb-1">95%</div>
                <div className="text-xs font-medium text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}