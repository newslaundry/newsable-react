import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ToggleGroup } from "@/components";

const meta: Meta<typeof ToggleGroup> = {
  title: "UI/ToggleGroup",
  component: ToggleGroup
};

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Primary: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="yearly">
      <ToggleGroup.Item value="monthly">
        <p>Monthly</p>
      </ToggleGroup.Item>
      <ToggleGroup.Item value="yearly">
        <p>Yearly</p>
      </ToggleGroup.Item>
    </ToggleGroup>
  )
};
