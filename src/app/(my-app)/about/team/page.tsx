import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, DonationCTA, TeamCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Leadership & Team",
  description: "Meet the dedicated individuals behind Takweyat Foundation who work tirelessly to create change.",
};

const team = [
  { name: "Name 1", role: "Founder & CEO" },
  { name: "Name 2", role: "Director of Programs" },
  { name: "Name 3", role: "Head of Operations" },
  { name: "Name 4", role: "Communications Director" },
  { name: "Name 5", role: "Finance Director" },
  { name: "Name 6", role: "Country Director - Pakistan" },
];

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            Our Team
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
              <li className="text-primary">Our Team</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Team Grid */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            badge="Team Members"
            title="Let's Meet With Our Ordinary Soldiers"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Join Us */}
      <Section className="bg-surface-elevated py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Join Our Team
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              We&apos;re always looking for passionate individuals who share our vision of a better world. If you believe in our mission and want to make a difference, we&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
