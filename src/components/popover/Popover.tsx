import React from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";

import { X as Cancel } from "lucide-react";

import { cn } from "@/lib/utils";

export interface PopoverBaseProps extends PopoverPrimitive.PopoverProps {}

const Popover = ({ children, ...props }: PopoverBaseProps) => {
  return <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>;
};

export interface PopoverTriggerProps extends PopoverPrimitive.PopoverTriggerProps {}

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <PopoverPrimitive.Trigger ref={forwardedRef} className={cn(className)} {...props}>
      {children}
    </PopoverPrimitive.Trigger>
  );
});
PopoverTrigger.displayName = PopoverPrimitive.Trigger.displayName;

export interface PopoverContentProps extends PopoverPrimitive.PopoverContentImplProps {}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={forwardedRef}
        className={cn(
          "rounded border border-neutral-default bg-neutral-default p-4 text-neutral-default shadow will-change-[transform,opacity]",
          "data-[state=open]:data-[side=bottom]:animate-slideDownAndFadeShow data-[state=open]:data-[side=left]:animate-slideLeftAndFadeShow data-[state=open]:data-[side=right]:animate-slideRightAndFadeShow data-[state=open]:data-[side=top]:animate-slideUpAndFadeShow",
          "data-[state=closed]:data-[side=bottom]:animate-slideDownAndFadeHide data-[state=closed]:data-[side=left]:animate-slideLeftAndFadeHide data-[state=closed]:data-[side=right]:animate-slideRightAndFadeHide data-[state=closed]:data-[side=top]:animate-slideUpAndFadeHide",
          className
        )}
        sideOffset={4 || props.sideOffset}
        aria-modal={true}
        {...props}
      >
        {children}
        <PopoverPrimitive.Arrow className="fill-neutral-7" />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
});
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export interface PopoverCloseProps extends PopoverPrimitive.PopoverCloseProps {}

const PopoverClose = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>
>(({ className, ...props }, forwardedRef) => {
  return (
    <PopoverPrimitive.Close asChild>
      <button
        ref={forwardedRef}
        className={cn(
          "absolute right-2 top-2 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full text-neutral-muted focus-ring-neutral hover:bg-component-neutral-hover focus:outline-none",
          className
        )}
        aria-label="Close button"
        {...props}
      >
        <Cancel className="h-4 w-4" aria-hidden="true" />
      </button>
    </PopoverPrimitive.Close>
  );
});
PopoverClose.displayName = PopoverPrimitive.Close.displayName;

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Close = PopoverClose;

export { Popover };
