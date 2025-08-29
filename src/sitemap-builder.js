require('babel-register');
const Sitemap = require('react-router-sitemap').default;
const path = require('path');

// Define your site's routes
const paths = [
  "/",
  "/sessions",
  "/membership",
  "/college-counseling",
  "/contact-us",
  "/refund-policy",
  "/terms-and-conditions",
  "/privacy-policy",
  "/blog",
  "/BlogDetails/:id" // Dynamic route
];

// Replace dynamic parameters with example values
const paramsConfig = {
  "/BlogDetails/:id": [{ id: "1" }, { id: "2" }, { id: "3" }] // Example blog IDs
};

// Generate and save sitemap
new Sitemap(paths)
  .applyParams(paramsConfig)
  .build("https://litwits.in") // Replace with your actual domain
  .save(path.join(__dirname, "public", "sitemap.xml"));

console.log("✅ Sitemap successfully generated at public/sitemap.xml");
