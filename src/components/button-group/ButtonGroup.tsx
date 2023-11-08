import React from "react";

import { cn } from "@/lib/utils";

export interface ButtonGroupBaseProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * Label describing the ButtonGroup
   */
  label: string;

  /**
   * Join buttons as segmented group.
   * @default true
   */
  segmented?: boolean;

  /**
   * Prevent buttons in button group from wrapping to next line.
   * @default false
   */
  noWrap?: boolean;
}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupBaseProps>(
  ({ className, children, label, segmented = true, noWrap = false, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        role="group"
        aria-label={props["aria-label"] || label}
        className={cn(
          "inline-flex items-center",
          segmented
            ? "[&>*:not(:first-of-type):not(:last-of-type)]:border-x-[0.5px] [&>button:first-of-type]:rounded-l [&>button:first-of-type]:border-r-[0.5px] [&>button:last-of-type]:rounded-r [&>button:last-of-type]:border-l-[0.5px] [&>button]:rounded-none [&>button]:focus:relative [&>button]:focus:z-10"
            : "gap-4",
          noWrap ? "flex-nowrap" : "flex-wrap",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";

export { ButtonGroup };
