import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Meter } from "@/components";

const meta: Meta<typeof Meter> = {
  title: "UI/Meter",
  component: Meter
};

export default meta;

type Story = StoryObj<typeof Meter>;

export const Primary: Story = {
  render: () => (
    <Meter
      className="max-w-md"
      value={60}
      valueText={`40% (1 lac INR) amount left to fund`}
      aria-label="Subscriptions funded so far"
    >
      <Meter.Indicator style={{ transform: `translateX(-${100 - 60}%)` }} />
    </Meter>
  )
};
