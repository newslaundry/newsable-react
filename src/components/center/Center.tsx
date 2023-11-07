import React from "react";

import { cn } from "@/lib/utils";

export interface CenterBaseProps extends React.ComponentPropsWithoutRef<"div"> {}

const Center = React.forwardRef<HTMLDivElement, CenterBaseProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={cn("flex h-full w-full items-center justify-center", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Center.displayName = "Center";

export { Center };
