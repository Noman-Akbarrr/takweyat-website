export const countries = [
  {
    name: "Pakistan",
    slug: "pakistan",
    description: "Takweyat Foundation is headquartered in Rawalpindi, Pakistan. We work with communities across the country to provide education, food, healthcare, and hope where it's needed most.",
    impact: { people: 25000, projects: 120, communities: 50 },
    programs: ["education-for-all", "hunger-relief-food-distribution", "medical-aid-healthcare", "orphan-widow-assistance"],
    coordinates: { lat: 33.6844, lng: 73.0479 },
  },
  {
    name: "Palestine",
    slug: "palestine",
    description: "We stand with the people of Palestine, providing humanitarian aid, food distribution, and advocacy support during one of the most challenging periods in their history.",
    impact: { people: 10000, projects: 45, communities: 20 },
    programs: ["hunger-relief-food-distribution", "social-justice-advocacy", "medical-aid-healthcare"],
    coordinates: { lat: 31.9522, lng: 35.2332 },
  },
  {
    name: "Sudan",
    slug: "sudan",
    description: "In Sudan, we provide emergency relief and humanitarian aid to communities affected by conflict and displacement, working to restore hope and dignity.",
    impact: { people: 8000, projects: 35, communities: 15 },
    programs: ["hunger-relief-food-distribution", "medical-aid-healthcare", "orphan-widow-assistance"],
    coordinates: { lat: 15.5007, lng: 32.5599 },
  },
  {
    name: "United Kingdom",
    slug: "uk",
    description: "Our UK operations focus on community engagement, fundraising, and raising awareness about global humanitarian issues among the diaspora community.",
    impact: { people: 2000, projects: 10, communities: 5 },
    programs: ["social-justice-advocacy"],
    coordinates: { lat: 55.3781, lng: -3.436 },
  },
  {
    name: "Norway",
    slug: "norway",
    description: "In Norway, we work to build partnerships, engage with the Nordic community, and support global humanitarian efforts through advocacy and fundraising.",
    impact: { people: 1000, projects: 5, communities: 3 },
    programs: ["social-justice-advocacy"],
    coordinates: { lat: 60.472, lng: 8.4689 },
  },
];

export function getCountryBySlug(slug: string) {
  return countries.find((c) => c.slug === slug);
}

export function getAllCountrySlugs() {
  return countries.map((c) => c.slug);
}
