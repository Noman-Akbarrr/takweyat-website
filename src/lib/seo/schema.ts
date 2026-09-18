export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Takweyat Foundation",
  url: "https://takweyat.org",
  logo: "https://takweyat.org/logo.png",
  description:
    "Takweyat Foundation is a non-profit charitable organization working across 5 countries to provide education, food, healthcare, and hope where it's needed most.",
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main G.T. Road, Rawalpindi, High Court Road, Office No. 8",
    addressLocality: "Rawalpindi",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-314-5217958",
    contactType: "customer service",
    email: "info@takweyat.org",
  },
  sameAs: [
    "https://www.facebook.com/share/18W5ghRAB6/",
    "https://www.instagram.com/takweyat",
    "https://x.com/takweyat",
    "https://www.linkedin.com/company/takweyat-foundation/",
  ],
  areaServed: [
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "Palestine" },
    { "@type": "Country", name: "Sudan" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Norway" },
  ],
  knowsAbout: [
    "Education",
    "Humanitarian Aid",
    "Hunger Relief",
    "Medical Aid",
    "Social Justice",
    "Community Development",
    "Orphan Support",
    "Zakat",
    "Sadaqah",
  ],
};

export function generateArticleSchema(story: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.excerpt,
    url: `https://takweyat.org/stories/${story.slug}`,
    datePublished: story.publishedAt,
    author: {
      "@type": "Organization",
      name: "Takweyat Foundation",
    },
    publisher: {
      "@type": "Organization",
      name: "Takweyat Foundation",
      logo: {
        "@type": "ImageObject",
        url: "https://takweyat.org/logo.png",
      },
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://takweyat.org${item.url}`,
    })),
  };
}

export function generateProgramSchema(program: {
  title: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NonprofitType",
    name: program.title,
    description: program.description,
    url: `https://takweyat.org/our-work/${program.slug}`,
    provider: {
      "@type": "NGO",
      name: "Takweyat Foundation",
    },
  };
}

export function generateCountrySchema(country: {
  name: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${country.name} - Takweyat Foundation`,
    description: country.description,
    url: `https://takweyat.org/our-impact`,
    containedInPlace: {
      "@type": "Country",
      name: country.name,
    },
  };
}
