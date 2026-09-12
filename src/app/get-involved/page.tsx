import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, DonationCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "There are many ways to support Takweyat Foundation. Donate, volunteer, partner, or fundraise to help communities in need.",
};

const ways = [
  {
    title: "Donate",
    description: "Make a one-time or monthly donation to support our programs worldwide.",
    href: "/get-involved/donate",
    icon: "💝",
    cta: "Donate Now",
  },
  {
    title: "Volunteer",
    description: "Join our team of volunteers and make a hands-on difference in communities.",
    href: "/contact",
    icon: "🤝",
    cta: "Join Us",
  },
  {
    title: "Become a Partner",
    description: "Partner with us to expand our reach and impact across 5 countries.",
    href: "/contact",
    icon: "🤲",
    cta: "Learn More",
  },
  {
    title: "Fundraise",
    description: "Start a fundraiser and rally your community to support our cause.",
    href: "/contact",
    icon: "📣",
    cta: "Start Fundraising",
  },
  {
    title: "Corporate Giving",
    description: "Engage your company in meaningful corporate social responsibility.",
    href: "/contact",
    icon: "🏢",
    cta: "Contact Us",
  },
  {
    title: "Spread the Word",
    description: "Follow us on social media and share our mission with your network.",
    href: "/contact",
    icon: "📢",
    cta: "Follow Us",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24">
        <Container>
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-text-inverse/80 font-semibold uppercase tracking-wider mb-4">
              Get Involved
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse">
              Join Us in Making a Difference
            </h1>
            <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
              There are many ways to support Takweyat Foundation. Every action, no matter how small, creates ripples of change.
            </p>
          </div>
        </Container>
      </section>

      {/* Ways to Get Involved */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ways.map((way) => (
              <Link
                key={way.title}
                href={way.href}
                className="group bg-surface rounded-xl p-8 border border-border-light hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{way.icon}</div>
                <h2 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                  {way.title}
                </h2>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {way.description}
                </p>
                <div className="mt-6 text-primary font-semibold text-sm flex items-center gap-2">
                  {way.cta}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <DonationCTA
        title="Your Support Changes Lives"
        description="Whether you donate, volunteer, or spread the word, you're making a difference. Thank you for being part of our mission."
        buttonText="Donate Now"
        buttonHref="/get-involved/donate"
      />
    </>
  );
}
