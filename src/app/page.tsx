import {
  Container,
  Section,
  StatsCounter,
  SectionHeading,
  ProgramCard,
  StoryCard,
  DonationCTA,
  HeroCarousel,
  TestimonialCarousel,
  TeamCard,
} from "@/components/ui";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

const programs = [
  {
    title: "Education For African Children",
    description: "Establishing learning centers, providing school supplies, and supporting underprivileged students across 5 countries.",
    href: "/our-work/education-for-all",
    icon: "Education",
    progress: 90,
    goal: "$10,000",
    raised: "$9,542",
  },
  {
    title: "Ensure Pure Drinking Water",
    description: "Providing clean and safe drinking water to communities in need across Pakistan, Palestine, and Sudan.",
    href: "/our-work/hunger-relief-food-distribution",
    icon: "Pure Water",
    progress: 75,
    goal: "$10,000",
    raised: "$7,500",
  },
  {
    title: "Ensure Medical Treatment",
    description: "Medical camps, emergency aid, and financial support for critical treatments. Working toward a free hospital.",
    href: "/our-work/medical-aid-healthcare",
    icon: "Healthy Life",
    progress: 85,
    goal: "$10,000",
    raised: "$8,500",
  },
];

const services = [
  {
    title: "Child Education",
    description: "We establish learning centers and provide school supplies to children who can't afford them.",
    href: "/our-work/education-for-all",
    icon: "📚",
  },
  {
    title: "Medical Treatment",
    description: "We organize medical camps and provide emergency aid to communities in need.",
    href: "/our-work/medical-aid-healthcare",
    icon: "🏥",
  },
  {
    title: "Pure Drinking Water",
    description: "We provide clean and safe drinking water to underserved communities.",
    href: "/our-work/hunger-relief-food-distribution",
    icon: "💧",
  },
];

const stories = [
  {
    title: "Takweyat Foundation: A Relentless Force for Social Justice",
    excerpt: "In a world where injustice often goes unchallenged, Takweyat Foundation stands as a beacon of hope, resilience, and action...",
    slug: "relentless-force-for-social-justice",
    category: "Social Justice",
  },
  {
    title: "Feeding Hope: Takweyat's Mission to Nourish Lives",
    excerpt: "At Takweyat, we believe that a hot meal is more than just food—it's dignity, hope, and a step toward a better society...",
    slug: "feeding-hope-takweyats-mission-to-nourish-lives",
    category: "Hunger Relief",
  },
  {
    title: "Revolutionizing Education: The Takweyat Vision",
    excerpt: "How We Can Change the Way We Learn. For centuries, education has remained the same—a teacher, a blackboard, a textbook...",
    slug: "revolutionizing-education-the-takweyat-vision",
    category: "Education",
  },
];

const team = [
  { name: "Full Name", role: "Founder" },
  { name: "Full Name", role: "Director" },
  { name: "Full Name", role: "Coordinator" },
  { name: "Full Name", role: "Volunteer Lead" },
];

export default function Home() {
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
            <div className="relative overflow-hidden rounded-xl" style={{ minHeight: "400px" }}>
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-text-muted text-sm">Takweyat Foundation</span>
              </div>
            </div>
            <div>
              <div className="badge-pill">About Us</div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5">
                We Help People In Need Around The World
              </h2>
              <div className="bg-surface-elevated border-b-4 border-primary rounded p-4 mb-4">
                <p className="text-text-primary mb-2">
                  Takweyat Foundation is dedicated to helping communities build a better future through education, food, healthcare, and hope.
                </p>
                <span className="text-primary font-semibold">Takweyat Foundation</span>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Since 2023, we have been working across 5 countries to provide essential services to communities in need. From education to emergency relief, we are committed to making a lasting difference.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
                >
                  Learn More
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature Causes */}
      <Section className="bg-surface-elevated py-20">
        <Container>
          <SectionHeading
            badge="Feature Causes"
            title="Every Child Deserves The Opportunity To Learn"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.href} {...program} />
            ))}
          </div>
        </Container>
      </Section>

      {/* What We Do */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            badge="What We Do"
            title="Learn More What We Do And Get Involved"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.href} className="bg-white text-center p-6 md:p-10 shadow-card rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-text-primary mb-3">{service.title}</h4>
                <p className="text-text-secondary mb-4">{service.description}</p>
                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-5 py-2 rounded font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  Learn More
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Bar */}
      <Section className="py-12 bg-surface border-y border-border-light">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <StatsCounter value="500+" label="Children Being Educated" />
            <StatsCounter value="1K+" label="Hot Meals Distributed" />
            <StatsCounter value="50+" label="Legal Services Provided" />
            <StatsCounter value="200+" label="Ration Packages Distributed" />
            <StatsCounter value="1K+" label="Patients Treated" />
          </div>
        </Container>
      </Section>

      {/* Donation CTA */}
      <section className="parallax-section py-20" style={{ backgroundImage: "url(/images/donate-bg.jpg)" }}>
        <div className="absolute inset-0 bg-surface-dark/80" />
        <Container>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-pill !bg-white/10 !text-white">Donate Now</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Thanks For The Results Achieved With You
              </h2>
              <p className="text-white/70">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-surface-elevated rounded border-0 focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-surface-elevated rounded border-0 focus:ring-2 focus:ring-primary"
                />
                <div className="flex gap-4">
                  {["$10", "$20", "$30"].map((amount) => (
                    <label key={amount} className="flex-1">
                      <input type="radio" name="amount" value={amount} className="sr-only peer" defaultChecked={amount === "$10"} />
                      <div className="text-center py-3 bg-surface-elevated rounded border-2 border-transparent peer-checked:border-primary peer-checked:text-primary cursor-pointer transition-all">
                        {amount}
                      </div>
                    </label>
                  ))}
                </div>
                <a
                  href="https://wa.me/923145217958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-white text-center py-4 rounded font-semibold hover:bg-primary-dark transition-colors"
                >
                  Donate Now
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

      {/* Testimonials */}
      <Section className="py-20">
        <Container>
          <SectionHeading
            badge="Testimonial"
            title="Trusted By Thousands Of People And Nonprofits"
          />
          <TestimonialCarousel />
        </Container>
      </Section>

      {/* Featured Stories */}
      <Section className="bg-surface-elevated py-20">
        <Container>
          <SectionHeading
            badge="Our Stories"
            title="Real Stories From The Field"
            subtitle="Every person we serve has a story. Every donation writes a new chapter."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story) => (
              <StoryCard key={story.slug} {...story} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
