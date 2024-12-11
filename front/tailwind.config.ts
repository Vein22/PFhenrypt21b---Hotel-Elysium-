import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tertiary: "#b69663",
        marron:"#856e4c",
        marronclaro: "#b69663",
        marronfuerte:"#4b3b2c",
        titulo:"#616161",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
