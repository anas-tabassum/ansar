const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Your source files
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Flowbite React components
  ],
  theme: {
    extend: {
      colors: {
        'primary-btn': 'rgb(30, 66, 159)',
        'primary-btn-hover': 'rgb(4,43,151)',
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // Flowbite plugin
  ],
};
