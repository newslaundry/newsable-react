import React, { useState } from "react";

import {
  Select,
  SelectArrow,
  SelectItem,
  SelectItemCheck,
  SelectLabel,
  SelectPopover,
  SelectProvider
} from "@ariakit/react";

import { MultiSelect } from "@/components";
import { cn } from "@/lib/utils";

const list = [
  "Apple",
  "Bacon",
  "Banana",
  "Broccoli",
  "Burger",
  "Cake",
  "Candy",
  "Carrot",
  "Cherry",
  "Chocolate",
  "Cookie",
  "Cucumber",
  "Donut",
  "Fish",
  "Fries",
  "Grape",
  "Green apple",
  "Hot dog",
  "Ice cream",
  "Kiwi",
  "Lemon",
  "Lollipop",
  "Onion",
  "Orange",
  "Pasta",
  "Pineapple",
  "Pizza",
  "Potato",
  "Salad",
  "Sandwich",
  "Steak",
  "Strawberry",
  "Tomato",
  "Watermelon"
];

function renderValue(value: string[]) {
  if (value.length === 0) return "No food selected";
  if (value.length === 1) return value[0];
  return `${value.length} items selected`;
}

export const MultiSelectDemo = () => {
  const [value, setValue] = useState(["Bacon"]);

  return <MultiSelect value={value} setValue={setValue} items={list} />;
};

export const AriakitDemo = () => {
  const [value, setValue] = useState(["Apple", "Cake"]);

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-start justify-center gap-2 p-4">
      <SelectProvider value={value} setValue={setValue}>
        <SelectLabel>Favourite food</SelectLabel>
        <Select
          className={cn(
            "group flex w-full min-w-[220px] max-w-lg appearance-none items-center justify-between gap-space-xs rounded border border-neutral-default bg-neutral-default text-base text-neutral-default focus-ring-neutral component-padding-base disabled:cursor-not-allowed disabled:bg-component-neutral-default disabled:opacity-75 data-[placeholder]:text-neutral-muted"
          )}
        >
          {renderValue(value)}
          <SelectArrow className="bg-transparent text-neutral-muted group-aria-[expanded=true]:rotate-180" />
        </Select>
        <SelectPopover
          gutter={8}
          sameWidth
          unmountOnHide
          className={cn(
            "relative z-50 max-h-[min(var(--popover-available-height,300px),300px)] min-w-[5rem] overflow-auto overscroll-contain rounded border border-neutral-default bg-neutral-default text-neutral-default shadow component-padding-base",
            "focus-visible:outline-none focus-visible:ring focus-visible:ring-neutral"
          )}
        >
          {list.map(val => (
            <SelectItem
              key={val}
              value={val}
              className={cn(
                "relative flex select-none scroll-m-space-sm items-center gap-space-xs rounded text-base text-neutral-default component-padding-base",
                "hover:bg-component-neutral-hover data-[active-item]:bg-component-neutral-hover",
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
