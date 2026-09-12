import Link from "next/link";

type StoryCardProps = {
  title: string;
  excerpt: string;
  slug: string;
  imageUrl?: string;
  date?: string;
  category?: string;
};

export function StoryCard({
  title,
  excerpt,
  slug,
  imageUrl,
  date,
  category,
}: StoryCardProps) {
  return (
    <Link
      href={`/stories/${slug}`}
      className="group block bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border-light"
    >
      {/* Image */}
      {imageUrl ? (
        <div className="aspect-[16/10] overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
      ) : (
        <div className="aspect-[16/10] bg-surface-elevated" />
      )}

      {/* Content */}
      <div className="p-6">
        {category && (
          <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
            {category}
          </span>
        )}
        <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-text-secondary text-sm line-clamp-3">{excerpt}</p>
        {date && (
          <p className="mt-3 text-text-muted text-xs">{date}</p>
        )}
      </div>
    </Link>
  );
}
