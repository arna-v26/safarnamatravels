import { Download, ShoppingBag, Calendar, Heart, Users, Home } from "lucide-react";
import { SafarnamaButton } from "@/components/ui/SafarnamaButton";
import impactTree from "@/assets/impact-tree.png";
import craftWorkshop from "@/assets/craft-workshop.jpg";

interface PostTripScreenProps {
  onPlanNext: () => void;
}

export function PostTripScreen({ onPlanNext }: PostTripScreenProps) {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="screen-padding">
        <h1 className="text-2xl font-display font-semibold text-foreground mb-1">
          Your Journey's Impact
        </h1>
        <p className="text-sm text-muted-foreground mb-4">
          Thank you for traveling responsibly
        </p>
      </div>

      <div className="screen-padding pt-0">
        {/* Impact Success Card */}
        <div className="card-cultural p-6 mb-6 text-center">
          <div className="w-32 h-32 mx-auto mb-4">
            <img
              src={impactTree}
              alt="Impact Tree"
              className="w-full h-full object-contain"
            />
          </div>
          
          <h2 className="text-lg font-display font-semibold text-foreground mb-2">
            You made a difference!
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Your visit supported local communities and preserved cultural heritage.
          </p>
          
          {/* Impact Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-accent/10 p-3">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-2xl font-bold text-accent">5</span>
              </div>
              <p className="text-xs text-muted-foreground">Local Artisans</p>
            </div>
            <div className="rounded-xl bg-primary/10 p-3">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Home className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <p className="text-xs text-muted-foreground">Homestay Supported</p>
            </div>
          </div>
        </div>

        {/* Digital Memory Kit */}
        <section className="mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Digital Memory Kit
          </h2>
          
          <div className="card-cultural p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-16 w-16 rounded-xl bg-secondary flex items-center justify-center">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Trip Photos & Videos</p>
                <p className="text-sm text-muted-foreground">
                  7 days remaining to download
                </p>
              </div>
            </div>
            <SafarnamaButton variant="outline" fullWidth>
              <Download className="h-4 w-4 mr-2" />
              Download Memory Kit
            </SafarnamaButton>
          </div>
        </section>

        {/* Artisan Marketplace */}
        <section className="mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Artisan Marketplace
          </h2>
          
          <div className="card-cultural overflow-hidden">
            <div className="h-32 overflow-hidden">
              <img
                src={craftWorkshop}
                alt="Artisan Crafts"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="font-semibold text-foreground mb-1">
                Love the pottery you made?
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Shop from the artisans you met
              </p>
              <SafarnamaButton variant="secondary" fullWidth>
                <ShoppingBag className="h-4 w-4 mr-2" />
                Visit Marketplace
              </SafarnamaButton>
            </div>
          </div>
        </section>

        {/* Next Adventure */}
        <section className="mb-4">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Plan Your Next Adventure
          </h2>
          
          <div className="rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 p-4 border border-primary/20">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Calendar className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground mb-1">Recommended Festival</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Hornbill Festival, Nagaland • Dec 1-10
                </p>
                <div className="flex items-center gap-2">
                  <span className="badge-verified">
                    <Heart className="h-3 w-3" />
                    Based on your interests
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Next Button */}
        <SafarnamaButton
          variant="primary"
          size="lg"
          fullWidth
          onClick={onPlanNext}
        >
          Plan My Next Adventure
        </SafarnamaButton>
      </div>
    </div>
  );
}
