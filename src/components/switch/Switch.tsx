import React from "react";

import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

export interface SwitchBaseProps extends SwitchPrimitive.SwitchProps {}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchBaseProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <SwitchPrimitive.Root
        ref={forwardedRef}
        className={cn(
          "group flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border border-neutral-default transition-colors focus-ring-neutral focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=unchecked]:bg-component-neutral-default data-[state=unchecked]:hover:bg-component-neutral-hover",
          "data-[state=checked]:border-accent-default data-[state=checked]:bg-component-accent-pressed data-[state=checked]:focus-ring-accent data-[state=checked]:hover:bg-component-accent-dark",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-component-neutral-solid-default ring-0 transition-transform group-hover:bg-component-neutral-solid-hover",
            "data-[state=unchecked]:translate-x-1",
            "data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-component-accent-solid-default data-[state=checked]:group-hover:bg-component-accent-solid-hover"
          )}
        />
      </SwitchPrimitive.Root>
    );
  }
);
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
