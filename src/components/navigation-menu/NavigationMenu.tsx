"use client";

// import React from "react";
// import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
// import { ChevronDown } from "lucide-react";
// import { cn } from "@/lib/utils";
// const NavigationMenu = ({ className, children, ...props }: NavigationMenuPrimitive.NavigationMenuProps) => {
//   return (
//     <NavigationMenuPrimitive.Root
//       className={cn("z-1 relative flex w-full items-center justify-center", className)}
//       {...props}
//     >
//       {children}
//     </NavigationMenuPrimitive.Root>
//   );
// };
// NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
// const NavigationMenuList = React.forwardRef<
//   React.ElementRef<typeof NavigationMenuPrimitive.List>,
//   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
// >(({ className, ...props }, forwardedRef) => (
//   <NavigationMenuPrimitive.List
//     ref={forwardedRef}
//     className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
//     {...props}
//   />
// ));
// NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
// const NavigationMenuItem = NavigationMenuPrimitive.Item;
// const NavigationMenuTrigger = React.forwardRef<
//   React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
//   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
// >(({ className, children, ...props }, forwardedRef) => (
//   <NavigationMenuPrimitive.Trigger
//     ref={forwardedRef}
//     className={cn(
//       "group relative flex select-none items-center justify-between gap-1 rounded px-3 py-2 text-sm font-medium leading-none text-primary-default outline-none hover:bg-component-primary-hover",
//       className
//     )}
//     {...props}
//   >
//     <p className="font-medium leading-6 tracking-normal text-primary-default">{children}</p>
//     <ChevronDown
//       className="h-3 w-3 text-primary-default transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
//       aria-hidden="true"
//     />
//   </NavigationMenuPrimitive.Trigger>
// ));
// NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
// const NavigationMenuContent = React.forwardRef<
//   React.ElementRef<typeof NavigationMenuPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
// >(({ className, children, ...props }, forwardedRef) => (
//   <NavigationMenuPrimitive.Content
//     ref={forwardedRef}
//     className={cn(
//       "absolute left-0 top-0 w-full bg-primary-default data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto",
//       className
//     )}
//     {...props}
//   >
//     {children}
//   </NavigationMenuPrimitive.Content>
// ));
// NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
// export interface NavigationMenuLinkProps extends NavigationMenuPrimitive.NavigationMenuLinkProps {
//   title: string;
//   href: string;
// }
// const NavigationMenuLink = React.forwardRef<
//   React.ElementRef<typeof NavigationMenuPrimitive.Link>,
//   NavigationMenuLinkProps
// >(({ className, children, title, href, ...props }, forwardedRef) => {
//   return (
//     <NavigationMenuPrimitive.Link
//       ref={forwardedRef}
//       href={href}
//       className={cn(
//         "block select-none space-y-1 rounded px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-component-primary-hover",
//         className
//       )}
//       {...props}
//     >
//       <p className="font-medium leading-6 tracking-normal text-primary-default">{title}</p>
//       {children ? <p className="leading-6 tracking-normal text-primary-default">{children}</p> : null}
//     </NavigationMenuPrimitive.Link>
//   );
// });
// NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;
// const NavigationMenuPanelList = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<"ul">>(
//   ({ className, children, ...props }, forwardedRef) => {
//     return (
//       <ul
//         ref={forwardedRef}
//         className={cn(
//           "m-0 grid list-none gap-x-2 px-3 py-2 sm:w-[600px] sm:grid-flow-col sm:grid-rows-3",
//           className
//         )}
//         {...props}
//       >
//         {children}
//       </ul>
//     );
//   }
// );
// NavigationMenuPanelList.displayName = "NavigationMenuPanelList";
// export interface NavigationMenuPanelListItemProps extends NavigationMenuPrimitive.NavigationMenuLinkProps {
//   title: string;
//   href: string;
// }
// const NavigationMenuPanelListItem = React.forwardRef<
//   React.ElementRef<typeof NavigationMenuPrimitive.Link>,
//   NavigationMenuPanelListItemProps
// >(({ className, children, title, href, ...props }, forwardedRef) => {
//   return (
//     <li>
//       <NavigationMenuPrimitive.Link
//         ref={forwardedRef}
//         href={href}
//         className={cn(
//           "block select-none space-y-1 rounded px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-component-primary-hover",
//           className
//         )}
//         {...props}
//       >
//         <p className="font-medium leading-6 tracking-normal text-primary-default">{title}</p>
//         {children ? <p className="leading-6 tracking-normal text-primary-default">{children}</p> : null}
//       </NavigationMenuPrimitive.Link>
//     </li>
//   );
// });
// NavigationMenuPanelListItem.displayName = "NavigationMenuPanelListItem";
// const NavigationMenuViewport = React.forwardRef<
//   React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
//   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
// >(() => {
//   return (
//     <div className={cn("absolute left-0 top-full flex w-full justify-center perspective-[2000px]")}>
//       <NavigationMenuPrimitive.Viewport className="relative mt-[12px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top overflow-hidden rounded-md border border-primary-default bg-primary-default text-primary-default shadow-lg transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
//     </div>
//   );
// });
// NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
// const NavigationMenuIndicator = React.forwardRef<
//   React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
//   React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
// >(({ className, ...props }, forwardedRef) => (
//   <NavigationMenuPrimitive.Indicator
//     ref={forwardedRef}
//     className={cn(
//       "top-full z-[1] flex h-[12px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn",
//       className
//     )}
//     {...props}
//   >
//     <div className="relative top-[70%] h-[12px] w-[12px] rotate-[45deg] rounded-tl-[2px] bg-neutral-7" />
//   </NavigationMenuPrimitive.Indicator>
// ));
// NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;
// NavigationMenu.List = NavigationMenuList;
// NavigationMenu.Item = NavigationMenuItem;
// NavigationMenu.Trigger = NavigationMenuTrigger;
// NavigationMenu.Content = NavigationMenuContent;
// NavigationMenu.PanelList = NavigationMenuPanelList;
// NavigationMenu.PanelListItem = NavigationMenuPanelListItem;
// NavigationMenu.Link = NavigationMenuLink;
// NavigationMenu.Indicator = NavigationMenuIndicator;
// NavigationMenu.Viewport = NavigationMenuViewport;
// export { NavigationMenu };
// ! TO FIX - refactor entire primitive
import * as React from "react";

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded bg-transparent px-3 py-2 text-primary-default transition-colors focus-ring-primary hover:bg-component-primary-hover focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-component-primary-pressed data-[state=open]:bg-component-primary-pressed"
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}
    <ChevronDownIcon
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuPanelList = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<"ul">>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <ul
        ref={forwardedRef}
        className={cn(
          "m-0 grid list-none gap-2 p-4 sm:min-w-[480px] sm:grid-flow-col sm:grid-rows-3",
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

export interface NavigationMenuPanelListItemProps extends NavigationMenuPrimitive.NavigationMenuLinkProps {
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
          "block min-w-[200px] select-none space-y-0 rounded px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-component-primary-hover",
          className
        )}
        {...props}
      >
        <p className="line-clamp-1 font-medium leading-6 tracking-normal text-primary-default">{title}</p>
        {children ? (
          <p className="line-clamp-2 leading-6 tracking-normal text-primary-muted">{children}</p>
        ) : null}
      </NavigationMenuPrimitive.Link>
    </li>
  );
});
NavigationMenuPanelListItem.displayName = "NavigationMenuPanelListItem";

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded border border-primary-default bg-primary-default text-primary-default shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] mt-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl bg-component-primary-dark shadow" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

// export {
//   navigationMenuTriggerStyle,
//   NavigationMenu,
//   NavigationMenuList,
//   NavigationMenuItem,
//   NavigationMenuContent,
//   NavigationMenuTrigger,
//   NavigationMenuLink,
//   NavigationMenuIndicator,
//   NavigationMenuViewport,
// }

const NavigationMenuCompoundComponent = Object.assign({}, NavigationMenu, {
  List: NavigationMenuList,
  Item: NavigationMenuItem,
  Trigger: NavigationMenuTrigger,
  Content: NavigationMenuContent,
  PanelList: NavigationMenuPanelList,
  PanelListItem: NavigationMenuPanelListItem,
  Link: NavigationMenuLink,
  Indicator: NavigationMenuIndicator,
  Viewport: NavigationMenuViewport
});

export { NavigationMenuCompoundComponent as NavigationMenu, navigationMenuTriggerStyle };
