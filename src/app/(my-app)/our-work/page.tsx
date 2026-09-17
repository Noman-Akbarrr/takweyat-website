import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, ProgramCard, DonationCTA } from "@/components/ui";
import { getPrograms } from "@/lib/cms";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Discover our core humanitarian programs: Education, Financial Livelihoods, Social Justice, Medical Aid, Hunger Relief, and Emergency Assistance.",
};

export default async function OurWorkPage() {
  const programs = await getPrograms();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Our Work", url: "/our-work" },
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
            Our Work
          </h1>
          <nav aria-label="breadcrumb" className="animate-slide-in-down">
            <ol className="flex justify-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li className="text-primary">Our Work</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Programs Grid */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            badge="Our Programs"
            title="Creating Lasting Change Across Core Programs"
            subtitle="From primary education to emergency disaster relief, we partner directly with communities to build sustainable futures."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard
                key={program.slug}
                title={program.title}
                description={program.description}
                href={`/our-work/${program.slug}`}
                icon={program.icon}
                progress={80}
                goal="$10,000"
                raised="$8,000"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <DonationCTA />
    </>
  );
}
