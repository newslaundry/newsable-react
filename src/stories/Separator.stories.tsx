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
      <div className="text-primary-default text-sm font-medium leading-5">Radix Primitives</div>
      <div className="text-primary-default text-sm leading-5">An open-source UI component library.</div>
      <Separator className="my-[15px]" />
      <div className="flex h-5 items-center">
        <div className="text-primary-default text-sm leading-5">Blog</div>
        <Separator className="mx-[15px]" decorative orientation="vertical" variant="accent" />
        <div className="text-primary-default text-sm leading-5">Docs</div>
        <Separator className="mx-[15px]" decorative orientation="vertical" variant="danger" />
        <div className="text-primary-default text-sm leading-5">Source</div>
        <Separator className="mx-[15px]" decorative orientation="vertical" variant="success" />
        <div className="text-primary-default text-sm leading-5">Web</div>
        <Separator className="mx-[15px]" decorative orientation="vertical" variant="attention" />
        <div className="text-primary-default text-sm leading-5">Code</div>
      </div>
    </div>
  )
};
