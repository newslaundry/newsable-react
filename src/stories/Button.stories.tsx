import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success", "attention", "danger", "outline", "ghost"],
      control: { type: "radio" },
      defaultValue: "primary",
      description: "The type of the Button component"
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
      defaultValue: "md",
      description: "The size of the Button component"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md"
  },
  render: args => <Button {...args}>Button</Button>
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md"
  },
  render: args => <Button {...args}>Button</Button>
};

export const Success: Story = {
  args: {
    variant: "success",
    size: "md"
  },
  render: args => <Button {...args}>Button</Button>
};

export const Attention: Story = {
  args: {
    variant: "attention",
    size: "md"
  },
  render: args => <Button {...args}>Button</Button>
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "md"
  },
  render: args => <Button {...args}>Button</Button>
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "md"
  },
  render: args => <Button {...args}>Button</Button>
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "md"
  },
  render: args => <Button {...args}>Button</Button>
};
