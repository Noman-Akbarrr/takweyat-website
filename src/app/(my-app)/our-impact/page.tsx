import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, StatsCounter, DonationCTA } from "@/components/ui";
import { countries } from "@/lib/data/countries";
import { programs } from "@/lib/data/programs";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "See how Takweyat Foundation is creating real, measurable change across 5 countries through education, food, healthcare, and advocacy.",
};

const impactStats = [
  { value: "5", label: "Countries" },
  { value: "215+", label: "Projects" },
  { value: "46,000+", label: "People Reached" },
  { value: "93", label: "Communities" },
];

const detailedStats = [
  { value: "500+", label: "Children Being Educated" },
  { value: "1,000+", label: "Hot Meals Distributed" },
  { value: "50+", label: "Legal Services Provided" },
  { value: "200+", label: "Ration Packages Distributed" },
  { value: "1,000+", label: "Patients Treated" },
];

export default function ImpactPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            Our Impact
          </h1>
          <nav aria-label="breadcrumb" className="animate-slide-in-down">
            <ol className="flex justify-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li className="text-primary">Our Impact</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Key Stats */}
      <Section className="py-16 bg-surface border-b border-border-light">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <StatsCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Detailed Impact */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            badge="Our Numbers"
            title="Impact at a Glance"
            subtitle="The numbers behind our work. Every number represents a life changed."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {detailedStats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-6 text-center shadow-card">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Where We Work */}
      <Section className="bg-surface-elevated py-20">
        <Container>
          <SectionHeading
            badge="Locations"
            title="Where We Work"
            subtitle="Our presence across 5 countries, each with unique challenges and ongoing programs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {countries.filter(c => c.impact.projects > 0).map((country) => (
              <Link
                key={country.slug}
                href={`/where-we-work/${country.slug}`}
                className="group bg-white rounded-lg p-4 flex items-center gap-4 hover:bg-primary/5 transition-colors shadow-card"
              >
                <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                <div>
                  <div className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {country.name}
                  </div>
                  <div className="text-xs text-text-muted">
                    {country.impact.projects} projects · {country.impact.people.toLocaleString()} people
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Impact by Program */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            badge="Programs"
            title="Impact by Program"
            subtitle="How each of our programs is making a difference."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link
                key={program.slug}
                href={`/our-work/${program.slug}`}
                className="group bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-4">{program.icon}</div>
                <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <div className="mt-3 text-2xl font-bold text-primary">
                  {program.stats.number.toLocaleString()}
                </div>
                <div className="text-sm text-text-muted">
                  {program.stats.label}
                </div>
                <div className="mt-4 text-primary font-semibold text-sm flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Reports */}
      <Section className="bg-surface-elevated py-20">
        <Container>
          <SectionHeading
            badge="Reports"
            title="Transparency & Reports"
            subtitle="We believe in full transparency. Download our reports to see how your donations are being used."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "2025 Annual Report", type: "annual", year: 2025 },
              { title: "2025 Financial Report", type: "financial", year: 2025 },
              { title: "2025 Impact Report", type: "impact", year: 2025 },
            ].map((report) => (
              <div key={report.title} className="bg-white rounded-xl p-6 shadow-card text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-text-primary">{report.title}</h3>
                <p className="mt-1 text-sm text-text-muted capitalize">{report.type} Report</p>
                <span className="mt-4 text-text-muted text-sm italic block">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
