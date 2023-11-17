import React from "react";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";

import { VariantProps, cva } from "class-variance-authority";
import { X as Cancel } from "lucide-react";

import { cn } from "@/lib/utils";

export interface SheetBaseProps extends SheetPrimitive.DialogProps {}

const Sheet = ({ children, ...props }: SheetBaseProps) => {
  return <SheetPrimitive.Root {...props}>{children}</SheetPrimitive.Root>;
};

export interface SheetTriggerProps extends SheetPrimitive.DialogTriggerProps {}

const SheetTrigger = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Trigger>, SheetTriggerProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <SheetPrimitive.Trigger ref={forwardedRef} {...props}>
        {children}
      </SheetPrimitive.Trigger>
    );
  }
);
SheetTrigger.displayName = SheetPrimitive.Trigger.displayName;

export interface SheetOverlayProps extends SheetPrimitive.DialogOverlayProps {}

const SheetOverlay = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Overlay>, SheetOverlayProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <SheetPrimitive.Overlay
        ref={forwardedRef}
        className={cn(
          "fixed inset-0 z-50 bg-overlay data-[state=closed]:animate-overlayHide data-[state=open]:animate-overlayShow",
          className
        )}
        {...props}
      >
        {children}
      </SheetPrimitive.Overlay>
    );
  }
);
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

export const sheetContentVariants = cva(
  "fixed z-50 gap-space-base border-neutral-default bg-neutral-default p-space-base transition ease-in-out data-[state=closed]:duration-default data-[state=open]:duration-default data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      position: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-md",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-md"
      }
    },
    defaultVariants: {
      position: "right"
    }
  }
);

export interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetContentVariants> {}

const SheetContent = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Content>, SheetContentProps>(
  ({ children, className, position, ...props }, forwardedRef) => {
    return (
      <SheetPrimitive.Portal>
        <SheetOverlay />
        <SheetPrimitive.Content
          ref={forwardedRef}
          className={cn(sheetContentVariants({ position }), className)}
          {...props}
        >
          {children}
          <SheetPrimitive.Close className="absolute right-4 top-4 rounded-full transition-opacity focus-ring-neutral focus:outline-none disabled:pointer-events-none">
            <Cancel className="h-4 w-4" aria-hidden="true" />
            <VisuallyHiddenPrimitive.Root>Close button</VisuallyHiddenPrimitive.Root>
          </SheetPrimitive.Close>
        </SheetPrimitive.Content>
      </SheetPrimitive.Portal>
    );
  }
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

export interface SheetHeaderProps extends React.ComponentPropsWithoutRef<"div"> {}

const SheetHeader = React.forwardRef<HTMLDivElement, SheetHeaderProps>(
  ({ className, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
      {...props}
    />
  )
);
SheetHeader.displayName = "SheetHeader";

export interface SheetFooterProps extends React.ComponentPropsWithoutRef<"div"> {}

const SheetFooter = React.forwardRef<HTMLDivElement, SheetFooterProps>(
  ({ className, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
      {...props}
    />
  )
);
SheetFooter.displayName = "SheetFooter";

export interface SheetTitleProps extends SheetPrimitive.DialogTitleProps {}

const SheetTitle = React.forwardRef<React.ElementRef<typeof SheetPrimitive.Title>, SheetTitleProps>(
  ({ className, ...props }, ref) => (
    <SheetPrimitive.Title
      ref={ref}
      className={cn("text-2xl font-semibold text-neutral-default lg:text-3xl", className)}
      {...props}
    />
  )
);
SheetTitle.displayName = SheetPrimitive.Title.displayName;

export interface SheetDescriptionProps extends SheetPrimitive.DialogDescriptionProps {}

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  SheetDescriptionProps
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description ref={ref} className={cn("text-sm text-neutral-muted", className)} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

Sheet.Trigger = SheetTrigger;
Sheet.Overlay = SheetOverlay;
Sheet.Content = SheetContent;
Sheet.Header = SheetHeader;
Sheet.Footer = SheetFooter;
Sheet.Title = SheetTitle;
Sheet.Description = SheetDescription;

export { Sheet };
