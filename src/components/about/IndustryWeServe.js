/** @format */

import React from "react";
import {
  healthcare,
  fintech,
  ecom,
  automated,
  rmg,
  hospitality,
  aviation,
  pharmacy,
  more,
  ui,
  realState,
  education,
} from "../../assets/index.js";
import IndustryWeServeTitle from "../layouts/IndustryWeServeTitle.js";

const IndustryWeServe = () => {
  return (
    <section className="w-full pt-20 py-10 pb-40 items-center bg-[#041530] ">
      <div className="mb-5 pb-10">
        {" "}
        <IndustryWeServeTitle Title="" description="" />
      </div>
      {/* end */}

      {/* cards from below */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mx-5">
        {/*  */}
        <div>
          <div className="space-y-2">
            <div className="flex items-center justify-center w-[150px] h-[150px] mx-auto bg-gradient-to-tr hover:rotate-3 transition-transfor from-blue-800 to-transparent rounded-lg">
              <img
                src={healthcare}
                alt="Icon"
                className="w-[80px] h-[80px] text-white"
              />
            </div>
            <h3 className="text-xl font-semibold text-w mt-2 text-center">
              Health Care
            </h3>
          </div>
        </div>
        {/*1Health Care  */}

        <div>
          <div className="space-y-2">
            <div className="flex items-center justify-center w-[150px] h-[150px] mx-auto bg-gradient-to-tr hover:rotate-3 transition-transfor from-blue-800 to-transparent rounded-lg">
              <img
                src={fintech}
                alt="Icon"
                className="w-[80px] h-[80px] text-white"
              />
            </div>
            <h3 className="text-xl font-semibold text-w mt-2 text-center">
              Fin tech
            </h3>
          </div>
        </div>
        {/*2 Fin tech */}
        <div>
          <div className="space-y-2">
            <div className="flex items-center justify-center w-[150px] h-[150px] mx-auto bg-gradient-to-tr hover:rotate-3 transition-transfor from-blue-800 to-transparent rounded-lg">
              <img
                src={ecom}
                alt="Icon"
                className="w-[80px] h-[80px] text-white"
              />
            </div>
            <h3 className="text-xl font-semibold text-w mt-2 text-center">
              E-Commerce
            </h3>
          </div>
        </div>
        {/* E-Commerce */}

        <div>
          <div className="space-y-2">
            <div className="flex items-center justify-center w-[150px] h-[150px] mx-auto bg-gradient-to-tr hover:rotate-3 transition-transfor from-blue-800 to-transparent rounded-lg">
              <img
                src={automated}
                alt="Icon"
                className="w-[80px] h-[80px] text-white"
              />
            </div>
            <h3 className="text-xl font-semibold text-w mt-2 text-center">
              Automation
            </h3>
          </div>
        </div>
        {/*4 Automation */}
        <div>
          <div className="space-y-2">
            <div className="flex items-center justify-center w-[150px] h-[150px] mx-auto bg-gradient-to-tr hover:rotate-3 transition-transfor from-blue-800 to-transparent rounded-lg">
              <img
                src={rmg}
                alt="Icon"
                className="w-[80px] h-[80px] text-white"
              />
            </div>
            <h3 className="text-xl font-semibold text-w mt-2 text-center">
              RMG
            </h3>
          </div>
        </div>
        {/*5 RMG  */}
        <div>
          <div className="space-y-2">
            <div className="flex items-center justify-center w-[150px] h-[150px] mx-auto bg-gradient-to-tr hover:rotate-3 transition-transfor from-blue-800 to-transparent rounded-lg">
              <img
                src={hospitality}
                alt="Icon"
                className="w-[80px] h-[80px] text-white"
              />
            </div>
            <h3 className="text-xl font-semibold text-w mt-2 text-center">
              Hospitality
            </h3>
          </div>
        </div>
        {/* 6 Hospitality*/}
        <div>
          <div className="space-y-2">
            <div className="flex items-center justify-center w-[150px] h-[150px] mx-auto bg-gradient-to-tr hover:rotate-3 transition-transfor from-blue-800 to-transparent rounded-lg">
              <img
                src={education}
                alt="Icon"
                className="w-[80px] h-[80px] text-white"
              />
            </div>
            <h3 className="text-xl font-semibold text-w mt-2 text-center">
              Education
            </h3>
          </div>
        </div>
        {/*7 Education  */}
        <div>
          <div className="space-y-2">
            <div className="flex items-center justify-center w-[150px] h-[150px] mx-auto bg-gradient-to-tr hover:rotate-3 transition-transfor from-blue-800 to-transparent rounded-lg">
              <img
                src={pharmacy}
                alt="Icon"
                className="w-[80px] h-[80px] text-white"
              />
            </div>
            <h3 className="text-xl font-semibold text-w mt-2 text-center">
              Pharmacy
            </h3>
          </div>
        </div>
        {/*8 Pharmacy  */}
        <div>
          <div className="space-y-2">
            <div className="flex items-center justify-center w-[150px] h-[150px] mx-auto bg-gradient-to-tr hover:rotate-3 transition-transfor from-blue-800 to-transparent rounded-lg">
              <img
                src={aviation}
                alt="Icon"
                className="w-[80px] h-[80px] text-white"
              />
            </div>
            <h3 className="text-xl font-semibold text-w mt-2 text-center">
              Aviation
            </h3>
          </div>
        </div>
        {/* 9 Aviation */}
        <div>
          <div className="space-y-2">
            <div className="flex items-center justify-center w-[150px] h-[150px] mx-auto bg-gradient-to-tr hover:rotate-3 transition-transfor from-blue-800 to-transparent rounded-lg">
              <img
                src={realState}
                alt="Icon"
                className="w-[80px] h-[80px] text-white"
              />
            </div>
            <h3 className="text-xl font-semibold text-w mt-2 text-center">
              Real-Estate
            </h3>
          </div>
        </div>
        {/*10 Real-Estate  */}
        <div>
          <div className="space-y-2">
            <div className="flex items-center justify-center w-[150px] h-[150px] mx-auto bg-gradient-to-tr hover:rotate-3 transition-transfor from-blue-800 to-transparent rounded-lg">
              <img
                src={ui}
                alt="Icon"
                className="w-[80px] h-[80px] text-white"
              />
            </div>
            <h3 className="text-xl font-semibold text-w mt-2 text-center">
              UI/Ux
            </h3>
          </div>
        </div>
        {/*11 UI/Ux  */}
        <div>
          <div className="space-y-2">
            <div className="flex items-center justify-center w-[150px] h-[150px] mx-auto bg-gradient-to-tr hover:rotate-3 transition-transfor from-blue-800 to-transparent rounded-lg">
              <img
                src={more}
                alt="Icon"
                className="w-[80px] h-[80px] text-white"
              />
            </div>
            <h3 className="text-xl font-semibold text-w mt-2 text-center">
              Many More
            </h3>
          </div>
        </div>
        {/* 12 Many More end=> */}
      </div>
    </section>
  );
};

export default IndustryWeServe;
