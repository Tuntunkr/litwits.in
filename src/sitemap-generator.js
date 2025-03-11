const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/group-session', changefreq: 'weekly', priority: 0.8 },
  { url: '/individual-session', changefreq: 'weekly', priority: 0.8 },
  { url: '/membership', changefreq: 'monthly', priority: 0.6 },
  { url: '/college-counseling', changefreq: 'monthly', priority: 0.6 },
  { url: '/contact-us', changefreq: 'monthly', priority: 0.5 },
  { url: '/refund-policy', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms-and-conditions', changefreq: 'yearly', priority: 0.3 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
];

const stream = new SitemapStream({ hostname: 'https://litwits.in' });

streamToPromise(require('stream').Readable.from(links).pipe(stream)).then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
  console.log('✅ Sitemap generated successfully!');
});
