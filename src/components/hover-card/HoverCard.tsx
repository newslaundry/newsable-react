import React from "react";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

export interface HoverCardBaseProps extends HoverCardPrimitive.HoverCardProps {}

const HoverCard = ({ children, ...props }: HoverCardBaseProps) => {
  return (
    <HoverCardPrimitive.Root openDelay={200} closeDelay={200} {...props}>
      {children}
    </HoverCardPrimitive.Root>
  );
};

export interface HoverCardTriggerProps extends HoverCardPrimitive.HoverCardTriggerProps {}

const HoverCardTrigger = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Trigger>,
  HoverCardTriggerProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <HoverCardPrimitive.Trigger ref={forwardedRef} className={cn(className)} {...props}>
      {children}
    </HoverCardPrimitive.Trigger>
  );
});
HoverCardTrigger.displayName = HoverCardPrimitive.Trigger.displayName;

const HoverCardPortal = HoverCardPrimitive.Portal;

export interface HoverCardContentProps extends HoverCardPrimitive.HoverCardContentProps {}

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <HoverCardPortal>
      <HoverCardPrimitive.Content
        ref={forwardedRef}
        className={cn(
          "w-[300px] rounded border border-neutral-default bg-neutral-default p-space-base shadow data-[state=open]:transition-all",
          "data-[side=top]:data-[state=closed]:animate-slideDownAndFadeHide data-[side=top]:data-[state=open]:animate-slideDownAndFadeShow",
          "data-[side=bottom]:data-[state=closed]:animate-slideUpAndFadeHide data-[side=bottom]:data-[state=open]:animate-slideUpAndFadeShow",
          "data-[side=left]:data-[state=closed]:animate-slideRightAndFadeHide data-[side=left]:data-[state=open]:animate-slideRightAndFadeShow",
          "data-[side=right]:data-[state=close]:animate-slideLeftAndFadeHide data-[side=right]:data-[state=open]:animate-slideLeftAndFadeShow",
          className
        )}
        sideOffset={4 || props.sideOffset}
        {...props}
      >
        {children}
        <HoverCardPrimitive.Arrow className="fill-neutral-7" />
      </HoverCardPrimitive.Content>
    </HoverCardPortal>
  );
});
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

HoverCard.Trigger = HoverCardTrigger;
HoverCard.Content = HoverCardContent;
HoverCard.Portal = HoverCardPortal;

export { HoverCard };
