import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, SectionHeading, DonationCTA } from "@/components/ui";
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

      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-white">
              {story.category}
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-white">
              {story.publishedAt}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            {story.title}
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
                <Link href="/stories" className="text-white hover:text-primary transition-colors">
                  Stories
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li className="text-primary line-clamp-1">{story.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Story Content */}
      <Section className="py-20">
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
            <div className="space-y-6">
              {story.body.map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">
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
      <Section className="bg-surface-elevated py-20">
        <Container>
          <SectionHeading
            badge="More Stories"
            title="Read More From The Field"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stories
              .filter((s) => s.slug !== story.slug)
              .slice(0, 3)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/stories/${s.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all"
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

      <DonationCTA />
    </>
  );
}
