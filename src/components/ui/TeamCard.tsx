import Image from "next/image";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, Users } from "./Icons";

type TeamCardProps = {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  social?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
};

export function TeamCard({ name, role, image, bio, social }: TeamCardProps) {
  return (
    <div className="group bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-primary-light/20 flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-primary/60">
            <div className="w-20 h-20 rounded-full bg-white shadow-inner flex items-center justify-center mb-2">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <span className="text-xs font-semibold text-text-muted">Takweyat Team</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1 text-center">
        <h4 className="font-bold text-lg text-text-primary group-hover:text-primary transition-colors">
          {name}
        </h4>
        <p className="text-primary font-medium text-sm mb-2">{role}</p>
        {bio && (
          <p className="text-text-secondary text-xs line-clamp-2 mb-3">
            {bio}
          </p>
        )}
        {social && (
          <div className="mt-auto pt-3 border-t border-border-light flex justify-center gap-2">
            {social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-border-light flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary hover:border-primary transition-all"
                aria-label={`${name}'s Facebook`}
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-border-light flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary hover:border-primary transition-all"
                aria-label={`${name}'s X profile`}
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-border-light flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary hover:border-primary transition-all"
                aria-label={`${name}'s LinkedIn`}
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
            )}
            {social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-border-light flex items-center justify-center text-text-secondary hover:text-white hover:bg-primary hover:border-primary transition-all"
                aria-label={`${name}'s Instagram`}
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
