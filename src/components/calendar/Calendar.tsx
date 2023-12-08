import React from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

export type CalendarBaseProps = React.ComponentPropsWithoutRef<typeof DayPicker>;

/**
 * Calendar Component
 *
 * Please note: Do not use "dropdown-button" as captionLayout because styling is messed up for that
 */
const Calendar = ({
  showOutsideDays = true,
  initialFocus = true,
  className,
  classNames,
  ...props
}: CalendarBaseProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      initialFocus={initialFocus}
      className={cn("rounded border border-neutral-default p-space-base shadow", className)}
      classNames={{
        vhidden: cn("sr-only"),
        root: cn("text-neutral-default"),
        months: cn("flex flex-col space-y-space-base sm:flex-row sm:space-x-space-base sm:space-y-0"),
        month: cn("space-y-4"),
        caption: cn(
          `relative flex h-10 items-center ${
            props.captionLayout === "dropdown" ? "justify-between" : "justify-center"
          }`
        ),
        caption_label: cn("inline-flex text-base font-normal"),
        caption_dropdowns: cn("flex items-center gap-2"),
        dropdown_month: cn("relative inline-flex h-10 min-w-[110px] items-center"),
        dropdown_year: cn("relative inline-flex h-10 min-w-[80px] items-center"),
        dropdown_icon: cn("h-4 w-4"),
        dropdown: cn(
          "absolute inset-0 z-[2] flex h-10 w-full cursor-pointer appearance-none items-center justify-between gap-2 rounded border border-neutral-default bg-neutral-default px-3 py-2 text-center text-base text-neutral-default focus-ring-neutral hover:bg-component-neutral-hover disabled:cursor-not-allowed disabled:bg-component-neutral-default disabled:opacity-75 data-[placeholder]:text-neutral-muted"
        ),
        nav: cn("flex items-center gap-2"),
        nav_button: cn(
          "pointer-events-auto flex h-10 items-center justify-center gap-2 rounded border border-neutral-default bg-transparent p-3 text-base font-medium text-neutral-muted outline-none transition-all focus-ring-neutral hover:bg-component-neutral-hover active:bg-component-neutral-pressed disabled:cursor-not-allowed disabled:opacity-75"
        ),
        nav_button_previous: cn("absolute left-1 top-0"),
        nav_button_next: cn("absolute right-1 top-0"),
        table: cn("border-collapse border-spacing-0"),
        head_cell: cn("h-10 w-10 text-center align-middle text-sm"),
        cell: cn(
          "h-10 w-10 border-0 px-0 text-center align-middle focus-within:relative focus-within:z-20 first:[&:has([aria-selected])]:!rounded-l last:[&:has([aria-selected])]:!rounded-r"
        ),
        day: cn(
          "h-10 w-10 rounded transition-colors hover:bg-component-neutral-hover focus-visible:outline-none focus-visible:ring focus-visible:ring-neutral active:bg-component-neutral-pressed active:text-neutral-default"
        ),
        day_selected: cn(
          "!bg-component-accent-pressed font-medium !text-accent-default hover:!bg-component-accent-dark focus-visible:outline-none focus-visible:ring focus-visible:ring-accent"
        ),
        day_today: cn("bg-component-neutral-default font-medium"),
        day_disabled: cn("opacity-25 hover:bg-white active:bg-white active:text-gray-800"),
        day_outside: cn("enabled:text-neutral-muted"),
        day_range_middle: cn("rounded-none"),
        day_range_end: cn("rounded-l-none rounded-r"),
        day_range_start: cn("rounded-l rounded-r-none"),
        day_hidden: cn("hidden"),
        ...classNames
      }}
      components={{
        IconLeft: ({ className, ...iconLeftProps }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...iconLeftProps} />
        ),
        IconRight: ({ className, ...iconRightProps }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...iconRightProps} />
        )
      }}
      {...props}
    />
  );
};

export { Calendar };
