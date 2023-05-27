const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const withImages = require('next-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    SITE_URL: process.env.SITE_URL,
    SITE_SHORT_URL: process.env.SITE_SHORT_URL,
    APP_NAME: process.env.APP_NAME,
    APP_MODE: process.env.APP_MODE,
  },
  images: {
    domains: [],
    deviceSizes: [320, 640, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96],
  },
  webpack(config, { dev, isServer }) {
    if (dev && !isServer)  config.plugins.push(new ForkTsCheckerWebpackPlugin());
    return config;
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  sw: 'service-worker.js',
});

module.exports = withPWA(withImages(nextConfig));