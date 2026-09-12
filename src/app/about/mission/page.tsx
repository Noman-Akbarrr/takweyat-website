import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, DonationCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Mission",
  description: "Our mission is to empower communities through education, food security, healthcare, and advocacy across 8 countries.",
};

export default function MissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24">
        <Container>
          <div className="max-w-3xl">
            <Link href="/about" className="inline-flex items-center gap-2 text-text-inverse/70 hover:text-text-inverse mb-6 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to About
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse">
              Our Mission
            </h1>
            <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
              To empower communities through education, food security, healthcare, and advocacy — creating lasting change that transcends borders.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Content */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl font-bold text-text-primary leading-snug border-l-4 border-primary pl-6 mb-12">
              &ldquo;At Takweyat Foundation, we believe that even the smallest act of kindness can create ripples of change. A meal for the hungry, education for a child, shelter for the homeless—these are not just necessities but stepping stones to a brighter future.&rdquo;
            </blockquote>

            <div className="space-y-8">
              <div className="bg-surface rounded-xl p-8 border border-border-light">
                <h2 className="text-xl font-bold text-text-primary mb-4">Educate</h2>
                <p className="text-text-secondary leading-relaxed">
                  We believe education is the most powerful tool for breaking the cycle of poverty. By establishing learning centers, providing supplies, and training teachers, we open doors for children and adults alike to build brighter futures.
                </p>
              </div>
              <div className="bg-surface rounded-xl p-8 border border-border-light">
                <h2 className="text-xl font-bold text-text-primary mb-4">Nourish</h2>
                <p className="text-text-secondary leading-relaxed">
                  No one should go to bed hungry. Through daily meal programs, emergency food distribution, and community kitchens, we work to ensure that every family has access to nutritious food.
                </p>
              </div>
              <div className="bg-surface rounded-xl p-8 border border-border-light">
                <h2 className="text-xl font-bold text-text-primary mb-4">Heal</h2>
                <p className="text-text-secondary leading-relaxed">
                  Healthcare is a human right. We provide medical camps, emergency treatments, and support for critical care, working toward a future where everyone has access to the healthcare they need.
                </p>
              </div>
              <div className="bg-surface rounded-xl p-8 border border-border-light">
                <h2 className="text-xl font-bold text-text-primary mb-4">Advocate</h2>
                <p className="text-text-secondary leading-relaxed">
                  Silence in the face of injustice is complicity. We organize protests, lead campaigns, and amplify marginalized voices to fight oppression and inequality wherever it exists.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
