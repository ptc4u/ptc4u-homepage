/**
 * Jobs/Careers section component for Pinnacle Thrive Coaching.
 *
 * This section displays current job openings with "Hiring Now" highlights.
 */
export default function JobsSection() {
  const jobs = [
    {
      title: "Sales Executive",
      description: "Join our dynamic sales team and help grow Pinnacle Thrive Coaching's reach. Drive business development and client acquisition.",
      requirements: [
        "2+ years of sales experience",
        "Excellent communication skills",
        "Goal-oriented and results-driven",
        "Passion for personal development",
        "Ability to work independently"
      ],
      location: "Remote/Hybrid",
      type: "Full-time",
      url: "https://ptc4u.zohorecruit.in/jobs/Careers/195207000000341825/Sales-Executive?source=CareerSite",
      isHiring: true
    },
    {
      title: "Technical Intern",
      description: "Gain hands-on experience in web development and digital marketing. Perfect opportunity for students and recent graduates.",
      requirements: [
        "Basic knowledge of web technologies",
        "Eagerness to learn and grow",
        "Good problem-solving skills",
        "Team player attitude",
        "Currently enrolled in or recently graduated from technical program"
      ],
      location: "Remote",
      type: "Internship",
      url: "https://ptc4u.zohorecruit.in/jobs/Careers/195207000000344035/Technical-Intern?source=CareerSite",
      isHiring: true
    }
  ];

  return (
    <section className="py-8 mt-20 bg-gradient-to-br from-blue-50 to-indigo-50" id="careers" style={{ paddingTop: '98px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 pt-8">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            HIRING NOW
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Join Our <span className="text-black">Team</span>
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium">
            Be part of our mission to transform lives and careers. We're looking for passionate individuals 
            who want to make a difference in people's lives.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col"
            >
              {/* Hiring Now Badge */}
              {job.isHiring && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  HIRING NOW
                </div>
              )}
              
              {/* Content Container */}
              <div className="flex-1 flex flex-col">
                {/* Job Title */}
                <h3 className="text-xl font-bold text-black mb-3 pr-20">
                  {job.title}
                </h3>
                
                {/* Job Type and Location */}
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.type}
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {job.location}
                  </span>
                </div>
                
                {/* Job Description */}
                <p className="text-black mb-4 leading-relaxed text-base">
                  {job.description}
                </p>
                
                {/* Requirements */}
                <div className="mb-4 flex-1">
                  <h4 className="text-base font-semibold text-black mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-black font-medium">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Apply Button - Always at bottom */}
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-blue-500 border-2 border-blue-500 hover:border-blue-600 text-white hover:text-white px-4 py-2 rounded-xl font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 button-text-white mt-auto"
              >
                Apply Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-6 rounded-xl border border-blue-200 shadow-md">
          <h3 className="text-xl font-bold text-black mb-3">
            Don't See Your Perfect Role?
          </h3>
          <p className="text-base text-black mb-4">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let us know how you'd like to contribute.
          </p>
          <a
            href="mailto:ask@ptc4u.com"
            className="inline-flex items-center justify-center bg-blue-500 border-2 border-blue-500 hover:border-blue-600 text-white hover:text-white px-6 py-2 rounded-xl font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 button-text-white"
          >
            Send Your Resume
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
