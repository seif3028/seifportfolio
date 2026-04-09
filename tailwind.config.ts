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
        hacker: {
          bg: "#050505",
          card: "#0a0f0a",
          cardHover: "#0f1a0f",
          border: "#0d2b0d",
          borderHover: "#00ff88",
        },
        neon: {
          green: "#00ff88",
          greenDim: "#00cc6a",
          greenDark: "#00994d",
          lime: "#39ff14",
          cyan: "#00ffd5",
          purple: "#b400ff",
        },
        terminal: {
          text: "#c8ffc8",
          dim: "#5a8a5a",
          muted: "#3d6b3d",
          bg: "#030803",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.97" },
          "25%": { opacity: "0.94" },
          "75%": { opacity: "0.98" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        "neon-pulse": {
          "0%, 100%": {
            textShadow: "0 0 4px #00ff88, 0 0 11px #00ff88, 0 0 19px #00ff88",
          },
          "50%": {
            textShadow: "0 0 2px #00ff88, 0 0 5px #00ff88, 0 0 10px #00ff88",
          },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(0, 255, 136, 0.4)" },
          "50%": { borderColor: "rgba(0, 255, 136, 0.15)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        scanline: "scanline 4s linear infinite",
        flicker: "flicker 3s ease-in-out infinite",
        glitch: "glitch 0.3s ease-in-out",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "border-glow": "border-glow 2.5s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(0,255,136,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};
export default config;
