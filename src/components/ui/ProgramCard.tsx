import Link from "next/link";

type ProgramCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: string;
};

export function ProgramCard({ title, description, href, icon }: ProgramCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-surface rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border-light hover:border-primary/30"
    >
      {icon && (
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <span className="text-primary text-xl">{icon}</span>
        </div>
      )}
      <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
      <div className="mt-4 text-primary font-semibold text-sm flex items-center gap-2">
        Learn More
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
