import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "@/components";

import { DangerToast, PrimaryToast, SuccessToast, WithAction } from "./helpers/Toast.helper";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Primary: Story = {
  render: () => <PrimaryToast />
};

export const Action: Story = {
  render: () => <WithAction />
};

export const Danger: Story = {
  render: () => <DangerToast />
};

export const Success: Story = {
  render: () => <SuccessToast />
};
