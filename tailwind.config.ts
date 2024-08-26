import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        ArchivoBlack: ["Archivo Black"],
        Nostromo: ["var(--font-my-custom)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-bg":
          "linear-gradient(var(--gradient-start)),linear-gradient(var(--gradient-stop))",
        "custom-button-bg":
          "linear-gradient(82deg, #4D3BD8 -1.6%, #6F62D0 102.39%)",
        "donut-pattern": "url(/assets/bg1.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        particle: "url('/assets/particle.png')",
        "multi-vector": "url('/assets/multi-vector.png')",
        roadmap: "url('/assets/roadmap.png')",
      },
      backdropBlur: {
        "lg/2": "10px",
      },
      colors: {
        primary: { DEFAULT: "hsl(var(--primary))" },
        secondary: { DEFAULT: "hsla(var(--secondary))" },
        hovernav: { DEFAULT: "hsla(var(--hover-nav))" },

        foreground: {
          DEFAULT: "hsl(var(--foreground))",
        },
        white: "hsl(var(--white))",
        card: {
          DEFAULT: "hsla(var(--card))",
          secondary: "hsla(var(--pumpbit-bg))",
        },
        semantic: {
          success: { DEFAULT: "hsl(var(--success))" },
          danger: { DEFAULT: "hsl(var(--danger))" },
          warning: { DEFAULT: "hsl(var(--warning))" },
        },
        button: {
          primary: {
            DEFAULT: "hsl(var(--button-primary-bg))",
          },
          secondary: {
            DEFAULT: "hsl(var(--button-secondary-bg))",
          },
          tab: {
            DEFAULT: "hsla(var(--button-tab-bg))",
          },
        },
        border: "hsl(var(--border))",
        text: {
          DEFAULT: "hsl(var(--white))",
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover-bg))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideDownAndFade:
          "slideDownAndFade 600ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
