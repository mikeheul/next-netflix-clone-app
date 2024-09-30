import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customRed : '#ff4747'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'), // Add this line
  ],
  variants: {
    scrollbar: ['rounded'], // To allow rounded scrollbars
  },
};
export default config;
