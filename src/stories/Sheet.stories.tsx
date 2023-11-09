import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Button, Sheet } from "@/components";

const meta: Meta<typeof Sheet> = {
  title: "UI/Sheet",
  component: Sheet
};

export default meta;

type Story = StoryObj<typeof Sheet>;

export const Right: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button>Open Sheet</Button>
      </Sheet.Trigger>
      <Sheet.Content position="right">
        <Sheet.Header>
          <Sheet.Title>Comments</Sheet.Title>
          <Sheet.Description>
            We take comments from subscribers only. Subscribe now to be able to post comments.
          </Sheet.Description>
          <Sheet.Footer>
            <Button variant="neutral">Cancel</Button>
            <Button variant="danger">Submit</Button>
          </Sheet.Footer>
        </Sheet.Header>
      </Sheet.Content>
    </Sheet>
  )
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button>Open Sheet</Button>
      </Sheet.Trigger>
      <Sheet.Content position="left">
        <Sheet.Header>
          <Sheet.Title>Comments</Sheet.Title>
          <Sheet.Description>
            We take comments from subscribers only. Subscribe now to be able to post comments.
          </Sheet.Description>
          <Sheet.Footer>
            <Button variant="neutral">Cancel</Button>
            <Button variant="danger">Submit</Button>
          </Sheet.Footer>
        </Sheet.Header>
      </Sheet.Content>
    </Sheet>
  )
};

export const Top: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button>Open Sheet</Button>
      </Sheet.Trigger>
      <Sheet.Content position="top">
        <Sheet.Header>
          <Sheet.Title>Comments</Sheet.Title>
          <Sheet.Description>
            We take comments from subscribers only. Subscribe now to be able to post comments.
          </Sheet.Description>
          <Sheet.Footer>
            <Button variant="neutral">Cancel</Button>
            <Button variant="danger">Submit</Button>
          </Sheet.Footer>
        </Sheet.Header>
      </Sheet.Content>
    </Sheet>
  )
};

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button>Open Sheet</Button>
      </Sheet.Trigger>
      <Sheet.Content position="bottom">
        <Sheet.Header>
          <Sheet.Title>Comments</Sheet.Title>
          <Sheet.Description>
            We take comments from subscribers only. Subscribe now to be able to post comments.
          </Sheet.Description>
          <Sheet.Footer>
            <Button variant="neutral">Cancel</Button>
            <Button variant="danger">Submit</Button>
          </Sheet.Footer>
        </Sheet.Header>
      </Sheet.Content>
    </Sheet>
  )
};
