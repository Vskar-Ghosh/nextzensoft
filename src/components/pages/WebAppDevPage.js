/** @format */

import React from "react";
import Wave from "react-wavify";
import WebAppMainCompo from "../WebAppPageComponents/WebAppMainCompo";
import WebAppDevDdlc from "../WebAppPageComponents/WebAppDevDdlc";
import WorkProcess from "../servicePageCompnents/WorkProces";
import TechnoloweUsed from "../CusSoftDevPageComponents/TechnoloweUsed";
import Accotdoin from "../accordoin/Accotdoin";
import WebFaQ from "../accordoin/WebFaQ";

const WebAppDevPage = () => {
  return (
    <section className="w-full  py-0">
      <div className="w-full h-[100vh] flex flex-col justify-end items-end bg-center bg-cover bg-WebAppDeVBg mb-10">
        <div id="custom-software" className="w-full relative">
          <Wave
            fill="#831f81"
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
              Web Application Development
            </h1>
            <p className="font-abelPro text-[#FFFFFF] leading-normal text-center sm:text-left">
              Driven by a streamlined remote working process, our seasoned
              experts will seamlessly expand your on-site team or bridge your
              skill gaps while embracing your mindset and technology you use.
            </p>
          </div>
        </div>
      </div>
      {/* end of hero section */}
      <WebAppMainCompo />
      <WebAppDevDdlc />
      <WorkProcess />
      <TechnoloweUsed />
      <WebFaQ />
    </section>
  );
};

export default WebAppDevPage;
