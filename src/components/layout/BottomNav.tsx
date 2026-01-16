import { Compass, Route, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: "explore" | "circuits" | "saved" | "profile";
  onTabChange: (tab: "explore" | "circuits" | "saved" | "profile") => void;
}

const navItems = [
  { id: "explore" as const, icon: Compass, label: "Explore" },
  { id: "circuits" as const, icon: Route, label: "My Circuits" },
  { id: "saved" as const, icon: Heart, label: "Saved" },
  { id: "profile" as const, icon: User, label: "Profile" },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav safe-bottom">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 transition-all duration-200",
                  isActive && "scale-110"
                )}
                fill={isActive ? "currentColor" : "none"}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
