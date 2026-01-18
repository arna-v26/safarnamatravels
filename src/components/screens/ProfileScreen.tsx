import { User, Settings, CreditCard, HelpCircle, LogOut, ChevronRight, Award, MapPin, Camera } from "lucide-react";
import { SafarnamaButton } from "@/components/ui/SafarnamaButton";

interface ProfileScreenProps {
  onNavigate?: (section: string) => void;
}

const menuItems = [
  { id: "bookings", icon: CreditCard, label: "Booking History", subtitle: "View past transactions" },
  { id: "rewards", icon: Award, label: "Travel Rewards", subtitle: "150 points earned" },
  { id: "preferences", icon: Settings, label: "Preferences", subtitle: "Language, notifications" },
  { id: "help", icon: HelpCircle, label: "Help & Support", subtitle: "FAQs, contact us" },
];

const stats = [
  { label: "Circuits", value: "3" },
  { label: "States", value: "5" },
  { label: "Artisans", value: "12" },
];

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-4 safe-top">
        <h1 className="font-display text-2xl font-bold text-foreground">Profile</h1>
      </header>

      <div className="flex-1 overflow-y-auto">
        {/* Profile Card */}
        <div className="px-4 py-6">
          <div className="card-cultural p-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <User className="h-10 w-10 text-primary-foreground" />
                </div>
                <button className="absolute -bottom-1 -right-1 p-1.5 bg-background border border-border rounded-full shadow-sm">
                  <Camera className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="flex-1">
                <h2 className="font-display text-xl font-bold text-foreground">Traveler</h2>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>India</span>
                </div>
                <p className="text-xs text-primary font-medium mt-1">Member since 2025</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Banner */}
        <div className="px-4 pb-4">
          <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl p-4 border border-accent/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
                <Award className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-sm">Community Champion</h3>
                <p className="text-xs text-muted-foreground">You've supported 12 local artisans through your travels</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-4 pb-4">
          <div className="card-cultural divide-y divide-border">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
                onClick={() => onNavigate?.(item.id)}
              >
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-foreground" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-foreground text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>

        {/* Sign Out */}
        <div className="px-4 pb-8">
          <SafarnamaButton variant="outline" className="w-full text-destructive border-destructive/30 hover:bg-destructive/10">
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </SafarnamaButton>
        </div>
      </div>
    </div>
  );
}
