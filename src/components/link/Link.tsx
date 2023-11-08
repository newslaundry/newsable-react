import React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

export const linkVariants = cva("inline-flex items-center gap-1 rounded", {
  variants: {
    variant: {
      neutral: "text-primary-default focus-ring-primary",
      accent: "text-accent-default focus-ring-accent",
      success: "text-success-default focus-ring-success",
      attention: "text-attention-default focus-ring-attention",
      danger: "text-danger-default focus-ring-danger"
    }
  },
  defaultVariants: {
    variant: "neutral"
  }
});

export interface LinkBaseProps
  extends Omit<React.ComponentPropsWithoutRef<"a">, "href">,
    VariantProps<typeof linkVariants> {
  href: string;
  showExternalLinkIcon?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkBaseProps>(
  ({ href, target, className, children, variant, showExternalLinkIcon = false, ...props }, forwardedRef) => {
    return (
      <a
        ref={forwardedRef}
        href={href}
        target={target}
        className={cn(linkVariants({ variant }), className)}
        {...props}
      >
        {children}
        {showExternalLinkIcon && <ExternalLink className="h-3 w-3" aria-hidden="true" />}
      </a>
    );
  }
);
Link.displayName = "Link";

export { Link };
