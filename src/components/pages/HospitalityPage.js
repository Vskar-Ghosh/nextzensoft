/** @format */

import React from "react";
import Wave from "react-wavify";
import HospitalityServices from "../HospitalityPageCompo/HospitalityServices";
import WorkProcess from "../servicePageCompnents/WorkProces";
import TechnoloweUsed from "../CusSoftDevPageComponents/TechnoloweUsed";
const HospitalityPage = () => {
  return (
    <section className="w-full  py-0 ">
      <div className="w-full h-[100vh] flex flex-col justify-end items-end  bg-center bg-cover bg-healthcareBG mb-10">
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
          <div className="absolute top-[80px] max-sm:ml-5 max-sm:mr-5  left-0 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-xl:w-1/3 max-lg:w-1/3 max-sm:w-full flex flex-col items-start justify-center mx-4 md:mx-10 lg:mx-10 xl:mx-20 mt-30 text-[#FFFFFF] p-3">
            <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl max-xl:text-5xl max-sm:text-[18px] sm:text-[18px] font-abelPro font-bold ">
              Healthcare Software Development
            </h1>
            <p className="font-abelPro text-white text-base max-sm:text-[12px] sm:text-[14px] md:text-base lg:text-base sm:leading-normal leading-snug max-sm:mt-2">
              Digital health technology is rapidly transforming healthcare. By
              delivering tools, services, and programmes that empower patients,
              digital health technology may lead to clinically actionable
              insights and better outcomes in healthcare.
            </p>
          </div>
        </div>
      </div>
      {/* end of hero section component */}
      <HospitalityServices />
      <WorkProcess />
      <TechnoloweUsed />
    </section>
  );
};

export default HospitalityPage;
