import React from "react";

import { cn } from "@/lib/utils";

export interface TextareaBaseProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaBaseProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <textarea
        ref={forwardedRef}
        className={cn(
          "flex w-full appearance-none rounded border border-neutral-default bg-neutral-default text-neutral-default focus-ring-neutral component-padding-base placeholder:text-neutral-muted disabled:cursor-not-allowed disabled:bg-component-neutral-default disabled:opacity-75 invalid:focus:focus-ring-danger",
          className
        )}
        {...props}
      >
        {children}
      </textarea>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
