import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Accessibility, Bookmark, Rss, ShoppingCart, SunMoon, User, WalletCards } from "lucide-react";

import { Tabs } from "@/components";

const meta: Meta<typeof Tabs> = {
  title: "UI/Tabs",
  component: Tabs
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Horizontal: Story = {
  render: () => (
    <Tabs variant="underlined" defaultValue="account" orientation="horizontal">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="subscription">Subscription Status</Tabs.Trigger>
        <Tabs.Trigger value="saved">Saved Stories</Tabs.Trigger>
        <Tabs.Trigger value="podcast">Podcast RSS</Tabs.Trigger>
        <Tabs.Trigger value="discord">Discord</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        Account -- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolore aut omnis natus
        consectetur voluptate veniam suscipit deserunt perspiciatis sequi laborum doloremque ipsum, sit
        voluptates eius quasi, recusandae possimus obcaecati.
      </Tabs.Content>
      <Tabs.Content value="subscription">
        Subscription Status -- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolore aut omnis
        natus consectetur voluptate veniam suscipit deserunt perspiciatis sequi laborum doloremque ipsum, sit
        voluptates eius quasi, recusandae possimus obcaecati.
      </Tabs.Content>
      <Tabs.Content value="saved">
        Saved Stories -- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolore aut omnis natus
        consectetur voluptate veniam suscipit deserunt perspiciatis sequi laborum doloremque ipsum, sit
        voluptates eius quasi, recusandae possimus obcaecati.
      </Tabs.Content>
      <Tabs.Content value="podcast">
        Podcast RSS -- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolore aut omnis natus
        consectetur voluptate veniam suscipit deserunt perspiciatis sequi laborum doloremque ipsum, sit
        voluptates eius quasi, recusandae possimus obcaecati.
      </Tabs.Content>
      <Tabs.Content value="discord">
        Discord -- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolore aut omnis natus
        consectetur voluptate veniam suscipit deserunt perspiciatis sequi laborum doloremque ipsum, sit
        voluptates eius quasi, recusandae possimus obcaecati.
      </Tabs.Content>
    </Tabs>
  )
};

export const Vertical: Story = {
  render: () => (
    <Tabs variant="default" defaultValue="profile" className="mt-8" orientation="vertical">
      <Tabs.List>
        <Tabs.Group>
          <Tabs.GroupLabel>My account</Tabs.GroupLabel>
          <Tabs.Trigger value="subscription">
            <WalletCards className="h-4 w-4" aria-hidden="true" />
            Subscription
          </Tabs.Trigger>
          <Tabs.Trigger value="saved">
            <Bookmark className="h-4 w-4" aria-hidden="true" />
            Saved Stories
          </Tabs.Trigger>
          <Tabs.Trigger value="store">
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            Store purchases
          </Tabs.Trigger>
          <Tabs.Trigger value="rss">
            <Rss className="h-4 w-4" aria-hidden="true" />
            Podcast RSS Feed
          </Tabs.Trigger>
          <Tabs.Trigger value="discord">
            <ShoppingCart className="h-4 w-4" aria-hidden="true" />
            Discord
          </Tabs.Trigger>
        </Tabs.Group>
        <div role="presentation" className="bg-separator-primary h-[1px] w-full"></div>
        <Tabs.Group>
          <Tabs.GroupLabel>Settings</Tabs.GroupLabel>
          <Tabs.Trigger value="profile">
            <User className="h-4 w-4" aria-hidden="true" />
            Profile
          </Tabs.Trigger>
          <Tabs.Trigger value="accessibility">
            <Accessibility className="h-4 w-4" aria-hidden="true" />
            Accessibility
          </Tabs.Trigger>
          <Tabs.Trigger value="appearance">
            <SunMoon className="h-4 w-4" aria-hidden="true" />
            Appearance
          </Tabs.Trigger>
        </Tabs.Group>
      </Tabs.List>
      <Tabs.Content value="subscription">subscription details</Tabs.Content>
      <Tabs.Content value="saved">saved details</Tabs.Content>
      <Tabs.Content value="store">store details</Tabs.Content>
      <Tabs.Content value="rss">rss details</Tabs.Content>
      <Tabs.Content value="discord">discord details</Tabs.Content>
      <Tabs.Content value="profile">profile settings</Tabs.Content>
      <Tabs.Content value="accessibility">accessibility settings</Tabs.Content>
      <Tabs.Content value="appearance">appearance settings</Tabs.Content>
    </Tabs>
  )
};
