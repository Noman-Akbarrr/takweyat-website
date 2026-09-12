import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, ProgramCard, DonationCTA, Breadcrumbs } from "@/components/ui";
import { programs } from "@/lib/data/programs";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Discover our six core programs: Education, Financial Support, Social Justice, Medical Aid, Hunger Relief, and Orphan & Widow Assistance.",
};

export default function OurWorkPage() {
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24">
        <Container>
          <div className="max-w-3xl">
            <Breadcrumbs items={[{ label: "Our Work" }]} />
            <p className="text-text-inverse/80 font-semibold uppercase tracking-wider mb-4">
              Our Work
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse">
              Creating Lasting Change Across Six Core Programs
            </h1>
            <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
              From education to emergency relief, we work across six core programs to create lasting change in communities around the world.
            </p>
          </div>
        </Container>
      </section>

      {/* Programs Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
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

      {/* CTA */}
      <DonationCTA
        title="Support Our Programs"
        description="Every donation helps us expand our reach and deepen our impact. Choose a program that resonates with you."
        buttonText="Donate Now"
        buttonHref="/get-involved/donate"
      />
    </>
  );
}
