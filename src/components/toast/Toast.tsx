import React from "react";

import * as ToastPrimitive from "@radix-ui/react-toast";

import { VariantProps, cva } from "class-variance-authority";
import { X as Cancel } from "lucide-react";

import { cn } from "@/lib/utils";

// export const toastVariants = cva(
//   "grid grid-cols-[auto_max-content] items-center gap-2 rounded p-space-base shadow [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]",
//   {
//     variants: {
//       variant: {
//         neutral:
//           "border border-neutral-default bg-component-neutral-default text-neutral-default focus-ring-neutral",
//         secondary:
//           "border border-accent-default bg-component-accent-default text-accent-default focus-ring-accent",
//         success:
//           "border border-success-default bg-component-success-default text-success-default focus-ring-success",
//         attention:
//           "border border-attention-default bg-component-attention-default text-attention-default focus-ring-attention",
//         danger:
//           "border border-danger-default bg-component-danger-default text-danger-default focus-ring-danger"
//       }
//     },
//     defaultVariants: {
//       variant: "neutral"
//     }
//   }
// );

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full flex-col items-start gap-space-xs overflow-hidden rounded border shadow transition-all component-padding-lg data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        neutral: "border border-neutral-default bg-neutral-muted text-neutral-default focus-ring-neutral",
        danger: "border border-danger-default bg-danger-muted text-danger-default focus-ring-danger",
        success: "border border-success-default bg-success-muted text-success-default focus-ring-success"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
);

const ToastProvider = ToastPrimitive.Provider;

export interface ToastBaseProps extends ToastPrimitive.ToastProps, VariantProps<typeof toastVariants> {}

const Toast = ({ className, children, variant, ...props }: ToastBaseProps) => {
  return (
    <ToastPrimitive.Root
      duration={100000}
      className={cn(toastVariants({ variant }), className)}
      type="foreground"
      data-variant={variant}
      {...props}
    >
      {children}
    </ToastPrimitive.Root>
  );
};

export interface ToastTitleProps extends ToastPrimitive.ToastTitleProps {}

const ToastTitle = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Title>, ToastTitleProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <ToastPrimitive.Title
        ref={forwardedRef}
        className={cn("text-sm font-semibold", className)}
        // className={cn("font-medium [grid-area:_title]", className)}
        {...props}
      >
        {children}
      </ToastPrimitive.Title>
    );
  }
);
ToastTitle.displayName = ToastPrimitive.Title.displayName;

export interface ToastDescriptionProps extends ToastPrimitive.ToastDescriptionProps {}

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitive.Description>,
  ToastDescriptionProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <ToastPrimitive.Description
      ref={forwardedRef}
      className={cn(
        "text-sm text-neutral-muted group-data-[variant=danger]:text-danger-muted group-data-[variant=success]:text-success-muted",
        className
      )}
      // className={cn("text-sm [grid-area:_description]", className)}
      {...props}
    >
      {children}
    </ToastPrimitive.Description>
  );
});
ToastDescription.displayName = ToastPrimitive.Description.displayName;

export interface ToastActionProps extends ToastPrimitive.ToastActionProps {}

const ToastAction = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Action>, ToastActionProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <ToastPrimitive.Action
        ref={forwardedRef}
        className={cn(
          "typography-paragraph-styles inline-flex shrink-0 items-center justify-center rounded border border-neutral-default bg-transparent text-sm font-medium ring-offset-neutral transition-colors focus-ring-neutral component-padding-sm hover:bg-component-neutral-hover focus:outline-none disabled:pointer-events-none disabled:opacity-50",
          "group-data-[variant=danger]:border-danger-default group-data-[variant=danger]:text-danger-muted group-data-[variant=danger]:hover:border-danger-dark group-data-[variant=danger]:hover:bg-component-danger-hover group-data-[variant=danger]:hover:text-danger-default group-data-[variant=danger]:focus:ring-danger",
          "group-data-[variant=success]:border-success-default group-data-[variant=success]:text-success-muted group-data-[variant=success]:hover:border-success-dark group-data-[variant=success]:hover:bg-component-success-hover group-data-[variant=success]:hover:text-success-default group-data-[variant=success]:focus:ring-success",
          className
        )}
        // className={cn("[grid-area:_action]", className)}
        {...props}
      >
        {children}
      </ToastPrimitive.Action>
    );
  }
);
ToastAction.displayName = ToastPrimitive.Action.displayName;

export interface ToastCloseProps extends ToastPrimitive.ToastCloseProps {}

const ToastClose = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Close>, ToastCloseProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <ToastPrimitive.Close ref={forwardedRef} className={cn(className)} asChild {...props}>
        <button
          className={cn(
            "absolute right-2 top-2 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full",
            "text-neutral-default focus-ring-neutral",
            "group-data-[variant=danger]:text-danger-muted group-data-[variant=danger]:focus-ring-danger",
            "group-data-[variant=success]:text-success-muted group-data-[variant=success]:focus-ring-success"
          )}
          aria-label="Close"
        >
          <Cancel className="h-4 w-4" aria-hidden="true" />
        </button>
      </ToastPrimitive.Close>
    );
  }
);
ToastClose.displayName = ToastPrimitive.Close.displayName;

export interface ToastViewportProps extends ToastPrimitive.ToastViewportProps {}

const ToastViewport = React.forwardRef<React.ElementRef<typeof ToastPrimitive.Viewport>, ToastViewportProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <ToastPrimitive.Viewport
        ref={forwardedRef}
        className={cn(
          "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-space-base sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[380px]",
          className
        )}
        {...props}
      />
    );
  }
);
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;

export interface ToastActionElement extends React.ReactElement<typeof ToastAction> {}

Toast.Provider = ToastProvider;
Toast.Title = ToastTitle;
Toast.Description = ToastDescription;
Toast.Action = ToastAction;
Toast.Close = ToastClose;
Toast.Viewport = ToastViewport;

export { Toast, ToastAction };
