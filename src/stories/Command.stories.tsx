import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Command } from "@/components";

import { CommandDialogDemo } from "./helpers/Command.helper";

const meta: Meta<typeof Command> = {
  title: "UI/Command",
  component: Command
};

export default meta;

type Story = StoryObj<typeof Command>;

export const Primary: Story = {
  render: () => <CommandDialogDemo />
};
