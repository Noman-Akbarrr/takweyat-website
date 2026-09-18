import { MetadataRoute } from "next";

const BASE_URL = "https://takweyat.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/our-work`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/our-impact`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/stories`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE_URL}/get-involved`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/get-involved/donate`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/who-we-are`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/mission`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/approach`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about/team`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/about/partners`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/about/transparency`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const programs = [
    "education-for-all",
    "financial-support-livelihoods",
    "social-justice-advocacy",
    "medical-aid-healthcare",
    "hunger-relief-food-distribution",
    "orphan-widow-assistance",
  ];

  const campaigns = [
    "education",
    "food",
    "medical",
    "orphans",
    "social-justice",
    "emergency",
  ];

  const stories = [
    "relentless-force-for-social-justice",
    "feeding-hope-takweyats-mission-to-nourish-lives",
    "revolutionizing-education-the-takweyat-vision",
    "medical-camps-bringing-healthcare-to-remote-communities",
    "supporting-orphans-building-futures-with-dignity",
    "emergency-relief-responding-to-crisis-in-sudan",
  ];

  const programPages = programs.map((slug) => ({
    url: `${BASE_URL}/our-work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const campaignPages = campaigns.map((slug) => ({
    url: `${BASE_URL}/campaigns/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const storyPages = stories.map((slug) => ({
    url: `${BASE_URL}/stories/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...programPages,
    ...campaignPages,
    ...storyPages,
  ];
}
