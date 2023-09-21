/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFE600",
        "dark-primary": "#2968c8",
        secondary: "#3483FA",
        base: "#333333",
        "dark-gray": "#999999",
        "light-gray": "#666666",
        light: "#EEEEEE",
      },
      fontFamily: {
        body: 'Roboto, sans-serif'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
        },
      },
      screens: {
        "lg": "1020px",
        "xl": "1020px",
        "2xl": "1020px"
      }
    },
  },
  plugins: [],
};
