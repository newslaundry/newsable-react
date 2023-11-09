import React from "react";

import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";

import { cn } from "@/lib/utils";

export interface VisuallyHiddenBaseProps extends VisuallyHiddenPrimitive.VisuallyHiddenProps {}

const VisuallyHidden = React.forwardRef<
  React.ElementRef<typeof VisuallyHiddenPrimitive.Root>,
  VisuallyHiddenBaseProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <VisuallyHiddenPrimitive.Root ref={forwardedRef} className={cn(className)} {...props}>
      {children}
    </VisuallyHiddenPrimitive.Root>
  );
});
VisuallyHidden.displayName = VisuallyHiddenPrimitive.Root.displayName;

export { VisuallyHidden };
