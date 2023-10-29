/** @format */

import React from "react";
import { caseStudy } from "../../../constants";
import { learnArrowImg } from "../../../assets/index";

const CaseCard = () => {
  return (
    <section className="w-full justify-center items-center py-0 ">
      <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-7 p-5  ">
        {caseStudy.map((caseStudy, index) => (
          <div
            key={index}
            className=" xl:w-[45vw] 2xl:w-[45vw] lg:w-[45vw] h-[600px] md:w-[100vw] sm:w-[100vw] max-sm:w-[100vw] flex flex-col justify-center items-center  bg-white shadow-2xl"
          >
            <div className="w-full h-full flex flex-col justify-center items-center ">
              <img
                src={caseStudy.image}
                alt=""
                className="w-[90%] h-full object-cover hover:scale-110 transition-all duration-200"
              />
            </div>
            <div className=" flex flex-col justify-center items-center p-2 ">
              <h2 className=" text-3xl text-deepBlue font-abelPro font-semibold mx-2">
                {" "}
                {caseStudy.title}{" "}
              </h2>
            </div>

            <div className="flex flex-row gap-1 justify-start items-start  text-left mx-1 ">
              <a href="/mobileppdevpage">
                <p className="text-coralred font-abelPro 2xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[12px] max-sm:text-[12px] p-2  underline underline-offset-1">
                  Mobile development
                </p>
              </a>
              {/* end */}
              <a href="/iot">
                <p className="text-coralred font-abelPro xl:text-[16px] 2xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[12px] max-sm:text-[12px] p-2  underline underline-offset-1">
                  IoT Solutions
                </p>
              </a>
              {/* end */}
              <a href="/webappdevpage">
                <p className="text-coralred font-abelPro 2xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[12px] max-sm:text-[12px] p-2  underline underline-offset-1">
                  Web Development
                </p>
              </a>
              {/* end */}
            </div>

            <div className=" flex flex-col justify-center items-center p-2 ">
              <p className=" text-lg text-deepBlue font-abelPro font-semibold">
                {" "}
                {caseStudy.miniDes}{" "}
              </p>
              <a
                href="/webappdevpage"
                className="w-[180px]  mb-2 flex flex-row gap-1 justify-center items-center"
              >
                <h2 className=" text-lg text-coralred font-bold">Learn more</h2>
                <img
                  src={learnArrowImg}
                  alt=""
                  className=" flex  items-center"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseCard;
