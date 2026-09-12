import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, StatsCounter, DonationCTA, Breadcrumbs } from "@/components/ui";
import { getProgramBySlug, programs } from "@/lib/data/programs";
import { countries } from "@/lib/data/countries";
import { generateProgramSchema, generateBreadcrumbSchema } from "@/lib/seo/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: "Program Not Found" };

  return {
    title: program.title,
    description: program.description,
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const programCountries = countries.filter((c) =>
    program && c.programs.includes(program.slug)
  );

  const programSchema = generateProgramSchema(program);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Our Work", url: "/our-work" },
    { name: program.title, url: `/our-work/${program.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programSchema) }}
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
                  { label: "Our Work", href: "/our-work" },
                  { label: program.title },
                ]}
              />
              <div className="text-5xl mb-6">{program.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-text-inverse">
                {program.title}
              </h1>
              <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
                {program.description}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <StatsCounter
                value={program.stats.number.toLocaleString()}
                label={program.stats.label}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* About the Program */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              About This Program
            </h2>
            {program.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-text-secondary leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Impact */}
      <Section className="bg-surface-elevated">
        <Container>
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {program.impactItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-surface rounded-lg p-6">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Where We Work */}
      {programCountries.length > 0 && (
        <Section>
          <Container>
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Where We Work
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {programCountries.map((country) => (
                <Link
                  key={country.slug}
                  href={`/where-we-work/${country.slug}`}
                  className="group flex flex-col items-center justify-center h-32 bg-surface-elevated rounded-xl hover:bg-primary/10 transition-colors border border-border-light"
                >
                  <div className="w-3 h-3 bg-primary rounded-full mb-2 group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {country.name}
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Donation Tiers */}
      <Section className="bg-surface-elevated">
        <Container>
          <h2 className="text-3xl font-bold text-text-primary mb-4 text-center">
            What Your Donation Achieves
          </h2>
          <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
            Every dollar you give creates real, measurable impact. Here&apos;s what your donation can accomplish.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {program.donationTiers.map((tier) => (
              <div
                key={tier.amount}
                className="bg-surface rounded-xl p-6 text-center border border-border-light hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  ${tier.amount}
                </div>
                <p className="text-text-secondary text-sm">{tier.impact}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/get-involved/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-action text-text-inverse font-semibold rounded-lg hover:bg-action-dark transition-colors"
            >
              Donate to {program.title}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
