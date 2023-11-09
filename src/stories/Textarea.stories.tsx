import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Textarea, TextareaBaseProps } from "@/components";

const meta: Meta<TextareaBaseProps> = {
  title: "UI/Textarea",
  component: Textarea
};

export default meta;

type Story = StoryObj<TextareaBaseProps>;

export const Primary: Story = {
  render: args => <Textarea {...args} placeholder="Enter your address details" className="w-full max-w-md" />
};
