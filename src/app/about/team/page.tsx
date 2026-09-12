import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, DonationCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Leadership & Team",
  description: "Meet the dedicated individuals behind Takweyat Foundation who work tirelessly to create change.",
};

const team = [
  { name: "Name 1", role: "Founder & CEO", bio: "Name 1 founded Takweyat Foundation with a vision to create an organization that bridges the gap between those who want to help and those who need it most." },
  { name: "Name 2", role: "Director of Programs", bio: "Name 2 oversees all of Takweyat's programs across 8 countries, ensuring that our work creates maximum impact in the communities we serve." },
  { name: "Name 3", role: "Head of Operations", bio: "Name 3 manages the day-to-day operations of Takweyat Foundation, ensuring efficiency, transparency, and accountability in everything we do." },
  { name: "Name 4", role: "Communications Director", bio: "Name 4 leads our communications and outreach efforts, sharing Takweyat's story with the world and inspiring others to join our mission." },
  { name: "Name 5", role: "Finance Director", bio: "Name 5 ensures that every dollar donated to Takweyat Foundation is used wisely and effectively to create the greatest possible impact." },
  { name: "Name 6", role: "Country Director - Pakistan", bio: "Name 6 leads Takweyat's operations in Pakistan, working directly with communities to deliver education, food, and healthcare programs." },
];

export default function TeamPage() {
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
              Leadership & Team
            </h1>
            <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
              Meet the dedicated individuals who work tirelessly to make Takweyat Foundation&apos;s mission a reality.
            </p>
          </div>
        </Container>
      </section>

      {/* Team Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-surface rounded-xl p-6 border border-border-light text-center">
                <div className="w-24 h-24 bg-surface-elevated rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-text-muted text-sm">{member.name.split(" ")[0]}</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Join Us */}
      <Section className="bg-surface-elevated">
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
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-text-inverse font-semibold rounded-lg hover:bg-primary-dark transition-colors"
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
