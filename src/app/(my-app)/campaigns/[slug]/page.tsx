import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section, SectionHeading } from "@/components/ui";
import { getCampaignBySlug, getCampaigns, getStoryBySlug } from "@/lib/cms";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const campaigns = await getCampaigns();
  return campaigns.map((campaign) => ({ slug: campaign.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const campaign = await getCampaignBySlug(slug);
  if (!campaign) return { title: "Campaign Not Found" };

  return {
    title: campaign.metaTitle,
    description: campaign.metaDescription,
  };
}

export default async function CampaignPage({ params }: Props) {
  const { slug } = await params;
  const campaign = await getCampaignBySlug(slug);

  if (!campaign) {
    notFound();
  }

  const story = campaign.storySlug ? await getStoryBySlug(campaign.storySlug) : null;

  return (
    <>
      {/* Hero - ChariTeam page header style */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-slide-in-down leading-tight">
            {campaign.headline}
          </h1>
          <nav aria-label="breadcrumb" className="animate-slide-in-down">
            <ol className="flex justify-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li className="text-primary">{campaign.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Problem → Solution */}
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="badge-pill">The Problem</div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Why This Matters
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {campaign.problem}
                </p>
              </div>
              <div>
                <div className="badge-pill">Our Solution</div>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  What Takweyat Does
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {campaign.solution}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Impact Items */}
      <Section className="bg-surface-elevated py-20">
        <Container>
          <SectionHeading
            badge="Our Impact"
            title="What We've Achieved"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {campaign.impactItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-card">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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

      {/* Story */}
      {story && (
        <Section className="py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                badge="Real Story"
                title={story.title}
              />
              <div className="bg-white rounded-xl p-8 md:p-12 shadow-card">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  {story.category}
                </p>
                <blockquote className="text-lg text-text-secondary italic border-l-4 border-primary pl-6 mb-6">
                  &ldquo;{story.excerpt}&rdquo;
                </blockquote>
                <Link
                  href={`/stories/${story.slug}`}
                  className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-2"
                >
                  Read Full Story
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Donation Tiers */}
      <Section id="donate" className="bg-surface-elevated py-20">
        <Container>
          <SectionHeading
            badge="Donate"
            title="What Your Donation Achieves"
            subtitle="Every dollar creates real, measurable impact. Choose an amount that resonates with you."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {campaign.donationTiers.map((tier) => (
              <a
                key={tier.amount}
                href="https://wa.me/923145217958"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 text-center shadow-card hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                  ${tier.amount}
                </div>
                <p className="mt-3 text-text-secondary text-sm leading-snug">
                  {tier.impact}
                </p>
                <div className="mt-4 text-primary font-semibold text-xs uppercase tracking-wider">
                  Donate
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="bg-primary py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white">
              Ready to Make a Difference?
            </h2>
            <p className="mt-4 text-white/80">
              Your generosity, their future. Give today, shape tomorrow.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/923145217958"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-white/90 transition-colors"
              >
                Donate Now
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
