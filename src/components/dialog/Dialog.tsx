import React from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";

import { X as Cancel } from "lucide-react";

import { cn } from "@/lib/utils";

export interface DialogBaseProps extends DialogPrimitive.DialogProps {}

const Dialog = ({ children, ...props }: DialogBaseProps) => {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>;
};

export interface DialogTriggerProps extends DialogPrimitive.DialogTriggerProps {}

const DialogTrigger = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Trigger>, DialogTriggerProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Trigger ref={forwardedRef} {...props}>
        {children}
      </DialogPrimitive.Trigger>
    );
  }
);
DialogTrigger.displayName = DialogPrimitive.Trigger.displayName;

const DialogPortal = ({ children, ...props }: DialogPrimitive.DialogPortalProps) => {
  return <DialogPrimitive.Portal {...props}>{children}</DialogPrimitive.Portal>;
};
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

interface DialogOverlayProps extends DialogPrimitive.DialogOverlayProps {}

const DialogOverlay = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Overlay>, DialogOverlayProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Overlay
        ref={forwardedRef}
        className={cn(
          "fixed inset-0 z-50 bg-overlay backdrop-blur-0 duration-default data-[state=closed]:animate-overlayHide data-[state=open]:animate-overlayShow",
          className
        )}
        {...props}
      />
    );
  }
);
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export interface DialogContentProps extends DialogPrimitive.DialogContentProps {}

const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, DialogContentProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          ref={forwardedRef}
          aria-modal={true}
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] gap-space-xs rounded border border-neutral-default bg-neutral-muted p-4 shadow duration-default data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow sm:max-w-lg sm:rounded",
            className
          )}
          {...props}
        >
          {children}
          <DialogClose />
        </DialogPrimitive.Content>
      </DialogPortal>
    );
  }
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

export interface DialogTitleProps extends DialogPrimitive.DialogTitleProps {}

const DialogTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, DialogTitleProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <DialogPrimitive.Title
      ref={forwardedRef}
      className={cn("max-w-[240px] text-lg font-medium text-neutral-default sm:max-w-none", className)}
      {...props}
    >
      {children}
    </DialogPrimitive.Title>
  )
);
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export interface DialogDescriptionProps extends DialogPrimitive.DialogDescriptionProps {}

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, children, ...props }, forwardedRef) => (
  <DialogPrimitive.Description
    ref={forwardedRef}
    className={cn("text-base leading-normal text-neutral-muted", className)}
    {...props}
  >
    {children}
  </DialogPrimitive.Description>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

interface DialogCloseProps extends DialogPrimitive.DialogCloseProps {}

const DialogClose = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Close>, DialogCloseProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Close ref={forwardedRef} asChild {...props}>
        <button
          className={cn(
            "absolute right-2 top-2 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full text-neutral-muted focus-ring-neutral hover:bg-component-neutral-hover focus:outline-none",
            className
          )}
          aria-label="Close"
        >
          <Cancel className="h-4 w-4" aria-hidden="true" />
        </button>
      </DialogPrimitive.Close>
    );
  }
);
DialogClose.displayName = DialogPrimitive.Close.displayName;

Dialog.Trigger = DialogTrigger;
Dialog.Content = DialogContent;
Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;

export { Dialog };
