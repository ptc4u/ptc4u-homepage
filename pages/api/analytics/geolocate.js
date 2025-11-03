/**
 * API route to get geolocation data from IP address
 * Uses free ip-api.com service (no API key required for basic usage)
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { ip } = req.body;

    if (!ip || ip === 'unknown' || ip === '::1' || ip === '127.0.0.1') {
      return res.status(200).json({
        country: 'Unknown',
        countryCode: 'XX',
        region: 'Unknown',
        city: 'Unknown',
        lat: null,
        lon: null,
        isp: 'Unknown',
      });
    }

    // Extract IP if it's comma-separated (from x-forwarded-for)
    const clientIp = ip.includes(',') ? ip.split(',')[0].trim() : ip;

    // Use ip-api.com free service (max 45 requests/minute)
    // Documentation: http://ip-api.com/docs/json
    const response = await fetch(`http://ip-api.com/json/${clientIp}?fields=status,message,country,countryCode,region,regionName,city,lat,lon,timezone,isp,query`);
    const data = await response.json();

    if (data.status === 'fail') {
      // Return unknown if lookup fails
      return res.status(200).json({
        country: 'Unknown',
        countryCode: 'XX',
        region: 'Unknown',
        city: 'Unknown',
        lat: null,
        lon: null,
        isp: 'Unknown',
      });
    }

    return res.status(200).json({
      country: data.country || 'Unknown',
      countryCode: data.countryCode || 'XX',
      region: data.regionName || data.region || 'Unknown',
      city: data.city || 'Unknown',
      lat: data.lat || null,
      lon: data.lon || null,
      timezone: data.timezone || null,
      isp: data.isp || 'Unknown',
    });
  } catch (error) {
    console.error('Geolocation error:', error);
    // Return unknown on error
    return res.status(200).json({
      country: 'Unknown',
      countryCode: 'XX',
      region: 'Unknown',
      city: 'Unknown',
      lat: null,
      lon: null,
      isp: 'Unknown',
    });
  }
}

