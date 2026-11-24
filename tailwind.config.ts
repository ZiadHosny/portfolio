import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Dracula
        bg: "#282a36",
        "bg-deep": "#1e1f29",
        surface: "#44475a",
        comment: "#6272a4",
        purple: "#bd93f9",
        fg: "#f8f8f2",
        muted: "#a9b0d4",
        cyan: "#8be9fd",
        green: "#50fa7b",
        pink: "#ff79c6",
        orange: "#ffb86c",
        yellow: "#f1fa8c",
      },
      fontFamily: {
        // --font-arabic only exists on /ar; the fallback keeps the English pages unchanged
        sans: ["var(--font-sans)", "var(--font-arabic, system-ui)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
