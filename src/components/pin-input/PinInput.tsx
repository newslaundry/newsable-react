import React, { useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface BaseInputProps {
  // pin?: string[];
  // onPinChange: (pinEntry: string, index: number) => void;

  /** Value for controlled component */
  value?: string;

  pinLength: number;
  validationMessage: string | undefined;
  validationResult: boolean | undefined;
  isValidating: boolean;
  type?: "alphanumeric" | "number";
  disabled?: boolean;

  /** Changes input type to "password" */
  mask?: boolean;

  /** Determines whether autocomplete="one-time-code" attribute should be set on all inputs */
  oneTimeCode?: boolean;

  /** Called when value changes */
  // onInputChange?: (value: string) => void;

  /** Called when user enters value to all inputs */
  // onComplete?(value: string): void;
}

const createPinValueArray = (length: number, value?: string): string[] => {
  if (length < 1) {
    return [];
  }

  const values = new Array<string>(length).fill("");

  if (value) {
    const splitted = value.trim().split("");

    for (let i = 0; i < Math.min(length, splitted.length); i++) {
      values[i] = splitted[i];
    }
  }

  return values;
};

export interface PinInputBaseProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<React.ComponentPropsWithoutRef<"div">, "onChange">,
    BaseInputProps {}

const PinInput = React.forwardRef<HTMLDivElement, PinInputBaseProps>(
  ({ className, pinLength, inputMode, oneTimeCode, value, type, disabled, ...props }, forwardedRef) => {
    const [inputPin, setInputPin] = useState<string>(value || "");
    const [focusedIndex, setFocusedIndex] = useState(-1);

    const inputRefs = useRef<HTMLInputElement[]>([]);

    function isAlphanumeric(str: string) {
      return /^[a-zA-Z0-9]$/.test(str);
    }

    const setFieldValue = (val: string, index: number) => {
      const values = [...createPinValueArray(pinLength, inputPin)];
      console.log({ values });
      values[index] = val;
      setInputPin(values.join(""));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const inputValue = e.target.value;
      const nextChar =
        inputValue.length > 1 ? inputValue.trim().split("")[inputValue.length - 1] : inputValue;

      const isValidChar = isAlphanumeric(nextChar);

      if (isValidChar) {
        setFieldValue(nextChar, index);
        focusInputField("next", index);
      } else {
        setFieldValue("", index);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      const key = e.key;

      if (key === "ArrowLeft") {
        e.preventDefault();
        focusInputField("prev", index);
      } else if (key === "ArrowRight") {
        e.preventDefault();
        focusInputField("next", index);
      } else if (key === "Delete") {
        e.preventDefault();
      }
    };

    const focusInputField = (dir: "prev" | "next", index: number) => {
      if (dir === "next") {
        const nextIndex = index + 1;
        inputRefs.current[nextIndex < pinLength ? nextIndex : index].focus();
      }

      if (dir === "prev") {
        const prevIndex = index - 1;
        inputRefs.current[prevIndex > -1 ? prevIndex : index].focus();
      }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>, index: number) => {
      event.target.select();
      setFocusedIndex(index);
    };

    const handleBlur = () => {
      setFocusedIndex(-1);
    };

    return (
      <div
        ref={forwardedRef}
        className={cn("flex w-full items-center justify-center space-x-space-sm", className)}
        {...props}
      >
        {createPinValueArray(pinLength, inputPin).map((char, index) => (
          <input
            ref={el => {
              if (el) {
                inputRefs.current[index] = el;
              }
            }}
            key={index}
            type="text"
            inputMode={inputMode || (type === "number" ? "numeric" : "text")}
            autoComplete={oneTimeCode ? "one-time-code" : "off"}
            className={cn(
              "flex w-10 appearance-none items-center justify-center rounded border border-neutral-default bg-neutral-default text-center text-neutral-default focus-ring-neutral component-padding-base placeholder:text-center placeholder:text-neutral-muted invalid:focus:focus-ring-danger disabled:cursor-not-allowed disabled:bg-component-neutral-default disabled:opacity-75"
            )}
            value={char}
            onChange={e => handleChange(e, index)}
            onKeyDown={e => handleKeyDown(e, index)}
            onFocus={e => handleFocus(e, index)}
            onBlur={handleBlur}
            disabled={disabled}
            placeholder={focusedIndex === index ? "" : "0"}
          />
        ))}
      </div>
    );
  }
);
PinInput.displayName = "PinInput";

export { PinInput };
