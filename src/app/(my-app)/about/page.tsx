import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, DonationCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Takweyat Foundation - our mission, our approach, our team, and our commitment to creating lasting change across 5 countries.",
};

const aboutLinks = [
  { title: "Who We Are", description: "Our story, our values, and what drives us.", href: "/about/who-we-are", icon: "👥" },
  { title: "Our Mission", description: "The purpose that guides everything we do.", href: "/about/mission", icon: "🎯" },
  { title: "Our Approach", description: "How we create sustainable, lasting change.", href: "/about/approach", icon: "💡" },
  { title: "Leadership & Team", description: "The people behind Takweyat Foundation.", href: "/about/team", icon: "🤝" },
  { title: "Partners", description: "Organizations and individuals who work with us.", href: "/about/partners", icon: "🤲" },
  { title: "Transparency", description: "How we use your donations. Full accountability.", href: "/about/transparency", icon: "📊" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            About Us
          </h1>
          <nav aria-label="breadcrumb" className="animate-slide-in-down">
            <ol className="flex justify-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li className="text-primary">About Us</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Links Grid */}
      <Section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group bg-white text-center p-6 md:p-10 shadow-card rounded-xl hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{link.icon}</div>
                <h2 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                  {link.title}
                </h2>
                <p className="mt-3 text-text-secondary text-sm">
                  {link.description}
                </p>
                <div className="mt-6 text-primary font-semibold text-sm flex items-center justify-center gap-2">
                  Learn More
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

      {/* Brand Quote */}
      <Section className="bg-surface-elevated py-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-bold text-text-primary leading-snug">
              &ldquo;Join us, not as a witness, but as a force. For the world changes not by waiting, But by those who dare to move it.&rdquo;
            </blockquote>
            <p className="mt-6 text-text-muted">— Takweyat Foundation</p>
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
