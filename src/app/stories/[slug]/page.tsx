import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, DonationCTA, Breadcrumbs } from "@/components/ui";
import { getStoryBySlug, stories } from "@/lib/data/stories";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return { title: "Story Not Found" };

  return {
    title: story.title,
    description: story.excerpt,
  };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const articleSchema = generateArticleSchema(story);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Stories", url: "/stories" },
    { name: story.title, url: `/stories/${story.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              items={[
                { label: "Stories", href: "/stories" },
                { label: story.title },
              ]}
            />
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-text-inverse">
                {story.category}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-text-inverse">
                {story.publishedAt}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-inverse leading-tight">
              {story.title}
            </h1>
          </div>
        </Container>
      </section>

      {/* Story Content */}
      <Section>
        <Container>
          <article className="max-w-3xl mx-auto">
            {/* Featured Image Placeholder */}
            <div className="aspect-[16/9] bg-surface-elevated rounded-xl mb-12 flex items-center justify-center">
              <span className="text-text-muted text-sm">Featured Image</span>
            </div>

            {/* Excerpt */}
            <p className="text-xl text-text-secondary leading-relaxed mb-8 font-medium border-l-4 border-primary pl-6">
              {story.excerpt}
            </p>

            {/* Body */}
            <div className="prose prose-lg max-w-none">
              {story.body.map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-border-light">
              <div className="flex flex-wrap gap-3">
                <span className="text-sm text-text-muted">Tags:</span>
                <span className="px-3 py-1 bg-surface-elevated rounded-full text-sm text-text-secondary">
                  {story.category}
                </span>
                <span className="px-3 py-1 bg-surface-elevated rounded-full text-sm text-text-secondary">
                  {story.country}
                </span>
              </div>
            </div>
          </article>
        </Container>
      </Section>

      {/* Related Stories */}
      <Section className="bg-surface-elevated">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            More Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stories
              .filter((s) => s.slug !== story.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/stories/${s.slug}`}
                  className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-border-light"
                >
                  <div className="aspect-[16/10] bg-surface-elevated" />
                  <div className="p-6">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {s.category}
                    </span>
                    <h3 className="mt-2 font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-text-secondary text-sm line-clamp-2">
                      {s.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </Container>
      </Section>

      <DonationCTA
        title="Help Us Write More Stories"
        description="Your donation helps us create more stories of hope, transformation, and lasting change."
        buttonText="Donate Now"
        buttonHref="/get-involved/donate"
      />
    </>
  );
}
