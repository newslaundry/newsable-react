import React from "react";

import { cn } from "@/lib/utils";

export interface TextBaseProps extends React.ComponentPropsWithoutRef<"p"> {}

const Text = React.forwardRef<HTMLParagraphElement, TextBaseProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <p ref={forwardedRef} className={cn("typography-paragraph-styles", className)} {...props}>
        {children}
      </p>
    );
  }
);
Text.displayName = "Text";

export { Text };
