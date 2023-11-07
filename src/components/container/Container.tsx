import React from "react";

import { cn } from "@/lib/utils";

type ContainerWidth = "7xl" | "6xl" | "5xl" | "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "sm";

export interface ContainerBaseProps extends React.ComponentPropsWithoutRef<"div"> {
  maxWidth?: ContainerWidth;
}

const Container = React.forwardRef<HTMLDivElement, ContainerBaseProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div ref={forwardedRef} className={cn(`mx-auto max-w-7xl px-4`, className)} {...props}>
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

export { Container };
