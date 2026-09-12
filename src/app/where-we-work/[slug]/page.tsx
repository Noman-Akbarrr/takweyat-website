import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, StatsCounter, DonationCTA, Breadcrumbs } from "@/components/ui";
import { getCountryBySlug, countries } from "@/lib/data/countries";
import { programs } from "@/lib/data/programs";
import { generateCountrySchema, generateBreadcrumbSchema } from "@/lib/seo/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return { title: "Country Not Found" };

  return {
    title: `Our Work in ${country.name}`,
    description: country.description,
  };
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = getCountryBySlug(slug);

  if (!country) {
    notFound();
  }

  const countryPrograms = programs.filter((p) =>
    country && country.programs.includes(p.slug)
  );

  const countrySchema = generateCountrySchema(country);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Where We Work", url: "/where-we-work" },
    { name: country.name, url: `/where-we-work/${country.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(countrySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Breadcrumbs
                items={[
                  { label: "Where We Work", href: "/where-we-work" },
                  { label: country.name },
                ]}
              />
              <h1 className="text-4xl md:text-5xl font-bold text-text-inverse">
                Our Work in {country.name}
              </h1>
              <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
                {country.description}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="grid grid-cols-3 gap-6">
                <StatsCounter
                  value={country.impact.people.toLocaleString()}
                  label="People Reached"
                />
                <StatsCounter
                  value={country.impact.projects.toString()}
                  label="Projects"
                />
                <StatsCounter
                  value={country.impact.communities.toString()}
                  label="Communities"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Programs */}
      {countryPrograms.length > 0 && (
        <Section>
          <Container>
            <h2 className="text-3xl font-bold text-text-primary mb-8">
              Our Programs in {country.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countryPrograms.map((program) => (
                <Link
                  key={program.slug}
                  href={`/our-work/${program.slug}`}
                  className="group bg-surface rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border-light hover:border-primary/30"
                >
                  <div className="text-3xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-text-secondary text-sm line-clamp-2">
                    {program.description}
                  </p>
                  <div className="mt-4 text-primary font-semibold text-sm flex items-center gap-2">
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Map Placeholder */}
      <Section className="bg-surface-elevated">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              {country.name} at a Glance
            </h2>
            <div className="bg-surface rounded-2xl p-8 text-center">
              <div className="aspect-[2/1] bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl flex items-center justify-center">
                <div>
                  <div className="text-4xl mb-4">📍</div>
                  <p className="text-text-muted">{country.name} Map View</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Other Countries */}
      <Section>
        <Container>
          <h2 className="text-3xl font-bold text-text-primary mb-8">
            Other Countries
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countries
              .filter((c) => c.slug !== country.slug)
              .slice(0, 4)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/where-we-work/${c.slug}`}
                  className="group flex flex-col items-center justify-center h-32 bg-surface-elevated rounded-xl hover:bg-primary/10 transition-colors border border-border-light"
                >
                  <div className="w-3 h-3 bg-primary rounded-full mb-2 group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {c.name}
                  </span>
                </Link>
              ))}
          </div>
        </Container>
      </Section>

      <DonationCTA
        title={`Support Our Work in ${country.name}`}
        description={`Your donation helps us continue our work in ${country.name}, providing education, food, healthcare, and hope to communities in need.`}
        buttonText={`Donate to ${country.name}`}
        buttonHref="/get-involved/donate"
      />
    </>
  );
}
