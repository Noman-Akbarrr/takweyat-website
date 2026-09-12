import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, DonationCTA, Breadcrumbs } from "@/components/ui";
import { countries } from "@/lib/data/countries";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Where We Work",
  description: "Takweyat Foundation operates across 8 countries, bringing education, food, healthcare, and hope to communities in need.",
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24">
        <Container>
          <div className="max-w-3xl">
            <Breadcrumbs items={[{ label: "Where We Work" }]} />
            <p className="text-text-inverse/80 font-semibold uppercase tracking-wider mb-4">
              Where We Work
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse">
              8 Countries. One Mission.
            </h1>
            <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
              Takweyat Foundation operates across 8 countries, working with local communities to provide education, food, healthcare, and hope where it&apos;s needed most.
            </p>
          </div>
        </Container>
      </section>

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

      {/* World Map Placeholder */}
      <Section>
        <Container>
          <div className="bg-surface-elevated rounded-2xl p-8 md:p-16 text-center mb-16">
            <div className="aspect-[2/1] bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl flex items-center justify-center">
              <div>
                <div className="text-6xl mb-4">🌍</div>
                <p className="text-text-muted">Interactive World Map</p>
              </div>
            </div>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/where-we-work/${country.slug}`}
                className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border-light"
              >
                {/* Map Marker */}
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

                  {country.impact.projects > 0 && (
                    <div className="mt-4 flex gap-4 text-xs text-text-muted">
                      <span>{country.impact.projects} projects</span>
                      <span>·</span>
                      <span>{country.impact.people.toLocaleString()} people</span>
                    </div>
                  )}

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

      <DonationCTA
        title="Support Our Work Around the World"
        description="Your donation helps us maintain our presence in 8 countries, ensuring that communities receive the support they need."
        buttonText="Donate Now"
        buttonHref="/get-involved/donate"
      />
    </>
  );
}
