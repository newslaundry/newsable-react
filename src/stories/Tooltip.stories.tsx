import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "@/components";

const meta: Meta<typeof Tooltip> = {
  title: "UI/Tooltip",
  component: Tooltip
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger>
        <p className="text-sm underline">Hover me</p>
      </Tooltip.Trigger>
      <Tooltip.Content>A small information</Tooltip.Content>
    </Tooltip>
  )
};
