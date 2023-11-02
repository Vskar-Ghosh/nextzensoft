/** @format */

import React from "react";
import ContactUs from "../contactus/ContactUs.js";

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
      <div className="w-full h-[100vh] flex flex-col justify-end items-end bg-aboutHeroBg ">
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
            <p className="font-abelPro text-[#FFFFFF] leading-normal">
              Welcome to Nextzensoft, your trusted partner for cutting-edge
              software development solutions. With a passion for innovation and
              a team of highly skilled developers, we specialize in crafting
              custom software tailored to your unique needs. Whether you're
              looking to streamline your business processes, enhance user
              experiences, or drive digital transformation, we have the
              expertise to bring your vision to life. Our commitment to quality,
              efficiency, and excellence ensures that we deliver solutions that
              empower your business for success in today's digital landscape.
              Discover the possibilities with [Your Company Name] and embark on
              a journey of software innovation.
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
      <ContactUs />
    </section>
  );
};

export default AboutPage;
