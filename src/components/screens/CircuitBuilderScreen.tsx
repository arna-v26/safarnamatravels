import { useState } from "react";
import { ArrowLeft, Home, Palette, Camera, MapPin, Users } from "lucide-react";
import { VerifiedBadge } from "@/components/common/VerifiedBadge";
import { ToggleSwitch } from "@/components/common/ToggleSwitch";
import { SafarnamaButton } from "@/components/ui/SafarnamaButton";
import festivalHero from "@/assets/festival-hero.jpg";
import homestay from "@/assets/homestay.jpg";

interface Experience {
  id: string;
  name: string;
  category: string;
  icon: typeof Home;
  enabled: boolean;
}

interface CircuitBuilderScreenProps {
  onBack: () => void;
  onContinue: () => void;
}

export function CircuitBuilderScreen({ onBack, onContinue }: CircuitBuilderScreenProps) {
  const [selectedTier, setSelectedTier] = useState<"basic" | "premium">("basic");
  const [experiences, setExperiences] = useState<Experience[]>([
    { id: "1", name: "Traditional Homestay", category: "Stay", icon: Home, enabled: true },
    { id: "2", name: "Third Shaiylling", category: "Eco-Ecolodge", icon: Home, enabled: false },
    { id: "3", name: "Pottery Workshop", category: "Craft", icon: Palette, enabled: true },
    { id: "4", name: "Storytelling Evening", category: "Culture", icon: Palette, enabled: false },
  ]);
  const [services, setServices] = useState({
    localGuide: true,
    photographer: false,
  });

  const toggleExperience = (id: string) => {
    setExperiences((prev) =>
      prev.map((exp) =>
        exp.id === id ? { ...exp, enabled: !exp.enabled } : exp
      )
    );
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Image */}
      <div className="relative h-48">
        <img
          src={festivalHero}
          alt="Sekrenyi Festival"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 h-10 w-10 rounded-full bg-card/90 flex items-center justify-center shadow-soft"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        
        {/* Verified Badge */}
        <div className="absolute top-4 right-4">
          <VerifiedBadge size="md" />
        </div>
        
        {/* Title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h1 className="text-primary-foreground text-xl font-display font-semibold">
            Sekrenyi Festival
          </h1>
          <p className="text-primary-foreground/80 text-sm">Khonoma, Nagaland</p>
        </div>
      </div>

      <div className="screen-padding">
        {/* Stay Section */}
        <section className="mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Stay
          </h2>
          
          <div className="card-cultural p-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={homestay}
                  alt="Traditional Homestay"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Traditional Naga Homestay</p>
                <p className="text-sm text-muted-foreground">Basic 8 rooms max</p>
              </div>
              <div className="badge-verified">
                <span className="text-xs">₹895 /n</span>
              </div>
            </div>
            
            {/* Tier Selection */}
            <div className="flex gap-2 mt-3">
              {["basic", "premium"].map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier as "basic" | "premium")}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedTier === tier
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {tier.charAt(0).toUpperCase() + tier.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Experience
          </h2>
          
          <div className="space-y-2">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="flex items-center justify-between p-3 rounded-xl bg-card border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                    <exp.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{exp.name}</p>
                    <p className="text-xs text-muted-foreground">{exp.category}</p>
                  </div>
                </div>
                <ToggleSwitch
                  checked={exp.enabled}
                  onChange={() => toggleExperience(exp.id)}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Services
          </h2>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Verified Local Guide</p>
                  <p className="text-xs text-muted-foreground">Expert cultural navigator</p>
                </div>
              </div>
              <ToggleSwitch
                checked={services.localGuide}
                onChange={(v) => setServices((s) => ({ ...s, localGuide: v }))}
              />
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Camera className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Travel Photographer</p>
                  <p className="text-xs text-muted-foreground">Professional memories</p>
                </div>
              </div>
              <ToggleSwitch
                checked={services.photographer}
                onChange={(v) => setServices((s) => ({ ...s, photographer: v }))}
              />
            </div>
          </div>
        </section>

        {/* Capacity Label */}
        <div className="flex items-center justify-center gap-2 py-3 mb-4 rounded-xl bg-secondary border border-border">
          <Users className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground">Maximum 12 travelers</span>
        </div>

        {/* Continue Button */}
        <SafarnamaButton
          variant="primary"
          size="lg"
          fullWidth
          onClick={onContinue}
        >
          Confirm My Circuit
        </SafarnamaButton>
      </div>
    </div>
  );
}
