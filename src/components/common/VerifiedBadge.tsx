import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerifiedBadgeProps {
  className?: string;
  size?: "sm" | "md";
}

export function VerifiedBadge({ className, size = "sm" }: VerifiedBadgeProps) {
  return (
    <span className={cn(
      "badge-verified",
      size === "md" && "px-3 py-1 text-sm",
      className
    )}>
      <ShieldCheck className={cn("h-3 w-3", size === "md" && "h-4 w-4")} />
      Verified
    </span>
  );
}
