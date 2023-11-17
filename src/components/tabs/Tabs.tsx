import React from "react";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { TabsContext, TabsProps, useTabsContext } from "./context/Tabs.context";

export interface TabsBaseProps extends TabsPrimitive.TabsProps, TabsProps {}

const Tabs = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, TabsBaseProps>(
  ({ children, className, defaultValue, variant, ...props }, forwardedRef) => {
    return (
      <TabsContext.Provider value={{ variant }}>
        <TabsPrimitive.Root
          ref={forwardedRef}
          className={cn(
            "text-primary-default flex w-full flex-col space-y-4 rounded data-[orientation=vertical]:flex-row data-[orientation=vertical]:space-x-8 data-[orientation=vertical]:space-y-0",
            className
          )}
          defaultValue={defaultValue}
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
  "flex shrink-0 gap-space-xs data-[orientation=vertical]:min-w-[250px] data-[orientation=vertical]:flex-col",
  {
    variants: {
      variant: {
        default: "gap-0 data-[orientation=vertical]:gap-space-base",
        underlined: "gap-0",
        pill: "border-primary-default bg-component-primary-default rounded border p-1"
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
        // className={cn(
        //   "flex shrink-0 gap-space-xs rounded border border-primary-default bg-component-primary-default p-1",
        //   className
        // )}
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
        className={cn("typography-paragraph-styles mb-2 px-4 font-medium", className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
TabsGroupLabel.displayName = "TabsGroupLabel";

const tabsTriggerVariants = cva(
  "text-primary-muted hover:text-primary-default flex flex-1 cursor-default select-none items-center justify-center gap-space-xs",
  {
    variants: {
      variant: {
        default:
          "focus-ring-primary data-[state=inactive]:border-primary-default data-[state=inactive]:hover:bg-component-primary-default rounded-t outline-none data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-[orientation=vertical]:rounded data-[orientation=vertical]:data-[state=active]:border data-[orientation=vertical]:data-[state=inactive]:border data-[state=active]:border data-[state=inactive]:border-b data-[orientation=vertical]:data-[state=inactive]:border-transparent data-[state=active]:border-accent-default data-[state=active]:bg-component-accent-default data-[state=active]:text-accent-muted data-[state=active]:focus-ring-accent data-[state=active]:hover:bg-component-accent-hover data-[state=active]:hover:text-accent-default data-[state=active]:focus:relative",
        underlined:
          "focus-ring-primary data-[state=inactive]:border-primary-default rounded-t outline-none data-[state=active]:border-b-2 data-[state=inactive]:border-b data-[state=active]:border-accent-default data-[state=active]:font-medium data-[state=active]:text-accent-muted data-[state=active]:focus-ring-accent",
        pill: "focus-ring-primary rounded border border-transparent bg-transparent outline-none data-[state=active]:border-accent-default data-[state=active]:bg-component-accent-default data-[state=active]:font-medium data-[state=active]:text-accent-muted data-[state=active]:focus-ring-accent data-[state=active]:hover:text-accent-default  data-[state=active]:focus:relative"
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
        // className={cn(
        //   "focus-ring-primary flex h-10 flex-1 cursor-default select-none items-center justify-center rounded border border-transparent bg-transparent px-4 text-sm leading-none text-primary-muted outline-none hover:text-primary-default data-[state=active]:border-primary-default data-[state=active]:bg-primary-default data-[state=active]:text-primary-default data-[state=active]:focus:relative",
        //   className
        // )}
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
