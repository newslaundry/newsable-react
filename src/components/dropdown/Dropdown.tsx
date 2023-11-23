import React from "react";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { Check, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export interface DropdownBaseProps extends DropdownMenuPrimitive.DropdownMenuProps {}

/**
 * Dropdown Component
 * @description Displays a menu to the user—such as a set of actions or functions—triggered by a button.
 */
const Dropdown = ({ children, ...props }: DropdownBaseProps) => {
  return <DropdownMenuPrimitive.Root {...props}>{children}</DropdownMenuPrimitive.Root>;
};

export interface DropdownTriggerProps extends DropdownMenuPrimitive.DropdownMenuTriggerProps {}

const DropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
  DropdownTriggerProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Trigger
      ref={forwardedRef}
      className={cn(
        // "pointer-events-auto flex items-center justify-center gap-space-xs rounded text-neutral-default transition-all duration-default focus-ring-neutral component-padding-base focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Trigger>
  );
});
DropdownTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

interface DropdownPortalProps extends DropdownMenuPrimitive.DropdownMenuPortalProps {}

const DropdownPortal = ({ children, ...props }: DropdownPortalProps) => {
  return <DropdownMenuPrimitive.Portal {...props}>{children}</DropdownMenuPrimitive.Portal>;
};

export interface DropdownContentProps extends DropdownMenuPrimitive.DropdownMenuContentProps {
  showArrow?: boolean;
}

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownContentProps
>(({ children, className, showArrow = true, ...props }, forwardedRef) => {
  return (
    <DropdownPortal>
      <DropdownMenuPrimitive.Content
        ref={forwardedRef}
        className={cn(
          "data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade flex w-full min-w-[220px] max-w-[240px] flex-col rounded border border-neutral-default bg-neutral-default p-2 shadow will-change-[opacity,transform]",
          className
        )}
        {...props}
      >
        {children}
        {showArrow ? <DropdownArrow /> : null}
      </DropdownMenuPrimitive.Content>
    </DropdownPortal>
  );
});
DropdownContent.displayName = DropdownMenuPrimitive.Content.displayName;

export interface DropdownHeaderProps extends React.ComponentPropsWithoutRef<"div"> {}

const DropdownHeader = React.forwardRef<HTMLDivElement, DropdownHeaderProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={cn("w-full border-b border-neutral-default bg-component-neutral-default p-1", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
DropdownHeader.displayName = "DropdownHeader";

export interface DropdownItemProps extends DropdownMenuPrimitive.DropdownMenuItemProps {
  icon?: JSX.Element;
  shortcutKey?: string;
}

const DropdownItem = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Item>, DropdownItemProps>(
  ({ children, className, icon, shortcutKey, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Item
        ref={forwardedRef}
        className={cn(
          "group relative flex h-8 select-none items-center rounded px-2 py-4 text-sm leading-none text-neutral-default outline-none data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:bg-neutral-muted data-[highlighted]:bg-component-neutral-hover data-[disabled]:text-neutral-muted",
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-center gap-2">
          {icon ? icon : null}
          {children}
        </div>
        {shortcutKey ? (
          <div className="ml-auto pl-4 text-neutral-default group-data-[disabled]:text-neutral-muted">
            ⌘ {shortcutKey}
          </div>
        ) : null}
      </DropdownMenuPrimitive.Item>
    );
  }
);
DropdownItem.displayName = DropdownMenuPrimitive.Item.displayName;

export interface DropdownLabelProps extends DropdownMenuPrimitive.DropdownMenuLabelProps {}

const DropdownLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  DropdownLabelProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Label
      ref={forwardedRef}
      className={cn("my-2 px-2 text-sm font-medium text-neutral-muted", className)}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Label>
  );
});
DropdownLabel.displayName = DropdownMenuPrimitive.Label.displayName;

export interface DropdownGroupProps extends DropdownMenuPrimitive.DropdownMenuGroupProps {}

const DropdownGroup = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Group>,
  DropdownGroupProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Group ref={forwardedRef} className={cn(className)} {...props}>
      {children}
    </DropdownMenuPrimitive.Group>
  );
});
DropdownGroup.displayName = DropdownMenuPrimitive.Group.displayName;

export interface DropdownCheckboxItemProps extends DropdownMenuPrimitive.DropdownMenuCheckboxItemProps {
  trailingIcon?: JSX.Element;
}

const DropdownCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DropdownCheckboxItemProps
>(({ children, className, trailingIcon, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={forwardedRef}
      className={cn(
        "group relative flex h-8 select-none items-center justify-between rounded px-2 py-4 text-sm leading-none text-neutral-default outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-component-neutral-hover data-[state=unchecked]:pl-8 data-[disabled]:text-neutral-muted data-[state=checked]:text-accent-muted",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
        {children}
      </div>
      {trailingIcon ? trailingIcon : null}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});
DropdownCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

export interface DropdownRadioGroupProps extends DropdownMenuPrimitive.DropdownMenuRadioGroupProps {}

const DropdownRadioGroup = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioGroup>,
  DropdownRadioGroupProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.RadioGroup ref={forwardedRef} className={cn(className)} {...props}>
      {children}
    </DropdownMenuPrimitive.RadioGroup>
  );
});
DropdownRadioGroup.displayName = DropdownMenuPrimitive.RadioGroup.displayName;

export interface DropdownRadioItemProps extends DropdownMenuPrimitive.DropdownMenuRadioItemProps {
  trailingIcon?: JSX.Element;
}

const DropdownRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  DropdownRadioItemProps
>(({ children, className, trailingIcon, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={forwardedRef}
      className={cn(
        "relative flex h-8 select-none items-center justify-between rounded px-2 py-4 text-sm leading-none text-neutral-default outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-component-neutral-hover data-[state=unchecked]:pl-8 data-[disabled]:text-neutral-muted data-[state=checked]:text-accent-muted",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
        {children}
      </div>
      {trailingIcon ? trailingIcon : null}
    </DropdownMenuPrimitive.RadioItem>
  );
});
DropdownRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

export interface DropdownItemIndicatorProps extends DropdownMenuPrimitive.DropdownMenuItemIndicatorProps {}

const DropdownItemIndicator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.ItemIndicator>,
  DropdownItemIndicatorProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.ItemIndicator ref={forwardedRef} className={cn(className)} {...props}>
      {children}
    </DropdownMenuPrimitive.ItemIndicator>
  );
});
DropdownItemIndicator.displayName = DropdownMenuPrimitive.ItemIndicator.displayName;

export interface DropdownSubMenuProps extends DropdownMenuPrimitive.DropdownMenuSubProps {}

const DropdownSubMenu = ({ children, ...props }: DropdownSubMenuProps) => {
  return <DropdownMenuPrimitive.Sub {...props}>{children}</DropdownMenuPrimitive.Sub>;
};
DropdownSubMenu.displayName = DropdownMenuPrimitive.Sub.displayName;

export interface DropdownSubTriggerProps extends DropdownMenuPrimitive.DropdownMenuSubTriggerProps {
  icon?: JSX.Element;
}

const DropdownSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownSubTriggerProps
>(({ children, className, icon, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={forwardedRef}
      className={cn(
        "group relative flex h-8 select-none items-center justify-between rounded px-2 py-4 text-sm leading-none text-neutral-default outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-component-neutral-hover data-[disabled]:text-neutral-muted",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {icon ? icon : null}
        {children}
      </div>
      <div className="group-data-[disabled]:text-neutral-muted" role="presentation">
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </div>
    </DropdownMenuPrimitive.SubTrigger>
  );
});
DropdownSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

export interface DropdownSubContentProps extends DropdownMenuPrimitive.DropdownMenuSubContentProps {}

const DropdownSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  DropdownSubContentProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.SubContent
      ref={forwardedRef}
      className={cn(
        "data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade min-w-[220px] rounded border border-neutral-default bg-neutral-default p-2 shadow will-change-[opacity,transform]",
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.SubContent>
  );
});
DropdownSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

export interface DropdownSeparatorProps extends DropdownMenuPrimitive.DropdownMenuSeparatorProps {}

const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownSeparatorProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Separator
      ref={forwardedRef}
      className={cn("my-2 h-[1px] bg-separator-neutral", className)}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Separator>
  );
});
DropdownSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

export interface DropdownArrowProps extends DropdownMenuPrimitive.DropdownMenuArrowProps {}

const DropdownArrow = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Arrow>,
  DropdownArrowProps
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Arrow ref={forwardedRef} className={cn("fill-neutral-7", className)} {...props}>
      {children}
    </DropdownMenuPrimitive.Arrow>
  );
});
DropdownArrow.displayName = DropdownMenuPrimitive.Arrow.displayName;

Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;
Dropdown.Header = DropdownHeader;
Dropdown.Label = DropdownLabel;
Dropdown.Item = DropdownItem;
Dropdown.Group = DropdownGroup;
Dropdown.CheckboxItem = DropdownCheckboxItem;
Dropdown.RadioGroup = DropdownRadioGroup;
Dropdown.RadioItem = DropdownRadioItem;
Dropdown.ItemIndicator = DropdownItemIndicator;
Dropdown.SubMenu = DropdownSubMenu;
Dropdown.SubTrigger = DropdownSubTrigger;
Dropdown.SubContent = DropdownSubContent;
Dropdown.Separator = DropdownSeparator;

export { Dropdown };
