type PartnerLogoProps = {
  name: string;
  logoUrl?: string;
  url?: string;
};

export function PartnerLogo({ name, logoUrl, url }: PartnerLogoProps) {
  const content = (
    <div className="flex items-center justify-center h-20 px-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={name}
          className="max-h-12 max-w-full object-contain"
        />
      ) : (
        <span className="text-text-secondary font-semibold text-sm text-center">
          {name}
        </span>
      )}
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
      >
        {content}
      </a>
    );
  }

  return content;
}
