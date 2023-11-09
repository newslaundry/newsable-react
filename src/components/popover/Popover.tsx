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
          "rounded border border-primary-default bg-primary-default p-4 text-primary-default shadow will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade",
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
          "absolute right-2 top-2 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full text-primary-muted focus-ring-primary hover:bg-component-primary-hover focus:outline-none",
          className
        )}
        aria-label="Close"
        {...props}
      >
        <Cancel className="h-4 w-4" />
      </button>
    </PopoverPrimitive.Close>
  );
});
PopoverClose.displayName = PopoverPrimitive.Close.displayName;

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Close = PopoverClose;

export { Popover };
