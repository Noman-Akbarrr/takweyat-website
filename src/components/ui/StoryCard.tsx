import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Sparkles } from "./Icons";

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
      className="group flex flex-col bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light h-full"
    >
      {/* Image or Stylized Placeholder */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary-dark/80 via-primary to-primary-light/70">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col justify-between p-6 text-white">
            <div className="flex justify-between items-start">
              {category && (
                <span className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {category}
                </span>
              )}
              <Sparkles className="w-5 h-5 text-white/60" />
            </div>
            <p className="text-white/90 text-sm font-medium line-clamp-2">
              Field Dispatch & Impact Story
            </p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {category && imageUrl && (
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-wider mb-2">
            {category}
          </span>
        )}
        <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors line-clamp-2 mb-2">
          {title}
        </h3>
        <p className="text-text-secondary text-sm line-clamp-3 leading-relaxed mb-4 flex-1">
          {excerpt}
        </p>
        <div className="mt-auto pt-3 border-t border-border-light flex items-center justify-between text-xs text-text-muted">
          {date ? (
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              {date}
            </span>
          ) : (
            <span className="text-primary font-medium">Read Full Story</span>
          )}
          <span className="text-primary font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Read</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
