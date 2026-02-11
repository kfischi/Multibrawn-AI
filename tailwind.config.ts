import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          500: "#00D4FF",
          600: "#00b8e0",
          700: "#0099bb",
        },
        accent: {
          500: "#5E63D8",
          600: "#4f54c7",
        },
        gold: "#C4A572",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Assistant", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
