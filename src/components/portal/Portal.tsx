import React from "react";

import * as PortalPrimitive from "@radix-ui/react-portal";

export interface PortalBaseProps extends PortalPrimitive.PortalProps {}

const Portal = React.forwardRef<React.ElementRef<typeof PortalPrimitive.Root>, PortalBaseProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <PortalPrimitive.Root ref={forwardedRef} {...props}>
        {children}
      </PortalPrimitive.Root>
    );
  }
);
Portal.displayName = PortalPrimitive.Root.displayName;

export { Portal };
