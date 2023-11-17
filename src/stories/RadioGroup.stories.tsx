import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { HStack, RadioGroup } from "@/components";

const meta: Meta<typeof RadioGroup> = {
  title: "UI/RadioGroup",
  component: RadioGroup
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Vertical: Story = {
  render: () => (
    <RadioGroup
      orientation="vertical"
      defaultValue="system"
      aria-label="Colour theme preferences"
      className="mx-auto w-full max-w-md"
    >
      <RadioGroup.Item value="system">Sync with system</RadioGroup.Item>
      <RadioGroup.Item value="light">Light</RadioGroup.Item>
      <RadioGroup.Item value="dark">Dark</RadioGroup.Item>
    </RadioGroup>
  )
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="system" aria-label="Colour theme preferences" orientation="horizontal">
      <HStack className="gap-space-base">
        <RadioGroup.Item value="system">Sync with system</RadioGroup.Item>
        <RadioGroup.Item value="light">Light</RadioGroup.Item>
        <RadioGroup.Item value="dark">Dark</RadioGroup.Item>
      </HStack>
    </RadioGroup>
  )
};
