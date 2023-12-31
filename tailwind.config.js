/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Maven Pro", "sans-serif"],
      body: ["Maven Pro", "sans-serif"],
    },
    // fontSize: {
    //   xxs: '0.625rem',
    // },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        "primary": "#00D4E7",
        "dark": "#29292D",
        "light-shade": "#F4F9FE",
        "background": "#EDF6FA",
        "md-shade": "#F2F4F6",
        "dark-shade": "#E7EBED",
        "gray": "#9BA5B7",
        "dark-green": "#0D4744",
        "green": "#08C299",
        "light-green": "#00CC66",
        "yellow": "#FFCF00",
        "red": "#E2434B",
        "orange": "#EF6C35",
        "white": "#ffffff",
        "blue": "#429FFD",
      },
    },
    corePlugins: {
      aspectRatio: false,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
