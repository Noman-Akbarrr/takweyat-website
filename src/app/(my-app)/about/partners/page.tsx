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
      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            Our Partners
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
              <li className="text-primary">Partners</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Partners Grid */}
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-card flex items-center justify-center h-32">
                  <span className="text-text-muted text-sm">Partner Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Become a Partner */}
      <Section className="bg-surface-elevated py-20">
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
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
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
