/** @format */

import React from "react";
import { motion } from "framer-motion";
import {
  realEstateNewApp,
  realEstateDigi,
  realEstateData,
} from "../../assets/index";

const ReEstWWO = () => {
  return (
    <section className="w-full flex flex-col pt-10 md:pt-20 py-5  pb-20 md:pb-40 justify-center items-center bg-[#000412]">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 2,
        }}
        className="w-full md:w-1/2 h-auto flex flex-col md:flex-row justify-center gap-5 md:gap-10 p-5 md:p-10">
        <h1 className="font-abelPro text-deepBlue text-4xl md:text-5xl font-bold">
          What
          <br />
          <span className="text-coralred"> We </span>
          {""}Offer
        </h1>
        <p className="text-xl font-abelPro text-[#999999] leading-normal mt-3">
          We're a proptech software development company. Our clients are both
          commercial and residential real estate startups, building management
          companies, real estate brokers, and institutional investors. We can
          help you build mobile and web applications, move your solutions to the
          cloud, or support and maintain your existing software.
        </p>
      </motion.div>
      {/* end */}
      <div className=" flex lg:flex-row max-xl:flex-col  max-sm:flex-col sm:flex-col gap-3 ">
        <div className="flex flex-col w-[350px] p-2">
          <div className="bg-white w-[70px] h-[70px] flex flex-col justify-center mx-4 mb-7 items-center rounded-lg">
            <img src={realEstateDigi} alt="" className="" />
          </div>

          <div className="mx-4">
            <h1 className="text-2xl text-white font-abelPro font-bold  ">
              Digital transformation
            </h1>
            <p className="text-lg text-white font-abelPro mt-4">
              Transform from analog to digital, data-driven, and tech-enabled
              enterprise.
            </p>
          </div>
        </div>
        {/* end1 */}
        <div className="flex flex-col w-[350px] p-2">
          <div className="bg-white w-[70px] h-[70px] flex flex-col justify-center mx-4 mb-7 items-center rounded-lg">
            <img src={realEstateNewApp} alt="" className="" />
          </div>

          <div className="mx-4">
            <h1 className="text-2xl text-white font-abelPro font-bold  ">
              New application development
            </h1>
            <p className="text-lg text-white font-abelPro mt-4">
              Build solutions that address challenges in the real estate
              industry.
            </p>
          </div>
        </div>
        {/* end-2 */}
        <div className="flex flex-col w-[350px] p-2">
          <div className="bg-white w-[70px] h-[70px] flex flex-col justify-center mx-4 mb-7 items-center rounded-lg">
            <img src={realEstateData} alt="" className="" />
          </div>

          <div className="mx-4">
            <h1 className="text-2xl text-white font-abelPro font-bold  ">
              Database Management and Curation
            </h1>
            <p className="text-lg text-white font-abelPro mt-4">
              With a lot of data to handle, do you often find yourself
              struggling to manage a database?. We will manage.
            </p>
          </div>
        </div>
        {/* end-3 */}
      </div>
    </section>
  );
};

export default ReEstWWO;
