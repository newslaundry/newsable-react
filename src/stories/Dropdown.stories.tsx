import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "@/components";

import { DropdownDemo } from "./helpers/Dropdown.helper";

const meta: Meta<typeof Dropdown> = {
  title: "UI/Dropdown",
  component: Dropdown
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Primary: Story = {
  render: () => <DropdownDemo />
};
