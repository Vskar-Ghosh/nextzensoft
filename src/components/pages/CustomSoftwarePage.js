/** @format */

import React from "react";
import Wave from "react-wavify";
import { motion } from "framer-motion";
import CustomSoft from "../CusSoftDevPageComponents/CustomSoft";
import CustomersWorldwide from "../HomePageCompnents.js/CustomersWorldwide";
import EngagementModel from "../CusSoftDevPageComponents/EngagementModel";
import WhatWeCanDo from "../CusSoftDevPageComponents/WhatWeCanDo";
import TechnoloweUsed from "../CusSoftDevPageComponents/TechnoloweUsed";

const CustomSoftwarePage = () => {
  return (
    <section className="w-full  py-0  ">
      <div className="w-full h-[100vh] flex flex-col justify-end items-end bg-customSoftDevBg mb-10">
        <div id="custom-software" className="w-full relative">
          <Wave
            fill="#034FC199"
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
          <div className="absolute top-0 left-0 w-full sm:w-1/2 h-full flex flex-col items-center sm:items-start justify-center sm:ml-20 text-[#FFFFFF]">
            <h1 className="text-4xl sm:text-5xl font-abelPro font-bold text-center sm:text-left">
              Our Services
            </h1>
            <p className="font-abelPro text-[#FFFFFF] leading-normal text-center sm:text-left">
              Custom software can provide a significant competitive advantage.
              Businesses can create software that is innovative, efficient, and
              tailored to their industry, setting them apart from competitors.
            </p>
          </div>
        </div>
      </div>
      {/* end of hero sections */}
      <CustomSoft />
      <WhatWeCanDo />
      <TechnoloweUsed />
      <CustomersWorldwide />
    </section>
  );
};

export default CustomSoftwarePage;
