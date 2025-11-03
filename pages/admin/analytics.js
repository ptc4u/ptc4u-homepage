import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ImageWatermark from '../../components/ImageWatermark';

/**
 * Admin Analytics Dashboard page to view website analytics
 */
export default function AnalyticsDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const isAuth = sessionStorage.getItem('admin_authenticated') === 'true';
    const token = sessionStorage.getItem('admin_token');

    if (!isAuth || !token) {
      // Redirect to login if not authenticated
      router.push('/admin/login');
      return;
    }

    setAuthenticated(true);
    fetchAnalytics();
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchAnalytics, 30000);
    return () => clearInterval(interval);
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    sessionStorage.removeItem('admin_token');
    // Dispatch custom event to notify components of logout
    window.dispatchEvent(new Event('adminLogout'));
    router.push('/admin/login');
  };

  const fetchAnalytics = async () => {
    try {
      const response = await fetch('/api/analytics/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
        setError(null);
      } else {
        setError('Failed to load analytics');
      }
    } catch (err) {
      setError('Error fetching analytics');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <div className="flex items-center justify-center h-screen">
          <div className="text-gray-700">Checking authentication...</div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <div className="flex items-center justify-center h-screen">
          <div className="text-gray-700">Loading analytics...</div>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <div className="flex items-center justify-center h-screen">
          <div className="text-red-600">{error || 'No analytics data available'}</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Analytics Dashboard - Pinnacle Thrive Coaching</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-neutral-50 relative">
        <ImageWatermark />
        <NavBar />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
          <div className="mb-8 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Analytics Dashboard</h1>
              <p className="text-gray-600">Website traffic and user behavior insights</p>
              <p className="text-sm text-gray-500 mt-2">
                Last updated: {new Date(stats.summary.lastUpdated).toLocaleString()}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
            >
              Logout
            </button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-gray-600 text-sm mb-1">Total Page Views</div>
              <div className="text-3xl font-bold text-purple-800">
                {stats.summary.totalPageViews.toLocaleString()}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-gray-600 text-sm mb-1">Unique Sessions</div>
              <div className="text-3xl font-bold text-blue-800">
                {stats.summary.uniqueSessions.toLocaleString()}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-gray-600 text-sm mb-1">Today's Views</div>
              <div className="text-3xl font-bold text-green-800">
                {stats.timeBased.today.toLocaleString()}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-gray-600 text-sm mb-1">Last 30 Days</div>
              <div className="text-3xl font-bold text-indigo-800">
                {stats.timeBased.last30Days.toLocaleString()}
              </div>
            </div>
          </div>

          {/* Time-based Statistics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Page Views Over Time</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Yesterday</span>
                  <span className="font-semibold text-gray-800">{stats.timeBased.yesterday}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last 7 Days</span>
                  <span className="font-semibold text-gray-800">{stats.timeBased.last7Days}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last 30 Days</span>
                  <span className="font-semibold text-gray-800">{stats.timeBased.last30Days}</span>
                </div>
              </div>
            </div>

            {/* Hourly Distribution */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Hourly Traffic (Last 24h)</h2>
              <div className="space-y-1">
                {stats.timeBased.hourlyViews.map(({ hour, count }, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-sm text-gray-600 w-12">{hour}:00</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-4 mr-2">
                      <div
                        className="bg-purple-600 h-4 rounded-full"
                        style={{
                          width: `${Math.max((count / Math.max(...stats.timeBased.hourlyViews.map(h => h.count), 1)) * 100, 2)}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-800 w-8 text-right">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Pages */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Pages</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-4 text-gray-600">Page</th>
                    <th className="text-right py-2 px-4 text-gray-600">Views</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.pages.topPages.map((page, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-4">
                        <code className="text-purple-800">{page.path}</code>
                      </td>
                      <td className="py-2 px-4 text-right font-semibold">{page.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Referrers</h2>
              <div className="space-y-2">
                {stats.traffic.topReferrers.map((referrer, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700 truncate max-w-xs">
                      {referrer.referrer === 'direct' ? (
                        <span className="italic">Direct / No Referrer</span>
                      ) : (
                        referrer.referrer
                      )}
                    </span>
                    <span className="font-semibold text-gray-800">{referrer.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Types */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Device Types</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Desktop</span>
                    <span className="font-semibold">{stats.devices.deviceTypes.desktop}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${(stats.devices.deviceTypes.desktop / Math.max(stats.summary.totalPageViews, 1)) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Mobile</span>
                    <span className="font-semibold">{stats.devices.deviceTypes.mobile}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{
                        width: `${(stats.devices.deviceTypes.mobile / Math.max(stats.summary.totalPageViews, 1)) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-600">Tablet</span>
                    <span className="font-semibold">{stats.devices.deviceTypes.tablet}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{
                        width: `${(stats.devices.deviceTypes.tablet / Math.max(stats.summary.totalPageViews, 1)) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Browsers */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Browsers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.devices.topBrowsers.map((browser, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 rounded">
                  <div className="font-semibold text-gray-800 mb-1">{browser.browser}</div>
                  <div className="text-2xl font-bold text-purple-800">{browser.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Depth */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">User Engagement (Scroll Depth)</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded">
                <div className="text-sm text-gray-600 mb-1">25% Scrolled</div>
                <div className="text-2xl font-bold text-blue-800">
                  {stats.engagement.scrollDepth[25] || 0}
                </div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded">
                <div className="text-sm text-gray-600 mb-1">50% Scrolled</div>
                <div className="text-2xl font-bold text-green-800">
                  {stats.engagement.scrollDepth[50] || 0}
                </div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded">
                <div className="text-sm text-gray-600 mb-1">75% Scrolled</div>
                <div className="text-2xl font-bold text-yellow-800">
                  {stats.engagement.scrollDepth[75] || 0}
                </div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded">
                <div className="text-sm text-gray-600 mb-1">100% Scrolled</div>
                <div className="text-2xl font-bold text-purple-800">
                  {stats.engagement.scrollDepth[100] || 0}
                </div>
              </div>
            </div>
          </div>

          {/* Demographics Section */}
          {stats.demographics && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Demographic Data</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Top Countries */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Countries</h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {stats.demographics.topCountries && stats.demographics.topCountries.length > 0 ? (
                      stats.demographics.topCountries.map((country, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-700">{country.country}</span>
                          <span className="font-semibold text-purple-800">{country.count}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No country data available yet</p>
                    )}
                  </div>
                </div>

                {/* Top Cities */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Cities</h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {stats.demographics.topCities && stats.demographics.topCities.length > 0 ? (
                      stats.demographics.topCities.map((city, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-700 text-sm">{city.city}</span>
                          <span className="font-semibold text-purple-800">{city.count}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No city data available yet</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Top Languages */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Languages</h3>
                  <div className="space-y-3">
                    {stats.demographics.topLanguages && stats.demographics.topLanguages.length > 0 ? (
                      stats.demographics.topLanguages.map((lang, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-600 text-sm uppercase">{lang.language}</span>
                            <span className="font-semibold text-gray-800">{lang.count}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-indigo-600 h-2 rounded-full"
                              style={{
                                width: `${(lang.count / Math.max(stats.summary.totalPageViews, 1)) * 100}%`,
                              }}
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No language data available yet</p>
                    )}
                  </div>
                </div>

                {/* Top Timezones */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Timezones</h3>
                  <div className="space-y-2 max-h-80 overflow-y-auto">
                    {stats.demographics.topTimezones && stats.demographics.topTimezones.length > 0 ? (
                      stats.demographics.topTimezones.map((tz, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                          <span className="text-gray-700 text-sm">{tz.timezone}</span>
                          <span className="font-semibold text-purple-800">{tz.count}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No timezone data available yet</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Screen Resolutions */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Screen Resolutions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stats.demographics.screenResolutions && stats.demographics.screenResolutions.length > 0 ? (
                    stats.demographics.screenResolutions.map((res, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm text-gray-600 mb-2">{res.resolution}</div>
                        <div className="text-2xl font-bold text-purple-800">{res.count}</div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">No screen resolution data available yet</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

