import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "440px",
        xs: "500px",
        ...defaultTheme.screens,
      },
      animation: {
        loopText: "loopText 2s ease infinite",
        riseFade: "riseFade 2s ease-in-out forwards",
      },
      keyframes: {
        loopText: {
          "0%, 33%": { opacity: "1", transform: "translateY(0)" },
          "34%, 66%": { opacity: "0", transform: "translateY(-20px)" },
          "67%, 100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#202EFF",
      },
    },
  },
  plugins: [],
};
export default config;
