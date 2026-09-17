import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, DonationCTA, TeamCard } from "@/components/ui";

export const metadata: Metadata = {
  title: "Leadership & Team",
  description: "Meet the dedicated individuals behind Takweyat Foundation who work tirelessly to create lasting change across 5 countries.",
};

const team = [
  {
    name: "Dr. Usman Tariq",
    role: "Founder & Chairman",
    bio: "Over a decade of leadership in humanitarian outreach, public health, and international relief.",
  },
  {
    name: "Ayesha Malik",
    role: "Director of Programs",
    bio: "Leading educational development, vocational training, and community empowerment initiatives.",
  },
  {
    name: "Tariq Mahmood",
    role: "Head of Operations",
    bio: "Managing cross-border logistics, supply chain distribution, and on-ground partner networks.",
  },
  {
    name: "Zainab Ahmed",
    role: "Communications & Impact Lead",
    bio: "Spearheading storytelling, donor relations, and global transparency reporting.",
  },
  {
    name: "Farhan Saeed",
    role: "Finance Director",
    bio: "Ensuring rigorous financial governance, audit compliance, and 100% donation accountability.",
  },
  {
    name: "Maryam Bibi",
    role: "Country Director - Pakistan",
    bio: "Directing provincial field coordinators, free medical camps, and flood relief operations.",
  },
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
            title="Meet Our Leadership & Field Coordinators"
            subtitle="The passionate individuals working on the ground and behind the scenes to deliver hope and dignity."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              We are always looking for passionate individuals who share our vision of an equitable, compassionate world. Whether in program coordination, healthcare, or field logistics, your skills can change lives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-md"
            >
              Contact Us to Volunteer
            </Link>
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
