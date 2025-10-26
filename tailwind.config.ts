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
        "dev-primary": "#06302B",
        "dev-accent": "#06302B", 
        "dev-text": "#06302B",
        "dev-secondary": "rgba(6, 48, 43, 0.6)",
        "dev-bg": "#FEFCF6",
        "dev-card": "#ffffff",
      },
      fontFamily: {
        "mono": ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
