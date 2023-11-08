import React from "react";

import { cn } from "@/lib/utils";

export interface HStackBaseProps extends React.ComponentPropsWithoutRef<"div"> {}

const HStack = React.forwardRef<HTMLDivElement, HStackBaseProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div ref={forwardedRef} className={cn("flex flex-row items-center", className)} {...props}>
        {children}
      </div>
    );
  }
);
HStack.displayName = "HStack";

export { HStack };
