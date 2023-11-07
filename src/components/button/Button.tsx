import React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { Loader2 as Spinner } from "lucide-react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "pointer-events-auto flex cursor-pointer items-center justify-center gap-2 rounded outline-none transition-all disabled:cursor-not-allowed disabled:opacity-75",
  {
    variants: {
      variant: {
        primary:
          "border border-primary-default bg-component-primary-default text-primary-muted focus-ring-primary hover:bg-component-primary-hover active:bg-component-primary-pressed",
        secondary:
          "border border-accent-default bg-component-accent-default text-accent-muted focus-ring-accent hover:bg-component-accent-hover active:bg-component-accent-pressed",
        danger:
          "border border-danger-default bg-component-danger-default text-danger-muted focus-ring-danger hover:bg-component-danger-hover active:bg-component-danger-pressed",
        attention:
          "border border-attention-default bg-component-attention-default text-attention-muted focus-ring-attention hover:bg-component-attention-hover active:bg-component-attention-pressed",
        success:
          "border border-success-default bg-component-success-default text-success-muted focus-ring-success hover:bg-component-success-hover active:bg-component-success-pressed",
        outline:
          "border border-primary-default bg-transparent text-primary-muted focus-ring-primary hover:bg-component-primary-hover active:bg-component-primary-pressed",
        ghost:
          "border-0 text-primary-muted focus-ring-primary hover:bg-component-primary-hover active:bg-component-primary-pressed"
      },
      size: {
        sm: "text-sm font-normal component-padding-sm",
        md: "text-base font-medium component-padding-base",
        lg: "text-lg font-medium component-padding-lg"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ variant, size, children, disabled, loading, className, ...props }, forwardedRef) => {
    const shouldBeDisabled = disabled || loading;

    return (
      <button
        ref={forwardedRef}
        className={cn(buttonVariants({ variant, size }), "cursor-pointer", className)}
        disabled={shouldBeDisabled}
        data-loading={loading ? true : false}
        aria-disabled={shouldBeDisabled ? true : false}
        {...props}
      >
        {loading ? <Spinner className="h-4 w-4 animate-spin" /> : children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
