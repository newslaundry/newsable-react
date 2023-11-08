import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["neutral", "accent", "success", "attention", "danger", "outline", "ghost"],
      control: { type: "radio" },
      defaultValue: "neutral",
      description: "The type of the Button component"
    },
    size: {
      options: ["sm", "base", "lg"],
      control: { type: "radio" },
      defaultValue: "base",
      description: "The size of the Button component"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "neutral",
    size: "base"
  },
  render: args => <Button {...args}>Button</Button>
};

export const Secondary: Story = {
  args: {
    variant: "accent",
    size: "base"
  },
  render: args => <Button {...args}>Button</Button>
};

export const Success: Story = {
  args: {
    variant: "success",
    size: "base"
  },
  render: args => <Button {...args}>Button</Button>
};

export const Attention: Story = {
  args: {
    variant: "attention",
    size: "base"
  },
  render: args => <Button {...args}>Button</Button>
};

export const Danger: Story = {
  args: {
    variant: "danger",
    size: "base"
  },
  render: args => <Button {...args}>Button</Button>
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "base"
  },
  render: args => <Button {...args}>Button</Button>
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "base"
  },
  render: args => <Button {...args}>Button</Button>
};
