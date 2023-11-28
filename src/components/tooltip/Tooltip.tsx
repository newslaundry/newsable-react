import React from "react";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

interface TooltipProviderProps extends Omit<TooltipPrimitive.TooltipProviderProps, "children"> {}

export interface TooltipBaseProps
  extends Omit<TooltipPrimitive.TooltipProps, "delayDuration">,
    TooltipProviderProps {}

// Removed the children prop key from provider because already present in TooltipPrimitive.TooltipProps
// Removed the delayDuration prop key from baseprop because it just overrides the one already present in TooltipPrimitive.TooltipProps

const Tooltip = ({
  children,
  delayDuration,
  disableHoverableContent,
  skipDelayDuration,
  ...props
}: TooltipBaseProps) => {
  return (
    <TooltipPrimitive.Provider
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
      skipDelayDuration={skipDelayDuration}
    >
      <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export interface TooltipTriggerProps extends TooltipPrimitive.TooltipTriggerProps {}

const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  TooltipTriggerProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <TooltipPrimitive.Trigger ref={forwardedRef} className={cn("w-fit", className)} {...props}>
      {children}
    </TooltipPrimitive.Trigger>
  );
});
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, children, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade select-none rounded border border-neutral-default bg-neutral-default text-sm text-neutral-default shadow will-change-[transform,opacity] component-padding-base",
        className
      )}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow className="fill-neutral-7" />
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;

export { Tooltip };
