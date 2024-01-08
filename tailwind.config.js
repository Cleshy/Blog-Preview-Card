/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1440px",
    },
    borderWidth: {
      1: "1px",
    },
    extend: {
      boxShadow: {
        card: "8px 8px 0 0 #000",
      },
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        white: "hsl(0, 0%, 100%)",
        grey: "hsl(0, 0%, 50%)",
        black: "hsl(0, 0%, 7%)",
      },
      padding: {
        "4px": "4px",
        "12px": "12px",
      },
      spacing: {
        24: "24rem",
        6.5: "1.625rem",
        6.3: "1.365rem",
      },
    },
  },
  plugins: [],
};
