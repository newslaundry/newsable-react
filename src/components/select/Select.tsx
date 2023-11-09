import React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";

import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

export interface SelectBaseProps extends SelectPrimitive.SelectProps {}

// ! TO FIX - refactor component - not overflowing in storybook
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
          "mx-auto flex h-10 min-w-[220px] items-center justify-between gap-2 rounded border border-primary-default bg-primary-default px-3 py-2 text-base leading-none text-primary-default shadow focus-ring-primary disabled:cursor-not-allowed disabled:bg-component-primary-default disabled:opacity-75 data-[placeholder]:text-primary-muted",
          className
        )}
        {...props}
      >
        {children}
      </SelectPrimitive.Trigger>
    );
  }
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

export interface SelectValueProps extends SelectPrimitive.SelectValueProps {}

const SelectValue = SelectPrimitive.Value;

export interface SelectIconProps extends SelectPrimitive.SelectIconProps {}

const SelectIcon = SelectPrimitive.Icon;

const SelectPortal = SelectPrimitive.Portal;

export interface SelectScrollUpButtonProps extends SelectPrimitive.SelectScrollUpButtonProps {}

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  SelectScrollUpButtonProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.ScrollUpButton
      ref={forwardedRef}
      className={cn(
        "flex h-6 cursor-default items-center justify-center bg-primary-default text-primary-default",
        className
      )}
      {...props}
    >
      {children}
    </SelectPrimitive.ScrollUpButton>
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

export interface SelectScrollDownButtonProps extends SelectPrimitive.SelectScrollDownButtonProps {}

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.SelectScrollDownButton>,
  SelectScrollDownButtonProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.ScrollDownButton
      ref={forwardedRef}
      className={cn(
        "flex h-6 cursor-default items-center justify-center bg-primary-default text-primary-default",
        className
      )}
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
            "overflow-hidden rounded border border-primary-default bg-primary-default p-2 shadow",
            className
          )}
          sideOffset={4}
          onPointerDownOutside={e => e.preventDefault()}
          sticky="always"
          {...props}
        >
          <SelectScrollUpButton>
            <ChevronUp />
          </SelectScrollUpButton>
          <SelectViewport
            className={cn(
              position === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            )}
          >
            {children}
          </SelectViewport>
          <SelectScrollDownButton>
            <ChevronDown />
          </SelectScrollDownButton>
          <SelectArrow />
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
        className={cn("px-2 py-1 text-xs leading-normal text-primary-muted", className)}
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
          "relative flex select-none items-center gap-1 rounded py-2 pl-6 pr-2 text-sm leading-none text-primary-default data-[disabled]:pointer-events-none data-[highlighted]:bg-component-primary-hover data-[disabled]:text-primary-muted data-[highlighted]:outline-none",
          className
        )}
        {...props}
      >
        <SelectItemText>{children}</SelectItemText>
        <SelectPrimitive.ItemIndicator className="absolute left-0 flex items-center justify-center gap-1 pl-2">
          <Check className="h-3 w-3" />
        </SelectPrimitive.ItemIndicator>
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
    <SelectPrimitive.ItemText ref={forwardedRef} className={cn(className)} {...props}>
      {children}
    </SelectPrimitive.ItemText>
  );
});
SelectItemText.displayName = SelectPrimitive.ItemText.displayName;

// export interface SelectItemIndicatorProps extends SelectPrimitive.SelectItemIndicatorProps {}

// const SelectItemIndicator = React.forwardRef<
//   React.ElementRef<typeof SelectPrimitive.ItemIndicator>,
//   SelectItemIndicatorProps
// >(({ className, children, ...props }, forwardedRef) => {
//   return (
//     <SelectPrimitive.ItemIndicator
//       ref={forwardedRef}
//       className={cn("absolute left-0 flex items-center justify-center gap-1 pl-2", className)}
//       {...props}
//     >
//       {children}
//     </SelectPrimitive.ItemIndicator>
//   );
// });
// SelectItemIndicator.displayName = SelectPrimitive.ItemIndicator.displayName;

export interface SelectSeparatorProps extends SelectPrimitive.SelectSeparatorProps {}

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SelectSeparatorProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Separator
      ref={forwardedRef}
      className={cn("my-2 h-[1px] bg-separator-primary", className)}
      {...props}
    >
      {children}
    </SelectPrimitive.Separator>
  );
});
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const SelectArrow = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Arrow>
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <SelectPrimitive.Arrow ref={forwardedRef} className={cn("fill-neutral-7", className)} {...props}>
      {children}
    </SelectPrimitive.Arrow>
  );
});
SelectArrow.displayName = SelectPrimitive.Arrow.displayName;

Select.Trigger = SelectTrigger;
Select.Value = SelectValue;
Select.Icon = SelectIcon;
Select.Content = SelectContent;
Select.Group = SelectGroup;
Select.Label = SelectLabel;
Select.Item = SelectItem;
Select.ItemText = SelectItemText;
Select.Separator = SelectSeparator;

export { Select };
