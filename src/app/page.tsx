import {
  Container,
  Section,
  StatsCounter,
  SectionHeading,
  ProgramCard,
  StoryCard,
  DonationCTA,
} from "@/components/ui";
import { generateBreadcrumbSchema } from "@/lib/seo/schema";

const programs = [
  {
    title: "Education for All",
    description: "Establishing learning centers, providing school supplies, and supporting underprivileged students across 8 countries.",
    href: "/our-work/education-for-all",
    icon: "📚",
  },
  {
    title: "Financial Support & Livelihoods",
    description: "Financial assistance to struggling families, small business setup, and vocational training for sustainable incomes.",
    href: "/our-work/financial-support-livelihoods",
    icon: "💼",
  },
  {
    title: "Social Justice & Advocacy",
    description: "Nationwide protests, boycott campaigns, grassroots activism, and raising voices against oppression and inequality.",
    href: "/our-work/social-justice-advocacy",
    icon: "⚖️",
  },
  {
    title: "Medical Aid & Healthcare",
    description: "Medical camps, emergency aid, and financial support for critical treatments. Working toward a free hospital for those in need.",
    href: "/our-work/medical-aid-healthcare",
    icon: "🏥",
  },
  {
    title: "Hunger Relief & Food Distribution",
    description: "Daily meal programs, Ramadan iftars, and dastarkhawans providing thousands of meals to those in need.",
    href: "/our-work/hunger-relief-food-distribution",
    icon: "🍽️",
  },
  {
    title: "Orphan & Widow Assistance",
    description: "Shelter, education, emotional and financial aid for those who have lost their loved ones.",
    href: "/our-work/orphan-widow-assistance",
    icon: "🤲",
  },
];

const stories = [
  {
    title: "Takweyat Foundation: A Relentless Force for Social Justice",
    excerpt: "In a world where injustice often goes unchallenged, Takweyat Foundation stands as a beacon of hope, resilience, and action. At the heart of our mission...",
    slug: "relentless-force-for-social-justice",
    category: "Social Justice",
  },
  {
    title: "Feeding Hope: Takweyat's Mission to Nourish Lives",
    excerpt: "At Takweyat, we believe that a hot meal is more than just food—it's dignity, hope, and a step toward a better society. Every day, countless people...",
    slug: "feeding-hope-takweyats-mission-to-nourish-lives",
    category: "Hunger Relief",
  },
  {
    title: "Revolutionizing Education: The Takweyat Vision",
    excerpt: "How We Can Change the Way We Learn. For centuries, education has remained the same—a teacher, a blackboard, a textbook. At Takweyat, we believe...",
    slug: "revolutionizing-education-the-takweyat-vision",
    category: "Education",
  },
];

const countries = [
  { name: "Pakistan", slug: "pakistan" },
  { name: "Palestine", slug: "palestine" },
  { name: "Sudan", slug: "sudan" },
  { name: "UK", slug: "uk" },
  { name: "Norway", slug: "norway" },
];

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", url: "/" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-inverse leading-tight">
              Your Generosity, Their Future
            </h1>
            <p className="mt-2 text-xl md:text-2xl text-text-inverse/90 font-medium">
              A Gift of Hope, A Legacy of Change
            </p>
            <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed max-w-2xl">
              At Takweyat Foundation, every act of kindness is a seed sown for a brighter tomorrow. Your Zakat, Sadaqah, and charitable support are lifelines of warmth, wisdom, and well-being.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/get-involved/donate"
                className="inline-flex items-center justify-center px-8 py-4 bg-action text-text-inverse font-semibold rounded-lg hover:bg-action-dark transition-colors"
              >
                Donate Now
              </a>
              <a
                href="/our-impact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-text-inverse text-text-inverse font-semibold rounded-lg hover:bg-text-inverse hover:text-primary transition-colors"
              >
                See Our Impact
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <Section className="py-12 bg-surface border-b border-border-light">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <StatsCounter value="500+" label="Children Being Educated" />
            <StatsCounter value="1K+" label="Hot Meals Distributed" />
            <StatsCounter value="50+" label="Legal Services Provided" />
            <StatsCounter value="200+" label="Ration Packages Distributed" />
            <StatsCounter value="1K+" label="Clothes Distributed" />
          </div>
        </Container>
      </Section>

      {/* Where We Work */}
      <Section>
        <Container>
          <SectionHeading
            title="Where We Work"
            subtitle="We work with communities across 8 countries, bringing education, food, healthcare, and hope where it's needed most."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countries.map((country) => (
              <a
                key={country.slug}
                href={`/where-we-work/${country.slug}`}
                className="group flex items-center justify-center h-32 bg-surface-elevated rounded-xl hover:bg-primary/10 transition-colors border border-border-light"
              >
                <div className="text-center">
                  <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-2 group-hover:scale-125 transition-transform" />
                  <span className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">
                    {country.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="/where-we-work"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Explore Our Work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </Container>
      </Section>

      {/* What We Do */}
      <Section className="bg-surface-elevated">
        <Container>
          <SectionHeading
            title="What We Do"
            subtitle="From education to emergency relief, we work across six core programs to create lasting change."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <ProgramCard key={program.href} {...program} />
            ))}
          </div>
        </Container>
      </Section>

      {/* One Person. One Story. */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] bg-surface-elevated rounded-xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-text-muted text-sm">name 2 — Story Photo</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                One Person. One Story.
              </p>
              <blockquote className="text-2xl md:text-3xl font-bold text-text-primary leading-snug">
                &ldquo;In the hands that give, a new dawn rises; in the hearts that receive, hope takes flight.&rdquo;
              </blockquote>
              <p className="mt-6 text-text-secondary leading-relaxed">
                Every person we serve has a story. Every donation writes a new chapter. Meet the people whose lives have been transformed by your generosity.
              </p>
              <a
                href="/stories"
                className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Read Their Stories
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Stories */}
      <Section className="bg-surface-elevated">
        <Container>
          <SectionHeading
            title="Featured Stories"
            subtitle="Real stories from the field. Real impact. Real change."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story) => (
              <StoryCard key={story.slug} {...story} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Donation CTA */}
      <DonationCTA />
    </>
  );
}
