import React from "react";

import { cn } from "@/lib/utils";

export interface ButtonBaseProps extends React.ComponentPropsWithoutRef<"button"> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <button
        ref={forwardedRef}
        className={cn(
          "flex items-center justify-center rounded-md bg-green-600 px-4 py-3 text-base text-white",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export { Button };
