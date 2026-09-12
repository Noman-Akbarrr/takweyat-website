import { Metadata } from "next";
import Link from "next/link";
import { Container, Section, DonationCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Approach",
  description: "We combine direct action with sustainable solutions, working alongside communities to create lasting change.",
};

export default function ApproachPage() {
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
              Our Approach
            </h1>
            <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
              We combine direct action with sustainable solutions, working alongside communities to create change that lasts.
            </p>
          </div>
        </Container>
      </section>

      {/* Approach Content */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex gap-8 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-text-inverse font-bold text-lg">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3">
                    Listen to Communities
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    We don&apos;t impose solutions. We listen to communities to understand their needs, their challenges, and their aspirations. Every program we run is designed with and for the people it serves.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-8 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-text-inverse font-bold text-lg">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3">
                    Provide Immediate Relief
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    When people are in crisis, they need help now. We provide immediate support — food, medical care, shelter — to address urgent needs while working on long-term solutions.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-8 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-text-inverse font-bold text-lg">
                  3
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3">
                    Build Sustainable Solutions
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    Relief is temporary. We invest in sustainable programs — schools, livelihood training, healthcare infrastructure — that create lasting change and empower communities to thrive on their own.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-8 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-text-inverse font-bold text-lg">
                  4
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3">
                    Advocate for Systemic Change
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    Beyond direct service, we advocate for the systemic changes needed to address the root causes of poverty, inequality, and injustice. We use our voice to speak up for those who cannot speak for themselves.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-8 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-text-inverse font-bold text-lg">
                  5
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3">
                    Measure and Report Impact
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    We believe in accountability. We measure our impact, track our results, and publish detailed reports so that every donor knows exactly how their contribution is making a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <DonationCTA />
    </>
  );
}
