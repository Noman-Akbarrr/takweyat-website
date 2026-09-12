import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, DonationCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Partners",
  description: "We work with organizations and individuals who share our vision of a better world.",
};

export default function PartnersPage() {
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
              Our Partners
            </h1>
            <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
              We work with organizations and individuals who share our vision of a better world. Together, we amplify our impact.
            </p>
          </div>
        </Container>
      </section>

      {/* Partners Grid */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-surface rounded-xl p-8 border border-border-light flex items-center justify-center h-32">
                  <span className="text-text-muted text-sm">Partner Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Become a Partner */}
      <Section className="bg-surface-elevated">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Become a Partner
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              We&apos;re always looking for organizations and individuals who share our vision. Whether you&apos;re a corporation, NGO, or individual, there are many ways to partner with Takweyat Foundation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-text-inverse font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
