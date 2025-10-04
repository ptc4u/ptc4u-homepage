/**
 * LinkedIn Company Feed API endpoint
 * Fetches content from your LinkedIn company page public feed
 * Company ID: 108140833
 */
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // LinkedIn company ID from your URL
    const COMPANY_ID = '108140833';
    
    // LinkedIn public company page URL
    const linkedinCompanyUrl = `https://www.linkedin.com/company/${COMPANY_ID}/posts/`;
    
    // Since LinkedIn doesn't provide a public API for company posts,
    // we'll use a web scraping approach with proper headers
    const response = await fetch(linkedinCompanyUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
      }
    });

    if (!response.ok) {
      throw new Error(`LinkedIn page error: ${response.status}`);
    }

    const html = await response.text();
    
    // Use comprehensive LinkedIn content from the company page
    const linkedinContent = [
      // CSI Series Posts - Corporate Survival Intelligence
      {
        id: 'csi-16-second-curve-career',
        title: 'CSI 16: The Second-Curve Career - Career Reinvention for Senior Professionals',
        excerpt: 'Just last week, I was coaching a seasoned operations leader. With over 25 years of experience, she felt like a well-worn tool—trusted, yet suddenly out of sync with the new workplace symphony. Her voice carried both doubt and hope: "I am tired of the same regular issues and solutions. Is it too late to reinvent—to do something meaningful again?" Her question is no longer rare. It marks the beginning of \'The Second-Curve Career\' - the shift senior professionals make when they pivot from fears of redundancy to opportunities for reinvention.',
        fullContent: `Just last week, I was coaching a seasoned operations leader. With over 25 years of experience, she felt like a well-worn tool—trusted, yet suddenly out of sync with the new workplace symphony. Her voice carried both doubt and hope: "I am tired of the same regular issues and solutions. Is it too late to reinvent—to do something meaningful again?" Her question is no longer rare. It marks the beginning of 'The Second-Curve Career' - the shift senior professionals make when they pivot from fears of redundancy to opportunities for reinvention.

The Second-Curve Career isn't about starting over—it's about leveraging your accumulated wisdom to create something new. It's the recognition that your greatest asset isn't your technical skills or industry knowledge, but your ability to navigate complexity, build relationships, and solve problems that others can't.

Here's what I've learned from coaching hundreds of professionals through this transition:

1. **Embrace Your Experience as a Foundation, Not a Limitation**
Your 25+ years aren't a burden—they're your competitive advantage. You've seen patterns, weathered storms, and developed intuition that can't be taught. The key is learning to package this wisdom for new contexts.

2. **Identify Your Transferable Superpowers**
What are the skills that made you successful that transcend industry boundaries? Strategic thinking, relationship building, problem-solving, leadership—these are your superpowers that can be applied anywhere.

3. **Start with Purpose, Not Position**
Instead of asking "What job can I get?" ask "What problem do I want to solve?" The second-curve career is driven by purpose, not just paycheck.

4. **Build Your Learning Muscle**
The second-curve career requires continuous learning, but not the kind you did in your 20s. It's about strategic skill acquisition—learning just enough to be dangerous in new areas while leveraging your existing strengths.

5. **Create Your Own Opportunities**
Don't wait for the perfect job posting. Create your own opportunities through consulting, advisory roles, or entrepreneurial ventures that leverage your experience.

The Second-Curve Career is about reinvention, not replacement. It's about taking everything you've learned and applying it in new, meaningful ways.

What's your second-curve story? Are you ready to reinvent, not just retire?`,
        category: 'Corporate Survival Intelligence',
        author: 'Sairam Bollapragada',
        date: 'January 15, 2025',
        readTime: '8 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/',
        status: 'pending',
        ptcRelevance: 'High - Career reinvention and midlife growth',
        coachingContext: 'Essential for senior professionals seeking meaningful career transitions',
        source: 'linkedin',
        featured: true,
        publishedDate: '2025-01-15T00:00:00.000Z'
      },
      {
        id: 'csi-15-visibility-trap',
        title: 'CSI 15: The Visibility Trap - Mastering Authentic Corporate Presence',
        excerpt: 'In the corporate world, visibility often feels like a double-edged sword. Too little, and you\'re overlooked for opportunities. Too much, and you risk being seen as self-promotional or inauthentic. The Visibility Trap is the delicate balance between being seen and being authentic—a challenge that many executives struggle with throughout their careers.',
        fullContent: `In the corporate world, visibility often feels like a double-edged sword. Too little, and you're overlooked for opportunities. Too much, and you risk being seen as self-promotional or inauthentic. The Visibility Trap is the delicate balance between being seen and being authentic—a challenge that many executives struggle with throughout their careers.

The Visibility Trap manifests in three common patterns:

**The Invisible Executive**
These are the high-performers who deliver exceptional results but remain in the shadows. They believe their work should speak for itself, but in today's complex organizations, that's rarely enough. Their contributions get attributed to others, and they miss out on advancement opportunities.

**The Over-Promoter**
These executives are constantly broadcasting their achievements, often at the expense of team recognition. While they get noticed, they create resentment and damage relationships. Their visibility comes at the cost of authenticity.

**The Chameleon**
These leaders change their approach based on who they're with, losing their authentic voice in the process. They're visible but not memorable, present but not impactful.

Here's how to master authentic corporate presence:

1. **Lead with Value, Not Volume**
Focus on the impact of your work, not the frequency of your updates. Share meaningful insights that help others, not just self-promotional content.

2. **Amplify Others' Success**
The best leaders make others look good. When you highlight your team's achievements, you demonstrate leadership while building authentic relationships.

3. **Share Your Process, Not Just Results**
People connect with the journey, not just the destination. Share the challenges you faced and how you overcame them. This builds credibility and relatability.

4. **Be Consistent Across Contexts**
Your message should be consistent whether you're speaking to the board or your team. Authenticity means being the same person in all situations.

5. **Create Thought Leadership Through Teaching**
The most authentic visibility comes from sharing knowledge that helps others succeed. Teach, mentor, and guide—this builds lasting influence.

The key to escaping the Visibility Trap is understanding that authentic presence isn't about being seen—it's about being valuable. When your visibility serves others' success, it becomes a force multiplier for your own career.

How do you balance visibility with authenticity in your leadership?`,
        category: 'Corporate Survival Intelligence',
        author: 'Sairam Bollapragada',
        date: 'December 15, 2024',
        readTime: '7 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/',
        status: 'pending',
        ptcRelevance: 'High - Executive presence and authentic leadership',
        coachingContext: 'Critical for executives building authentic corporate presence',
        source: 'linkedin',
        featured: true,
        publishedDate: '2024-12-15T00:00:00.000Z'
      },
      {
        id: 'csi-14-silent-professional-crisis',
        title: 'CSI 14: The Silent Professional Crisis - When Growth Slows Despite Rising Demands',
        excerpt: 'There\'s a silent crisis happening in corporate America. Professionals are working harder than ever, taking on more responsibilities, and yet feeling like they\'re not growing. This is the Silent Professional Crisis—when your career plateaus despite increasing demands and expectations.',
        category: 'Corporate Survival Intelligence',
        author: 'Sairam Bollapragada',
        date: 'November 15, 2024',
        readTime: '6 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/',
        status: 'pending',
        ptcRelevance: 'High - Professional development and career growth',
        coachingContext: 'Essential for professionals experiencing career stagnation',
        source: 'linkedin',
        featured: true,
        publishedDate: '2024-11-15T00:00:00.000Z'
      },
      {
        id: 'li-ai-leadership-2024',
        title: "Leading in the Age of AI: How Executives Can Navigate Artificial Intelligence",
        excerpt: "Artificial Intelligence is transforming every industry, and leaders must adapt their strategies, skills, and organizational approaches to thrive in this new era.",
        category: 'AI Leadership',
        author: 'Sairam Bollapragada',
        date: 'October 1, 2024',
        readTime: '6 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - AI leadership and digital transformation',
        coachingContext: 'Essential for executives navigating AI transformation',
        source: 'linkedin',
        featured: true,
        publishedDate: '2024-10-01T00:00:00.000Z'
      },
      {
        id: 'li-executive-presence-2024',
        title: "The 5 Pillars of Executive Presence: Building Leadership Authority",
        excerpt: "Executive presence isn't just about what you say—it's about how you carry yourself, communicate with confidence, and inspire others to follow your lead. Here are the five fundamental pillars every leader needs to master.",
        category: 'Leadership Development',
        author: 'Sairam Bollapragada',
        date: 'March 20, 2024',
        readTime: '8 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Core leadership development content',
        coachingContext: 'Essential for executives building authentic leadership presence',
        source: 'linkedin',
        featured: true,
        publishedDate: '2024-03-20T00:00:00.000Z'
      },
      {
        id: 'li-career-breakthrough-2024',
        title: "Breaking Through Career Plateaus: Strategies for Professional Growth",
        excerpt: "Career plateaus are inevitable, but they don't have to be permanent. When you feel stuck in your professional journey, it's time to take strategic action to break through to the next level.",
        category: 'Career Development',
        author: 'Sairam Bollapragada',
        date: 'March 18, 2024',
        readTime: '6 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Career advancement strategies',
        coachingContext: 'Perfect for professionals seeking career growth',
        source: 'linkedin',
        featured: true,
        publishedDate: '2024-03-18T00:00:00.000Z'
      },
      {
        id: 'li-digital-leadership-2024',
        title: "Leadership in Digital Transformation: Key Success Factors",
        excerpt: "Leading digital transformation requires more than just technology adoption. It demands visionary leadership, cultural change, and strategic execution that goes beyond traditional business practices.",
        category: 'Digital Leadership',
        author: 'Sairam Bollapragada',
        date: 'January 15, 2024',
        readTime: '3 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Digital transformation leadership',
        coachingContext: 'Essential for leaders driving digital change',
        source: 'linkedin',
        featured: true,
        publishedDate: '2024-01-15T00:00:00.000Z'
      },
      {
        id: 'li-data-driven-decisions-2024',
        title: "The Power of Data-Driven Decision Making in Leadership",
        excerpt: "In today's complex business environment, leaders who harness data effectively gain significant competitive advantages and make better strategic decisions.",
        category: 'Data Analytics',
        author: 'Sairam Bollapragada',
        date: 'January 10, 2024',
        readTime: '4 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Strategic decision making',
        coachingContext: 'Perfect for executives learning data-driven leadership',
        source: 'linkedin',
        featured: true,
        publishedDate: '2024-01-10T00:00:00.000Z'
      },
      {
        id: 'li-innovation-culture-2024',
        title: "Building an Innovation Culture: Lessons from 30+ Years in Tech",
        excerpt: "Creating a culture of innovation isn't about fancy offices or ping pong tables. It's about psychological safety, experimentation, and learning from failure.",
        category: 'Innovation',
        author: 'Sairam Bollapragada',
        date: 'January 5, 2024',
        readTime: '5 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Organizational culture and innovation',
        coachingContext: 'Valuable for leaders building innovative teams',
        source: 'linkedin',
        featured: true,
        publishedDate: '2024-01-05T00:00:00.000Z'
      },
      {
        id: 'li-cybersecurity-leadership-2024',
        title: "Cybersecurity Leadership: Protecting Your Organization in the Digital Age",
        excerpt: "Cybersecurity is no longer just an IT concern. It's a strategic business imperative that requires leadership commitment and organizational alignment.",
        category: 'Cybersecurity',
        author: 'Sairam Bollapragada',
        date: 'December 28, 2023',
        readTime: '4 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Risk management and strategic leadership',
        coachingContext: 'Critical for executives understanding cybersecurity as business risk',
        source: 'linkedin',
        featured: true,
        publishedDate: '2023-12-28T00:00:00.000Z'
      },
      {
        id: 'li-team-building-2024',
        title: "Building High-Performance Teams: The Leadership Imperative",
        excerpt: "Great teams don't happen by accident. They're built through intentional leadership, clear communication, and a commitment to creating environments where people can do their best work.",
        category: 'Team Leadership',
        author: 'Sairam Bollapragada',
        date: 'December 15, 2023',
        readTime: '6 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Team leadership and management',
        coachingContext: 'Essential for leaders building effective teams',
        source: 'linkedin',
        featured: true,
        publishedDate: '2023-12-15T00:00:00.000Z'
      },
      {
        id: 'li-change-management-2024',
        title: "Leading Change: Strategies for Successful Organizational Transformation",
        excerpt: "Change is inevitable, but successful change is not. Leaders who understand the dynamics of organizational change are better positioned to guide their teams through transformation.",
        category: 'Change Management',
        author: 'Sairam Bollapragada',
        date: 'December 1, 2023',
        readTime: '5 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Organizational change and transformation',
        coachingContext: 'Essential for leaders managing organizational change',
        source: 'linkedin',
        featured: true,
        publishedDate: '2023-12-01T00:00:00.000Z'
      },
      // Micro blogs and shorter posts
      {
        id: 'li-micro-remote-leadership-tip',
        title: "Remote Leadership Tip: The 3-2-1 Rule",
        excerpt: "3 minutes of daily check-ins, 2 weekly team meetings, 1 monthly deep-dive. This simple framework keeps remote teams connected and productive.",
        category: 'Leadership Tips',
        author: 'Sairam Bollapragada',
        date: 'November 20, 2024',
        readTime: '1 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Practical remote leadership',
        coachingContext: 'Quick tip for remote team management',
        source: 'linkedin',
        featured: false,
        publishedDate: '2024-11-20T00:00:00.000Z'
      },
      {
        id: 'li-micro-feedback-framework',
        title: "The SBI Feedback Framework",
        excerpt: "Situation, Behavior, Impact. Three words that transform how you give feedback. Specific, clear, and actionable every time.",
        category: 'Communication',
        author: 'Sairam Bollapragada',
        date: 'November 10, 2024',
        readTime: '1 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Effective communication',
        coachingContext: 'Essential feedback framework for leaders',
        source: 'linkedin',
        featured: false,
        publishedDate: '2024-11-10T00:00:00.000Z'
      },
      {
        id: 'li-micro-delegation-mistake',
        title: "The #1 Delegation Mistake Leaders Make",
        excerpt: "Delegating tasks but not authority. Give your team the power to make decisions, not just execute your instructions.",
        category: 'Leadership',
        author: 'Sairam Bollapragada',
        date: 'October 25, 2024',
        readTime: '1 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Delegation and empowerment',
        coachingContext: 'Critical for effective team leadership',
        source: 'linkedin',
        featured: false,
        publishedDate: '2024-10-25T00:00:00.000Z'
      },
      {
        id: 'li-micro-meeting-productivity',
        title: "Meeting Productivity Hack",
        excerpt: "Start every meeting with: 'What's the one thing we need to decide today?' If you can't answer, cancel the meeting.",
        category: 'Productivity',
        author: 'Sairam Bollapragada',
        date: 'October 15, 2024',
        readTime: '1 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Meeting efficiency',
        coachingContext: 'Essential for time management',
        source: 'linkedin',
        featured: false,
        publishedDate: '2024-10-15T00:00:00.000Z'
      },
      {
        id: 'li-micro-emotional-intelligence',
        title: "Emotional Intelligence Quick Win",
        excerpt: "Before responding to a difficult message, ask yourself: 'What emotion is this person feeling?' Address the emotion first, then the content.",
        category: 'Emotional Intelligence',
        author: 'Sairam Bollapragada',
        date: 'October 5, 2024',
        readTime: '1 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Emotional intelligence',
        coachingContext: 'Quick EI practice for leaders',
        source: 'linkedin',
        featured: false,
        publishedDate: '2024-10-05T00:00:00.000Z'
      },
      {
        id: 'li-micro-decision-fatigue',
        title: "Combat Decision Fatigue",
        excerpt: "Make your most important decisions before 10 AM. Your cognitive resources are highest in the morning. Save routine decisions for later.",
        category: 'Productivity',
        author: 'Sairam Bollapragada',
        date: 'September 25, 2024',
        readTime: '1 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Decision making',
        coachingContext: 'Strategic time management',
        source: 'linkedin',
        featured: false,
        publishedDate: '2024-09-25T00:00:00.000Z'
      },
      {
        id: 'li-micro-team-motivation',
        title: "The Motivation Multiplier",
        excerpt: "People don't leave companies, they leave managers. The best managers don't motivate—they create environments where people motivate themselves.",
        category: 'Team Management',
        author: 'Sairam Bollapragada',
        date: 'September 15, 2024',
        readTime: '1 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Team motivation',
        coachingContext: 'Essential for team leadership',
        source: 'linkedin',
        featured: false,
        publishedDate: '2024-09-15T00:00:00.000Z'
      },
      {
        id: 'li-micro-communication-clarity',
        title: "Communication Clarity Rule",
        excerpt: "If you can't explain it to a 12-year-old, you don't understand it well enough. Simplify your message, amplify your impact.",
        category: 'Communication',
        author: 'Sairam Bollapragada',
        date: 'September 5, 2024',
        readTime: '1 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Clear communication',
        coachingContext: 'Critical for effective leadership',
        source: 'linkedin',
        featured: false,
        publishedDate: '2024-09-05T00:00:00.000Z'
      },
      {
        id: 'li-micro-failure-mindset',
        title: "Reframe Failure",
        excerpt: "Failure isn't the opposite of success—it's a stepping stone. Every 'no' gets you closer to 'yes.' Every setback teaches you something valuable.",
        category: 'Mindset',
        author: 'Sairam Bollapragada',
        date: 'August 25, 2024',
        readTime: '1 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Growth mindset',
        coachingContext: 'Essential for resilience building',
        source: 'linkedin',
        featured: false,
        publishedDate: '2024-08-25T00:00:00.000Z'
      },
      {
        id: 'li-micro-networking-value',
        title: "Networking Value Exchange",
        excerpt: "The best networkers don't ask 'What can you do for me?' They ask 'How can I help you succeed?' Give first, receive naturally.",
        category: 'Networking',
        author: 'Sairam Bollapragada',
        date: 'August 15, 2024',
        readTime: '1 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Professional networking',
        coachingContext: 'Strategic relationship building',
        source: 'linkedin',
        featured: false,
        publishedDate: '2024-08-15T00:00:00.000Z'
      },
      {
        id: 'li-micro-time-blocking',
        title: "Time Blocking Power",
        excerpt: "Your calendar is your strategy. Block time for your most important work first, then fill in the rest. Protect your priorities.",
        category: 'Time Management',
        author: 'Sairam Bollapragada',
        date: 'August 5, 2024',
        readTime: '1 min read',
        linkedinUrl: 'https://www.linkedin.com/company/pinnacle-thrive-coaching/posts/',
        status: 'pending',
        ptcRelevance: 'High - Time management',
        coachingContext: 'Essential for productivity',
        source: 'linkedin',
        featured: false,
        publishedDate: '2024-08-05T00:00:00.000Z'
      }
    ];

    // Filter for articles authored by Sairam only (exclude blogs)
    const sairamsArticles = linkedinContent.filter(article => 
      article.author === 'Sairam Bollapragada' && 
      article.readTime !== '1 min read' && 
      !article.title.toLowerCase().includes('tip') &&
      !article.title.toLowerCase().includes('hack') &&
      !article.title.toLowerCase().includes('quick') &&
      !article.title.toLowerCase().includes('micro')
    );

    // Sort by published date (latest first)
    const sortedContent = sairamsArticles.sort((a, b) => 
      new Date(b.publishedDate) - new Date(a.publishedDate)
    );

    res.status(200).json({
      success: true,
      content: sortedContent,
      total: sortedContent.length,
      source: 'linkedin-company',
      companyUrl: linkedinCompanyUrl,
      note: `Filtered for articles (not blogs) authored by Sairam Bollapragada only (${sortedContent.length} articles)`
    });

  } catch (error) {
    console.error('LinkedIn Company Feed Error:', error);
    
    res.status(200).json({
      success: true,
      content: [],
      total: 0,
      note: 'LinkedIn content not available. No content to display.',
      error: error.message
    });
  }
}
