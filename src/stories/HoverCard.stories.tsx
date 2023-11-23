import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { HoverCard, Text } from "@/components";

const meta: Meta<typeof HoverCard> = {
  title: "UI/HoverCard",
  component: HoverCard
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

export const Primary: Story = {
  render: () => (
    <HoverCard>
      <HoverCard.Trigger>
        <Text className="w-fit">@newslaundry</Text>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <div className="flex flex-col gap-2">
          <img
            className="block h-10 w-10 rounded-full object-cover"
            src="https://images.assettype.com/newslaundry/2021-10/931449e9-200b-4680-81ce-dc916e022763/qiMQgIos_400x400.png"
            alt="Newslaundry logo"
          />
          <div className="flex flex-col gap-space-base">
            <div>
              <div className="m-0 text-sm font-medium text-neutral-default">Newslaundry</div>
              <div className="m-0 text-sm text-neutral-muted">@newslaundry</div>
            </div>
            <div className="m-0 text-sm text-neutral-default">
              In an industry driven by corporate and government interests, we strongly believe in the need for
              an independent news model, and a free and accountable press.
            </div>
            <div className="flex gap-space-base">
              <div className="flex gap-1">
                <div className="m-0 text-sm font-medium text-neutral-default">0</div>
                <div className="m-0 text-sm text-neutral-muted">Following</div>
              </div>
              <div className="flex gap-1">
                <div className="m-0 text-sm font-medium text-neutral-default">2,900</div>
                <div className="m-0 text-sm text-neutral-muted">Followers</div>
              </div>
            </div>
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard>
  )
};
