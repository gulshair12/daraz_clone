/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors : {
        "fluorescentBlue" : "#25a5d8",
        "orange" : "#f57224",
        "primary": "#FF4700",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

