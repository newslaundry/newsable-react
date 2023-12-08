import React from "react";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

export interface ScrollAreaBaseProps extends ScrollAreaPrimitive.ScrollAreaProps {}

const ScrollArea = React.forwardRef<React.ElementRef<typeof ScrollAreaPrimitive.Root>, ScrollAreaBaseProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <ScrollAreaPrimitive.Root
        ref={forwardedRef}
        className={cn(
          "h-80 w-full overflow-hidden rounded border border-neutral-default bg-neutral-default transition-all duration-default",
          className
        )}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport className="h-full w-full rounded">
          {children}
        </ScrollAreaPrimitive.Viewport>
        <Scrollbar />
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    );
  }
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export interface ScrollAreaScrollbarProps extends ScrollAreaPrimitive.ScrollAreaScrollbarProps {}

// ! TO FIX: try to export Scrollbar for reusability
const Scrollbar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ScrollAreaScrollbarProps
>(({ className, orientation = "vertical", ...props }, forwardedRef) => {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={forwardedRef}
      className={cn(
        "flex touch-none select-none rounded-full bg-component-neutral-default p-0.5 transition-colors duration-default ease-out hover:bg-component-neutral-hover data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col",
        className
      )}
      orientation={orientation}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded bg-component-neutral-solid-default before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
});
Scrollbar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea };
