import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, DonationCTA, CountryCard } from "@/components/ui";
import { getCountries, getGlobalSettings } from "@/lib/cms";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Where We Work",
  description: "Takweyat Foundation operates across 5 countries, bringing education, food, healthcare, and hope to communities in need.",
};

export default async function WhereWeWorkPage() {
  const [countries, globalSettings] = await Promise.all([
    getCountries(),
    getGlobalSettings(),
  ]);

  const stats = globalSettings?.impactStats || {
    countries: 5,
    projects: 215,
    peopleReached: 46000,
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Where We Work", url: "/where-we-work" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            Where We Work
          </h1>
          <nav aria-label="breadcrumb" className="animate-slide-in-down">
            <ol className="flex justify-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li className="text-primary">Where We Work</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Stats */}
      <Section className="py-12 bg-surface border-b border-border-light">
        <Container>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{stats.countries || 5}</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider mt-1 font-semibold">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{stats.projects || 215}+</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider mt-1 font-semibold">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">
                {stats.peopleReached ? (stats.peopleReached / 1000).toFixed(0) + "K+" : "46,000+"}
              </div>
              <div className="text-sm text-text-secondary uppercase tracking-wider mt-1 font-semibold">People Reached</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Countries Grid */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            badge="Our Locations"
            title="5 Regions. One Unified Humanitarian Mission."
            subtitle="Takweyat Foundation operates across 5 countries, working with local communities to provide education, nutrition, healthcare, and emergency assistance where it's needed most."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country) => (
              <CountryCard
                key={country.slug}
                name={country.name}
                slug={country.slug}
                description={country.description}
                imageUrl={country.heroImage || undefined}
              />
            ))}
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
