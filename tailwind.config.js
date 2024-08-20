/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Droid Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "2xl": "1440px",
        xl: "1024px",
        lg: "768px",
        md: "425px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        ".my-div": {
          width: "60%",
          margin: "0 auto",
        },
        "@media (max-width: 1440px)": {
          ".my-div": {
            width: "70%",
          },
        },
        "@media (max-width: 1024px)": {
          ".my-div": {
            width: "85%",
          },
        },
        "@media (max-width: 768px)": {
          ".my-div": {
            width: "90%",
          },
        },
        "@media (max-width: 425px)": {
          ".my-div": {
            width: "95%",
          },
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    }),
  ],
};
