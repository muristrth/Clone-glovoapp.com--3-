import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        highlight: {
          DEFAULT: "hsl(var(--highlight))",
          foreground: "hsl(var(--highlight-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Farm-specific custom colors
        farm: {
          green: {
            50: "#f0f9f4",
            100: "#dcf0e4",
            200: "#bae0ca",
            300: "#8ec9a8",
            400: "#5eab84",
            500: "#3e9067",
            600: "#2a774e", // primary green
            700: "#236042",
            800: "#1f4d37",
            900: "#1c4031",
            950: "#0a2319",
          },
          olive: {
            50: "#f7f8e8",
            100: "#edf1cf",
            200: "#dde4a5",
            300: "#c9d272",
            400: "#b4bf4a", // secondary olive
            500: "#96a136",
            600: "#758028",
            700: "#5a6422",
            800: "#4a5120",
            900: "#40481e",
            950: "#22270c",
          },
          brown: {
            50: "#f9f6f1",
            100: "#f0eadb",
            200: "#e2d2b8",
            300: "#d1b58d",
            400: "#c19a6d", // accent brown
            500: "#b2835b",
            600: "#9d6c50",
            700: "#835444",
            800: "#6d463c",
            900: "#5a3b34",
            950: "#331e1a",
          },
          leaf: {
            100: "#d5f1d4",
            200: "#b0e4af",
            300: "#8cd48a",
            400: "#67c065", // highlight green
            500: "#49a647",
            600: "#388536",
            700: "#2c642a",
            800: "#234d21",
            900: "#1d401c",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: 'shimmer 1.5s infinite',
      },
      backgroundImage: {
        'farm-pattern': "radial-gradient(circle at 1px 1px, rgba(21, 128, 61, 0.15) 1px, transparent 0)",
      },
      backgroundSize: {
        'pattern-sm': '20px 20px',
        'pattern-md': '40px 40px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
