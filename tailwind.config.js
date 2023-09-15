/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        17: "4.25rem",
        29.5: "7.375rem",
        156.25: "39.0625rem",
      },
      maxWidth: {
        156.25: "39.0625rem",
      },
      height: {
        17: "4.25rem",
        29.5: "7.375rem",
      },
      fontFamily: {
        heading: "Unbounded",
      },
      margin: {
        7.5: "1.875rem",
        12.5: "3.125rem",
      },
    },
  },
  plugins: [],
};
