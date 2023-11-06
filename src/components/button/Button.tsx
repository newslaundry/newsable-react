import React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { Loader2 as Spinner } from "lucide-react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "pointer-events-auto flex items-center justify-center gap-2 rounded outline-none transition-all disabled:cursor-not-allowed disabled:opacity-75",
  {
    variants: {
      variant: {
        primary:
          "border border-primary-default bg-component-primary-default text-primary-muted focus-ring-primary hover:bg-component-primary-hover active:bg-component-primary-pressed",
        "primary-inverted":
          "bg-component-primary-solid-default text-primary-default focus-ring-primary hover:bg-component-primary-solid-hover disabled:cursor-not-allowed",
        secondary:
          "border border-accent-default bg-component-accent-default text-accent-muted focus-ring-accent hover:bg-component-accent-hover active:bg-component-accent-pressed",
        "secondary-inverted":
          "bg-component-accent-solid-default text-white focus-ring-accent hover:bg-component-accent-solid-hover disabled:cursor-not-allowed",
        danger:
          "border border-danger-default bg-component-danger-default text-danger-muted focus-ring-danger hover:bg-component-danger-hover active:bg-component-danger-pressed",
        "danger-inverted":
          "bg-component-danger-solid-default text-white focus-ring-danger hover:bg-component-danger-solid-hover disabled:cursor-not-allowed",
        attention:
          "border border-attention-default bg-component-attention-default text-attention-muted focus-ring-attention hover:bg-component-attention-hover active:bg-component-attention-pressed",
        "attention-inverted":
          "bg-component-attention-solid-default text-attention-default focus-ring-attention hover:bg-component-attention-solid-hover disabled:cursor-not-allowed",
        success:
          "border border-success-default bg-component-success-default text-success-muted focus-ring-success hover:bg-component-success-hover active:bg-component-success-pressed",
        "success-inverted":
          "bg-component-success-solid-default text-success-default focus-ring-success hover:bg-component-success-solid-hover disabled:cursor-not-allowed",
        ghost:
          "border border-primary-default bg-transparent text-primary-muted focus-ring-primary hover:bg-component-primary-hover active:bg-component-primary-pressed"
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
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ variant, size, children, disabled, isLoading, className, ...props }, forwardedRef) => {
    return (
      <button
        ref={forwardedRef}
        className={cn(buttonVariants({ variant, size }), "cursor-pointer", className)}
        disabled={disabled || isLoading}
        data-loading={isLoading ? true : false}
        data-cursor="bigger"
        {...props}
      >
        {isLoading ? <Spinner className="h-4 w-4 animate-spin" /> : children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
