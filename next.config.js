/**
 * @type {import('next').NextConfig}
 *
 * This configuration enables strict mode to surface potential issues
 * in development. It can be extended later to customize the Next.js
 * build further (e.g. enabling image domains, environment variables).
 */
const nextConfig = {
  reactStrictMode: true,
  // Layout optimization deployment - v2.0
  // Force production deployment with proper padding
};

module.exports = nextConfig;
