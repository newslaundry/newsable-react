import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "@/components";

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Primary: Story = {
  render: () => <Pagination count={20} showPrevAndNextButtons={true} showFirstAndLastButtons={true} />
};
