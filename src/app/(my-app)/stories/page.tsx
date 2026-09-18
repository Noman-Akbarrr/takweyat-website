import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, StoryCard, DonationCTA } from "@/components/ui";
import { getStories } from "@/lib/cms";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Stories & Insights",
  description: "Real stories from the field. Read about the lives we've changed and the communities we've served.",
};

export default async function StoriesPage() {
  const stories = await getStories();

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

      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            Stories & Insights
          </h1>
          <nav aria-label="breadcrumb" className="animate-slide-in-down">
            <ol className="flex justify-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li className="text-primary">Stories</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Stories Grid */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            badge="Our Stories"
            title="Real Stories. Real Impact. Real Change."
            subtitle="Behind every number is a person. Behind every project is a story of hope renewed."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <StoryCard
                key={story.slug}
                title={story.title}
                excerpt={story.excerpt}
                slug={story.slug}
                category={story.category}
                date={story.publishedAt}
                imageUrl={story.heroImage || undefined}
              />
            ))}
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
