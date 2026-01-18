import { MapPin, Clock, Users, Sparkles } from "lucide-react";

interface FeaturedCircuitProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  location: string;
  duration: string;
  spotsLeft?: number;
  onClick: () => void;
}

export function FeaturedCircuitCard({
  title,
  subtitle,
  description,
  image,
  badge,
  location,
  duration,
  spotsLeft,
  onClick,
}: FeaturedCircuitProps) {
  return (
    <button
      onClick={onClick}
      className="w-full card-cultural overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary/50 text-left"
    >
      {/* Hero Image */}
      <div className="relative aspect-[16/9]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        {/* Top Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold shadow-lg">
            <Sparkles className="h-3 w-3" />
            {badge}
          </span>
          {spotsLeft && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-card/95 text-foreground text-xs font-medium shadow-lg">
              <Users className="h-3 w-3 text-primary" />
              {spotsLeft} Spots Left
            </span>
          )}
        </div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 pb-5">
          <div className="space-y-2">
            {/* Subtitle */}
            <p className="text-primary-foreground/70 text-xs font-medium uppercase tracking-wider">
              {subtitle}
            </p>
            
            {/* Title */}
            <h2 className="text-primary-foreground font-display text-2xl md:text-3xl font-bold leading-tight">
              {title}
            </h2>
            
            {/* Description */}
            <p className="text-primary-foreground/85 text-sm leading-relaxed max-w-md">
              {description}
            </p>
            
            {/* Meta Info */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-primary-foreground/80 text-xs">
                <MapPin className="h-3.5 w-3.5" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1.5 text-primary-foreground/80 text-xs">
                <Clock className="h-3.5 w-3.5" />
                <span>{duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom CTA Strip */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/5 to-accent/5 border-t border-border">
        <span className="text-xs text-muted-foreground font-medium">
          Verified Circuit • Trusted Partners
        </span>
        <span className="text-xs text-primary font-semibold">
          Explore →
        </span>
      </div>
    </button>
  );
}
