import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Button, Popover, Text } from "@/components";

const meta: Meta<typeof Popover> = {
  title: "UI/Popover",
  component: Popover
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Top: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button>Click to edit</Button>
      </Popover.Trigger>
      <Popover.Content side="top">
        <div className="flex flex-col gap-space-xs">
          <Text className="font-medium">Some title</Text>
          <Text className="text-neutral-muted">You can display a form or anything here.</Text>
        </div>
        <Popover.Close />
      </Popover.Content>
    </Popover>
  )
};

export const Bottom: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button>Click to edit</Button>
      </Popover.Trigger>
      <Popover.Content side="bottom">
        <div className="flex flex-col gap-space-xs">
          <Text className="font-medium">Some title</Text>
          <Text className="text-neutral-muted">You can display a form or anything here.</Text>
        </div>
        <Popover.Close />
      </Popover.Content>
    </Popover>
  )
};

export const Left: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button>Click to edit</Button>
      </Popover.Trigger>
      <Popover.Content side="left">
        <div className="flex flex-col gap-space-xs">
          <Text className="font-medium">Some title</Text>
          <Text className="text-neutral-muted">You can display a form or anything here.</Text>
        </div>
        <Popover.Close />
      </Popover.Content>
    </Popover>
  )
};

export const Right: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger asChild>
        <Button>Click to edit</Button>
      </Popover.Trigger>
      <Popover.Content side="right">
        <div className="flex flex-col gap-space-xs">
          <Text className="font-medium">Some title</Text>
          <Text className="text-neutral-muted">You can display a form or anything here.</Text>
        </div>
        <Popover.Close />
      </Popover.Content>
    </Popover>
  )
};
