import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { PinInput } from "@/components";

const meta: Meta<typeof PinInput> = {
  title: "UI/PinInput",
  component: PinInput
};

export default meta;

type Story = StoryObj<typeof PinInput>;

export const Primary: Story = {
  render: args => <PinInput {...args} pinLength={6} />
};
