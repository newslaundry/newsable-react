import React from "react";

import { cn } from "@/lib/utils";

export interface GridBaseProps extends React.ComponentPropsWithoutRef<"div"> {}

const Grid = React.forwardRef<HTMLDivElement, GridBaseProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div ref={forwardedRef} className={cn("grid w-full", className)} {...props}>
        {children}
      </div>
    );
  }
);
Grid.displayName = "Grid";

export { Grid };
