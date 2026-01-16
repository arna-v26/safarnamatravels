import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MobileContainerProps {
  children: ReactNode;
  className?: string;
  hasBottomNav?: boolean;
}

export function MobileContainer({ 
  children, 
  className,
  hasBottomNav = true 
}: MobileContainerProps) {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div 
        className={cn(
          "mobile-container relative overflow-hidden rounded-3xl shadow-elevated border border-border",
          "w-full max-w-md aspect-[9/16] max-h-[90vh]",
          className
        )}
      >
        <div className={cn(
          "h-full overflow-y-auto scrollbar-hide",
          hasBottomNav && "pb-20"
        )}>
          {children}
        </div>
      </div>
    </div>
  );
}
