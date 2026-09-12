import { Button } from "./Button";
import { Container } from "./Container";

type DonationCTAProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function DonationCTA({
  title = "Ready to Make a Difference?",
  description = "With every meal shared, a soul is nourished. With every lesson gifted, a future is rewritten. Give today, shape tomorrow.",
  buttonText = "Donate Now",
  buttonHref = "/get-involved/donate",
}: DonationCTAProps) {
  return (
    <section className="bg-primary py-16 md:py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-inverse">
            {title}
          </h2>
          <p className="mt-6 text-lg text-text-inverse/80 leading-relaxed">
            {description}
          </p>
          <div className="mt-8">
            <Button href={buttonHref} variant="action" size="lg">
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
