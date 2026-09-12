import Link from "next/link";
import { Container, Section } from "@/components/ui";

export const metadata = {
  title: "Thank You for Your Donation",
  description: "Thank you for your generous donation to Takweyat Foundation. Your support creates real change.",
};

export default function ThankYouPage() {
  return (
    <Section className="min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Thank You
          </h1>

          <p className="text-xl text-text-secondary leading-relaxed mb-4">
            Your generosity, their future.
          </p>

          <p className="text-text-secondary leading-relaxed mb-8">
            Your donation will help us continue our work providing education, food,
            healthcare, and hope to communities in need across 8 countries.
          </p>

          <div className="bg-surface-elevated rounded-2xl p-8 mb-8">
            <p className="text-sm text-text-muted mb-2">What happens next:</p>
            <div className="space-y-3 text-left max-w-sm mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-text-secondary text-sm">
                  A receipt has been sent to your email
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-text-secondary text-sm">
                  We&apos;ll send you impact updates about your donation
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-text-secondary text-sm">
                  Your support makes a real difference
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-primary text-text-inverse font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/stories"
              className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-text-inverse transition-colors"
            >
              Read Our Stories
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
