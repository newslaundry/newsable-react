import React from "react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type AccordionBaseProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>;

const Accordion = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Root>, AccordionBaseProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <AccordionPrimitive.Root
        ref={forwardedRef}
        className={cn(
          "w-full text-primary-default transition-all duration-default last:border-b-0",
          className
        )}
        {...props}
      >
        {children}
      </AccordionPrimitive.Root>
    );
  }
);
Accordion.displayName = AccordionPrimitive.Root.displayName;

export interface AccordionItemProps extends AccordionPrimitive.AccordionItemProps {}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ children, className, value, disabled, ...restProps }, forwardedRef) => {
  return (
    <AccordionPrimitive.Item
      ref={forwardedRef}
      className={cn(
        `border-b border-primary-default outline-none focus-within:relative focus-within:z-10 hover:border-primary-dark data-[state=open]:hover:border-accent-dark ${
          disabled && "text-primary-muted"
        }`,
        className
      )}
      value={value}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </AccordionPrimitive.Item>
  );
});
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

export interface AccordionTriggerProps extends AccordionPrimitive.AccordionTriggerProps {}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, className, ...restProps }, forwardedRef) => {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        ref={forwardedRef}
        className={cn(
          `typography-paragraph-styles flex w-full flex-1 items-center justify-between rounded text-left font-medium focus-ring-primary component-padding-lg hover:bg-component-primary-hover data-[disabled]:cursor-not-allowed data-[state=open]:text-accent-muted data-[state=open]:focus-ring-accent data-[state=open]:hover:bg-component-accent-hover [&[data-state=open]>svg]:rotate-180`,
          className
        )}
        {...restProps}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-default" aria-hidden="true" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export interface AccordionContentProps extends AccordionPrimitive.AccordionContentProps {}

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...restProps }, forwardedRef) => {
  return (
    <AccordionPrimitive.Content
      ref={forwardedRef}
      className={cn(
        `typography-paragraph-styles overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down`,
        className
      )}
      {...restProps}
    >
      <div className="component-padding-lg">{children}</div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

const AccordionCompoundComponent = Object.assign({}, Accordion, {
  Trigger: AccordionTrigger,
  Item: AccordionItem,
  Content: AccordionContent
});

export { AccordionCompoundComponent as Accordion };
