import * as React from "react";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface NavigationMenuBaseProps extends NavigationMenuPrimitive.NavigationMenuProps {}

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuBaseProps
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex w-screen flex-1 justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

export interface NavigationMenuListProps extends NavigationMenuPrimitive.NavigationMenuListProps {}

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  NavigationMenuListProps
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-space-xs", className)}
    {...props}
  >
    {children}
    <NavigationMenuIndicator />
  </NavigationMenuPrimitive.List>
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

export interface NavigationMenuItemProps extends NavigationMenuPrimitive.NavigationMenuItemProps {}

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex w-max items-center justify-center rounded bg-transparent text-neutral-default transition-colors focus-ring-neutral component-padding-base hover:bg-component-neutral-hover focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-component-neutral-pressed data-[state=open]:bg-component-neutral-pressed"
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), className)}
    {...props}
  >
    {children}
    <ChevronDownIcon
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-default group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

export interface NavigationMenuContentProps extends NavigationMenuPrimitive.NavigationMenuContentProps {}

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  NavigationMenuContentProps
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

export interface NavigationMenuLinkProps extends NavigationMenuPrimitive.NavigationMenuLinkProps {}

const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  NavigationMenuLinkProps
>(({ className, href, ...props }, forwardedRef) => {
  return (
    <NavigationMenuPrimitive.Link
      ref={forwardedRef}
      href={href}
      className={cn(navigationMenuTriggerStyle(), className)}
      {...props}
    />
  );
});

export interface NavigationMenuPanelListProps extends React.ComponentPropsWithoutRef<"ul"> {}

const NavigationMenuPanelList = React.forwardRef<HTMLUListElement, NavigationMenuPanelListProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <ul
        ref={forwardedRef}
        className={cn(
          "m-0 grid list-none gap-space-sm p-space-base sm:w-[500px] sm:grid-flow-col sm:grid-rows-3",
          className
        )}
        {...props}
      >
        {children}
      </ul>
    );
  }
);
NavigationMenuPanelList.displayName = "NavigationMenuPanelList";

export interface NavigationMenuPanelListItemProps
  extends Omit<NavigationMenuPrimitive.NavigationMenuLinkProps, "href"> {
  title: string;
  href: string;
}

const NavigationMenuPanelListItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  NavigationMenuPanelListItemProps
>(({ className, children, title, href, ...props }, forwardedRef) => {
  return (
    <li>
      <NavigationMenuPrimitive.Link
        ref={forwardedRef}
        href={href}
        className={cn(
          "block h-full min-w-[200px] select-none space-y-0 rounded text-sm leading-none no-underline outline-none transition-colors component-padding-base hover:bg-component-neutral-hover focus-visible:bg-component-neutral-pressed focus-visible:focus-ring-neutral",
          className
        )}
        {...props}
      >
        <p className="line-clamp-1 font-medium leading-6 tracking-normal text-neutral-default">{title}</p>
        {children ? (
          <p className="line-clamp-2 leading-6 tracking-normal text-neutral-muted">{children}</p>
        ) : null}
      </NavigationMenuPrimitive.Link>
    </li>
  );
});
NavigationMenuPanelListItem.displayName = "NavigationMenuPanelListItem";

interface NavigationMenuViewportProps extends NavigationMenuPrimitive.NavigationMenuViewportProps {}

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  NavigationMenuViewportProps
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex w-full justify-center perspective-[2000px]")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded border border-neutral-default bg-neutral-default text-neutral-default shadow transition-[width,_height] duration-default data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

interface NavigationMenuIndicatorProps extends NavigationMenuPrimitive.NavigationMenuIndicatorProps {}

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  NavigationMenuIndicatorProps
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] mt-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl bg-component-neutral-dark shadow" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

const NavigationMenuCompoundComponent = Object.assign({}, NavigationMenu, {
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Trigger: NavigationMenuTrigger,
  Content: NavigationMenuContent,
  PanelList: NavigationMenuPanelList,
  PanelListItem: NavigationMenuPanelListItem,
  Link: NavigationMenuLink
});

export { NavigationMenuCompoundComponent as NavigationMenu, navigationMenuTriggerStyle };
