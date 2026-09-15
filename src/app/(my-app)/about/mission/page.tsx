import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, DonationCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Mission",
  description: "Our mission is to empower communities through education, food security, healthcare, and advocacy across 5 countries.",
};

export default function MissionPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            Our Mission
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
              <li className="text-primary">Our Mission</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Mission Content */}
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl font-bold text-text-primary leading-snug border-l-4 border-primary pl-6 mb-12">
              &ldquo;At Takweyat Foundation, we believe that even the smallest act of kindness can create ripples of change. A meal for the hungry, education for a child, shelter for the homeless—these are not just necessities but stepping stones to a brighter future.&rdquo;
            </blockquote>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Educate", description: "We believe education is the most powerful tool for breaking the cycle of poverty. By establishing learning centers, providing supplies, and training teachers, we open doors for children and adults alike to build brighter futures.", icon: "📚" },
                { title: "Nourish", description: "No one should go to bed hungry. Through daily meal programs, emergency food distribution, and community kitchens, we work to ensure that every family has access to nutritious food.", icon: "🍽️" },
                { title: "Heal", description: "Healthcare is a human right. We provide medical camps, emergency treatments, and support for critical care, working toward a future where everyone has access to the healthcare they need.", icon: "🏥" },
                { title: "Advocate", description: "Silence in the face of injustice is complicity. We organize protests, lead campaigns, and amplify marginalized voices to fight oppression and inequality wherever it exists.", icon: "⚖️" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 shadow-card">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h2 className="text-xl font-bold text-text-primary mb-3">{item.title}</h2>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
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
