import { newsableTailwindPreset } from "@newsable/tailwind-preset";
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

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
        accordionDown: {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        accordionUp: {
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
        slideDownAndFadeShow: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        slideDownAndFadeHide: {
          from: { opacity: "1", transform: "translateY(0)" },
          to: { opacity: "0", transform: "translateY(-2px)" }
        },
        slideLeftAndFadeShow: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" }
        },
        slideLeftAndFadeHide: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(2px)" }
        },
        slideUpAndFadeShow: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        slideUpAndFadeHide: {
          from: { opacity: "1", transform: "translateY(0)" },
          to: { opacity: "0", transform: "translateY(2px)" }
        },
        slideRightAndFadeShow: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" }
        },
        slideRightAndFadeHide: {
          from: { opacity: "1", transform: "translateX(0)" },
          to: { opacity: "0", transform: "translateX(-2px)" }
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
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" }
        },
        scaleOut: {
          from: { opacity: "1", transform: "scale(1)" },
          to: { opacity: "0", transform: "scale(0.95)" }
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
        show: {
          from: { opacity: "0" },
          to: { opacity: "1" }
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
        accordionDown: "accordionDown var(--animation-timing-default) ease-out",
        accordionUp: "accordionUp var(--animation-timing-default) ease-out",
        overlayShow: "overlayShow var(--animation-timing-default) ease-out",
        overlayHide: "overlayHide var(--animation-timing-default) ease-out",
        contentShow: "contentShow var(--animation-timing-default) ease-out",
        contentHide: "contentHide var(--animation-timing-default) ease-out",
        slideDownAndFadeShow: "slideDownAndFadeShow var(--animation-timing-default) ease-out",
        slideDownAndFadeHide: "slideDownAndFadeHide var(--animation-timing-default) ease-out",
        slideLeftAndFadeShow: "slideLeftAndFadeShow var(--animation-timing-default) ease-out",
        slideLeftAndFadeHide: "slideLeftAndFadeHide var(--animation-timing-default) ease-out",
        slideUpAndFadeShow: "slideUpAndFadeShow var(--animation-timing-default) ease-out",
        slideUpAndFadeHide: "slideUpAndFadeHide var(--animation-timing-default) ease-out",
        slideRightAndFadeShow: "slideRightAndFadeShow var(--animation-timing-default) ease-out",
        slideRightAndFadeHide: "slideRightAndFadeHide var(--animation-timing-default) ease-out",
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
  plugins: [
    animatePlugin,
    require("tailwindcss-react-aria-components"),
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: value => ({
          perspective: value
        })
      });
    })
  ]
} satisfies Config;

export default config;
