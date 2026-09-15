import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, DonationCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Transparency",
  description: "We believe in full transparency. See how we use your donations and the impact we create.",
};

export default function TransparencyPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            Transparency
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
                <Link href="/about" className="text-white hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li className="text-primary">Transparency</li>
            </ol>
          </nav>
        </div>
      </div>

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
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              badge="Our Commitments"
              title="Full Accountability"
            />
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Financial Transparency", description: "We publish detailed financial reports showing exactly how every dollar is allocated across our programs.", icon: "📊" },
                { title: "Impact Reporting", description: "We measure and report the real impact of our work, including the number of people served, projects completed, and outcomes achieved.", icon: "📈" },
                { title: "Accountability", description: "We are accountable to our donors, our partners, and the communities we serve. We welcome questions and feedback.", icon: "🤝" },
                { title: "Independent Audits", description: "Our financial statements are independently audited to ensure accuracy and compliance with best practices.", icon: "✅" },
              ].map((commitment) => (
                <div key={commitment.title} className="bg-white rounded-xl p-6 shadow-card">
                  <div className="text-3xl mb-3">{commitment.icon}</div>
                  <h3 className="text-lg font-bold text-text-primary">{commitment.title}</h3>
                  <p className="mt-2 text-text-secondary text-sm">{commitment.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/reports"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
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
