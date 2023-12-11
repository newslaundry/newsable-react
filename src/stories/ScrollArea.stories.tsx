import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ScrollArea } from "@/components";

const meta: Meta<typeof ScrollArea> = {
  title: "UI/ScrollArea",
  component: ScrollArea
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export const Primary: Story = {
  render: () => (
    <ScrollArea className="max-w-md">
      <div className="px-5 py-[15px] text-neutral-default">
        <div className="text-sm font-medium leading-tight ">Tags</div>
        {TAGS.map(tag => (
          <div className="mt-2.5 border-t border-t-neutral-default pt-2.5" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
};
