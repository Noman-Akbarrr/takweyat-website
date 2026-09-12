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
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light py-24">
        <Container>
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-text-inverse/80 font-semibold uppercase tracking-wider mb-4">
              About Takweyat Foundation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-inverse">
              We Are Not Just Hands That Give
            </h1>
            <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
              We are hearts that heal. We are voices that speak. We are echoes of justice. Learn about the foundation, our mission, and the people who make it all possible.
            </p>
          </div>
        </Container>
      </section>

      {/* About Links Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group bg-surface rounded-xl p-8 border border-border-light hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{link.icon}</div>
                <h2 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                  {link.title}
                </h2>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {link.description}
                </p>
                <div className="mt-6 text-primary font-semibold text-sm flex items-center gap-2">
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

      {/* Brand Quote */}
      <Section className="bg-surface-elevated">
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
