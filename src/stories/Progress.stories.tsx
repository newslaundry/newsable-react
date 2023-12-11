import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "@/components";

import { ProgressDemo } from "./helpers/Progress.helper";

const meta: Meta<typeof Progress> = {
  title: "UI/Progress",
  component: Progress
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Primary: Story = {
  render: () => <ProgressDemo />
};
