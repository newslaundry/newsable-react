import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "@/components";

const meta: Meta<typeof Link> = {
  title: "UI/Link",
  component: Link
};

export default meta;

type Story = StoryObj<typeof Link>;

export const External: Story = {
  render: args => (
    <Link {...args} href="https://www.radix-ui.com/" target="_blank" showExternalLinkIcon={true}>
      External Link
    </Link>
  )
};

export const Internal: Story = {
  render: args => (
    <Link {...args} href="/">
      Internal Link
    </Link>
  )
};

export const Accent: Story = {
  args: {
    variant: "accent"
  },
  render: args => (
    <Link {...args} href="/">
      Internal Link
    </Link>
  )
};
