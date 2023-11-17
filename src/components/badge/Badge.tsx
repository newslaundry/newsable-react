import React from "react";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        neutral:
          "border-primary-default bg-component-primary-default text-primary-muted hover:bg-component-primary-hover border",
        accent:
          "border border-accent-default bg-component-accent-default text-accent-muted hover:bg-component-accent-hover"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
);

export interface BadgeBaseProps
  extends React.ComponentPropsWithoutRef<"p">,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLParagraphElement, BadgeBaseProps>(
  ({ children, className, variant, ...props }, forwardedRef) => {
    return (
      <p ref={forwardedRef} className={cn(badgeVariants({ variant }), className)} {...props}>
        {children}
      </p>
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
