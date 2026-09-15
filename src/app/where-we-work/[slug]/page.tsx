import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, SectionHeading, StatsCounter, DonationCTA, ProgramCard } from "@/components/ui";
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

      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            Our Work in {country.name}
          </h1>
          <nav aria-label="breadcrumb" className="animate-slide-in-down">
            <ol className="flex justify-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li>
                <Link href="/where-we-work" className="text-white hover:text-primary transition-colors">
                  Where We Work
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li className="text-primary">{country.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Stats */}
      <Section className="py-12 bg-surface border-b border-border-light">
        <Container>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
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
        </Container>
      </Section>

      {/* About */}
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              badge={country.name}
              title={`Our Work in ${country.name}`}
              align="left"
            />
            <p className="text-text-secondary leading-relaxed text-lg">
              {country.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Programs */}
      {countryPrograms.length > 0 && (
        <Section className="bg-surface-elevated py-20">
          <Container>
            <SectionHeading
              badge="Programs"
              title={`Our Programs in ${country.name}`}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countryPrograms.map((program) => (
                <ProgramCard
                  key={program.slug}
                  title={program.title}
                  description={program.description}
                  href={`/our-work/${program.slug}`}
                  icon={program.icon}
                />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Other Countries */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            badge="Explore"
            title="Other Countries"
          />
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

      <DonationCTA />
    </>
  );
}
