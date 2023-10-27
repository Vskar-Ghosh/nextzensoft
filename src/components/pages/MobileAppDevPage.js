/** @format */

import React, { useState } from "react";
import Wave from "react-wavify";
import MobAppMainCompo from "../MobileAppDevCompo/MobAppMainCompo";
import Sdlc from "../servicePageCompnents/Sdlc";
import WorkProcess from "../servicePageCompnents/WorkProces";
import TechnoloweUsed from "../CusSoftDevPageComponents/TechnoloweUsed";
import MobileFaq from "../accordoin/MobileFaq";

const MobileAppDevPage = () => {
  return (
    <section className="w-full justify-center py-0 ">
      {" "}
      <div className="w-full h-[100vh] flex flex-col justify-end items-end bg-mobileAppDeV mb-10">
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
            <h1 className="text-4xl font-abelPro font-bold">
              Mobile Application Development
            </h1>
            <p className="font-abelPro text-[#FFFFFF] leading-normal">
              Bring your products and services closer to their users by
              implementing a custom mobile application developed with your
              business objectives in mind. We know how to do this in a fast and
              cost-efficient way for both iOS and Android, without compromising
              quality and usability.
            </p>
          </div>
        </div>
      </div>
      {/* end of hero section component */}
      <MobAppMainCompo />
      <Sdlc />
      <WorkProcess />
      <TechnoloweUsed />
      <MobileFaq />
    </section>
  );
};

export default MobileAppDevPage;
