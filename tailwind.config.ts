import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        satoshi: ["var(--font-satoshi)"],
        roboto: ["var(--font-roboto-mono)"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        icon: "var(--icon)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring))",
        ring2: "var(--ring2))",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "grid-slate-200":
          "radial-gradient(circle, #E87811 1px, transparent 1px)",
        "radial-button":
          "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
        "gradient-text": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "grid-slate-200": "15px 15px",
      },
      animation: {
        "arrow-bounce": "bounce2 4s ease-in-out",
        gradient: "gradient 8s linear infinite",
        "fade-top-bottom": "fade 1.5s linear",
      },
      keyframes: {
        btnpulse: {
          "0%": { "box-shadow": '0 0 0 0 theme("colors.green.400")' },
          "50%": { "box-shadow": '0 0 0 0 theme("colors.green.400/50")' },
          "100%": { "box-shadow": '0 0 0 5px theme("colors.green.400/0")' },
        },
        bounce2: {
          "0%, 100%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
          "50%": {
            transform: "translateY(25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
  ],
} satisfies Config;
