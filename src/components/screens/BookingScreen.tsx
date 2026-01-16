import { ArrowLeft, ShieldCheck, CreditCard, MapPin, Home, Palette, Camera } from "lucide-react";
import { SafarnamaButton } from "@/components/ui/SafarnamaButton";

interface BookingScreenProps {
  onBack: () => void;
  onConfirm: () => void;
}

export function BookingScreen({ onBack, onConfirm }: BookingScreenProps) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="screen-padding border-b border-border">
        <div className="flex items-center gap-3 py-2">
          <button
            onClick={onBack}
            className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-xl font-display font-semibold text-foreground">Order Summary</h1>
            <p className="text-sm text-muted-foreground">Review your circuit</p>
          </div>
        </div>
      </div>

      <div className="screen-padding">
        {/* Bundle Summary */}
        <section className="mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Your Bundle
          </h2>
          
          <div className="card-cultural p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Home className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Stay</p>
                  <p className="text-xs text-muted-foreground">Traditional Naga Homestay • 2 nights</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Palette className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Experiences</p>
                  <p className="text-xs text-muted-foreground">Pottery Workshop, Cultural Evening</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">Essentials</p>
                  <p className="text-xs text-muted-foreground">Local Guide, Transport</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Cost Breakup
          </h2>
          
          <div className="card-cultural p-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Base Fare</span>
                <span className="text-sm font-medium text-foreground">₹18,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Local Taxes</span>
                <span className="text-sm font-medium text-foreground">₹2,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Coordinator Fee</span>
                <span className="text-sm font-medium text-foreground">₹2,500</span>
              </div>
              
              <div className="border-t border-border pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="text-xl font-bold text-primary">₹23,500</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Safety Banner */}
        <section className="mb-6">
          <div className="rounded-xl bg-accent/10 border border-accent/30 p-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Trust & Safety</p>
                <p className="text-sm text-muted-foreground">
                  Verified coordinator assigned upon payment. 24/7 support during your trip.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Method */}
        <section className="mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Payment Method
          </h2>
          
          <button className="w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground text-sm">Add Payment Method</p>
                <p className="text-xs text-muted-foreground">UPI, Cards, Net Banking</p>
              </div>
            </div>
            <ArrowLeft className="h-4 w-4 text-muted-foreground rotate-180" />
          </button>
        </section>

        {/* Confirm Button */}
        <SafarnamaButton
          variant="primary"
          size="lg"
          fullWidth
          onClick={onConfirm}
        >
          Secure My Circuit
        </SafarnamaButton>
        
        <p className="text-xs text-center text-muted-foreground mt-3">
          No hidden fees • Transparent pricing
        </p>
      </div>
    </div>
  );
}
