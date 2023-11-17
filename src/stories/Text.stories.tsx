import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "@/components";

const meta: Meta<typeof Text> = {
  title: "UI/Text",
  component: Text
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: () => (
    <Text className="text-primary-default mx-auto max-w-md">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime impedit magnam dolores possimus earum,
      sapiente est asperiores officiis, ad nam, ullam nisi praesentium sed illo doloremque voluptates vitae
      nemo eveniet!
    </Text>
  )
};

export const Muted: Story = {
  render: () => (
    <Text className="text-primary-muted mx-auto max-w-md">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime impedit magnam dolores possimus earum,
      sapiente est asperiores officiis, ad nam, ullam nisi praesentium sed illo doloremque voluptates vitae
      nemo eveniet!
    </Text>
  )
};
