import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input
};

export default meta;

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  render: args => <Input {...args} placeholder="Enter your name" type="text" />
};

export const EmailInput: Story = {
  render: args => <Input {...args} placeholder="Enter your email address" type="email" />
};

export const PasswordInput: Story = {
  render: args => <Input {...args} placeholder="Enter your password" type="password" />
};

export const NumberInput: Story = {
  render: args => <Input {...args} placeholder="Enter your age" type="number" />
};
