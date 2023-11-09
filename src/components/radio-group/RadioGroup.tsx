"use client";

import React, { useId } from "react";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

// import { RadioGroupContext, useRadioGroupContext } from "./context/RadioGroup.context";

export interface RadioGroupBaseProps extends RadioGroupPrimitive.RadioGroupProps {
  // orientation: "vertical" | "horizontal";
}

/**
 * Radio group component
 */
const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupBaseProps>(
  ({ children, className, orientation = "vertical", defaultValue, ...props }, forwardedRef) => {
    return (
      // <RadioGroupContext.Provider value={{ orientation }}>
      <RadioGroupPrimitive.Root
        ref={forwardedRef}
        className={cn("flex flex-col gap-2", className)}
        defaultValue={defaultValue}
        orientation={orientation}
        aria-orientation={orientation}
        {...props}
      >
        {children}
      </RadioGroupPrimitive.Root>
    );
    // </RadioGroupContext.Provider>
  }
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export interface RadioGroupItemProps extends RadioGroupPrimitive.RadioGroupItemProps {}

// ! TO FIX - refactor conflicting classes
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, children, ...props }, forwardedRef) => {
  // const { orientation } = useRadioGroupContext();

  const itemId = useId();
  const labelId = useId();

  return (
    <div className="flex items-center gap-2">
      <RadioGroupPrimitive.Item
        ref={forwardedRef}
        className={cn(
          // "focus-ring-primary relative flex w-full cursor-pointer items-center justify-between gap-4 rounded border border-primary-default px-3 py-2 text-primary-muted data-[state=checked]:border-primary-dark data-[state=checked]:bg-component-primary-pressed data-[state=unchecked]:bg-component-primary-default data-[state=checked]:hover:bg-component-primary-dark data-[state=unchecked]:hover:bg-component-primary-hover",
          "inline-flex h-6 w-6 cursor-default items-center gap-2 rounded-full border border-primary-default bg-component-primary-default text-primary-default outline-none focus-ring-primary hover:bg-component-primary-hover data-[state=checked]:border-accent-default data-[state=checked]:bg-component-accent-pressed data-[state=checked]:focus-ring-accent data-[state=checked]:hover:bg-component-accent-dark",
          className
        )}
        id={itemId}
        aria-labelledby={labelId}
        // value={value}
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
        // "overflow-hidden rounded-full border border-primary-dark bg-component-primary-dark",
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
