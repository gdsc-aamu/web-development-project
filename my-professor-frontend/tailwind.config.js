// TODO: Tailwind CSS configuration file
// This file contains theme extensions to match the Figma design
// Students do not need to modify this file

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./styles/**/*.{css}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#6B4E9E", // TODO: Update this to match Figma primary color
          "primary-light": "#8E6CC8",
          "primary-dark": "#4A3576",
          background: "#F5F5F5",
          text: "#333333",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
    darkMode: "class", // Enables dark mode support
    plugins: [],
  };
  