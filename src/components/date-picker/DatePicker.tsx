import React from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";

import { Popover } from "@/components";

export interface DatePickerBaseProps extends PopoverPrimitive.PopoverProps {}

const DatePicker = ({ children, ...props }: DatePickerBaseProps) => {
  return <Popover {...props}>{children}</Popover>;
};

export interface DatePickerTriggerProps extends PopoverPrimitive.PopoverTriggerProps {}

const DatePickerTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  DatePickerTriggerProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <Popover.Trigger ref={forwardedRef} asChild {...props}>
      {children}
    </Popover.Trigger>
  );
});
DatePickerTrigger.displayName = "DatePickerTrigger";

export interface DatePickerContentProps extends PopoverPrimitive.PopoverContentProps {}

const DatePickerContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  DatePickerContentProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <Popover.Content ref={forwardedRef} {...props}>
      {children}
    </Popover.Content>
  );
});
DatePickerContent.displayName = "DatePickerContent";

DatePicker.Trigger = DatePickerTrigger;
DatePicker.Content = DatePickerContent;

export { DatePicker };
