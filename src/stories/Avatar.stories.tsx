import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@/components";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  render: () => (
    <Avatar>
      <Avatar.Image
        src="https://images.assettype.com/newslaundry/2021-10/931449e9-200b-4680-81ce-dc916e022763/qiMQgIos_400x400.png"
        alt="Newslaundry logo"
      />
      <Avatar.Fallback>NL</Avatar.Fallback>
    </Avatar>
  )
};

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <Avatar.Fallback>NL</Avatar.Fallback>
    </Avatar>
  )
};
