import React from "react";

import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import { cn } from "@/lib/utils";

export type ToggleGroupBaseProps = React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>;

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  ToggleGroupBaseProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <ToggleGroupPrimitive.Root
      ref={forwardedRef}
      className={cn("inline-flex rounded bg-component-neutral-default", className)}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Root>
  );
});
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

export interface ToggleGroupItemProps extends ToggleGroupPrimitive.ToggleGroupItemProps {}

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <ToggleGroupPrimitive.Item
      ref={forwardedRef}
      className={cn(
        "flex items-center justify-center border text-base font-medium component-padding-base first:rounded-l last:rounded-r focus:z-10",
        "data-[state=off]:border-neutral-default data-[state=off]:bg-component-neutral-default data-[state=off]:text-neutral-muted data-[state=off]:focus-ring-neutral data-[state=off]:hover:bg-component-neutral-hover",
        "data-[state=on]:border-accent-default data-[state=on]:bg-component-accent-pressed data-[state=on]:text-accent-muted data-[state=on]:focus-ring-accent data-[state=on]:hover:bg-component-accent-dark",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

const ToggleGroupCompoundComponent = Object.assign({}, ToggleGroup, {
  Item: ToggleGroupItem
});

export { ToggleGroupCompoundComponent as ToggleGroup };
