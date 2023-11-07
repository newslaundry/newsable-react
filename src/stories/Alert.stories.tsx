import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { AlertDialog, Button } from "@/components";

const meta: Meta<typeof AlertDialog> = {
  title: "UI/Alert Dialog",
  component: AlertDialog
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Primary: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <Button variant="secondary">Open</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Are you sure absolutely sure?</AlertDialog.Title>
        <AlertDialog.Description>
          This action cannot be undone. This will permanently delete your account and remove your data from
          our servers.
        </AlertDialog.Description>
        <AlertDialog.Footer>
          <AlertDialog.Cancel asChild>
            <Button variant="primary">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button variant="danger">Yes, continue</Button>
          </AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  )
};
