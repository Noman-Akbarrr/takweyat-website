import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, DonationCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Who We Are",
  description: "Takweyat Foundation is a non-profit charitable organization working across 5 countries to provide education, food, healthcare, and hope.",
};

export default function WhoWeArePage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            Who We Are
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
              <li className="text-primary">Who We Are</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Story */}
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative overflow-hidden rounded-xl" style={{ minHeight: "400px" }}>
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <span className="text-text-muted text-sm">Our Story</span>
                </div>
              </div>
              <div>
                <div className="badge-pill">About Us</div>
                <h2 className="text-3xl font-bold text-text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Takweyat Foundation was born from a simple belief: that every act of kindness is a seed sown for a brighter tomorrow. Founded in 2023 and headquartered in Rawalpindi, Pakistan, we set out to create an organization that would bridge the gap between those who want to help and those who need it most.
                  </p>
                  <p>
                    From our early days of organizing local community meals and supporting orphaned children, we have grown into an international foundation operating across 5 countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-surface-elevated py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              badge="Our Values"
              title="Core Values That Guide Us"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Integrity", description: "Honesty and transparency are necessary to operate an efficient and effective organization." },
                { title: "Accountability", description: "We hold ourselves accountable to our donors, our partners, and the communities we serve." },
                { title: "Empathy", description: "We ensure we do the right thing at the proper cost for our beneficiaries." },
                { title: "Dignity", description: "We want to empower the poor and disadvantaged so that they can do more for themselves." },
                { title: "Equality", description: "We help the most vulnerable people irrespective of their race, religion, gender, or political affiliation." },
                { title: "Teamwork", description: "We work together, across boundaries, to meet the needs of the people we serve." },
              ].map((value) => (
                <div key={value.title} className="bg-white rounded-xl p-6 shadow-card">
                  <h3 className="text-lg font-bold text-text-primary">{value.title}</h3>
                  <p className="mt-2 text-text-secondary text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
