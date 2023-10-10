/** @format */

import React from "react";
import ContactUs from "../contactus/ContactUs.js";
import Features from "../features/Features.js";
import Wave from "react-wavify";
import MissionVissionComponent from "../about/missionVission/MissionVissionComponent.js";
import { motion } from "framer-motion";
import IndustryWeServe from "../about/IndustryWeServe.js";
import Technologies from "./../technologyWeUsed/Technologies.js";
import WhoWeAre from "../about/WhoWeAre.js";
import WhyUs from "../about/WhyUs.js";

const AboutPage = () => {
  return (
    <section className="w-full justify-center py-0 ">
      <div className="w-full h-[100vh] flex flex-col justify-end items-end bg-aboutHeroBg mb-10">
        <div className="w-full   relative">
          <Wave
            fill="#C1250399"
            fillOpacity=".7"
            paused={false}
            style={{ display: "flex" }}
            options={{
              height: 30,
              amplitude: 40,
              speed: 0.3,
              points: 3,
            }}
            className="h-[50vh]"
          />
          <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col items-start justify-center ml-20 text-[#FFFFFF]">
            <h1 className="text-4xl font-abelPro font-bold">About Us</h1>
            <p className="text-lg font-abelPro text-[#FFFFFF]">
              Reduce time-to-market with our fast & agile development process.
              The result is a functional version of your product with all core
              features ready to test with users.
            </p>
          </div>
        </div>
      </div>
      {/* end of hero section component */}

      <WhoWeAre />
      {/* end of who we are */}
      <MissionVissionComponent />
      <WhyUs />
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
