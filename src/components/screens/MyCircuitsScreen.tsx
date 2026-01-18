import { MapPin, Calendar, ChevronRight, Plus } from "lucide-react";
import { SafarnamaButton } from "@/components/ui/SafarnamaButton";
import { VerifiedBadge } from "@/components/common/VerifiedBadge";
import festivalHero from "@/assets/festival-hero.jpg";
import craftWorkshop from "@/assets/craft-workshop.jpg";

interface MyCircuitsScreenProps {
  onViewCircuit?: () => void;
}

const upcomingCircuits = [
  {
    id: 1,
    name: "Sekrenyi Festival Circuit",
    location: "Phek, Nagaland",
    dates: "Feb 25-27, 2026",
    image: festivalHero,
    status: "confirmed",
    daysUntil: 38,
  },
];

const pastCircuits = [
  {
    id: 2,
    name: "Pattachitra Workshop",
    location: "Raghurajpur, Odisha",
    dates: "Dec 10-12, 2025",
    image: craftWorkshop,
    status: "completed",
    rating: 4.8,
  },
];

export function MyCircuitsScreen({ onViewCircuit }: MyCircuitsScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-4 safe-top">
        <h1 className="font-display text-2xl font-bold text-foreground">My Circuits</h1>
        <p className="text-sm text-muted-foreground mt-1">Your travel journeys</p>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        {/* Upcoming Section */}
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground mb-3">Upcoming</h2>
          {upcomingCircuits.length > 0 ? (
            <div className="space-y-3">
              {upcomingCircuits.map((circuit) => (
                <div
                  key={circuit.id}
                  className="card-cultural p-0 overflow-hidden"
                  onClick={onViewCircuit}
                >
                  <div className="flex">
                    <img
                      src={circuit.image}
                      alt={circuit.name}
                      className="w-24 h-24 object-cover"
                    />
                    <div className="flex-1 p-3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground text-sm">{circuit.name}</h3>
                          <VerifiedBadge size="sm" />
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{circuit.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-primary font-medium">
                          <Calendar className="h-3 w-3" />
                          <span>{circuit.dates}</span>
                        </div>
                        <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-full">
                          {circuit.daysUntil} days to go
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center pr-3">
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card-cultural p-6 text-center">
              <p className="text-muted-foreground text-sm">No upcoming circuits</p>
            </div>
          )}
        </section>

        {/* Past Circuits Section */}
        <section>
          <h2 className="font-display text-lg font-semibold text-foreground mb-3">Past Adventures</h2>
          {pastCircuits.length > 0 ? (
            <div className="space-y-3">
              {pastCircuits.map((circuit) => (
                <div
                  key={circuit.id}
                  className="card-cultural p-0 overflow-hidden opacity-80"
                >
                  <div className="flex">
                    <img
                      src={circuit.image}
                      alt={circuit.name}
                      className="w-24 h-24 object-cover grayscale-[30%]"
                    />
                    <div className="flex-1 p-3 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground text-sm">{circuit.name}</h3>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{circuit.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{circuit.dates}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs text-primary">★ {circuit.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center pr-3">
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card-cultural p-6 text-center">
              <p className="text-muted-foreground text-sm">No past circuits yet</p>
            </div>
          )}
        </section>

        {/* Create New Circuit CTA */}
        <div className="pt-4">
          <SafarnamaButton variant="outline" className="w-full" size="lg">
            <Plus className="h-5 w-5 mr-2" />
            Plan a New Circuit
          </SafarnamaButton>
        </div>
      </div>
    </div>
  );
}
