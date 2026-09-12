import Link from "next/link";

type CountryCardProps = {
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
};

export function CountryCard({ name, slug, description, imageUrl }: CountryCardProps) {
  return (
    <Link
      href={`/where-we-work/${slug}`}
      className="group relative block h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Background */}
      {imageUrl ? (
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark group-hover:scale-105 transition-transform duration-500" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        {description && (
          <p className="mt-1 text-white/80 text-sm line-clamp-2">{description}</p>
        )}
        <div className="mt-3 text-white/90 font-semibold text-sm flex items-center gap-2">
          Explore Our Work
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
