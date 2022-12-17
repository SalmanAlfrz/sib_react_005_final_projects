/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gas-money-black": "#161334",
        "alpha-blue": "#7493D3",
        "wen-minty": "#CBFC02",
        "airdrop-white": "#EAF1FD",
        "moon-pink": "#E87A88",
        "stake-red": "#FC304A",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
