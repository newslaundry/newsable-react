import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@/components";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  render: args => <Checkbox {...args} />
};
