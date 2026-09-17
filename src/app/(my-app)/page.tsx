import Link from "next/link";
import {
  Container,
  Section,
  StatsCounter,
  SectionHeading,
  ProgramCard,
  StoryCard,
  HeroCarousel,
  TestimonialCarousel,
  TeamCard,
} from "@/components/ui";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";
import { getPrograms, getStories, getTeamMembers, getGlobalSettings } from "@/lib/cms";
import { BookOpen, HeartPulse, Droplets, ArrowRight, CheckCircle2 } from "@/components/ui/Icons";

const services = [
  {
    title: "Quality Child Education",
    description: "Establishing accredited learning centers, providing free school supplies, uniforms, and digital literacy to underprivileged children.",
    href: "/our-work/education-for-all",
    icon: BookOpen,
  },
  {
    title: "Medical Relief & Healthcare",
    description: "Mobile clinics, free surgical support, preventive maternal screenings, and subsidized medicine for families in extreme poverty.",
    href: "/our-work/medical-aid-healthcare",
    icon: HeartPulse,
  },
  {
    title: "Clean Water & Nutrition",
    description: "Installing deep solar water wells, water filtration plants, and daily hot meal distribution to combat malnutrition in conflict zones.",
    href: "/our-work/hunger-relief-food-distribution",
    icon: Droplets,
  },
];

export default async function Home() {
  const [allPrograms, allStories, teamMembers, globalSettings] = await Promise.all([
    getPrograms(),
    getStories(),
    getTeamMembers(),
    getGlobalSettings(),
  ]);

  const featuredPrograms = allPrograms.slice(0, 3);
  const featuredStories = allStories.slice(0, 3);
  const featuredTeam = teamMembers.slice(0, 4);
  const stats = globalSettings?.impactStats || {
    childrenEducated: 500,
    hotMealsDistributed: 1000,
    legalServicesProvided: 50,
    rationPackagesDistributed: 200,
    peopleReached: 46000,
  };

  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", url: "/" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* About Section */}
      <Section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary-dark/10 to-primary-light/15 p-8 border border-border-light min-h-[380px] flex flex-col justify-between">
              <div>
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  Humanitarian Mission
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
                  Serving With Honor, Transparency & Direct Impact
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Since 2023, Takweyat Foundation has been an unwavering lifeline across Pakistan, Palestine, Sudan, and marginalized communities.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-primary/20">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>100% Verified Zakat & Sadaqah Distribution</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Direct Field Presence in 5 Vulnerable Regions</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Sustainable Infrastructure, Not Just Temporary Aid</span>
                </div>
              </div>
            </div>

            <div>
              <div className="badge-pill">About Us</div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5 leading-tight">
                We Empower Communities In Need Around The World
              </h2>
              <div className="bg-surface-elevated border-l-4 border-primary rounded-r-lg p-4 mb-5 shadow-sm">
                <p className="text-text-primary font-medium text-sm leading-relaxed mb-1">
                  Takweyat Foundation is dedicated to helping vulnerable communities build a resilient future through education, nutrition, healthcare, and human dignity.
                </p>
                <span className="text-primary font-bold text-xs uppercase tracking-wide">
                  Takweyat Foundation Global Aid
                </span>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed text-sm sm:text-base">
                Our grassroots initiatives are driven by field teams that live and work in the communities they serve. From crisis emergency response to long-term community schools and clinics, we ensure your assistance transforms real lives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-all shadow-md text-sm"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all text-sm"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature Causes / Programs */}
      <Section className="bg-surface-elevated py-20">
        <Container>
          <SectionHeading
            badge="Featured Programs"
            title="Sustained Humanitarian Initiatives"
            subtitle="Explore our ongoing high-priority programs delivering measurable assistance on the ground."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPrograms.map((program) => (
              <ProgramCard
                key={program.slug}
                title={program.title}
                description={program.description}
                href={`/our-work/${program.slug}`}
                icon={program.icon}
                progress={85}
                goal="$10,000"
                raised="$8,500"
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* What We Do Services */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            badge="What We Do"
            title="Our Core Areas of Impact"
            subtitle="Holistic support designed to break generational poverty and rebuild lives."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.href}
                  className="bg-surface text-center p-8 md:p-10 shadow-card rounded-2xl hover:shadow-xl transition-all border border-border-light flex flex-col items-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 border border-primary/30 text-primary px-5 py-2 rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-primary hover:text-white transition-all"
                  >
                    <span>Explore Initiative</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Live Stats Bar */}
      <Section className="py-14 bg-surface border-y border-border-light">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <StatsCounter value={`${stats.childrenEducated}+`} label="Children Being Educated" />
            <StatsCounter value={`${stats.hotMealsDistributed}+`} label="Hot Meals Distributed" />
            <StatsCounter value={`${stats.legalServicesProvided}+`} label="Legal Aids Provided" />
            <StatsCounter value={`${stats.rationPackagesDistributed}+`} label="Ration Packs Delivered" />
            <StatsCounter value={`${stats.peopleReached ? (stats.peopleReached / 1000).toFixed(0) + 'K+' : '46K+'}`} label="Total Lives Reached" />
          </div>
        </Container>
      </Section>

      {/* Donation CTA */}
      <section className="parallax-section py-20">
        <Container>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-pill !bg-white/10 !text-white">Direct Impact</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                Your Support Saves Lives and Builds Resilient Futures
              </h2>
              <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                Every single donation is allocated directly toward urgent supplies, nutritious meals, life-saving healthcare, and schooling for children in conflict and poverty zones. Complete transparency is our sacred promise to our donors.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-2xl shadow-2xl border border-white/10">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 bg-surface-elevated rounded-lg border border-border-light text-text-primary text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3 bg-surface-elevated rounded-lg border border-border-light text-text-primary text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <div className="flex gap-3">
                  {["$25", "$50", "$100", "$250"].map((amount, idx) => (
                    <label key={amount} className="flex-1">
                      <input
                        type="radio"
                        name="amount"
                        value={amount}
                        className="sr-only peer"
                        defaultChecked={idx === 1}
                      />
                      <div className="text-center py-2.5 bg-surface-elevated rounded-lg border-2 border-transparent peer-checked:border-primary peer-checked:text-primary peer-checked:font-bold text-sm cursor-pointer transition-all">
                        {amount}
                      </div>
                    </label>
                  ))}
                </div>
                <a
                  href="https://wa.me/923145217958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-action text-white text-center py-3.5 rounded-full font-bold text-sm hover:bg-action-dark transition-all shadow-md"
                >
                  Proceed to Donate
                </a>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            badge="Leadership & Field Team"
            title="The People Behind Our Humanitarian Mission"
            subtitle="Meet our committed leaders and coordinators ensuring aid reaches those who need it most."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTeam.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="py-20 bg-surface-elevated">
        <Container>
          <SectionHeading
            badge="Testimonials"
            title="Voices of Dignity and Gratitude"
            subtitle="Hear directly from families, local partners, and students supported by Takweyat Foundation."
          />
          <TestimonialCarousel />
        </Container>
      </Section>

      {/* Featured Stories from Field */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            badge="Field Stories"
            title="Real Stories of Hope and Resilience"
            subtitle="Every life touched represents a profound journey of perseverance and renewal."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredStories.map((story) => (
              <StoryCard key={story.slug} {...story} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
