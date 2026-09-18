import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, SectionHeading, StatsCounter, DonationCTA } from "@/components/ui";
import { getProgramBySlug, getPrograms, getCountries } from "@/lib/cms";
import { generateProgramSchema, generateBreadcrumbSchema } from "@/lib/seo/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const programs = await getPrograms();
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = await getProgramBySlug(slug);
  if (!program) return { title: "Program Not Found" };

  return {
    title: program.title,
    description: program.description,
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const [program, allCountries] = await Promise.all([
    getProgramBySlug(slug),
    getCountries(),
  ]);

  if (!program) {
    notFound();
  }

  const programCountries = allCountries.filter((c) =>
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

      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <div className="text-5xl mb-4">{program.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            {program.title}
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
                <Link href="/our-work" className="text-white hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li className="text-primary">{program.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Stats */}
      <Section className="py-12 bg-surface border-b border-border-light">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <StatsCounter
              value={program.stats.number.toLocaleString()}
              label={program.stats.label}
            />
          </div>
        </Container>
      </Section>

      {/* About the Program */}
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              badge="About This Program"
              title={program.title}
              align="left"
            />
            <div className="space-y-4">
              {program.longDescription.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Impact */}
      <Section className="bg-surface-elevated py-20">
        <Container>
          <SectionHeading
            badge="Our Impact"
            title="What We've Achieved"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {program.impactItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-card">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <Section className="py-20">
          <Container>
            <SectionHeading
              badge="Locations"
              title="Where We Work"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {programCountries.map((country) => (
                <Link
                  key={country.slug}
                  href={`/our-impact`}
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
      <Section className="bg-surface-elevated py-20">
        <Container>
          <SectionHeading
            badge="Donate"
            title="What Your Donation Achieves"
            subtitle="Every dollar you give creates real, measurable impact. Here's what your donation can accomplish."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {program.donationTiers.map((tier) => (
              <div
                key={tier.amount}
                className="bg-white rounded-xl p-6 text-center shadow-card hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  ${tier.amount}
                </div>
                <p className="text-text-secondary text-sm">{tier.impact}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/923145217958"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
            >
              Donate to {program.title}
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
