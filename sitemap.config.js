const outDir = 'public';
const sitemapBaseFileName = 'sitemap';
const siteUrl = process.env.SITE_URL || 'https://www.favinsta.com';
const generateRobotsTxt = true;
const generateIndexSitemap = false;

module.exports = {
  outDir,
  siteUrl,
  generateRobotsTxt,
  sitemapBaseFileName,
  generateIndexSitemap
};