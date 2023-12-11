import React from "react";

import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

export interface ProgressBaseProps extends ProgressPrimitive.ProgressProps {}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressBaseProps>(
  ({ className, children, ...props }, forwardedRef) => {
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
        {...props}
      >
        {children}
      </ProgressPrimitive.Root>
    );
  }
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export interface ProgressIndicatorProps extends ProgressPrimitive.ProgressIndicatorProps {}

const ProgressIndicator = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Indicator>,
  ProgressIndicatorProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <ProgressPrimitive.ProgressIndicator
      ref={forwardedRef}
      className={cn(
        "h-full w-full bg-component-accent-solid-default transition-transform duration-default ease-out",
        className
      )}
      {...props}
    >
      {children}
    </ProgressPrimitive.ProgressIndicator>
  );
});
ProgressIndicator.displayName = ProgressPrimitive.Indicator.displayName;

const ProgressCompoundComponent = Object.assign({}, Progress, {
  Indicator: ProgressIndicator
});

export { ProgressCompoundComponent as Progress };
