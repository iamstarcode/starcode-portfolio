//const withTwin = require('./withTwin.js');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  //...withTwin,
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  transpilePackages: ['antd'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
      },
    ],
  },
});

/* module.exports = withTwin({
  reactStrictMode: false,
  swcMinify: true,
  experimental: { appDir: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
}) */

/**
 * @type {import('next').NextConfig}
 */
/* module.exports = withTwin({
  reactStrictMode: false,
  swcMinify: true,
  experimental: { appDir: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
}); */
