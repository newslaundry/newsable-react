import React from "react";

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview, ReactRenderer, StoryFn } from "@storybook/react";

import "../src/styles.css";
import { customViewports } from "./customViewports";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      viewports: { ...customViewports }
    }
  },
  decorators: [
    (Story: StoryFn) => (
      <div
        className={`flex h-full w-full items-center justify-center bg-neutral-default font-sans text-neutral-default`}
      >
        <Story />
      </div>
    ),
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark"
      },
      defaultTheme: "light",
      attributeName: "data-theme",
      parentSelector: "html"
    })
  ]
};

export default preview;
