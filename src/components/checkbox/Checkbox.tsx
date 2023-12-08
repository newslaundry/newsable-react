import React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cva } from "class-variance-authority";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export const checkboxVariants = cva(
  "peer h-6 w-6 shrink-0 rounded border border-neutral-default bg-component-neutral-default text-neutral-muted focus-ring-neutral hover:border-neutral-dark hover:bg-component-neutral-hover focus:outline-none disabled:cursor-not-allowed disabled:border-neutral-muted disabled:opacity-50 data-[state=checked]:border-accent-default data-[state=checked]:bg-component-accent-pressed data-[state=checked]:text-accent-muted data-[state=checked]:focus-ring-accent data-[state=checked]:hover:border-neutral-dark data-[state=checked]:hover:bg-component-accent-dark"
);

export interface CheckboxBaseProps extends CheckboxPrimitive.CheckboxProps {}

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxBaseProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <CheckboxPrimitive.Root
        ref={forwardedRef}
        className={cn(checkboxVariants(), className)}
        aria-label="Checkbox"
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn("flex items-center justify-center")}
          aria-hidden="true"
          asChild
        >
          <Check className="h-5 w-5" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    );
  }
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
