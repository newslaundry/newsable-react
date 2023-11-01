import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  // stories: ["../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../stories/**/*.mdx"],
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../src/**/*.mdx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  viteFinal: async config => {
    // config.resolve?.alias
    // [].push.apply(config.plugins, [
    //   new TsconfigPathsPlugin({ extensions: config.resolve?.extensions })
    // ]);

    config.define = { "process.env": {} };

    return {
      ...config,
      resolve: {
        alias: [
          {
            find: "@/components",
            replacement: path.resolve(__dirname, "../src/components")
          },
          {
            find: "@/lib",
            replacement: path.resolve(__dirname, "../src/lib")
          }
        ]
      }
    };
  }
};
export default config;
