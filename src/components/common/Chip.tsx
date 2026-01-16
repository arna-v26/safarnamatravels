import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function Chip({ children, active = false, onClick, className }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "chip",
        active ? "chip-active" : "chip-inactive",
        className
      )}
    >
      {children}
    </button>
  );
}
