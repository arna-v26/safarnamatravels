import { MessageCircle, MapPin, AlertTriangle, Clock, Navigation } from "lucide-react";
import { SafarnamaButton } from "@/components/ui/SafarnamaButton";
import pottery from "@/assets/pottery.jpg";

interface ActiveTripScreenProps {
  onComplete: () => void;
}

export function ActiveTripScreen({ onComplete }: ActiveTripScreenProps) {
  return (
    <div className="animate-fade-in">
      {/* Header with Status */}
      <div className="screen-padding bg-primary text-primary-foreground pb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm opacity-80">Active Trip</p>
            <h1 className="text-xl font-display font-semibold">Live Trip</h1>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center animate-pulse-soft">
            <div className="h-3 w-3 rounded-full bg-primary-foreground" />
          </div>
        </div>
        
        {/* Current Status Card */}
        <div className="rounded-xl bg-primary-foreground/10 backdrop-blur-sm p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">Day 2 of 3</span>
          </div>
          <p className="text-lg font-semibold">Craft Workshop</p>
          <p className="text-sm opacity-80">Starts at 10:00 AM</p>
        </div>
      </div>

      <div className="screen-padding -mt-4">
        {/* Activity Preview Card */}
        <div className="card-cultural mb-6 overflow-hidden">
          <div className="relative h-40">
            <img
              src={pottery}
              alt="Pottery Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                Today's Highlight
              </span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-foreground mb-1">Day 2: Craft Workshop</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Learn traditional pottery from local artisans in their workshop.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>10:00 AM - 1:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <SafarnamaButton
            variant="whatsapp"
            size="default"
            className="flex-col h-auto py-4"
          >
            <MessageCircle className="h-6 w-6 mb-1" />
            <span className="text-sm">Chat with Coordinator</span>
          </SafarnamaButton>
          
          <SafarnamaButton
            variant="secondary"
            size="default"
            className="flex-col h-auto py-4"
          >
            <Navigation className="h-6 w-6 mb-1 text-primary" />
            <span className="text-sm text-foreground">Show Route</span>
          </SafarnamaButton>
        </div>

        {/* Coordinator Info */}
        <section className="mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Your Coordinator
          </h2>
          
          <div className="card-cultural p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-lg font-semibold text-primary">RK</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Rajesh Kumar</p>
                <p className="text-sm text-muted-foreground">Local Expert • 4.9 ★</p>
              </div>
              <SafarnamaButton variant="outline" size="sm">
                Call
              </SafarnamaButton>
            </div>
          </div>
        </section>

        {/* Emergency Protocol */}
        <section className="mb-6">
          <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/30">
            <div className="h-10 w-10 rounded-full bg-destructive flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-destructive-foreground" />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-foreground">Emergency Protocol</p>
              <p className="text-sm text-muted-foreground">One-tap escalation support</p>
            </div>
          </button>
        </section>

        {/* Complete Trip Button (for demo) */}
        <SafarnamaButton
          variant="accent"
          size="lg"
          fullWidth
          onClick={onComplete}
        >
          Complete Trip Demo
        </SafarnamaButton>
      </div>
    </div>
  );
}
