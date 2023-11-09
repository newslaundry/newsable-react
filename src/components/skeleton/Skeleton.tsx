import React from "react";

import { cn } from "@/lib/utils";

export interface SkeletonBaseProps extends React.ComponentPropsWithoutRef<"div"> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonBaseProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        role="presentation"
        className={cn("animate-pulse rounded bg-component-primary-dark", className)}
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";

export { Skeleton };
