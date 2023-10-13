/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
        abelPro: ["Abel", "sans-serif"],
        adventPro: ["Advent Pro", "sans"],
      },
      colors: {
        // bodyColor: "#212428",
        bodyColor: "#ffffff",
        coralred: "#FF6452",

        //=> this is for black backgrounds..
        // lightText: "#c4cfde",
        // this is for light
        lightText: "#758598",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      backgroundImage: {
        aboutHeroBg: "url('assets/imagesNew/aboutbg.svg')",
        customerWorldWide: "url('assets/imagesNew/customer_worldwide.svg')",
        servicesBg: "url('assets/imagesNew/servicebg.svg')",
        customSoftDevBg: "url('assets/imagesNew/cusSoftDevBg.svg')",
        workProcessBg: "url('assets/imagesNew/workProcessBg.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
        sdlcBg: "url('assets/images/computerC.png')",
      },
    },
  },
  plugins: [],
};
