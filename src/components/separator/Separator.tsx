import React from "react";

import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const separatorVariants = cva(
  "flex-shrink-none data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px",
  {
    variants: {
      variant: {
        neutral: "bg-separator-primary",
        accent: "bg-separator-accent",
        success: "bg-separator-success",
        attention: "bg-separator-attention",
        danger: "bg-separator-danger"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
);

export interface SeparatorBaseProps
  extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    VariantProps<typeof separatorVariants> {}

const Separator = React.forwardRef<React.ElementRef<typeof SeparatorPrimitive.Root>, SeparatorBaseProps>(
  ({ className, children, variant, orientation, decorative, ...props }, forwardedRef) => {
    return (
      <SeparatorPrimitive.Root
        ref={forwardedRef}
        className={cn(separatorVariants({ variant, className }))}
        orientation={orientation}
        decorative={decorative}
        aria-orientation={decorative ? undefined : orientation}
        {...props}
      >
        {children}
      </SeparatorPrimitive.Root>
    );
  }
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
