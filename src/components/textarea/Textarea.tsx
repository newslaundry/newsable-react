import React from "react";

import { cn } from "@/lib/utils";

export interface TextareaBaseProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaBaseProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <textarea
        ref={forwardedRef}
        className={cn(
          "flex w-full appearance-none rounded border border-primary-default bg-primary-default px-3 py-2 text-primary-default focus-ring-primary placeholder:text-primary-muted invalid:focus:focus-ring-danger disabled:cursor-not-allowed disabled:bg-component-primary-default disabled:opacity-75",
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
