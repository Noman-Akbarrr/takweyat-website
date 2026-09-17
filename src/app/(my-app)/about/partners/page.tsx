import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, DonationCTA } from "@/components/ui";
import { Building, ShieldCheck, Heart, Globe } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Partners",
  description: "We collaborate with international NGOs, grassroots organizations, and philanthropic foundations to maximize humanitarian impact.",
};

const partners = [
  { name: "Global Relief Initiative", category: "Emergency Aid", icon: Globe },
  { name: "Clean Water Alliance", category: "WASH Infrastructure", icon: ShieldCheck },
  { name: "Community Education Trust", category: "Primary Education", icon: Building },
  { name: "Hope Medical Network", category: "Healthcare Services", icon: Heart },
  { name: "Noor Welfare Coalition", category: "Food Security", icon: ShieldCheck },
  { name: "International Youth Aid", category: "Skill Development", icon: Building },
  { name: "Disaster Response Forum", category: "Crisis Logistics", icon: Globe },
  { name: "Civil Society Foundation", category: "Legal Advocacy", icon: ShieldCheck },
];

export default function PartnersPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            Our Partners
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
              <li className="text-primary">Partners</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Partners Grid */}
      <Section className="py-20">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-3">
                Trusted Collaborative Alliances
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-sm">
                Working hand-in-hand with trusted global and regional organizations to bring immediate relief and sustainable development where it is needed most.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner) => {
                const Icon = partner.icon;
                return (
                  <div
                    key={partner.name}
                    className="bg-surface rounded-xl p-6 shadow-card hover:shadow-lg transition-all border border-border-light flex flex-col items-center justify-center text-center group h-36"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-text-primary text-xs sm:text-sm group-hover:text-primary transition-colors line-clamp-1">
                      {partner.name}
                    </h3>
                    <span className="text-[11px] text-text-muted mt-1 font-medium">
                      {partner.category}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Become a Partner */}
      <Section className="bg-surface-elevated py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-6">
              Become an Impact Partner
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              We welcome partnerships with corporations, academic institutions, NGOs, and philanthropic foundations. Together, we can scale proven solutions and reach thousands more families in distress.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-md"
            >
              Initiate a Partnership
            </Link>
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
