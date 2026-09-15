import Link from "next/link";
import { Container, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-slide-in-down">
            404 - Page Not Found
          </h1>
          <nav aria-label="breadcrumb" className="animate-slide-in-down">
            <ol className="flex justify-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-white/50">/</li>
              <li className="text-primary">404</li>
            </ol>
          </nav>
        </div>
      </div>

      <Section className="py-20">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-8xl font-bold text-primary/20 mb-8">404</div>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Page Not Found
            </h2>
            <p className="text-text-secondary mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-primary text-text-inverse font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-text-inverse transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
