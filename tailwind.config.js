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
        deepBlue: "#193E65",

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
        homePageBg: "url('assets/imagesNew/homePageBg.svg')",
        aboutHeroBg: "url('assets/imagesNew/aboutbg.svg')",
        customerWorldWide: "url('assets/imagesNew/customer_worldwide.svg')",
        servicesBg: "url('assets/imagesNew/servicebg.svg')",
        caseStudyBg: "url('assets/imagesNew/caseStudy.svg')",
        customSoftDevBg: "url('assets/imagesNew/cusSoftDevBg.svg')",
        workProcessBg: "url('assets/imagesNew/workProcessBg.svg')",
        mobileAppDeV: "url('assets/imagesNew/mob_bg_1.jpeg')",
        WebAppDeVBg: "url('assets/imagesNew/WebAppDev_Bg.jpg')",
        fintechBg: "url('assets/imagesNew/finBgtwo.jpg')",
        healthcareBG: "url('assets/imagesNew/Hospitality-1.jpg')",
        eduBG: "url('assets/imagesNew/eduBg1.jpg')",
        realEstateBG: "url('assets/imagesNew/realEstate.jpg')",
        pharmachyBG: "url('assets/imagesNew/pharmachyBg.jpg')",
        ioTBG: "url('assets/imagesNew/iot.jpg')",
        ioTBGThree: "url('assets/imagesNew/iotBg3.jpg')",
        getIntoutchBG: "url('assets/imagesNew/tttt.jpg')",
        careerPagehBG: "url('assets/imagesNew/carrer1.jpg')",
        // office bg
        dhakaOfcehBG: "url('assets/imagesNew/bgPerliment.jpeg')",
        nyBG: "url('assets/imagesNew/ny.jpg')",
        ohioBG: "url('assets/imagesNew/ohio.jpg')",
        klBG: "url('assets/imagesNew/kl.jpg')",
        ansburgBG: "url('assets/imagesNew/burlin.jpg')",

        // technologies bg
        javaBG: "url('assets/TechImages/javaBg.jpg')",
        nodeBG: "url('assets/TechImages/nodejsBg.jpg')",

        // end tech
        testBG: "url('assets/imagesNew/test.png')",

        card: "url('assets/images/thumbnail-background.svg')",
        sdlcBg: "url('assets/images/computerC.png')",
      },
    },
  },
  plugins: [],
};
