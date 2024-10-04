module.exports = {
  darkMode: "class",
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: "#050505",
      white: "#FDFDFD",
      grayscale: {
        800: "#1F1F20",
        700: "#3A3A3B",
        600: "#545457",
        500: "#808080",
        400: "#A3A3A3",
        300: "#BBBBBB",
        200: "#D1D1D1",
        100: "#E7E7E7",
        50: "#F4F4F4",
        30: "#F8F8F9",
        20: "#FBFBFB",
      },
      red: {
        900: "#BD3207",
        primary: "#DF4718",
      },
      yellow: "#FFEFB7",
      transparent: "rgba(0,0,0,0)",
      current: "currentColor",
    },
    fontSize: {
      "3xl": ["3.5rem", 1.4],
      "2xl": ["3rem", 1.4],
      xl: ["2.5rem", 1.4],
      lg: ["2rem", 1.4],
      md: ["1.5rem", 1.4],
      sm: ["1.125rem", 1.4],
      base: ["1rem", 1.4],
      xs: ["0.75rem", 1.4],
    },
    borderRadius: {
      xs: "4px",
      md: "24px",
      lg: "30px",
      full: "100%",
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      spacing: {
        18: "4.5rem",
        19: "4.75rem",
        21: "5.25rem",
        22: "5.5rem",
        25: "6.25rem",
        26: "6.5rem",
        27: "6.75rem",
        28: "7rem",
        30: "7.5rem",
        35: "8.75rem",
        37: "9.25rem",
        39: "9.75rem",
        47: "11.75rem",
        93: "23.25rem",
        120: "30rem",
        124: "31rem",
      },
      transitionProperty: {
        drawerOpen: "transform 500ms, opacity .9s, visibility .9s",
        drawerClosed:
          "transform 300ms cubic-bezier(.5, .5, 0, 1), opacity .9s .9s, visibility .9s .9s",
      },
    },
  },
  safelist: [
    {
      pattern: /col-(start|end)-(1|2|3|4|5|6|7|8|9|10|11|12|13)/,
      variants: ["xs", "sm", "md", "lg", "xl"],
    },
  ],
  plugins: [require("tailwindcss-radix")()],
}
