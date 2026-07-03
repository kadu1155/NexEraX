import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        brand: {
          royal: "#0E2F76",
          powder: "#A9C0E0",
          ice: "#F4FEFF",
          text: "#102042",
          border: "#D7E6F5",
          hover: "#15419C",
          section: "#EDF7FF"
        },
        primary: {
          DEFAULT: "#0E2F76",
          foreground: "#ffffff"
        }
      },
      boxShadow: {
        glow: "0 14px 36px rgba(14, 47, 118, 0.14)",
        soft: "0 16px 44px rgba(16, 32, 66, 0.10)"
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(135deg, #0E2F76 0%, #15419C 58%, #A9C0E0 100%)"
      }
    }
  },
  plugins: []
};

export default config;
