import React from "react";

import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";

import { VariantProps, cva } from "class-variance-authority";
import { Loader2 as Spinner } from "lucide-react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "pointer-events-auto flex cursor-pointer items-center justify-center gap-space-xs rounded outline-none transition-all disabled:cursor-not-allowed disabled:opacity-75",
  {
    variants: {
      variant: {
        neutral:
          "border border-neutral-default bg-component-neutral-default text-neutral-muted focus-ring-neutral hover:bg-component-neutral-hover active:bg-component-neutral-pressed",
        accent:
          "border border-accent-default bg-component-accent-default text-accent-muted focus-ring-accent hover:bg-component-accent-hover active:bg-component-accent-pressed",
        danger:
          "border border-danger-default bg-component-danger-default text-danger-muted focus-ring-danger hover:bg-component-danger-hover active:bg-component-danger-pressed",
        attention:
          "border border-attention-default bg-component-attention-default text-attention-muted focus-ring-attention hover:bg-component-attention-hover active:bg-component-attention-pressed",
        success:
          "border border-success-default bg-component-success-default text-success-muted focus-ring-success hover:bg-component-success-hover active:bg-component-success-pressed",
        outline:
          "border border-neutral-default bg-transparent text-neutral-muted focus-ring-neutral hover:bg-component-neutral-hover active:bg-component-neutral-pressed",
        ghost:
          "border border-transparent text-neutral-muted focus-ring-neutral hover:bg-component-neutral-hover active:bg-component-neutral-pressed"
      },
      size: {
        sm: "text-sm font-normal component-padding-sm",
        base: "text-base font-medium component-padding-base",
        lg: "text-lg font-medium component-padding-lg"
      }
    },
    defaultVariants: {
      variant: "neutral",
      size: "base"
    }
  }
);

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

/**
 * Button Component
 *
 * Follows Button a11y pattern
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ variant, size, children, disabled, isLoading, className, ...props }, forwardedRef) => {
    const shouldBeDisabled = disabled || isLoading;

    return (
      <button
        ref={forwardedRef}
        className={cn(buttonVariants({ variant, size }), "cursor-pointer", className)}
        disabled={shouldBeDisabled}
        data-loading={isLoading ? "true" : undefined}
        aria-disabled={shouldBeDisabled ? true : false}
        {...props}
      >
        {isLoading ? (
          <>
            <Spinner className="h-4 w-4 animate-spin" aria-hidden="true" />
            <VisuallyHiddenPrimitive.Root>Loading...</VisuallyHiddenPrimitive.Root>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
