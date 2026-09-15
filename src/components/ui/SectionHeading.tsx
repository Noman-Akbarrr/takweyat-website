type SectionHeadingProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  badge,
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 md:mb-16 ${alignment} ${className}`} style={{ maxWidth: align === "center" ? "500px" : undefined }}>
      {badge && (
        <div className="badge-pill">
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-secondary">
          {subtitle}
        </p>
      )}
    </div>
  );
}
