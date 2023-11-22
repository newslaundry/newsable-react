import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { StoryCard } from "@/components";

import { HorizontalCard, NewslaundryCard, VerticalCard } from "./helpers/StoryCard.helper";

const meta: Meta<typeof StoryCard> = {
  title: "UI/StoryCard",
  component: StoryCard
};

export default meta;

type Story = StoryObj<typeof StoryCard>;

export const Vertical: Story = {
  render: () => <VerticalCard />
};

export const Horizontal: Story = {
  render: () => <HorizontalCard />
};

export const Newslaundry: Story = {
  render: () => <NewslaundryCard />
};
