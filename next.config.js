/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Environment variables
  env: {
    SITE_VERSION: process.env.SITE_VERSION || 'current',
  },

  // Image optimization
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
