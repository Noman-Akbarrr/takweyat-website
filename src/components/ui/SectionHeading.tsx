type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 md:mb-16 ${alignment} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
