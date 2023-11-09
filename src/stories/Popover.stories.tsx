import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Button, Popover } from "@/components";

const meta: Meta<typeof Popover> = {
  title: "UI/Popover",
  component: Popover,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button>Click to edit</Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="flex flex-col gap-2.5">
          <p className="font-medium">Edit Form</p>
          <p className="text-sm font-medium text-primary-muted">You can display a form or anything here.</p>
        </div>
        <Popover.Close />
      </Popover.Content>
    </Popover>
  )
};
