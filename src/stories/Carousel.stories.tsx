import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "@/components";

import { CarouselDemo, CarouselWithAutoplay } from "./helpers/Carousel.helper";

const meta: Meta<typeof Carousel> = {
  title: "UI/Carousel",
  component: Carousel
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => <CarouselDemo />
};

export const WithAutoPlay: Story = {
  render: () => <CarouselWithAutoplay />
};
