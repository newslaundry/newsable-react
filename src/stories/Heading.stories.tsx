import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "@/components";

const meta: Meta<typeof Heading> = {
  title: "UI/Heading",
  component: Heading
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Levels: Story = {
  render: () => (
    <div className="space-y-4">
      <Heading weight="h1">This is an h1 heading</Heading>
      <Heading weight="h2">This is an h2 heading</Heading>
      <Heading weight="h3">This is an h3 heading</Heading>
      <Heading weight="h4">This is an h4 heading</Heading>
      <Heading weight="h5">This is an h5 heading</Heading>
      <Heading weight="h6">This is an h6 heading</Heading>
    </div>
  )
};

export const H1: Story = {
  args: {
    weight: "h1"
  },
  render: args => <Heading {...args}>Pay to keep news free</Heading>
};

export const H2: Story = {
  args: {
    weight: "h2"
  },
  render: args => <Heading {...args}>Pay to keep news free</Heading>
};

export const H3: Story = {
  args: {
    weight: "h3"
  },
  render: args => <Heading {...args}>Pay to keep news free</Heading>
};

export const H4: Story = {
  args: {
    weight: "h4"
  },
  render: args => <Heading {...args}>Pay to keep news free</Heading>
};

export const H5: Story = {
  args: {
    weight: "h5"
  },
  render: args => <Heading {...args}>Pay to keep news free</Heading>
};

export const H6: Story = {
  args: {
    weight: "h6"
  },
  render: args => <Heading {...args}>Pay to keep news free</Heading>
};
