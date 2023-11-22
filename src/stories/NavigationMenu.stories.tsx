import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { NavigationMenu } from "@/components";

const meta: Meta<typeof NavigationMenu> = {
  title: "UI/NavigationMenu",
  component: NavigationMenu
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

export const Primary: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Videos</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.PanelList className="sm:w-[500px]">
              <NavigationMenu.PanelListItem title="TV Newsance" href="#">
                Lorem ipsum dolor sit amet elit blanditiis!
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="NL Charcha" href="#">
                Lorem ipsum dolor sit amet elit blanditiis!
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="NL Tippani" href="#">
                Lorem ipsum dolor sit amet elit blanditiis!
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="NL Interviews" href="#">
                Lorem ipsum dolor sit amet elit blanditiis!
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="Back In Time" href="#">
                Lorem ipsum dolor sit amet elit blanditiis!
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="Ye Bhi Theek Hai" href="#">
                Lorem ipsum dolor sit amet elit blanditiis!
              </NavigationMenu.PanelListItem>
            </NavigationMenu.PanelList>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Podcasts</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.PanelList className="sm:w-[500px]">
              <NavigationMenu.PanelListItem title="Awful & Awesome" href="#">
                Pop culture podcast that isn&apos;t afraid to pop the bubble
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="Let's Talk About" href="#">
                Big ideas, burning issues and expansive conversations
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="NL Hafta" href="#">
                Freewheeling discussion on the news of the week
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="एनएल चर्चा" href="#">
                हिंदी पॉडकास्ट जहां हम हफ़्ते भर के बवालों और सवालों पर चर्चा करते हैं.
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="Mind Ki Baat" href="#">
                Conversations on mental health issues
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="Ye Bhi Theek Hai" href="#">
                Kunal Kamra and Sanjay Rajoura let loose
              </NavigationMenu.PanelListItem>
            </NavigationMenu.PanelList>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Subscriber only</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <NavigationMenu.PanelList className="sm:w-[500px] lg:w-[680px]">
              <NavigationMenu.PanelListItem title="Awful & Awesome" href="#">
                Pop culture podcast that isn&apos;t afraid to pop the bubble
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="Let's Talk About" href="#">
                Big ideas, burning issues and expansive conversations
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="NL Hafta" href="#">
                Freewheeling discussion on the news of the week
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="एनएल चर्चा" href="#">
                हिंदी पॉडकास्ट जहां हम हफ़्ते भर के बवालों और सवालों पर चर्चा करते हैं.
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="Mind Ki Baat" href="#">
                Conversations on mental health issues
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="Ye Bhi Theek Hai" href="#">
                Kunal Kamra and Sanjay Rajoura let loose
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="एनएल चर्चा" href="#">
                {/* हिंदी पॉडकास्ट जहां हम हफ़्ते भर के बवालों और सवालों पर चर्चा करते हैं. */}
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="Mind Ki Baat" href="#">
                {/* Conversations on mental health issues */}
              </NavigationMenu.PanelListItem>
              <NavigationMenu.PanelListItem title="Ye Bhi Theek Hai" href="#">
                {/* Kunal Kamra and Sanjay Rajoura let loose */}
              </NavigationMenu.PanelListItem>
            </NavigationMenu.PanelList>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="https://www.themediarumble.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Media Rumble
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  )
};
