import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@/components";

const meta: Meta<typeof Separator> = {
  title: "UI/Separator",
  component: Separator
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Primary: Story = {
  render: () => (
    <div className="mx-[15px] w-full max-w-[300px]">
      <div className="text-sm font-medium leading-5 text-primary-default">Radix Primitives</div>
      <div className="text-sm leading-5 text-primary-default">An open-source UI component library.</div>
      <Separator className="my-[15px]" />
      <div className="flex h-5 items-center">
        <div className="text-sm leading-5 text-primary-default">Blog</div>
        <Separator className="mx-[15px]" decorative orientation="vertical" variant="accent" />
        <div className="text-sm leading-5 text-primary-default">Docs</div>
        <Separator className="mx-[15px]" decorative orientation="vertical" variant="danger" />
        <div className="text-sm leading-5 text-primary-default">Source</div>
        <Separator className="mx-[15px]" decorative orientation="vertical" variant="success" />
        <div className="text-sm leading-5 text-primary-default">Web</div>
        <Separator className="mx-[15px]" decorative orientation="vertical" variant="attention" />
        <div className="text-sm leading-5 text-primary-default">Code</div>
      </div>
    </div>
  )
};
