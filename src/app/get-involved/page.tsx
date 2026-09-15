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
    href: "/about/partners",
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
      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            Get Involved
          </h1>
          <nav aria-label="breadcrumb" className="animate-slide-in-down">
            <ol className="flex justify-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li className="text-primary">Get Involved</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Ways to Get Involved */}
      <Section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ways.map((way) => (
              <Link
                key={way.title}
                href={way.href}
                className="group bg-white text-center p-6 md:p-10 shadow-card rounded-xl hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{way.icon}</div>
                <h2 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                  {way.title}
                </h2>
                <p className="mt-3 text-text-secondary text-sm">
                  {way.description}
                </p>
                <div className="mt-6 text-primary font-semibold text-sm flex items-center justify-center gap-2">
                  {way.cta}
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
