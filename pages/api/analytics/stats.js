import fs from 'fs';
import path from 'path';

const ANALYTICS_FILE = path.join(process.cwd(), 'analytics-data.json');

/**
 * API route to get analytics statistics and aggregated data
 */
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let analyticsData = {
      pageViews: [],
      events: [],
      lastUpdated: new Date().toISOString(),
    };

    if (fs.existsSync(ANALYTICS_FILE)) {
      const data = fs.readFileSync(ANALYTICS_FILE, 'utf8');
      analyticsData = JSON.parse(data);
    }

    // Calculate statistics
    const stats = await calculateStats(analyticsData);

    return res.status(200).json(stats);
  } catch (error) {
    console.error('Analytics stats error:', error);
    return res.status(500).json({ error: 'Failed to get analytics stats' });
  }
}

async function calculateStats(analyticsData) {
  const pageViews = analyticsData.pageViews || [];
  const events = analyticsData.events || [];

  // Get date range
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const last7Days = new Date(today);
  last7Days.setDate(last7Days.getDate() - 7);
  const last30Days = new Date(today);
  last30Days.setDate(last30Days.getDate() - 30);

  // Filter by date
  const filterByDate = (items, startDate) => {
    return items.filter((item) => new Date(item.timestamp) >= startDate);
  };

  // Page views by path
  const pageViewsByPath = {};
  pageViews.forEach((view) => {
    const path = view.path || '/';
    pageViewsByPath[path] = (pageViewsByPath[path] || 0) + 1;
  });

  // Top pages
  const topPages = Object.entries(pageViewsByPath)
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Unique sessions
  const uniqueSessions = new Set(pageViews.map((view) => view.sessionId)).size;

  // Referrers
  const referrers = {};
  pageViews.forEach((view) => {
    const referrer = view.referrer || 'direct';
    referrers[referrer] = (referrers[referrer] || 0) + 1;
  });

  const topReferrers = Object.entries(referrers)
    .map(([referrer, count]) => ({ referrer, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Device types (basic detection)
  const deviceTypes = { desktop: 0, mobile: 0, tablet: 0 };
  pageViews.forEach((view) => {
    const ua = (view.userAgent || '').toLowerCase();
    if (/tablet|ipad|playbook|silk/.test(ua)) {
      deviceTypes.tablet++;
    } else if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/.test(ua)) {
      deviceTypes.mobile++;
    } else {
      deviceTypes.desktop++;
    }
  });

  // Browser detection (basic)
  const browsers = {};
  pageViews.forEach((view) => {
    const ua = view.userAgent || '';
    let browser = 'unknown';
    if (ua.includes('Chrome') && !ua.includes('Edg')) browser = 'Chrome';
    else if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
    else if (ua.includes('Edg')) browser = 'Edge';
    else if (ua.includes('Opera')) browser = 'Opera';
    browsers[browser] = (browsers[browser] || 0) + 1;
  });

  const topBrowsers = Object.entries(browsers)
    .map(([browser, count]) => ({ browser, count }))
    .sort((a, b) => b.count - a.count);

  // Scroll depth events
  const scrollEvents = events.filter((e) => e.event === 'scroll');
  const scrollDepthStats = {
    25: scrollEvents.filter((e) => e.scrollDepth === 25).length,
    50: scrollEvents.filter((e) => e.scrollDepth === 50).length,
    75: scrollEvents.filter((e) => e.scrollDepth === 75).length,
    100: scrollEvents.filter((e) => e.scrollDepth === 100).length,
  };

  // Time-based stats
  const todayViews = filterByDate(pageViews, today).length;
  const yesterdayViews = filterByDate(pageViews, yesterday).length;
  const last7DaysViews = filterByDate(pageViews, last7Days).length;
  const last30DaysViews = filterByDate(pageViews, last30Days).length;

  // Hourly distribution (last 24 hours)
  const hourlyViews = new Array(24).fill(0);
  const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  filterByDate(pageViews, last24Hours).forEach((view) => {
    const hour = new Date(view.timestamp).getHours();
    hourlyViews[hour]++;
  });

  // Enrich with geolocation data for views without it (limited to avoid rate limits)
  // This is a best-effort enrichment
  const enrichGeolocation = async (ip) => {
    if (!ip || ip === 'unknown' || ip === '::1' || ip === '127.0.0.1') {
      return null;
    }
    try {
      const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode,regionName,city,timezone`);
      const data = await response.json();
      if (data.status === 'success') {
        return {
          country: data.country || 'Unknown',
          countryCode: data.countryCode || 'XX',
          region: data.regionName || 'Unknown',
          city: data.city || 'Unknown',
          timezone: data.timezone || null,
        };
      }
    } catch (error) {
      // Silently fail
    }
    return null;
  };

  // Demographic data: Countries (use existing geo data or enrich)
  const countries = {};
  const countryCodes = {};
  
  // Process up to 50 views for geolocation enrichment (to avoid rate limits of 45/min)
  const viewsToEnrich = pageViews.slice(-50).filter((view) => !view.country && view.ip && view.ip !== 'unknown');
  
  for (const view of viewsToEnrich) {
    const geo = await enrichGeolocation(view.ip);
    if (geo) {
      view.country = geo.country;
      view.countryCode = geo.countryCode;
      view.city = geo.city;
      view.timezone = geo.timezone || view.timezone;
    }
  }

  pageViews.forEach((view) => {
    const country = view.country || 'Unknown';
    const code = view.countryCode || 'XX';
    countries[country] = (countries[country] || 0) + 1;
    countryCodes[code] = (countryCodes[code] || 0) + 1;
  });

  const topCountries = Object.entries(countries)
    .map(([country, count]) => ({ country, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);

  // Demographic data: Cities
  const cities = {};
  pageViews.forEach((view) => {
    const city = view.city || 'Unknown';
    const country = view.country || 'Unknown';
    const key = `${city}, ${country}`;
    cities[key] = (cities[key] || 0) + 1;
  });

  const topCities = Object.entries(cities)
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);

  // Demographic data: Languages
  const languages = {};
  pageViews.forEach((view) => {
    const lang = view.language || 'Unknown';
    // Extract primary language (e.g., "en-US" -> "en")
    const primaryLang = lang.split('-')[0] || lang;
    languages[primaryLang] = (languages[primaryLang] || 0) + 1;
  });

  const topLanguages = Object.entries(languages)
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Demographic data: Timezones
  const timezones = {};
  pageViews.forEach((view) => {
    const tz = view.timezone || 'Unknown';
    timezones[tz] = (timezones[tz] || 0) + 1;
  });

  const topTimezones = Object.entries(timezones)
    .map(([timezone, count]) => ({ timezone, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);

  // Screen resolutions
  const screenResolutions = {};
  pageViews.forEach((view) => {
    const width = view.screenWidth || 0;
    const height = view.screenHeight || 0;
    if (width && height) {
      // Categorize resolutions
      let category = 'Unknown';
      if (width >= 1920 && height >= 1080) {
        category = '1920x1080+ (Large Desktop)';
      } else if (width >= 1366 && height >= 768) {
        category = '1366x768-1920x1080 (Desktop)';
      } else if (width >= 1024 && height >= 768) {
        category = '1024x768-1366x768 (Tablet/Desktop)';
      } else if (width >= 768 && height >= 1024) {
        category = '768x1024-1024x768 (Tablet)';
      } else if (width < 768) {
        category = '<768 (Mobile)';
      }
      screenResolutions[category] = (screenResolutions[category] || 0) + 1;
    }
  });

  const topResolutions = Object.entries(screenResolutions)
    .map(([resolution, count]) => ({ resolution, count }))
    .sort((a, b) => b.count - a.count);

  return {
    summary: {
      totalPageViews: pageViews.length,
      uniqueSessions,
      totalEvents: events.length,
      lastUpdated: analyticsData.lastUpdated,
    },
    timeBased: {
      today: todayViews,
      yesterday: yesterdayViews,
      last7Days: last7DaysViews,
      last30Days: last30DaysViews,
      hourlyViews: hourlyViews.map((count, hour) => ({ hour, count })),
    },
    pages: {
      topPages,
      pageViewsByPath,
    },
    traffic: {
      topReferrers,
      directTraffic: referrers.direct || 0,
    },
    devices: {
      deviceTypes,
      topBrowsers,
    },
    engagement: {
      scrollDepth: scrollDepthStats,
    },
    demographics: {
      topCountries,
      topCities,
      topLanguages,
      topTimezones,
      screenResolutions: topResolutions,
    },
  };
}

