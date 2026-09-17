import Link from "next/link";
import { ArrowRight, BookOpen, HeartPulse, Droplets, Scale, HandHeart } from "./Icons";

type ProgramCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: string;
  progress?: number;
  goal?: string;
  raised?: string;
};

function getProgramIcon(icon?: string) {
  switch (icon?.toLowerCase()) {
    case "education":
    case "child education":
      return <BookOpen className="w-5 h-5" />;
    case "medical":
    case "healthy life":
    case "healthcare":
      return <HeartPulse className="w-5 h-5" />;
    case "pure water":
    case "water":
      return <Droplets className="w-5 h-5" />;
    case "justice":
    case "social justice":
      return <Scale className="w-5 h-5" />;
    default:
      return <HandHeart className="w-5 h-5" />;
  }
}

export function ProgramCard({
  title,
  description,
  href,
  icon,
  progress = 0,
  goal,
  raised,
}: ProgramCardProps) {
  return (
    <div className="flex flex-col bg-surface rounded-xl border-t-4 border-t-primary overflow-hidden h-full shadow-card hover:shadow-lg transition-all duration-300 border border-border-light group">
      <div className="p-6 flex-1 flex flex-col">
        {icon && (
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full text-xs font-semibold py-1 px-3 mb-4 w-fit">
            {getProgramIcon(icon)}
            <span>{icon}</span>
          </div>
        )}
        <h4 className="mb-3 font-bold text-xl text-text-primary group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {(goal || raised) && (
          <div className="bg-surface-elevated rounded-lg p-4 mb-5 border border-border-light/60">
            <div className="flex justify-between items-center text-sm font-medium mb-2">
              <span className="text-text-primary">
                {raised} <small className="text-text-muted font-normal">Raised</small>
              </span>
              <span className="text-text-primary">
                {goal} <small className="text-text-muted font-normal">Goal</small>
              </span>
            </div>
            <div className="w-full bg-border-light h-2 rounded-full overflow-hidden">
              <div
                className="bg-primary h-full rounded-full transition-all duration-1000"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              />
            </div>
            <div className="text-right mt-1.5">
              <span className="text-xs font-semibold text-primary">{progress}% Achieved</span>
            </div>
          </div>
        )}

        <div className="mt-auto pt-2">
          <Link
            href={href}
            className="inline-flex items-center justify-between w-full border border-primary/20 text-primary px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary hover:text-white transition-all group-hover:border-primary"
          >
            <span>Learn More & Support</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
