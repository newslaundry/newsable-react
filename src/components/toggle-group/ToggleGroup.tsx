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
      className={cn("bg-component-primary-default inline-flex rounded", className)}
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
        "data-[state=off]:border-primary-default data-[state=off]:bg-component-primary-default data-[state=off]:text-primary-muted data-[state=off]:focus-ring-primary data-[state=off]:hover:bg-component-primary-hover flex h-10 items-center justify-center border px-4 py-3 text-base font-medium first:rounded-l last:rounded-r focus:z-10 data-[state=on]:border-accent-default data-[state=on]:bg-component-accent-pressed data-[state=on]:text-accent-muted data-[state=on]:focus-ring-accent data-[state=on]:hover:bg-component-accent-dark",
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
