type TeamCardProps = {
  name: string;
  role: string;
  image?: string;
  social?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
};

export function TeamCard({ name, role, image, social }: TeamCardProps) {
  return (
    <div className="team-item relative rounded overflow-hidden">
      <div className="overflow-hidden">
        {image ? (
          <img className="img-fluid w-full" src={image} alt={name} />
        ) : (
          <div className="w-full aspect-square bg-surface-elevated flex items-center justify-center">
            <span className="text-text-muted text-sm">Team Photo</span>
          </div>
        )}
      </div>
      <div className="team-text bg-surface-elevated text-center p-4 relative">
        <h5 className="font-bold text-text-primary">{name}</h5>
        <p className="text-primary text-sm">{role}</p>
        <div className="team-social text-center mt-3 flex justify-center gap-2">
          {social?.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <i className="fab fa-facebook-f text-xs" />
            </a>
          )}
          {social?.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <i className="fab fa-twitter text-xs" />
            </a>
          )}
          {social?.instagram && (
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
              <i className="fab fa-instagram text-xs" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
