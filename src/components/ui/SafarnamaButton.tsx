import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const safarnamaButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-terracotta-dark active:scale-[0.98] shadow-soft hover:shadow-elevated",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-muted active:scale-[0.98]",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        ghost:
          "text-foreground hover:bg-secondary",
        accent:
          "bg-accent text-accent-foreground hover:bg-forest-light active:scale-[0.98] shadow-soft",
        whatsapp:
          "bg-[hsl(142,70%,45%)] text-primary-foreground hover:bg-[hsl(142,70%,40%)] shadow-soft",
        danger:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-9 px-3 text-sm rounded-lg",
        default: "h-11 px-5 text-base rounded-xl",
        lg: "h-14 px-8 text-lg rounded-2xl",
        icon: "h-10 w-10 rounded-full",
        "icon-lg": "h-14 w-14 rounded-full",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface SafarnamaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof safarnamaButtonVariants> {}

const SafarnamaButton = React.forwardRef<HTMLButtonElement, SafarnamaButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(safarnamaButtonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
SafarnamaButton.displayName = "SafarnamaButton";

export { SafarnamaButton, safarnamaButtonVariants };
