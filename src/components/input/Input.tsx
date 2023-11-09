import React, { useState } from "react";

import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";

import { Toggle } from "../toggle";

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {}

// ! TO FIX - add size support
const Input = React.forwardRef<HTMLInputElement, InputBaseProps>(
  ({ className, type, ...props }, forwardedRef) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
      <div className="relative w-full max-w-md">
        <input
          ref={forwardedRef}
          type={isPasswordVisible ? "text" : type}
          className={cn(
            "flex w-full appearance-none rounded border border-primary-default bg-primary-default text-primary-default focus-ring-primary component-padding-base placeholder:text-primary-muted invalid:focus:focus-ring-danger disabled:cursor-not-allowed disabled:bg-component-primary-default disabled:opacity-75",
            className
          )}
          {...props}
        />
        {type === "password" && (
          <Toggle
            aria-label="toggle password visibility"
            className="absolute right-2 top-1/2 h-auto -translate-y-1/2 px-2 py-1 shadow-none"
            pressed={isPasswordVisible}
            onPressedChange={(pressed: boolean) => setIsPasswordVisible(pressed)}
          >
            {isPasswordVisible ? (
              <EyeOff aria-hidden="true" focusable="false" className="h-4 w-4 shrink-0" />
            ) : (
              <Eye aria-hidden="true" focusable="false" className="h-4 w-4 shrink-0" />
            )}
          </Toggle>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
