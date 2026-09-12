import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, DonationCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Reports & Results",
  description: "Download our annual reports, financial statements, and impact assessments. Full transparency in how we use your donations.",
};

const reports = [
  {
    title: "2025 Annual Report",
    description: "A comprehensive overview of our work, impact, and financial performance in 2025.",
    type: "Annual Report",
    year: 2025,
  },
  {
    title: "2025 Financial Report",
    description: "Detailed financial statements showing how every dollar was allocated across our programs.",
    type: "Financial Report",
    year: 2025,
  },
  {
    title: "2025 Impact Report",
    description: "Measurable outcomes and results from our programs across 8 countries.",
    type: "Impact Report",
    year: 2025,
  },
  {
    title: "2024 Annual Report",
    description: "A comprehensive overview of our work, impact, and financial performance in 2024.",
    type: "Annual Report",
    year: 2024,
  },
  {
    title: "2024 Financial Report",
    description: "Detailed financial statements showing how every dollar was allocated across our programs.",
    type: "Financial Report",
    year: 2024,
  },
  {
    title: "2024 Impact Report",
    description: "Measurable outcomes and results from our programs across 8 countries.",
    type: "Impact Report",
    year: 2024,
  },
];

export default function ReportsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24">
        <Container>
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-text-inverse/80 font-semibold uppercase tracking-wider mb-4">
              Transparency
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse">
              Reports & Results
            </h1>
            <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
              We believe in full transparency. Download our reports to see exactly how your donations are being used.
            </p>
          </div>
        </Container>
      </section>

      {/* Reports Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => (
              <div
                key={report.title}
                className="bg-surface rounded-xl p-6 border border-border-light hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {report.type}
                </span>
                <h3 className="mt-2 text-lg font-bold text-text-primary">
                  {report.title}
                </h3>
                <p className="mt-2 text-text-secondary text-sm">
                  {report.description}
                </p>
                <button className="mt-4 text-primary font-semibold text-sm hover:underline flex items-center gap-2">
                  Download PDF
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Commitment */}
      <Section className="bg-surface-elevated">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Our Commitment to Transparency
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              We believe that every donor deserves to know exactly how their contributions are being used. That&apos;s why we publish detailed reports on our activities, finances, and impact. We are committed to maintaining the highest standards of accountability and transparency.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-text-muted mt-1">Transparent Reporting</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Annual</div>
                <div className="text-sm text-text-muted mt-1">Published Reports</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Verified</div>
                <div className="text-sm text-text-muted mt-1">Financial Audits</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <DonationCTA
        title="Your Donations, Fully Accounted For"
        description="Every dollar you give is tracked and reported. See the impact of your generosity in our annual reports."
        buttonText="Donate Now"
        buttonHref="/get-involved/donate"
      />
    </>
  );
}
