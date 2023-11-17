import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "@/components";

import { AccordionHelper } from "./helpers/Accordion.helper";

const meta: Meta<typeof Accordion> = {
  title: "UI/Accordion",
  component: Accordion
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Primary: Story = {
  render: () => <AccordionHelper />
};
