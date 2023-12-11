import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "@/components";

import { CalendarDemo } from "./helpers/Calendar.helper";

const meta: Meta<typeof Calendar> = {
  title: "UI/Calendar",
  component: Calendar
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  render: () => <CalendarDemo />
};
