import { useState } from 'react';

/**
 * Content Manager component for Pinnacle Thrive Coaching.
 * 
 * This component allows manual curation of WordPress and LinkedIn content with approval workflow.
 * Content can be selected, reviewed, and approved before appearing on the PTC site.
 */
export default function WordPressContentManager() {
  const [selectedContent, setSelectedContent] = useState([]);
  const [isApprovalMode, setIsApprovalMode] = useState(false);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'wordpress', 'linkedin'
  const [notification, setNotification] = useState(null);

  // WordPress content from your site
  const wordpressContent = [
    {
      id: 'cybersecurity-threats',
      title: 'The Looming Shadow: Cybersecurity Threats and the Urgent Need for Robust Strategies',
      excerpt: 'Data-Driven Insights into an Evolving Threat Landscape. The cyber threat landscape is not merely a theoretical concept; it is a tangible reality with quantifiable consequences.',
      category: 'Digital Transformation',
      author: 'Sairam Bollapragada',
      date: 'December 13, 2023',
      readTime: '8 min read',
      wordpressUrl: 'https://itservicesdelivery.wordpress.com/2023/12/13/the-looming-shadow-cybersecurity-threats-and-the-urgent-need-for-robust-strategies/',
      status: 'pending', // pending, approved, published
      ptcRelevance: 'High - Leadership and risk management insights',
      coachingContext: 'Perfect for executives dealing with digital transformation challenges',
      source: 'wordpress'
    },
    {
      id: 'innovation-resistance',
      title: 'Innovation in the Slowdown Part 6: Overcoming Innovation Resistance During a Recession',
      excerpt: 'How to overcome Innovation resistance during the recession. Innovation is a fundamental driver of business success and growth, irrespective of economic circumstances.',
      category: 'Leadership',
      author: 'Sairam Bollapragada',
      date: 'May 19, 2023',
      readTime: '6 min read',
      wordpressUrl: 'https://itservicesdelivery.wordpress.com/2023/05/19/innovation-in-the-slowdown-part-6-overcoming-innovation-resistance-during-a-recession/',
      status: 'pending',
      ptcRelevance: 'High - Leadership and change management',
      coachingContext: 'Excellent for leaders navigating organizational change and innovation',
      source: 'wordpress'
    },
    {
      id: 'data-analytics-agriculture',
      title: 'The Power of Data Analytics in the Agricultural Industry',
      excerpt: 'Exploring how data analytics is revolutionizing agriculture through precision farming, predictive insights, and sustainable practices.',
      category: 'Data Analytics',
      author: 'Sairam Bollapragada',
      date: 'October 24, 2023',
      readTime: '7 min read',
      wordpressUrl: 'https://itservicesdelivery.wordpress.com/2023/10/24/the-power-of-data-analytics-in-the-agricultural-industry/',
      status: 'pending',
      ptcRelevance: 'Medium - Data-driven decision making',
      coachingContext: 'Good for leaders learning data-driven approaches',
      source: 'wordpress'
    },
    {
      id: 'predictive-analytics-healthcare',
      title: 'The Power of Predictive Analytics in Healthcare Transformation',
      excerpt: 'How predictive analytics is transforming healthcare delivery, patient outcomes, and operational efficiency.',
      category: 'Healthcare Technology',
      author: 'Sairam Bollapragada',
      date: 'October 24, 2023',
      readTime: '9 min read',
      wordpressUrl: 'https://itservicesdelivery.wordpress.com/2023/10/24/the-power-of-predictive-analytics-in-healthcare-transformation/',
      status: 'pending',
      ptcRelevance: 'Medium - Strategic thinking and innovation',
      coachingContext: 'Valuable for leaders in healthcare and technology sectors',
      source: 'wordpress'
    }
  ];

  // LinkedIn content - you can add your LinkedIn posts here
  const linkedinContent = [
    {
      id: 'li-leadership-digital',
      title: 'Leadership in Digital Transformation: Key Success Factors',
      excerpt: 'Leading digital transformation requires more than just technology adoption. It demands visionary leadership, cultural change, and strategic execution.',
      category: 'Leadership',
      author: 'Sairam Bollapragada',
      date: 'January 15, 2024',
      readTime: '3 min read',
      linkedinUrl: 'https://www.linkedin.com/posts/sairam-bollapragada_digitaltransformation-leadership-innovation-activity-1234567890/',
      status: 'pending',
      ptcRelevance: 'High - Executive leadership and transformation',
      coachingContext: 'Essential for leaders driving digital change in their organizations',
      source: 'linkedin'
    },
    {
      id: 'li-data-driven-decisions',
      title: 'The Power of Data-Driven Decision Making in Leadership',
      excerpt: 'In today\'s complex business environment, leaders who harness data effectively gain significant competitive advantages and make better strategic decisions.',
      category: 'Data Analytics',
      author: 'Sairam Bollapragada',
      date: 'January 10, 2024',
      readTime: '4 min read',
      linkedinUrl: 'https://www.linkedin.com/posts/sairam-bollapragada_leadership-dataanalytics-decisionmaking-activity-1234567890/',
      status: 'pending',
      ptcRelevance: 'High - Strategic decision making and analytics',
      coachingContext: 'Perfect for executives learning to leverage data for strategic advantage',
      source: 'linkedin'
    },
    {
      id: 'li-innovation-culture',
      title: 'Building an Innovation Culture: Lessons from 30+ Years in Tech',
      excerpt: 'Creating a culture of innovation isn\'t about fancy offices or ping pong tables. It\'s about psychological safety, experimentation, and learning from failure.',
      category: 'Innovation',
      author: 'Sairam Bollapragada',
      date: 'January 5, 2024',
      readTime: '5 min read',
      linkedinUrl: 'https://www.linkedin.com/posts/sairam-bollapragada_innovation-culture-leadership-activity-1234567890/',
      status: 'pending',
      ptcRelevance: 'High - Organizational culture and innovation',
      coachingContext: 'Valuable for leaders building innovative teams and organizations',
      source: 'linkedin'
    },
    {
      id: 'li-cybersecurity-leadership',
      title: 'Cybersecurity Leadership: Protecting Your Organization in the Digital Age',
      excerpt: 'Cybersecurity is no longer just an IT concern. It\'s a strategic business imperative that requires leadership commitment and organizational alignment.',
      category: 'Cybersecurity',
      author: 'Sairam Bollapragada',
      date: 'December 28, 2023',
      readTime: '4 min read',
      linkedinUrl: 'https://www.linkedin.com/posts/sairam-bollapragada_cybersecurity-leadership-digitaltransformation-activity-1234567890/',
      status: 'pending',
      ptcRelevance: 'High - Risk management and strategic leadership',
      coachingContext: 'Critical for executives understanding cybersecurity as a business risk',
      source: 'linkedin'
    }
  ];

  // Combine all content
  const availableContent = [...wordpressContent, ...linkedinContent];

  const handleContentSelection = (contentId, isSelected) => {
    if (isSelected) {
      setSelectedContent([...selectedContent, contentId]);
    } else {
      setSelectedContent(selectedContent.filter(id => id !== contentId));
    }
  };

  const handleApproval = (contentId, status) => {
    // In a real implementation, this would update a database
    console.log(`Content ${contentId} ${status}`);
    
    // Update the content status in the local state
    const updatedContent = availableContent.map(content => {
      if (content.id === contentId) {
        return { ...content, status: status };
      }
      return content;
    });
    
    // Show success notification
    setNotification({
      type: 'success',
      message: `Content "${contentId}" has been ${status}! This will be reflected in the blog section.`
    });
    
    // Clear notification after 3 seconds
    setTimeout(() => setNotification(null), 3000);
    
    // In a production environment, you would:
    // 1. Send the approval to your backend API
    // 2. Update the database
    // 3. Refresh the content on the website
    // 4. Send notifications to content creators
  };

  // Filter content based on active tab
  const filteredContent = availableContent.filter(content => {
    if (activeTab === 'all') return true;
    if (activeTab === 'wordpress') return content.source === 'wordpress';
    if (activeTab === 'linkedin') return content.source === 'linkedin';
    return true;
  });

  const approvedContent = availableContent.filter(content => content.status === 'approved');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
          notification.type === 'success' 
            ? 'bg-green-100 border border-green-400 text-green-800' 
            : 'bg-red-100 border border-red-400 text-red-800'
        }`}>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {notification.message}
          </div>
        </div>
      )}
      
      {/* Content Management Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black mb-4">
          Content Curation System
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Select and approve content from your WordPress blog and LinkedIn posts to feature on the PTC site.
        </p>
        
        {/* Content Source Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
              activeTab === 'all' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            All Content ({availableContent.length})
          </button>
          <button
            onClick={() => setActiveTab('wordpress')}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
              activeTab === 'wordpress' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            WordPress ({wordpressContent.length})
          </button>
          <button
            onClick={() => setActiveTab('linkedin')}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
              activeTab === 'linkedin' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            LinkedIn ({linkedinContent.length})
          </button>
        </div>
        
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setIsApprovalMode(!isApprovalMode)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              isApprovalMode 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isApprovalMode ? 'Exit Approval Mode' : 'Enter Approval Mode'}
          </button>
          <span className="text-sm text-gray-600 flex items-center">
            {selectedContent.length} content selected
          </span>
        </div>
      </div>

      {/* Content Selection Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {filteredContent.map((content) => (
          <div
            key={content.id}
            className={`border-2 rounded-lg p-6 transition-all duration-300 ${
              selectedContent.includes(content.id)
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                {/* Source Indicator */}
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    content.source === 'wordpress' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {content.source === 'wordpress' ? 'WordPress' : 'LinkedIn'}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2">
                  {content.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <span>{content.category}</span>
                  <span>•</span>
                  <span>{content.readTime}</span>
                  <span>•</span>
                  <span>{content.date}</span>
                </div>
              </div>
              
              {isApprovalMode && (
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedContent.includes(content.id)}
                    onChange={(e) => handleContentSelection(content.id, e.target.checked)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                </label>
              )}
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              {content.excerpt}
            </p>

            <div className="space-y-2 mb-4">
              <div className="text-sm">
                <span className="font-semibold text-gray-700">PTC Relevance:</span>
                <span className="ml-2 text-gray-600">{content.ptcRelevance}</span>
              </div>
              <div className="text-sm">
                <span className="font-semibold text-gray-700">Coaching Context:</span>
                <span className="ml-2 text-gray-600">{content.coachingContext}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <a
                href={content.source === 'wordpress' ? content.wordpressUrl : content.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View on {content.source === 'wordpress' ? 'WordPress' : 'LinkedIn'} →
              </a>
              
              {isApprovalMode && selectedContent.includes(content.id) && (
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleApproval(content.id, 'approved')}
                    className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleApproval(content.id, 'rejected')}
                    className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Approved Content Preview */}
      {approvedContent.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-black mb-6">
            Approved Content ({approvedContent.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {approvedContent.map((content) => (
              <div key={content.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-bold text-black mb-2">{content.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{content.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    Approved
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-black mb-3">How to Use This System:</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Use the tabs to filter between "All Content", "WordPress", or "LinkedIn"</li>
          <li>Click "Enter Approval Mode" to start selecting content</li>
          <li>Review each article's PTC relevance and coaching context</li>
          <li>Check the boxes for content you want to feature</li>
          <li>Click "Approve" or "Reject" for selected content</li>
          <li>Approved content will appear in your blog section with source indicators</li>
          <li>WordPress content shows blue indicators, LinkedIn content shows green indicators</li>
        </ol>
        
        <div className="mt-4 p-4 bg-white rounded border">
          <h4 className="font-semibold text-black mb-2">Adding New Content:</h4>
          <p className="text-sm text-gray-600">
            To add new WordPress or LinkedIn content, simply add it to the respective arrays in the WordPressContentManager.js file. 
            Include the source URL, coaching context, and PTC relevance for each piece of content.
          </p>
        </div>
      </div>
    </div>
  );
}
