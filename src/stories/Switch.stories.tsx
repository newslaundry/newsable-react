import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "@/components";

const meta: Meta<typeof Switch> = {
  title: "UI/Switch",
  component: Switch
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  render: () => <Switch />
};
