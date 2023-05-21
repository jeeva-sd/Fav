/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  hideSourceMaps: true,
  devtool: 'hidden-source-map',
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    SITE_URL: process.env.SITE_URL,
    SITE_SHORT_URL: process.env.SITE_SHORT_URL,
    APP_NAME: process.env.APP_NAME,
    APP_MODE: process.env.APP_MODE,
  },
  images: {
    domains: ['tailwindui.com','media.ssyoutube.com', 'flowbite.s3.amazonaws.com'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  sw: 'service-worker.js',
});

module.exports = withPWA(nextConfig);
