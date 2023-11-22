import React from "react";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { TabsContext, TabsProps, useTabsContext } from "./context/Tabs.context";

export interface TabsBaseProps extends TabsPrimitive.TabsProps, TabsProps {}

const Tabs = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, TabsBaseProps>(
  ({ children, className, variant, defaultValue, ...props }, forwardedRef) => {
    return (
      <TabsContext.Provider value={{ variant }}>
        <TabsPrimitive.Root
          ref={forwardedRef}
          className={cn(
            "flex w-full rounded text-neutral-default",
            "data-[orientation=vertical]:flex-row data-[orientation=vertical]:space-x-space-base data-[orientation=vertical]:space-y-0",
            "data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:space-x-0 data-[orientation=horizontal]:space-y-space-base",
            className
          )}
          defaultValue={defaultValue}
          data-variant={variant}
          {...props}
        >
          {children}
        </TabsPrimitive.Root>
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = TabsPrimitive.Root.displayName;

const tabsListVariants = cva(
  "group flex shrink-0 data-[orientation=vertical]:min-w-[250px] data-[orientation=vertical]:flex-col",
  {
    variants: {
      variant: {
        default: "data-[orientation=horizontal]:gap-0 data-[orientation=vertical]:gap-space-base",
        underlined: "data-[orientation=horizontal]:gap-0 data-[orientation=vertical]:gap-space-base",
        pill: "rounded border border-neutral-default bg-component-neutral-default data-[orientation=horizontal]:gap-0 data-[orientation=vertical]:gap-space-base data-[orientation=horizontal]:p-1 data-[orientation=vertical]:component-padding-base"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface TabsListProps extends TabsPrimitive.TabsListProps {}

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ className, children, ...props }, forwardedRef) => {
    const { variant } = useTabsContext();

    return (
      <TabsPrimitive.List
        ref={forwardedRef}
        className={cn(tabsListVariants({ variant }), className)}
        {...props}
      >
        {children}
      </TabsPrimitive.List>
    );
  }
);
TabsList.displayName = TabsPrimitive.List.displayName;

export interface TabsGroupProps extends React.ComponentPropsWithoutRef<"div"> {}

const TabsGroup = React.forwardRef<HTMLDivElement, TabsGroupProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div ref={forwardedRef} className={cn("w-full", className)} {...props}>
        {children}
      </div>
    );
  }
);
TabsGroup.displayName = "TabsGroup";

export interface TabsGroupLabelProps extends React.ComponentPropsWithoutRef<"p"> {}

const TabsGroupLabel = React.forwardRef<HTMLParagraphElement, TabsGroupLabelProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <p
        ref={forwardedRef}
        className={cn(
          "typography-paragraph-styles mb-2 text-sm font-medium text-neutral-muted component-padding-x-base",
          className
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);
TabsGroupLabel.displayName = "TabsGroupLabel";

const tabsTriggerVariants = cva(
  "flex flex-1 cursor-default select-none items-center justify-center gap-space-xs font-medium text-neutral-muted hover:text-neutral-default",
  {
    variants: {
      variant: {
        default: cn(
          "rounded-t outline-none focus-ring-neutral",
          "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-[orientation=vertical]:rounded data-[orientation=vertical]:border data-[orientation=vertical]:data-[state=inactive]:border-transparent",
          "data-[orientation=horizontal]:border data-[orientation=horizontal]:data-[state=inactive]:border-b data-[orientation=horizontal]:data-[state=inactive]:border-x-transparent data-[orientation=horizontal]:data-[state=inactive]:border-t-transparent",
          "data-[state=inactive]:border-neutral-default data-[state=inactive]:hover:bg-component-neutral-default",
          "data-[state=active]:border-accent-default data-[state=active]:bg-component-accent-default data-[state=active]:text-accent-muted data-[state=active]:focus-ring-accent data-[state=active]:hover:bg-component-accent-hover data-[state=active]:hover:text-accent-default data-[state=active]:focus:relative"
        ),
        underlined: cn(
          "outline-none focus-ring-neutral",
          "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-[orientation=vertical]:rounded-none data-[orientation=vertical]:border data-[orientation=vertical]:data-[state=inactive]:border-transparent data-[orientation=vertical]:data-[state=active]:border-x-transparent data-[orientation=vertical]:data-[state=active]:border-b-accent-default data-[orientation=vertical]:data-[state=active]:border-t-transparent data-[orientation=vertical]:data-[state=active]:focus:rounded",
          "data-[orientation=horizontal]:rounded-t data-[orientation=horizontal]:border-b data-[orientation=horizontal]:data-[state=active]:border-accent-default data-[orientation=horizontal]:data-[state=inactive]:border-neutral-default",
          "data-[state=active]:text-accent-muted data-[state=active]:focus-ring-accent"
        ),
        pill: cn(
          "rounded border border-transparent bg-transparent outline-none focus-ring-neutral",
          "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
          "data-[state=active]:border-accent-default data-[state=active]:bg-component-accent-default data-[state=active]:text-accent-muted data-[state=active]:focus-ring-accent data-[state=active]:hover:text-accent-default data-[state=active]:focus:relative"
        )
      },
      size: {
        sm: "component-padding-sm",
        base: "component-padding-base",
        lg: "component-padding-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "base"
    }
  }
);

export interface TabsTriggerProps extends TabsPrimitive.TabsTriggerProps {}

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, TabsTriggerProps>(
  ({ className, children, value, ...props }, forwardedRef) => {
    const { variant } = useTabsContext();

    return (
      <TabsPrimitive.Trigger
        ref={forwardedRef}
        className={cn(tabsTriggerVariants({ variant }), className)}
        value={value}
        {...props}
      >
        {children}
      </TabsPrimitive.Trigger>
    );
  }
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export interface TabsContentProps extends TabsPrimitive.TabsContentProps {}

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, TabsContentProps>(
  ({ className, children, value, ...props }, forwardedRef) => (
    <TabsPrimitive.Content
      ref={forwardedRef}
      className={cn("data-[orientation=vertical]:w-full", className)}
      value={value}
      {...props}
    >
      {children}
    </TabsPrimitive.Content>
  )
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

const TabsCompoundComponent = Object.assign({}, Tabs, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
  Group: TabsGroup,
  GroupLabel: TabsGroupLabel
});

export { TabsCompoundComponent as Tabs };
