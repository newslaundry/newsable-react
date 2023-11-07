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
        },
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" }
        },
        overlayHide: {
          from: { opacity: "1" },
          to: { opacity: "0" }
        },
        contentShow: {
          from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" }
        },
        contentHide: {
          from: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
          to: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" }
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" }
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" }
        },
        enterFromRight: {
          from: { opacity: "0", transform: "translateX(200px)" },
          to: { opacity: "1", transform: "translateX(0)" }
        },
        enterFromLeft: {
          from: { opacity: "0", transform: "translateX(-200px)" },
          to: { opacity: "1", transform: "translateX(0)" }
        },
        exitToRight: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(200px)" }
        },
        exitToLeft: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-200px)" }
        },
        scaleIn: {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" }
        },
        scaleOut: {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" }
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" }
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" }
        },
        hide: {
          from: { opacity: "1" },
          to: { opacity: "0" }
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + var(--viewport-padding)))"
          },
          to: { transform: "translateX(0)" }
        },
        swipeOut: {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + var(--viewport-padding)))" }
        }
      },
      animation: {
        "accordion-down": "accordion-down var(--animation-timing-default) ease-out",
        "accordion-up": "accordion-up var(--animation-timing-default) ease-out",
        overlayShow: "overlayShow var(--animation-timing-default) ease-out",
        overlayHide: "overlayHide var(--animation-timing-default) ease-out",
        contentShow: "contentShow var(--animation-timing-default) ease-out",
        contentHide: "contentHide var(--animation-timing-default) ease-out",
        slideDownAndFade: "slideDownAndFade var(--animation-timing-default) ease-out",
        slideLeftAndFade: "slideLeftAndFade var(--animation-timing-default) ease-out",
        slideUpAndFade: "slideUpAndFade var(--animation-timing-default) ease-out",
        slideRightAndFade: "slideRightAndFade var(--animation-timing-default) ease-out",
        scaleIn: "scaleIn var(--animation-timing-default) ease-out",
        scaleOut: "scaleOut var(--animation-timing-default) ease-out",
        fadeIn: "fadeIn var(--animation-timing-default) ease-out",
        fadeOut: "fadeOut var(--animation-timing-default) ease-out",
        enterFromLeft: "enterFromLeft var(--animation-timing-default) ease-out",
        enterFromRight: "enterFromRight var(--animation-timing-default) ease-out",
        exitToLeft: "exitToLeft var(--animation-timing-default) ease-out",
        exitToRight: "exitToRight var(--animation-timing-default) ease-out",
        hide: "hide var(--animation-timing-default) ease-out",
        slideIn: "slideIn var(--animation-timing-default) ease-out",
        swipeOut: "swipeOut var(--animation-timing-default) ease-out"
      }
    }
  },
  plugins: [animatePlugin]
} satisfies Config;

export default config;
