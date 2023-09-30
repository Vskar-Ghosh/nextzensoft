/** @format */

import React, { useRef, useEffect } from "react";
import Banner from "../banner/Banner.js";
import ContactUs from "../contactus/ContactUs.js";
import Features from "../features/Features.js";
import MissionVissionComponent from "../about/missionVission/MissionVissionComponent.js";
// import { aboutPageVideo } from "../../assets/index.js";
import { aboutHeroImage, aboutImagehomePage2 } from "../../assets/index.js";
import { software1, development } from "../../assets/index.js";
import { motion } from "framer-motion";
import IndustryWeServe from "../about/IndustryWeServe.js";
import Technologies from "./../technologyWeUsed/Technologies.js";

const AboutPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  }, []);

  return (
    <section className="w-full py-0 items-center">
      <div className="w-full md:h-[500px] flex flex-col md:flex-row p-5 md:p-10 relative moving-bg">
        {/* <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-3"
          src={aboutPageVideo} // Replace this with the URL or source of your video
          autoPlay
          loop
          muted
          playsInline
        /> */}

        {/* Content Container */}
        <div className="w-full md:w-1/2 flex items-center justify-center z-2 relative">
          {/* Text Content */}
          <div className="bg-black bg-opacity-70 p-4 md:p-6 rounded-md shadow-md">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-red-500">
              {" "}
              We are From Another Space to Automate the World
            </h1>
            <p className="text-lg md:text-2xl text-white mt-2">
              Nextzensoft works in multiple areas including software
              development, website development, customized software solution,
              mobile app development, theme design, and development. Our dream
              is to continue your journey with success.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center z-2 relative mt-4 md:mt-0">
          <img
            className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full object-cover"
            src={development} // Replace with the URL or source of your image
            alt="Image Description"
          />
        </div>
      </div>
      {/* end of heading component */}
      <MissionVissionComponent />
      <IndustryWeServe />
      <Technologies />

      <div className="mx-2 md:mx-5">
        <Features />
      </div>
      <ContactUs />
    </section>
  );
};

export default AboutPage;
