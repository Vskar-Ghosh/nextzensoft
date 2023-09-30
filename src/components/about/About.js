/** @format */

import React from "react";
import Footer from "../footer/Footer.js";
import FooterBottom from "../footer/FooterBottom.js";
import AboutContent from "./AboutContent.js";
// import { aboutPageVideo } from "../../assets/index.js";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="w-1280 h-200 relative !important mt-5">
        {/* <video
          className="w-full h-200 object-cover"
          autoPlay
          loop
          muted
          playbackRate={0.3}>
          <source src={aboutPageVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        {/* end of the Video */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-start">
          <h1 className="text-4xl font-bold text-white">
            Welcome to Our About Page
          </h1>
          <p className="text-xl text-white">
            Learn more about our company and values.
          </p>
        </div>
      </div>
      <AboutContent />
      <Footer />
      <FooterBottom />
    </section>
  );
};

export default About;
