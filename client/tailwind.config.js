/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xxs: "320px",
      xs: "360px",
      sm: "375px",
      sl: "400px",
      md: "640px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1536px",
      "4xl": "1920px",
      "5xl": "2560px",
      "6xl": "3840px",
    },
  },
  plugins: [],
};
