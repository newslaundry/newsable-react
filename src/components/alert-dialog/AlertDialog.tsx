import React from "react";

import * as AlertPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";

export interface AlertDialogBaseProps extends AlertPrimitive.AlertDialogProps {}

/**
 * Alert Dialog Root component
 *
 * Radix UI - Root API reference
 * @see https://www.radix-ui.com/primitives/docs/components/alert-dialog#root
 *
 * Follows Alert Dialog a11y pattern
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/
 */
const AlertDialog = ({ children, ...props }: AlertPrimitive.AlertDialogProps) => {
  return <AlertPrimitive.Root {...props}>{children}</AlertPrimitive.Root>;
};
AlertDialog.displayName = AlertPrimitive.Root.displayName;

export interface AlertDialogTriggerProps extends AlertPrimitive.AlertDialogTriggerProps {}

const AlertDialogTrigger = React.forwardRef<
  React.ElementRef<typeof AlertPrimitive.Trigger>,
  AlertDialogTriggerProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <AlertPrimitive.Trigger ref={forwardedRef} className={cn(className)} {...props}>
      {children}
    </AlertPrimitive.Trigger>
  );
});
AlertDialogTrigger.displayName = AlertPrimitive.Trigger.displayName;

interface AlertDialogOverlayProps extends AlertPrimitive.AlertDialogOverlayProps {}

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertPrimitive.Overlay>,
  AlertDialogOverlayProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <AlertPrimitive.Overlay
      ref={forwardedRef}
      className={cn(
        "fixed inset-0 bg-overlay backdrop-blur-0 duration-default data-[state=closed]:animate-overlayHide data-[state=open]:animate-overlayShow",
        className
      )}
      {...props}
    />
  );
});
AlertDialogOverlay.displayName = AlertPrimitive.Overlay.displayName;

export interface AlertDialogContentProps extends AlertPrimitive.AlertDialogContentProps {}

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertPrimitive.Content>,
  AlertDialogContentProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <AlertPrimitive.Portal>
      <AlertDialogOverlay />
      <AlertPrimitive.Content
        ref={forwardedRef}
        className={cn(
          "fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] space-y-2 rounded border border-primary-default bg-primary-default p-4 shadow focus:outline-none data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow md:w-full",
          className
        )}
        {...props}
      >
        {children}
      </AlertPrimitive.Content>
    </AlertPrimitive.Portal>
  );
});
AlertDialogContent.displayName = AlertPrimitive.Content.displayName;

export interface AlertDialogTitleProps extends AlertPrimitive.AlertDialogTitleProps {}

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertPrimitive.Title>,
  AlertDialogTitleProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <AlertPrimitive.Title
      ref={forwardedRef}
      className={cn("text-lg font-medium text-primary-default", className)}
      {...props}
    >
      {children}
    </AlertPrimitive.Title>
  );
});
AlertDialogTitle.displayName = AlertPrimitive.Title.displayName;

export interface AlertDialogDescriptionProps extends AlertPrimitive.AlertDialogDescriptionProps {}

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertPrimitive.Description>,
  AlertDialogDescriptionProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <AlertPrimitive.Description
      ref={forwardedRef}
      className={cn("text-base leading-normal text-primary-muted", className)}
      {...props}
    >
      {children}
    </AlertPrimitive.Description>
  );
});
AlertDialogDescription.displayName = AlertPrimitive.Description.displayName;

export interface AlertDialogFooterProps extends React.ComponentPropsWithoutRef<"div"> {}

const AlertDialogFooter = ({ className, children, ...props }: AlertDialogFooterProps) => (
  <div
    className={cn("flex flex-col space-y-2 sm:flex-row sm:justify-end sm:space-x-2 sm:space-y-0", className)}
    {...props}
  >
    {children}
  </div>
);
AlertDialogFooter.displayName = "AlertDialogFooter";

export interface AlertDialogActionProps extends AlertPrimitive.AlertDialogActionProps {}

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertPrimitive.Action>
>(({ className, children, asChild, ...props }, forwardedRef) => {
  return (
    <AlertPrimitive.Action ref={forwardedRef} className={cn(className)} asChild={asChild} {...props}>
      {children}
    </AlertPrimitive.Action>
  );
});
AlertDialogAction.displayName = AlertPrimitive.Action.displayName;

export interface AlertDialogCancelProps extends AlertPrimitive.AlertDialogCancelProps {}

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertPrimitive.Cancel>,
  AlertDialogCancelProps
>(({ className, children, asChild, ...props }, forwardedRef) => {
  return (
    <AlertPrimitive.Cancel ref={forwardedRef} className={cn(className)} asChild={asChild} {...props}>
      {children}
    </AlertPrimitive.Cancel>
  );
});
AlertDialogCancel.displayName = AlertPrimitive.Cancel.displayName;

/**
 * Alert Dialog Trigger Component
 *
 * Radix UI - Trigger API reference
 * @see https://www.radix-ui.com/primitives/docs/components/alert-dialog#trigger
 */
AlertDialog.Trigger = AlertDialogTrigger;

/**
 * Alert Dialog Content Component
 *
 * Radix UI - Content API reference
 * @see https://www.radix-ui.com/primitives/docs/components/alert-dialog#content
 */
AlertDialog.Content = AlertDialogContent;

/**
 * Alert Dialog Title Component
 *
 * Radix UI - Title API reference
 * @see https://www.radix-ui.com/primitives/docs/components/alert-dialog#title
 */
AlertDialog.Title = AlertDialogTitle;

/**
 * Alert Dialog Description Component
 *
 * Radix UI - Description API reference
 * @see https://www.radix-ui.com/primitives/docs/components/alert-dialog#description
 */
AlertDialog.Description = AlertDialogDescription;

/**
 * Alert Dialog Action Component
 *
 * Radix UI - Action API reference
 * @see https://www.radix-ui.com/primitives/docs/components/alert-dialog#action
 */
AlertDialog.Action = AlertDialogAction;

/**
 * Alert Dialog Cancel Component
 *
 * Radix UI - Cancel API reference
 * @see https://www.radix-ui.com/primitives/docs/components/alert-dialog#cancel
 */
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Footer = AlertDialogFooter;

export { AlertDialog };
