import { newsableTailwindPreset } from "@newsable/tailwind-preset";
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config = {
  presets: [newsableTailwindPreset],
  darkMode: ["class", "[data-theme='dark']"],
  // corePlugins: {
  //   preflight: false
  // },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down var(--animation-timing-default) ease-out",
        "accordion-up": "accordion-up var(--animation-timing-default) ease-out"
      }
    }
  },
  plugins: [animatePlugin]
} satisfies Config;

export default config;
