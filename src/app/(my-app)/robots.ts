export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/donate/thank-you"],
      },
    ],
    sitemap: "https://takweyat.org/sitemap.xml",
  };
}
