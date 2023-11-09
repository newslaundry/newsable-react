"use client";

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
          "group flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border border-primary-default transition-colors focus-ring-primary focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-accent-default data-[state=checked]:bg-component-accent-default data-[state=unchecked]:bg-component-primary-default data-[state=checked]:focus-ring-accent data-[state=checked]:hover:bg-component-accent-hover data-[state=unchecked]:hover:bg-component-primary-hover",
          className
        )}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-component-primary-solid-default ring-0 transition-transform group-hover:bg-component-primary-solid-hover data-[state=checked]:translate-x-[18px] data-[state=unchecked]:translate-x-1 data-[state=checked]:bg-component-accent-solid-default data-[state=checked]:group-hover:bg-component-accent-solid-hover"
          )}
        />
      </SwitchPrimitive.Root>
    );
  }
);
Switch.displayName = SwitchPrimitive.Root.displayName;

// const SwitchContent = ({ className, children, ...props }: React.ComponentProps<"div">) => {
//   return (
//     <div className={cn("flex flex-col items-start", className)} {...props}>
//       {children}
//     </div>
//   );
// };

// const SwitchLabel = React.forwardRef<
//   React.ElementRef<typeof LabelPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
// >(({ className, children, ...props }, forwardedRef) => {
//   return (
//     <LabelPrimitive.Root
//       ref={forwardedRef}
//       className={cn("peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
//       {...props}
//     >
//       {children}
//     </LabelPrimitive.Root>
//   );
// });
// SwitchLabel.displayName = LabelPrimitive.Root.displayName;

// const SwitchDescription = ({ className, children, ...props }: React.ComponentProps<"p">) => {
//   return (
//     <p className={cn("text-secondary-600 text-sm", className)} {...props}>
//       {children}
//     </p>
//   );
// };

export { Switch };
