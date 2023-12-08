import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { PhoneInput } from "@/components";

const meta: Meta<typeof PhoneInput> = {
  title: "UI/PhoneInput",
  component: PhoneInput
};

export default meta;

type Story = StoryObj<typeof PhoneInput>;

export const Primary: Story = {
  render: () => (
    <PhoneInput
      placeholder="Please enter your mobile number"
      onChange={value => {
        const all = value.split(" ");

        const countryCode = all[0];
        const phoneNumber = all[1];

        console.log({ countryCode, phoneNumber });
      }}
    />
  )
};
