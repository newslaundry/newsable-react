import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { MultiSelect } from "@/components";

import { AriakitDemo, MultiSelectDemo } from "./helpers/MultiSelect.helper";

const meta: Meta<typeof MultiSelect> = {
  title: "UI/MultiSelect",
  component: MultiSelect
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

export const Primary: Story = {
  render: () => <MultiSelectDemo />
};

export const Ariakit: Story = {
  render: () => <AriakitDemo />
};
