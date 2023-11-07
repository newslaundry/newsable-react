import React from "react";

import { cn } from "@/lib/utils";

export interface HeadingBaseProps extends React.ComponentPropsWithoutRef<"h1"> {
  weight: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingBaseProps>(
  ({ weight, className, children, ...props }, forwardedRef) => {
    switch (weight) {
      case "h1":
        return (
          <h1 ref={forwardedRef} className={cn("typography-heading-styles-h1", className)} {...props}>
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2 ref={forwardedRef} className={cn("typography-heading-styles-h2", className)} {...props}>
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3 ref={forwardedRef} className={cn("typography-heading-styles-h3", className)} {...props}>
            {children}
          </h3>
        );
      case "h4":
        return (
          <h4 ref={forwardedRef} className={cn("typography-heading-styles-h4", className)} {...props}>
            {children}
          </h4>
        );
      case "h5":
        return (
          <h5 ref={forwardedRef} className={cn("typography-heading-styles-h5", className)} {...props}>
            {children}
          </h5>
        );
      case "h6":
        return (
          <h6 ref={forwardedRef} className={cn("typography-heading-styles-h6", className)} {...props}>
            {children}
          </h6>
        );
      default:
        return (
          <h6 ref={forwardedRef} className={cn("typography-heading-styles-h6", className)} {...props}>
            {children}
          </h6>
        );
    }
  }
);
Heading.displayName = "Heading";

export { Heading };
