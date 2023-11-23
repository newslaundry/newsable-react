import React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";

import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

export interface SelectBaseProps extends SelectPrimitive.SelectProps {}

const Select = ({ children, ...props }: SelectBaseProps) => {
  return <SelectPrimitive.Root {...props}>{children}</SelectPrimitive.Root>;
};

export interface SelectTriggerProps extends SelectPrimitive.SelectTriggerProps {}

const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Trigger
        ref={forwardedRef}
        className={cn(
          "flex w-full min-w-[220px] max-w-lg appearance-none items-center justify-between gap-space-xs rounded border border-neutral-default bg-neutral-default text-base text-neutral-default focus-ring-neutral component-padding-base data-[placeholder]:text-neutral-muted disabled:cursor-not-allowed disabled:bg-component-neutral-default disabled:opacity-75",
          className
        )}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    );
  }
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export interface SelectValueProps extends SelectPrimitive.SelectValueProps {}

const SelectValue = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Value>, SelectValueProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Value
        ref={forwardedRef}
        className={cn("typography-paragraph-styles", className)}
        {...props}
      >
        {children}
      </SelectPrimitive.Value>
    );
  }
);

export interface SelectIconProps extends SelectPrimitive.SelectIconProps {}

const SelectPortal = SelectPrimitive.Portal;

interface SelectScrollUpButtonProps extends SelectPrimitive.SelectScrollUpButtonProps {}

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  SelectScrollUpButtonProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.ScrollUpButton
      ref={forwardedRef}
      className={cn("flex h-6 cursor-default items-center justify-center text-neutral-muted", className)}
      {...props}
    >
      {children}
    </SelectPrimitive.ScrollUpButton>
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

interface SelectScrollDownButtonProps extends SelectPrimitive.SelectScrollDownButtonProps {}

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectScrollDownButton>,
  SelectScrollDownButtonProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.ScrollDownButton
      ref={forwardedRef}
      className={cn("flex h-6 cursor-default items-center justify-center text-neutral-muted", className)}
      {...props}
    >
      {children}
    </SelectPrimitive.ScrollDownButton>
  );
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

export interface SelectContentProps extends SelectPrimitive.SelectContentProps {}

const SelectContent = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>, SelectContentProps>(
  ({ className, children, position = "popper", ...props }, forwardedRef) => {
    return (
      <SelectPortal>
        <SelectPrimitive.Content
          ref={forwardedRef}
          position={position}
          className={cn(
            "relative z-50 max-h-96 min-w-[5rem] overflow-hidden rounded border border-neutral-default bg-neutral-default p-space-xs text-neutral-default shadow",
            position === "popper" &&
              "h-full max-h-[var(--radix-select-content-available-height)] w-[var(--radix-select-trigger-width)]",
            className
          )}
          align="center"
          // "overflow-hidden rounded border border-neutral-default bg-neutral-default p-2 shadow",
          sideOffset={4}
          // onPointerDownOutside={e => e.preventDefault()}
          // sticky="always"
          {...props}
        >
          <SelectScrollUpButton>
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
          </SelectScrollUpButton>
          <SelectViewport
            className={cn(
              position === "popper" &&
                "h-[var(--radix-select-content-available-height)] w-[var(--radix-select-content-width)]"
            )}
          >
            {children}
          </SelectViewport>
          <SelectScrollDownButton>
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </SelectScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPortal>
    );
  }
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectViewport = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Viewport>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Viewport ref={forwardedRef} className={cn(className)} {...props}>
      {children}
    </SelectPrimitive.Viewport>
  );
});
SelectViewport.displayName = SelectPrimitive.Viewport.displayName;

export interface SelectGroupProps extends SelectPrimitive.SelectGroupProps {}

const SelectGroup = SelectPrimitive.Group;

export interface SelectLabelProps extends SelectPrimitive.SelectLabelProps {}

const SelectLabel = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Label>, SelectLabelProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Label
        ref={forwardedRef}
        className={cn(
          "typography-paragraph-styles pl-8 text-sm text-neutral-muted component-padding-y-base component-padding-r-base",
          className
        )}
        {...props}
      >
        {children}
      </SelectPrimitive.Label>
    );
  }
);
SelectLabel.displayName = SelectPrimitive.Label.displayName;

export interface SelectItemProps extends SelectPrimitive.SelectItemProps {}

const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, SelectItemProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <SelectPrimitive.Item
        ref={forwardedRef}
        className={cn(
          "relative flex select-none items-center rounded pl-8 text-base text-neutral-default component-padding-y-base component-padding-r-base data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:bg-component-neutral-default data-[highlighted]:bg-component-neutral-hover data-[disabled]:text-neutral-muted data-[highlighted]:outline-none",
          className
        )}
        {...props}
      >
        <SelectPrimitive.ItemIndicator className="absolute left-0 flex items-center justify-center component-padding-l-base">
          <Check className="h-4 w-4" aria-hidden="true" />
        </SelectPrimitive.ItemIndicator>
        <SelectItemText>{children}</SelectItemText>
      </SelectPrimitive.Item>
    );
  }
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

export interface SelectItemTextProps extends SelectPrimitive.SelectItemTextProps {}

const SelectItemText = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ItemText>,
  SelectItemTextProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.ItemText
      ref={forwardedRef}
      className={cn("typography-paragraph-styles text-base", className)}
      {...props}
    >
      {children}
    </SelectPrimitive.ItemText>
  );
});
SelectItemText.displayName = SelectPrimitive.ItemText.displayName;

export interface SelectSeparatorProps extends SelectPrimitive.SelectSeparatorProps {}

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SelectSeparatorProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Separator
      ref={forwardedRef}
      className={cn("my-2 h-[1px] bg-separator-neutral", className)}
      {...props}
    >
      {children}
    </SelectPrimitive.Separator>
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

Select.Trigger = SelectTrigger;
Select.Value = SelectValue;
Select.Content = SelectContent;
Select.Group = SelectGroup;
Select.Label = SelectLabel;
Select.Item = SelectItem;
Select.ItemText = SelectItemText;
Select.Separator = SelectSeparator;

export { Select };
