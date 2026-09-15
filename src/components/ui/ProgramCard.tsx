import Link from "next/link";

type ProgramCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: string;
  progress?: number;
  goal?: string;
  raised?: string;
};

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
    <div className="causes-item flex flex-col bg-white border-t-5 border-t-primary rounded-t overflow-hidden h-full shadow-card">
      <div className="text-center p-6 pt-0">
        {icon && (
          <div className="inline-block bg-primary text-white rounded-b-lg text-sm pb-1 px-3 mb-4">
            <small>{icon}</small>
          </div>
        )}
        <h5 className="mb-3 font-bold text-text-primary">{title}</h5>
        <p className="text-text-secondary text-sm">{description}</p>
        {(goal || raised) && (
          <div className="causes-progress bg-surface-elevated p-3 pt-2 mt-4">
            <div className="flex justify-content-between">
              <p className="text-dark text-sm">
                {raised} <small className="text-text-muted">Raised</small>
              </p>
              <p className="text-dark text-sm">
                {goal} <small className="text-text-muted">Goal</small>
              </p>
            </div>
            <div className="progress mt-2">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: `${progress}%` }}
              >
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="relative mt-auto">
        <div className="causes-overlay">
          <Link
            href={href}
            className="inline-flex items-center gap-2 border-2 border-white text-white px-5 py-2 rounded font-semibold hover:bg-white hover:text-primary transition-all"
          >
            Read More
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
