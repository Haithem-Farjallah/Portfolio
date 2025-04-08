const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {
      animation: {
        "move-around": "move-around 15s ease-in-out infinite alternate",
        "move-around-reverse":
          "move-around-mirror 15s ease-in-out infinite alternate",
      },
      keyframes: {
        "move-around": {
          "0%": { transform: "translate(-50%, -50%)" },
          "25%": {
            transform: "translate(calc(-50% + 800px), calc(-50% - 200px))",
          },
          "50%": {
            transform: "translate(calc(-50% - 300px), calc(-50% + 50px))",
          },
          "75%": {
            transform: "translate(calc(-50% + 800px), calc(-50% + 200px))",
          },
          "100%": {
            transform: "translate(calc(-50% - 300px), calc(-50% - 50px))",
          },
        },
        "move-around-mirror": {
          "0%": { transform: "translate(-50%, -50%)" },
          "25%": {
            transform: "translate(calc(-50% - 800px), calc(-50% - 200px))",
          },
          "50%": {
            transform: "translate(calc(-50% + 300px), calc(-50% + 50px))",
          },
          "75%": {
            transform: "translate(calc(-50% - 800px), calc(-50% + 200px))",
          },
          "100%": {
            transform: "translate(calc(-50% + 300px), calc(-50% - 50px))",
          },
        },
      },
    },
  },
  plugins: [flowbiteReact],
};