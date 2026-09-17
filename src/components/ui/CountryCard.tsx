import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe } from "./Icons";

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
      className="group relative block h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border-light"
    >
      {/* Background */}
      {imageUrl ? (
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
          <Globe className="w-24 h-24 text-white/10" />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-light transition-colors">
          {name}
        </h3>
        {description && (
          <p className="text-white/80 text-sm line-clamp-2 leading-relaxed mb-3">
            {description}
          </p>
        )}
        <div className="text-primary-light font-semibold text-sm flex items-center gap-2">
          <span>Explore Programs & Impact</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
