import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/components";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  render: () => <Badge>Karnataka Elections 2023</Badge>
};

export const Secondary: Story = {
  render: () => <Badge variant="accent">Daily Dose</Badge>
};
