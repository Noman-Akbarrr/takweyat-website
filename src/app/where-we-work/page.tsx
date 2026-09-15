import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, DonationCTA } from "@/components/ui";
import { countries } from "@/lib/data/countries";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Where We Work",
  description: "Takweyat Foundation operates across 5 countries, bringing education, food, healthcare, and hope to communities in need.",
};

export default function WhereWeWorkPage() {
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
              <div className="text-4xl font-bold text-primary">5</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider mt-1">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">215+</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">46,000+</div>
              <div className="text-sm text-text-secondary uppercase tracking-wider mt-1">People Reached</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Countries Grid */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            badge="Our Locations"
            title="5 Countries. One Mission."
            subtitle="Takweyat Foundation operates across 5 countries, working with local communities to provide education, food, healthcare, and hope where it's needed most."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/where-we-work/${country.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                    {country.name}
                  </h3>
                  <p className="mt-2 text-text-secondary text-sm line-clamp-2">
                    {country.description}
                  </p>
                  <div className="mt-4 text-primary font-semibold text-sm flex items-center gap-2">
                    Explore
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
