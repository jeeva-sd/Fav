const outDir = 'public/route';
const sitemapBaseFileName = 'map';
const siteUrl = process.env.SITE_URL || 'https://favinsta.com';
const generateRobotsTxt = true;
const generateIndexSitemap = false;

module.exports = {
  outDir,
  siteUrl,
  generateRobotsTxt,
  sitemapBaseFileName,
  generateIndexSitemap
};