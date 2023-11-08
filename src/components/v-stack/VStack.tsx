import React from "react";

import { cn } from "@/lib/utils";

export interface VStackBaseProps extends React.ComponentPropsWithoutRef<"div"> {}

const VStack = React.forwardRef<HTMLDivElement, VStackBaseProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div ref={forwardedRef} className={cn("flex flex-col items-start", className)} {...props}>
        {children}
      </div>
    );
  }
);
VStack.displayName = "VStack";

export { VStack };
