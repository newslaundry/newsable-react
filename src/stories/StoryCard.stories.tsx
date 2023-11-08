import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { StoryCard } from "@/components";

import { StoryCardHelper } from "./helpers/StoryCard.helper";

const meta: Meta<typeof StoryCard> = {
  title: "UI/StoryCard",
  component: StoryCardHelper
};

export default meta;

type Story = StoryObj<typeof StoryCard>;

export const Primary: Story = {
  render: () => <StoryCardHelper />
};
