import React from "react";

import * as TogglePrimitive from "@radix-ui/react-toggle";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const toggleVariants = cva("flex items-center justify-center rounded border shadow", {
  variants: {
    variant: {
      neutral:
        "border-neutral-default bg-component-neutral-default text-neutral-muted focus-ring-neutral data-[state=on]:border-neutral-dark data-[state=on]:bg-component-neutral-pressed data-[state=on]:text-neutral-default data-[state=off]:hover:bg-component-neutral-hover data-[state=on]:hover:bg-component-neutral-dark",
      secondary:
        "border-accent-default bg-component-accent-default text-accent-muted focus-ring-accent data-[state=on]:border-accent-dark data-[state=on]:bg-component-accent-pressed data-[state=on]:text-accent-default data-[state=off]:hover:bg-component-accent-hover data-[state=on]:hover:bg-component-accent-dark"
    },
    size: {
      sm: "h-8 px-3 text-sm font-normal",
      md: "h-10 px-4 py-3 text-base font-medium",
      lg: "h-12 px-6 text-lg font-medium"
    }
  },
  defaultVariants: {
    variant: "neutral",
    size: "md"
  }
});

export interface ToggleBaseProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

const Toggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, ToggleBaseProps>(
  ({ className, children, variant, size, ...props }, forwardedRef) => {
    return (
      <TogglePrimitive.Root
        ref={forwardedRef}
        className={cn(toggleVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </TogglePrimitive.Root>
    );
  }
);
Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
