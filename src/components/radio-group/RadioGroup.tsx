import React, { useState } from "react";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import _ from "lodash";

import { cn } from "@/lib/utils";

export interface RadioGroupBaseProps extends RadioGroupPrimitive.RadioGroupProps {}

/**
 * Radio group component
 */
const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupBaseProps>(
  ({ children, className, orientation = "vertical", defaultValue, ...props }, forwardedRef) => {
    return (
      <RadioGroupPrimitive.Root
        ref={forwardedRef}
        className={cn("flex flex-col gap-space-xs", className)}
        defaultValue={defaultValue}
        orientation={orientation}
        aria-orientation={orientation}
        {...props}
      >
        {children}
      </RadioGroupPrimitive.Root>
    );
  }
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioGroupItemProps extends RadioGroupPrimitive.RadioGroupItemProps {}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, children, ...props }, forwardedRef) => {
  const [itemId] = useState(() => _.uniqueId("newsable-radio-group-"));
  const [labelId] = useState(() => _.uniqueId("newsable-radio-group-"));

  return (
    <div className="flex items-center gap-space-xs">
      <RadioGroupPrimitive.Item
        ref={forwardedRef}
        className={cn(
          "inline-flex h-6 w-6 cursor-default items-center gap-space-xs rounded-full border border-neutral-default bg-component-neutral-default text-neutral-default outline-none focus-ring-neutral hover:bg-component-neutral-hover data-[state=checked]:border-accent-default data-[state=checked]:bg-component-accent-pressed data-[state=checked]:focus-ring-accent data-[state=checked]:hover:bg-component-accent-dark",
          className
        )}
        id={itemId}
        aria-labelledby={labelId}
        {...props}
      >
        <RadioGroupIndicator />
      </RadioGroupPrimitive.Item>
      <label id={labelId} htmlFor={itemId}>
        {children}
      </label>
    </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export interface RadioGroupIndicatorProps extends RadioGroupPrimitive.RadioGroupIndicatorProps {}

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  RadioGroupIndicatorProps
>(({ className, ...props }, forwardedRef) => {
  return (
    <RadioGroupPrimitive.Indicator
      ref={forwardedRef}
      className={cn(
        "relative flex h-full w-full items-center justify-center after:block after:h-3 after:w-3 after:rounded-[50%] after:bg-component-accent-solid-default after:content-['']",
        className
      )}
      {...props}
    />
  );
});
RadioGroupIndicator.displayName = RadioGroupPrimitive.Indicator.displayName;

const RadioGroupCompoundComponent = Object.assign({}, RadioGroup, {
  Item: RadioGroupItem,
  Indicator: RadioGroupIndicator
});

export { RadioGroupCompoundComponent as RadioGroup };
