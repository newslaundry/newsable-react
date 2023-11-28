import React from "react";

import { DialogProps } from "@radix-ui/react-dialog";

import { Command as CommandPrimitive } from "cmdk";
import { MoveDown, MoveUp, CornerDownLeft as Return, Search } from "lucide-react";

import { Dialog, Separator, Text } from "@/components";
import { cn } from "@/lib/utils";

export interface CommandComponentProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive> {}

const CommandComponent = React.forwardRef<React.ElementRef<typeof CommandPrimitive>, CommandComponentProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <CommandPrimitive
        ref={forwardedRef}
        className={cn(
          "h-full w-full flex-col overflow-hidden rounded bg-neutral-muted text-neutral-default",
          className
        )}
        label="Command Menu"
        role="search"
        {...props}
      >
        {children}
        <CommandFooter />
      </CommandPrimitive>
    );
  }
);
CommandComponent.displayName = CommandPrimitive.displayName;

export interface CommandBaseProps extends DialogProps {}

const Command = ({ children, ...props }: CommandBaseProps) => {
  return (
    <Dialog {...props}>
      <Dialog.Content className="p-0 sm:max-w-xl">
        <CommandComponent>{children}</CommandComponent>
      </Dialog.Content>
    </Dialog>
  );
};

export interface CommandInputProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input> {
  // type: "search";
}

const CommandInput = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, CommandInputProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div
        className="flex items-center space-x-space-xs border-b border-neutral-default text-neutral-default component-padding-base"
        cmdk-input-wrapper=""
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        <CommandPrimitive.Input
          ref={forwardedRef}
          className={cn(
            "flex w-full rounded bg-transparent text-base outline-none ring-0 placeholder:text-neutral-muted active:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        >
          {children}
        </CommandPrimitive.Input>
      </div>
    );
  }
);
CommandInput.displayName = CommandPrimitive.Input.displayName;

export interface CommandListProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.List> {}

const CommandList = React.forwardRef<React.ElementRef<typeof CommandPrimitive.List>, CommandListProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <CommandPrimitive.List
        ref={forwardedRef}
        className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
        {...props}
      >
        {children}
      </CommandPrimitive.List>
    );
  }
);
CommandList.displayName = CommandPrimitive.List.displayName;

export interface CommandEmptyProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty> {}

const CommandEmpty = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Empty>, CommandEmptyProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <CommandPrimitive.Empty
        ref={forwardedRef}
        className={cn("py-space-2xl text-center text-sm text-neutral-muted", className)}
        {...props}
      />
    );
  }
);
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

export interface CommandGroupProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group> {}

const CommandGroup = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Group>, CommandGroupProps>(
  ({ className, ...props }, forwardedRef) => (
    <CommandPrimitive.Group
      ref={forwardedRef}
      className={cn(
        "overflow-hidden p-space-xs text-neutral-default [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-neutral-muted [&_[cmdk-group-heading]]:component-padding-base",
        className
      )}
      {...props}
    />
  )
);
CommandGroup.displayName = CommandPrimitive.Group.displayName;

export interface CommandSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator> {}

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  CommandSeparatorProps
>(({ className, ...props }, forwardedRef) => (
  <CommandPrimitive.Separator
    ref={forwardedRef}
    className={cn("-mx-1 h-px bg-separator-neutral", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

export interface CommandItemProps extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item> {}

const CommandItem = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Item>, CommandItemProps>(
  ({ className, ...props }, forwardedRef) => (
    <CommandPrimitive.Item
      ref={forwardedRef}
      className={cn(
        "group typography-paragraph-styles relative flex cursor-default select-none items-center rounded text-sm outline-none component-padding-base aria-selected:bg-component-neutral-hover data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    />
  )
);
CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandFooter = () => {
  return (
    <div className="flex h-12 w-full items-center justify-end space-x-space-xs border-t border-neutral-default p-space-xs text-sm font-medium text-neutral-muted">
      <div className="flex items-center justify-center space-x-space-xs">
        <div className="flex items-center justify-center space-x-space-xxs">
          <div className="flex items-center justify-center rounded border border-neutral-default p-space-xxs">
            <MoveUp className="h-3 w-3" aria-hidden="true" />
          </div>
          <div className="flex items-center justify-center rounded border border-neutral-default p-space-xxs">
            <MoveDown className="h-3 w-3" aria-hidden="true" />
          </div>
        </div>
        <Text className="text-sm">Navigate</Text>
      </div>
      <Separator orientation="vertical" />
      <div className="flex items-center justify-center space-x-space-xs">
        <div className="flex items-center justify-center rounded border border-neutral-default p-space-xxs">
          <Return className="h-3 w-3" aria-hidden="true" />
        </div>
        <Text className="text-sm">Select</Text>
      </div>
      <Separator orientation="vertical" />
      <div className="flex items-center justify-center space-x-space-xs">
        <div
          className="flex items-center justify-center rounded border border-neutral-default p-space-xxs"
          role="presentation"
        >
          <span className="flex h-3 items-center justify-center text-sm font-light">esc</span>
        </div>
        <Text className="text-sm">Close</Text>
      </div>
    </div>
  );
};

Command.Input = CommandInput;
Command.List = CommandList;
Command.Empty = CommandEmpty;
Command.Group = CommandGroup;
Command.Separator = CommandSeparator;
Command.Item = CommandItem;

export { Command };
