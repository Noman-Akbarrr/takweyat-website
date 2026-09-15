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
      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            Our Approach
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
              <li className="text-primary">Our Approach</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Approach Content */}
      <Section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                { step: 1, title: "Listen to Communities", description: "We don't impose solutions. We listen to communities to understand their needs, their challenges, and their aspirations. Every program we run is designed with and for the people it serves." },
                { step: 2, title: "Provide Immediate Relief", description: "When people are in crisis, they need help now. We provide immediate support — food, medical care, shelter — to address urgent needs while working on long-term solutions." },
                { step: 3, title: "Build Sustainable Solutions", description: "Relief is temporary. We invest in sustainable programs — schools, livelihood training, healthcare infrastructure — that create lasting change and empower communities to thrive on their own." },
                { step: 4, title: "Advocate for Systemic Change", description: "Beyond direct service, we advocate for the systemic changes needed to address the root causes of poverty, inequality, and injustice. We use our voice to speak up for those who cannot speak for themselves." },
                { step: 5, title: "Measure and Report Impact", description: "We believe in accountability. We measure our impact, track our results, and publish detailed reports so that every donor knows exactly how their contribution is making a difference." },
              ].map((item) => (
                <div key={item.step} className="flex gap-8 items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary mb-3">
                      {item.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
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
