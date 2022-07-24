/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sec: "#83c5be",
        pry: {
          50: "#E8FFFF",
          100: "#01595A",
          200: "#038B73",
        },
      },

      fontFamily: {
        heading: ["Raleway", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        bgImage: "url('./images/equipment.jpg')",
      },
    },
  },
  plugins: [],
};
