import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      "open_sans": ["Open Sans", "sans-serif"],
      "upload": ["Edu", "AU", "VIC", "WA", "NT", "Hand", "cursive"],
      "contact": ["Roboto", "sans-serif"]
    },
  },
  plugins: [],
  darkMode: "selector"
};
export default config;
