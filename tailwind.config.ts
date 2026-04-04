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
        gold: {
          50:  "#fefce8",
          100: "#fde68a",
          200: "#f6d860",
          300: "#e8c040",
          400: "#D4A373",
          500: "#c49a52",
          600: "#B45309",
          700: "#92400e",
          800: "#78350f",
          900: "#451a03",
        },
        slate: {
          950: "#020617",
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          400: "#94a3b8",
          200: "#e2e8f0",
          100: "#f1f5f9",
          50:  "#F8FAFC",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans:    ["'DM Sans'", "system-ui", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4A373 0%, #B45309 100%)",
        "dark-gradient": "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
        "hero-pattern":  "radial-gradient(ellipse at 60% 50%, rgba(212,163,115,0.08) 0%, transparent 70%)",
      },
      animation: {
        "fade-up":   "fadeUp 0.7s ease forwards",
        "fade-in":   "fadeIn 0.6s ease forwards",
        "shimmer":   "shimmer 2s infinite",
        "float":     "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
