import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { HStack, RadioGroup } from "@/components";

const meta: Meta<typeof RadioGroup> = {
  title: "UI/RadioGroup",
  component: RadioGroup
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Vertical: Story = {
  render: () => (
    <RadioGroup
      orientation="vertical"
      defaultValue="r1"
      aria-label="Subscription options"
      className="mx-auto w-full max-w-md"
    >
      <RadioGroup.Item value="r1">UPI, Netbanking, Rupay, Wallets or Paypal</RadioGroup.Item>
      <RadioGroup.Item value="r2">Credit or Debit Card</RadioGroup.Item>
      <RadioGroup.Item value="r3">Paypal</RadioGroup.Item>
    </RadioGroup>
  )
};

export const Horizontal: Story = {
  render: () => (
    // <RadioGroup
    //   orientation="horizontal"
    //   defaultValue="r1"
    //   aria-label="Subscription options"
    //   className="mx-auto w-full max-w-md"
    // >
    //   <RadioGroup.Item value="r1">UPI, Netbanking, Rupay, Wallets or Paypal</RadioGroup.Item>
    //   <RadioGroup.Item value="r2">Credit or Debit Card</RadioGroup.Item>
    //   <RadioGroup.Item value="r3">Paypal</RadioGroup.Item>
    // </RadioGroup>
    <RadioGroup defaultValue="system" aria-label="Colour theme preferences" orientation="horizontal">
      <HStack className="gap-4">
        <div className="flex flex-col overflow-hidden rounded border border-primary-default bg-component-primary-default">
          <div className="h-[150px] w-[285px] border-b border-primary-default">
            {/* <Image src={colorModeSystem} alt="System colour mode" className="h-full w-full" /> */}
          </div>
          <div className="flex w-full items-center justify-start p-3">
            <RadioGroup.Item value="system">Sync with system</RadioGroup.Item>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded border border-primary-default bg-component-primary-default">
          <div className="h-[150px] w-[285px] border-b border-primary-default">
            {/* <Image src={colorModeLight} alt="Light colour mode" className="h-full w-full" /> */}
          </div>
          <div className="flex w-full items-center justify-start p-3">
            <RadioGroup.Item value="light">Light</RadioGroup.Item>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded border border-primary-default bg-component-primary-default">
          <div className="h-[150px] w-[285px] border-b border-primary-default">
            {/* <Image src={colorModeDark} alt="Dark colour mode" className="h-full w-full" /> */}
          </div>
          <div className="flex w-full items-center justify-start p-3">
            <RadioGroup.Item value="dark">Dark</RadioGroup.Item>
          </div>
        </div>
      </HStack>
    </RadioGroup>
  )
};
