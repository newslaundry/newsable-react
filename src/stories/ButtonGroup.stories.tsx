import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonGroup } from "@/components";

const meta: Meta<typeof ButtonGroup> = {
  title: "UI/ButtonGroup",
  component: ButtonGroup
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Segmented: Story = {
  render: () => (
    <ButtonGroup label="Actions">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  )
};

export const Separated: Story = {
  render: () => (
    <ButtonGroup label="Actions" segmented={false}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  )
};
