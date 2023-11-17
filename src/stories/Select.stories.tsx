import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "@/components";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  render: () => (
    <Select>
      <Select.Trigger aria-label="Select a fruit">
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="blueberry" disabled>
            Blueberry
          </Select.Item>
          <Select.Item value="grapes">Grapes</Select.Item>
          <Select.Item value="pineapple">Pineapple</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="aubergine">Aubergine</Select.Item>
          <Select.Item value="broccoli">Broccoli</Select.Item>
          <Select.Item value="carrot" disabled>
            Carrot
          </Select.Item>
          <Select.Item value="courgette">Courgette</Select.Item>
          <Select.Item value="leek">Leek</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
  )
};
