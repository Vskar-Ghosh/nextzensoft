/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { workArrowImg } from "../../assets/index";
import IntroCallInfo from "./workProcessComponents/IntroCallInfo";
import DiscoveryInfo from "./workProcessComponents/DiscoveryInfo";
import DesignInfo from "./workProcessComponents/DesignInfo";
import DevelopmentInfo from "./workProcessComponents/DevelopmentInfo";
import ProductLunchInfo from "./workProcessComponents/ProductLunchInfo";
import SupportInfo from "./workProcessComponents/SupportInfo";

const WorkProcess = () => {
  const [introCallInfo, setIntroCallInfo] = useState(true);
  const [discoverPhInfo, setDiscoverPhInfo] = useState(false);
  const [designPhInfo, setDesignPhInfo] = useState(false);
  const [developmentPhInfo, setDevelopmentPhInfo] = useState(false);
  const [productLunchInfo, setProductLunchInfo] = useState(false);
  const [supportInfo, setSupportInfo] = useState(false);

  return (
    <section className="w-full flex flex-col justify-between items-center">
      <div className="w-full flex flex-row justify-between items-center mx-5">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 2,
          }}
          className="w-full flex flex-row sm:flex-row justify-center p-5 sm:p-10">
          <div className="w-full h-auto flex flex-col sm:w-full sm:1/2 mx-5 sm:mx-10 p-5">
            <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
              Work{" "}
              <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
                Process{" "}
              </span>
            </h1>

            <div className=" w-full flex flex-row  gap-4 p-4 mx-2">
              <button
                onClick={() => {
                  setIntroCallInfo(true);
                  setDiscoverPhInfo(false);
                  setDesignPhInfo(false);
                  setDevelopmentPhInfo(false);
                  setProductLunchInfo(false);
                  setSupportInfo(false);
                }}
                className={`${
                  introCallInfo ? "text-coralred" : "text-[#193E65]"
                } flex flex-row gap-2 font-abelPro font-bold 
  text-20px sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
                INTRO CALL
              </button>
              <img
                src={workArrowImg}
                alt=""
                className="hover:translate-x-2 
  w-10 sm:w-8 md:w-10 lg:w-10 xl:w-12
  h-10 sm:h-8 md:h-10 lg:h-10 xl:h-12"
              />

              {/* end of intro call */}
              <button
                onClick={() => {
                  setIntroCallInfo(false);
                  setDiscoverPhInfo(true);
                  setDesignPhInfo(false);
                  setDevelopmentPhInfo(false);
                  setProductLunchInfo(false);
                  setSupportInfo(false);
                }}
                className={`${
                  discoverPhInfo ? "text-coralred" : "text-[#193E65]"
                } flex flex-row gap-2 font-abelPro font-bold 
  text-20px sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
                DISCOVERY PHASE
              </button>
              <img src={workArrowImg} alt="" className="hover:translate-x-2" />
              {/* end of DISCOVERY PHASE */}
              <button
                onClick={() => {
                  setIntroCallInfo(false);
                  setDiscoverPhInfo(false);
                  setDesignPhInfo(true);
                  setDevelopmentPhInfo(false);
                  setProductLunchInfo(false);
                  setSupportInfo(false);
                }}
                className={`${
                  designPhInfo ? "text-coralred" : "text-[#193E65]"
                } flex flex-row gap-2 font-abelPro font-bold 
  text-20px sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
                DESIGN PHASE
              </button>
              <img
                src={workArrowImg}
                alt=""
                className="hover:translate-x-2 
  w-10 sm:w-8 md:w-10 lg:w-10 xl:w-12
  h-10 sm:h-8 md:h-10 lg:h-10 xl:h-12"
              />
              {/* end of DESIGN PHASE */}
              <button
                onClick={() => {
                  setIntroCallInfo(false);
                  setDiscoverPhInfo(false);
                  setDesignPhInfo(false);
                  setDevelopmentPhInfo(true);
                  setProductLunchInfo(false);
                  setSupportInfo(false);
                }}
                className={`${
                  developmentPhInfo ? "text-coralred" : "text-[#193E65]"
                } flex flex-row gap-2 font-abelPro font-bold 
  text-20px sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
                DEVELOPMENT PHASE
              </button>
              <img
                src={workArrowImg}
                alt=""
                className="hover:translate-x-2 
  w-10 sm:w-8 md:w-10 lg:w-10 xl:w-12
  h-10 sm:h-8 md:h-10 lg:h-10 xl:h-12"
              />
              {/* end of DEVELOPMENT PHASE */}
            </div>
            {/* first line */}
            <div className="flex flex-row gap-4 p-4 mx-2">
              <button
                onClick={() => {
                  setIntroCallInfo(false);
                  setDiscoverPhInfo(false);
                  setDesignPhInfo(false);
                  setDevelopmentPhInfo(false);
                  setProductLunchInfo(true);
                  setSupportInfo(false);
                }}
                className={`${
                  productLunchInfo ? "text-coralred" : "text-[#193E65]"
                } flex flex-row gap-2 font-abelPro font-bold 
  text-20px sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
                PRODUCT LAUNCH
              </button>
              <img
                src={workArrowImg}
                alt=""
                className="hover:translate-x-2 
  w-10 sm:w-8 md:w-10 lg:w-10 xl:w-12
  h-10 sm:h-8 md:h-10 lg:h-10 xl:h-12"
              />
              {/* end of PRODUCT LAUNCH */}
              <button
                onClick={() => {
                  setIntroCallInfo(false);
                  setDiscoverPhInfo(false);
                  setDesignPhInfo(false);
                  setDevelopmentPhInfo(false);
                  setProductLunchInfo(false);
                  setSupportInfo(true);
                }}
                className={`${
                  supportInfo ? "text-coralred" : "text-[#193E65]"
                } flex flex-row gap-2 font-abelPro font-bold 
  text-20px sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
                SUPPORT
              </button>

              <img
                src={workArrowImg}
                alt=""
                className="hover:translate-x-2 
  w-10 sm:w-8 md:w-10 lg:w-10 xl:w-12
  h-10 sm:h-8 md:h-10 lg:h-10 xl:h-12"
              />
              {/* end of SUPPORT */}
            </div>
            <p className="w-full text-[#999999] font-abelPro mt-4 p-2">
              We work shoulder-to-shoulder with you in an open manner throughout
              the entire product life-cycle. To cover all details and ensure the
              completeness of the requirements elicitation, we start from a
              first call and meetings with a customer.
            </p>

            <div className="w-full mt-3">
              {introCallInfo && <IntroCallInfo />}
              {discoverPhInfo && <DiscoveryInfo />}
              {designPhInfo && <DesignInfo />}
              {developmentPhInfo && <DevelopmentInfo />}
              {productLunchInfo && <ProductLunchInfo />}
              {supportInfo && <SupportInfo />}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkProcess;
