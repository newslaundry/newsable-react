import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "@/components";

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  render: () => <Toggle>Toggle button</Toggle>
};

export const Secondary: Story = {
  render: () => <Toggle variant="secondary">Toggle button</Toggle>
};
