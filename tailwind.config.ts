import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "brand-blue": "#3b82f6",
        "brand-purple": "#8b5cf6",
        "brand-pink": "#ec4899",
      },
    },
  },
  plugins: [],
};
export default config;
