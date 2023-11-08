import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Button, Dialog } from "@/components";

const meta: Meta<typeof Dialog> = {
  title: "UI/Dialog",
  component: Dialog
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Primary: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant="ghost">Open modal</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Are you sure you want to take this action?</Dialog.Title>
        <Dialog.Description>
          This action cannot be undone. This will permanently perform the action and all the data will be
          affected.
        </Dialog.Description>
      </Dialog.Content>
    </Dialog>
  )
};
