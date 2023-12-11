import React from "react";

import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

export interface MeterBaseProps extends ProgressPrimitive.ProgressProps {
  /**
   * Defines the current progress value for the meter
   */
  value: number;

  /**
   * Sets a descriptive text for the meter's progress
   */
  valueText: string;
}

const Meter = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, MeterBaseProps>(
  ({ className, children, value, valueText, ...props }, forwardedRef) => {
    return (
      <ProgressPrimitive.Root
        ref={forwardedRef}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-component-neutral-dark",
          className
        )}
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: "translateZ(0)"
        }}
        role="meter"
        aria-valuenow={value}
        aria-valuetext={valueText || props["aria-valuetext"]}
        {...props}
      >
        {children}
      </ProgressPrimitive.Root>
    );
  }
);
Meter.displayName = "Meter";

export interface MeterIndicatorProps extends ProgressPrimitive.ProgressIndicatorProps {}

const MeterIndicator = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Indicator>,
  MeterIndicatorProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <ProgressPrimitive.ProgressIndicator
      ref={forwardedRef}
      className={cn(
        "h-full w-full bg-component-accent-solid-default transition-transform duration-1000 ease-out",
        className
      )}
      {...props}
    >
      {children}
    </ProgressPrimitive.ProgressIndicator>
  );
});
MeterIndicator.displayName = "MeterIndicator";

const MeterCompoundComponent = Object.assign({}, Meter, {
  Indicator: MeterIndicator
});

export { MeterCompoundComponent as Meter };
