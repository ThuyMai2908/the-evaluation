import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /^justify-(\w+)$/,
    },
    {
      pattern: /^gap-(\w+)$/,
      variants: [
        "hover",
        "focus",
        "active",
        "group-hover",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
      ],
    },
    {
      pattern: /^grid-cols-(\w+)$/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
    {
      pattern: /^col-span-(\w+)$/,
      variants: ["sm", "md", "lg", "xl", "2xl"],
    },
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ["var(--font-body)"],
        fontNeueMedium: ["var(--font-medium)"],
      },
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        beige: "var(--beige)",
        grey: "var(--grey)",
        brown: "var(--brown)",
        lightBrown: "var(--light-brown)",
        brownFooter: "var(--brown-footer)",
        brownMenu: "var(--brown-menu)",
        muted: "var(--muted)",
        background: "rgb(var(--beige) / var(--opacity, 1))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          "marquee-slide": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-100%)" },
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        "6.25": "6.25rem",
        "12": "3rem",
      },
      padding: {
        "60": "3.75rem",
      },
      lineHeight: {
        1.2: "1.2",
        1.5: "1.5",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
