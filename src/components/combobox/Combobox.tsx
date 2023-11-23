import React from "react";

import * as Ariakit from "@ariakit/react";

import { cn } from "@/lib/utils";

export interface ComboboxBaseProps extends Omit<Ariakit.ComboboxProps, "store" | "onChange"> {
  value?: string;
  onChange?: (value: string) => void;
}

const Combobox = React.forwardRef<HTMLInputElement, ComboboxBaseProps>(
  ({ value, onChange, children, className, ...props }, forwardedRef) => {
    const comboboxStore = Ariakit.useComboboxStore({ value, setValue: onChange });

    return (
      <>
        <Ariakit.Combobox
          ref={forwardedRef}
          store={comboboxStore}
          className={cn(
            "flex w-full appearance-none rounded border border-neutral-default bg-neutral-default text-neutral-default focus-ring-neutral component-padding-base placeholder:text-neutral-muted disabled:cursor-not-allowed disabled:bg-component-neutral-default disabled:opacity-75 invalid:focus:focus-ring-danger",
            className
          )}
          {...props}
        />
        <Ariakit.ComboboxPopover
          store={comboboxStore}
          portal
          sameWidth
          gutter={4}
          className="data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade max-h-[var(--popover-available-height)] overflow-auto rounded border border-neutral-default bg-transparent p-space-xxs text-neutral-default shadow will-change-[transform,opacity]"
        >
          {children}
        </Ariakit.ComboboxPopover>
      </>
    );
  }
);
Combobox.displayName = "Combobox";

export interface ComboboxGroupProps extends Ariakit.ComboboxGroupProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
}

const ComboboxGroup = React.forwardRef<HTMLDivElement, ComboboxGroupProps>(
  ({ label, children, className, ...props }, forwardedRef) => {
    return (
      <Ariakit.ComboboxGroup
        ref={forwardedRef}
        className={cn("overflow-hidden p-1 text-neutral-default", className)}
        {...props}
      >
        {label && (
          <Ariakit.ComboboxGroupLabel className="p-2 text-xs font-medium text-neutral-muted">
            {label}
          </Ariakit.ComboboxGroupLabel>
        )}
        {children}
      </Ariakit.ComboboxGroup>
    );
  }
);
ComboboxGroup.displayName = "ComboboxGroup";

export type ComboboxItemProps = Ariakit.ComboboxItemProps;

const ComboboxItem = React.forwardRef<HTMLDivElement, ComboboxItemProps>((props, forwardedRef) => {
  return (
    <Ariakit.ComboboxItem
      ref={forwardedRef}
      focusOnHover
      className="group relative flex cursor-default select-none items-center rounded text-neutral-default outline-none component-padding-base aria-selected:bg-component-neutral-hover data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
      {...props}
    />
  );
});
ComboboxItem.displayName = "ComboboxItem";

export type ComboboxSeparatorProps = Ariakit.ComboboxSeparatorProps;

const ComboboxSeparator = React.forwardRef<HTMLHRElement, ComboboxSeparatorProps>((props, forwardedRef) => {
  return <Ariakit.ComboboxSeparator ref={forwardedRef} className="separator" {...props} />;
});
ComboboxSeparator.displayName = "ComboboxSeparator";

const ComboboxCompoundComponent = Object.assign({}, Combobox, {
  Group: ComboboxGroup,
  Item: ComboboxItem,
  Separator: ComboboxSeparator
});

export { ComboboxCompoundComponent as Combobox };
