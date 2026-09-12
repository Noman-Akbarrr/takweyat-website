import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui";
import { getCampaignBySlug, campaigns } from "@/lib/data/campaigns";
import { getStoryBySlug } from "@/lib/data/stories";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return campaigns.map((campaign) => ({ slug: campaign.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);
  if (!campaign) return { title: "Campaign Not Found" };

  return {
    title: campaign.metaTitle,
    description: campaign.metaDescription,
  };
}

export default async function CampaignPage({ params }: Props) {
  const { slug } = await params;
  const campaign = getCampaignBySlug(slug);

  if (!campaign) {
    notFound();
  }

  const story = campaign.storySlug ? getStoryBySlug(campaign.storySlug) : null;

  return (
    <>
      {/* Hero - Minimal, focused on donation */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-text-inverse/70 hover:text-text-inverse mb-8 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Takweyat Foundation
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-inverse leading-tight">
              {campaign.headline}
            </h1>
            <p className="mt-6 text-lg text-text-inverse/80 max-w-2xl mx-auto">
              {campaign.problem}
            </p>
            <div className="mt-8">
              <a
                href="#donate"
                className="inline-flex items-center justify-center px-10 py-5 bg-action text-text-inverse font-bold text-lg rounded-xl hover:bg-action-dark transition-colors shadow-lg"
              >
                Donate Now
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem → Solution */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-sm font-semibold text-action uppercase tracking-wider mb-3">
                  The Problem
                </p>
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Why This Matters
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  {campaign.problem}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  Our Solution
                </p>
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
      <Section className="bg-surface-elevated">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {campaign.impactItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-surface rounded-lg p-5">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Story */}
      {story && (
        <Section>
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
                A Real Story
              </h2>
              <div className="bg-surface rounded-2xl p-8 md:p-12 border border-border-light">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  {story.category}
                </p>
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {story.title}
                </h3>
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

      {/* Donation Tiers - The most important section */}
      <Section id="donate" className="bg-surface-elevated">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary">
                What Your Donation Achieves
              </h2>
              <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
                Every dollar creates real, measurable impact. Choose an amount that resonates with you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {campaign.donationTiers.map((tier) => (
                <Link
                  key={tier.amount}
                  href={`/get-involved/donate?campaign=${campaign.slug}&amount=${tier.amount}`}
                  className="group bg-surface rounded-xl p-6 text-center border-2 border-border-light hover:border-primary hover:shadow-lg transition-all cursor-pointer"
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
                </Link>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mt-8 text-center">
              <Link
                href={`/get-involved/donate?campaign=${campaign.slug}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Choose a custom amount
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="bg-primary py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-text-inverse">
              Ready to Make a Difference?
            </h2>
            <p className="mt-4 text-text-inverse/80">
              Your generosity, their future. Give today, shape tomorrow.
            </p>
            <div className="mt-8">
              <a
                href="#donate"
                className="inline-flex items-center justify-center px-10 py-5 bg-action text-text-inverse font-bold text-lg rounded-xl hover:bg-action-dark transition-colors"
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
