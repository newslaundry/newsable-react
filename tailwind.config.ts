import { newsableTailwindPreset } from "@newsable/tailwind-preset";
import type { Config } from "tailwindcss";

const config = {
  presets: [newsableTailwindPreset],
  darkMode: ["class", "[data-theme='dark']"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"]
  // corePlugins: {
  //   preflight: false
  // }
} satisfies Config;

export default config;
