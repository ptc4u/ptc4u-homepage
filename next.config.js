/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for the redesign
  experimental: {
    // Add any experimental features you want to use in the redesign
  },
  
  // Environment-based configuration
  env: {
    // You can add environment variables here for different versions
    SITE_VERSION: process.env.SITE_VERSION || 'current',
    PORT: process.env.PORT || 3000,
  },
  
  // Webpack configuration for the redesign
  webpack: (config, { dev, isServer }) => {
    // Add any webpack customizations for the redesign here
    return config;
  },
  
  // Redirects and rewrites can be added here if needed
  async redirects() {
    return [
      // Add any redirects for the redesign here
    ];
  },
  
  // Headers for the redesign
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Site-Version',
            value: process.env.SITE_VERSION || 'current',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;