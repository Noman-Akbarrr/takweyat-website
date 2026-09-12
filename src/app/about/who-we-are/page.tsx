import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, DonationCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Who We Are",
  description: "Takweyat Foundation is a non-profit charitable organization working across 8 countries to provide education, food, healthcare, and hope.",
};

export default function WhoWeArePage() {
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
              Who We Are
            </h1>
            <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
              A non-profit charitable organization working towards sustainable development and empowering local communities across 8 countries.
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-text-secondary leading-relaxed">
              <p>
                Takweyat Foundation was born from a simple belief: that every act of kindness is a seed sown for a brighter tomorrow. Founded in 2023 and headquartered in Rawalpindi, Pakistan, we set out to create an organization that would bridge the gap between those who want to help and those who need it most.
              </p>
              <p>
                From our early days of organizing local community meals and supporting orphaned children, we have grown into an international foundation operating across 8 countries. Our journey has been guided by the communities we serve, the donors who trust us, and the unwavering belief that together, we can build a better world.
              </p>
              <p>
                Today, Takweyat Foundation stands as a beacon of hope for thousands of families. We provide education to children, food to the hungry, healthcare to the sick, and advocacy for the oppressed. But we are just getting started.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-surface-elevated">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Integrity", description: "Honesty and transparency are necessary to operate an efficient and effective organization." },
                { title: "Accountability", description: "We hold ourselves accountable to our donors, our partners, and the communities we serve." },
                { title: "Empathy", description: "We ensure we do the right thing at the proper cost for our beneficiaries." },
                { title: "Dignity", description: "We want to empower the poor and disadvantaged so that they can do more for themselves." },
                { title: "Equality", description: "We help the most vulnerable people irrespective of their race, religion, gender, or political affiliation." },
                { title: "Teamwork", description: "We work together, across boundaries, to meet the needs of the people we serve." },
              ].map((value) => (
                <div key={value.title} className="bg-surface rounded-xl p-6 border border-border-light">
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
