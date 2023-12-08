import React from "react";

import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export interface PhoneInputBaseProps {
  value?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  name?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}

// ! TO FIX: classname usage & onChange behaviour
const PhoneInput = ({ name, onChange, ...props }: PhoneInputBaseProps) => {
  return (
    <ReactPhoneInput
      enableSearch={true}
      country={"in"}
      disableSearchIcon={true}
      inputProps={{
        name,
        placeholder: props.placeholder,
        required: props.required,
        inputMode: "numeric"
      }}
      containerClass="w-full max-w-lg"
      inputClass="input-wrapper"
      onChange={(value, country, e, formattedValue) => {
        // console.log({ value, country });
        onChange(`${formattedValue}`);
      }}
    />
  );
};

export { PhoneInput };
