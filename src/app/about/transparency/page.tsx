import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, DonationCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Transparency",
  description: "We believe in full transparency. See how we use your donations and the impact we create.",
};

export default function TransparencyPage() {
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
              Transparency
            </h1>
            <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
              We believe every donor deserves to know exactly how their contributions are being used. Full transparency is at the core of everything we do.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <Section className="py-12 bg-surface border-b border-border-light">
        <Container>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-text-muted mt-1">Transparent Reporting</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Annual</div>
              <div className="text-sm text-text-muted mt-1">Published Reports</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">Verified</div>
              <div className="text-sm text-text-muted mt-1">Financial Audits</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Commitments */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Our Commitments
            </h2>
            <div className="space-y-6">
              {[
                { title: "Financial Transparency", description: "We publish detailed financial reports showing exactly how every dollar is allocated across our programs." },
                { title: "Impact Reporting", description: "We measure and report the real impact of our work, including the number of people served, projects completed, and outcomes achieved." },
                { title: "Accountability", description: "We are accountable to our donors, our partners, and the communities we serve. We welcome questions and feedback." },
                { title: "Independent Audits", description: "Our financial statements are independently audited to ensure accuracy and compliance with best practices." },
              ].map((commitment) => (
                <div key={commitment.title} className="bg-surface rounded-xl p-6 border border-border-light">
                  <h3 className="text-lg font-bold text-text-primary">{commitment.title}</h3>
                  <p className="mt-2 text-text-secondary">{commitment.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/our-impact/reports"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-text-inverse font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Download Our Reports
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
