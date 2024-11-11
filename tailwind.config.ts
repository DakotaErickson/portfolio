import type { Config } from "tailwindcss";

export default {
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
        hoverGreen: "#50795d",
        whiteText: "#e1eae2",
      },
    },
    screens: {
      'small': '750px',
    },
  },
  plugins: [],
} satisfies Config;
