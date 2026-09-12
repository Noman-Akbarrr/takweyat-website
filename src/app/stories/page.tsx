import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, StoryCard, DonationCTA, Breadcrumbs } from "@/components/ui";
import { stories } from "@/lib/data/stories";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Stories & Insights",
  description: "Real stories from the field. Read about the lives we've changed and the communities we've served.",
};

const categories = ["All", "Social Justice", "Hunger Relief", "Education", "Medical Aid", "Orphan Support", "Emergency Relief"];

export default function StoriesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Stories", url: "/stories" },
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
          <div className="max-w-3xl text-center mx-auto">
            <Breadcrumbs items={[{ label: "Stories" }]} />
            <p className="text-text-inverse/80 font-semibold uppercase tracking-wider mb-4">
              Stories & Insights
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse">
              Real Stories. Real Impact. Real Change.
            </h1>
            <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
              Behind every number is a person. Behind every project is a story. Read about the lives we&apos;ve changed and the communities we&apos;ve served.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <Section className="py-8 bg-surface border-b border-border-light">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-surface-elevated text-text-secondary hover:bg-primary hover:text-text-inverse transition-colors border border-border-light"
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stories Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <StoryCard
                key={story.slug}
                title={story.title}
                excerpt={story.excerpt}
                slug={story.slug}
                category={story.category}
                date={story.publishedAt}
              />
            ))}
          </div>
        </Container>
      </Section>

      <DonationCTA
        title="Your Support Creates These Stories"
        description="Every donation helps us write new chapters of hope and transformation."
        buttonText="Donate Now"
        buttonHref="/get-involved/donate"
      />
    </>
  );
}
