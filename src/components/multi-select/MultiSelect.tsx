import React from "react";

import {
  Select,
  SelectArrow,
  SelectItem,
  SelectItemCheck,
  SelectLabel,
  SelectPopover,
  SelectProvider
} from "@ariakit/react";

import { cn } from "@/lib/utils";

type Value = string[];

// Apologies for my TS noobness
export interface MultiSelectBaseProps<T extends Value> {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  items: string[];
  selectTriggerClassNames?: string;
  selectArrowClassNames?: string;
  selectPopoverClassNames?: string;
  selectItemClassNames?: string;
}

const MultiSelect = ({ value, setValue, items }: MultiSelectBaseProps<Value>) => {
  function renderValue(value: string | string[]) {
    if (typeof value === "string") {
      return value;
    }

    if (value.length === 0) return "No food selected";
    if (value.length === 1) return value[0];
    return `${value.length} items selected`;
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-start justify-center gap-2 p-4">
      <SelectProvider value={value} setValue={setValue}>
        <SelectLabel>Favourite food</SelectLabel>
        <Select
          className={cn(
            "group flex w-full min-w-[220px] max-w-lg appearance-none items-center justify-between gap-space-xs rounded border border-neutral-default bg-neutral-default text-base text-neutral-default focus-ring-neutral component-padding-base data-[placeholder]:text-neutral-muted disabled:cursor-not-allowed disabled:bg-component-neutral-default disabled:opacity-75"
          )}
        >
          {renderValue(value)}
          <SelectArrow className="bg-transparent text-neutral-muted group-aria-[expanded=true]:rotate-180" />
        </Select>
        <SelectPopover
          gutter={4}
          sameWidth
          unmountOnHide
          className={cn(
            "relative z-50 max-h-[min(var(--popover-available-height,300px),300px)] min-w-[5rem] overflow-auto overscroll-contain rounded border border-neutral-default bg-neutral-default text-neutral-default shadow component-padding-base",
            "focus-visible:outline-none focus-visible:ring focus-visible:ring-neutral"
          )}
        >
          {items.map(val => (
            <SelectItem
              key={val}
              value={val}
              className={cn(
                "relative flex select-none scroll-m-space-sm items-center gap-space-xs rounded p-space-xs text-base text-neutral-default",
                "data-[active-item]:bg-component-neutral-hover hover:bg-component-neutral-hover",
                "focus-visible:ring focus-visible:ring-neutral",
                "data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:bg-component-neutral-default data-[disabled]:text-neutral-muted data-[highlighted]:outline-none"
              )}
            >
              <SelectItemCheck />
              {val}
            </SelectItem>
          ))}
        </SelectPopover>
      </SelectProvider>
    </div>
  );
};

export { MultiSelect };

// OLD IMPLEMENTATION
// import React from "react";
// import {
//   Select,
//   SelectArrow,
//   SelectItem,
//   SelectItemCheck,
//   SelectItemProps,
//   SelectLabel,
//   SelectLabelProps,
//   SelectPopover,
//   SelectPopoverProps,
//   SelectProps,
//   SelectProvider,
//   SelectProviderProps,
//   useSelectStore
// } from "@ariakit/react";
// import { cn } from "@/lib/utils";
// export interface MultiSelectBaseProps extends SelectProviderProps {
//   onChange: React.Dispatch<React.SetStateAction<string[]>>;
// }
// const MultiSelect = ({ children, value, setValue, ...props }: MultiSelectBaseProps) => {
//   const multiSelectStore = useSelectStore({ value, setValue });
//   return (
//     <div className="mx-auto flex w-full max-w-lg flex-col items-start justify-center gap-space-xs">
//       <SelectProvider store={multiSelectStore} {...props}>
//         {children}
//       </SelectProvider>
//     </div>
//   );
// };
// export interface MultiSelectLabelProps extends SelectLabelProps {}
// const MultiSelectLabel = React.forwardRef<React.ElementRef<typeof SelectLabel>, MultiSelectLabelProps>(
//   ({ children, className, ...props }, forwardedRef) => {
//     return (
//       <SelectLabel
//         className={cn("typography-paragraph-styles text-sm text-neutral-muted", className)}
//         ref={forwardedRef}
//         {...props}
//       >
//         {children}
//       </SelectLabel>
//     );
//   }
// );
// MultiSelectLabel.displayName = "MultiSelectLabel";
// export interface MultiSelectTriggerProps extends SelectProps {}
// const MultiSelectTrigger = React.forwardRef<React.ElementRef<typeof Select>, MultiSelectTriggerProps>(
//   ({ className, value, ...props }, forwardedRef) => {
//     function renderValue(value: string[]) {
//       if (value.length === 0) return "No food selected";
//       if (value.length === 1) return value[0];
//       return `${value.length} items selected`;
//     }
//     return (
//       <Select
//         ref={forwardedRef}
//         className={cn(
//           "group flex w-full min-w-[220px] max-w-lg appearance-none items-center justify-between gap-space-xs rounded border border-neutral-default bg-neutral-default text-base text-neutral-default focus-ring-neutral component-padding-base data-[placeholder]:text-neutral-muted disabled:cursor-not-allowed disabled:bg-component-neutral-default disabled:opacity-75",
//           className
//         )}
//         {...props}
//       >
//         Some value
//         {/* {renderValue(props.value)} */}
//         <SelectArrow className="bg-transparent text-neutral-muted group-aria-[expanded=true]:rotate-180" />
//       </Select>
//     );
//   }
// );
// MultiSelectTrigger.displayName = "MultiSelectTrigger";
// export interface MultiSelectContentProps extends SelectPopoverProps {}
// const MultiSelectContent = React.forwardRef<React.ElementRef<typeof SelectPopover>, MultiSelectContentProps>(
//   ({ className, children, ...props }, forwardedRef) => {
//     return (
//       <SelectPopover
//         ref={forwardedRef}
//         gutter={8}
//         sameWidth
//         unmountOnHide
//         className={cn(
//           "relative z-50 max-h-[min(var(--popover-available-height,300px),300px)] min-w-[5rem] overflow-auto overscroll-contain rounded border border-neutral-default bg-neutral-default text-neutral-default shadow component-padding-base",
//           "focus-visible:outline-none focus-visible:ring focus-visible:ring-neutral",
//           className
//         )}
//         {...props}
//       >
//         {children}
//       </SelectPopover>
//     );
//   }
// );
// MultiSelectContent.displayName = "MultiSelectContent";
// export interface MultiSelectItemProps extends SelectItemProps {}
// const MultiSelectItem = React.forwardRef<React.ElementRef<typeof SelectPopover>, MultiSelectItemProps>(
//   ({ className, value, ...props }, forwardedRef) => {
//     return (
//       <SelectItem
//         ref={forwardedRef}
//         key={value}
//         value={value}
//         className={cn(
//           "relative flex select-none scroll-m-space-sm items-center gap-space-xs rounded text-base text-neutral-default component-padding-base",
//           "data-[active-item]:bg-component-neutral-hover hover:bg-component-neutral-hover",
//           "focus-visible:ring focus-visible:ring-neutral",
//           "data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:bg-component-neutral-default data-[disabled]:text-neutral-muted data-[highlighted]:outline-none",
//           className
//         )}
//         {...props}
//       >
//         <SelectItemCheck />
//         {value}
//       </SelectItem>
//     );
//   }
// );
// MultiSelectItem.displayName = "MultiSelectItem";
// MultiSelect.Label = MultiSelectLabel;
// MultiSelect.Trigger = MultiSelectTrigger;
// MultiSelect.Content = MultiSelectContent;
// MultiSelect.Item = MultiSelectItem;
// export { MultiSelect };
