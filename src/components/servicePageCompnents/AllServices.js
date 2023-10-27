/** @format */

import React from "react";
import { motion } from "framer-motion";

import {
  customSoftImg,
  webAppImg,
  mobileAppImg,
  softwareTestImg,
  learnArrowImg,
} from "../../assets/index";

const AllServices = () => {
  return (
    <section className="w-full py-3 flex flex-col sm:justify-center items-center  ">
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
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10 ">
        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Custom{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Software Development
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            We help you create diverse and complex software solutions for your
            business needs. Listening to your ideas, we implement and create
            custom software solutions from scratch, designed especially for your
            business. With Enosis, you get quality software and perfect service
            every time.
          </p>
          <a
            href="/customsoftwarepage"
            className="w-[180px]  mb-2 flex flex-row gap-1 items-center">
            <h2 className=" text-xl text-coralred font-bold">Learn more</h2>
            <img src={learnArrowImg} alt="" className=" flex  items-center" />
          </a>
        </div>
        {/* end of text */}
        <div className="w-full sm:w-auto">
          <img
            src={customSoftImg}
            alt=""
            className="w-[450px] h-[300px] max-xl:skew-y-12 xl:skew-y-12 sm:skew-y-3   mx-auto sm:mx-5 md:mx-5"></img>
        </div>
        {/* end of photo */}
      </motion.div>

      {/* end of custom */}

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
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10">
        <div>
          <img
            src={webAppImg}
            alt=""
            className="w-[450px] h-[300px]    mx-auto sm:mx-5 md:mx-5"></img>
        </div>

        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Web{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Application Development
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            Powered with 3+ years of experience in web design and development,
            the Brocoders team treats our clients as partners, not just
            customers: we trust in your ideas and know how to translate your
            vision into leading-edge web applications and personalized websites.
          </p>
          <a
            href="/webappdevpage"
            className="w-[180px]  mb-2 flex flex-row gap-1 items-center">
            <h2 className=" text-xl text-coralred font-bold">Learn more</h2>
            <img src={learnArrowImg} alt="" className=" flex  items-center" />
          </a>
        </div>
        {/* end of text */}

        {/* end of photo */}
      </motion.div>
      {/* end of web */}
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
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10">
        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Mobile{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Application Development
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            Bring your products and services closer to their users by
            implementing a custom mobile application developed with your
            business objectives in mind. We know how to do this in a fast and
            cost-efficient way for both iOS and Android, without compromising
            quality and usability.
          </p>
          <a
            href="/mobileppdevpage"
            className="w-[180px]  mb-2 flex flex-row gap-1 items-center">
            <h2 className=" text-xl text-coralred font-bold">Learn more</h2>
            <img src={learnArrowImg} alt="" className=" flex  items-center" />
          </a>
        </div>
        {/* end of text */}
        <div>
          <img
            src={mobileAppImg}
            alt=""
            className="w-[450px] h-[300px] max-xl:skew-y-12 xl:skew-y-12 sm:skew-y-3   mx-auto sm:mx-5 md:mx-5"></img>
        </div>
        {/* end of photo */}
      </motion.div>
      {/* end of value */}
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
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10">
        <div>
          <img
            src={softwareTestImg}
            alt=""
            className="w-[450px] h-[300px]    mx-auto sm:mx-5 md:mx-5"></img>
        </div>

        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Quality{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Assurance & Testing
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            Powered with 3+ years of experience in web design and development,
            the Brocoders team treats our clients as partners, not just
            customers: we trust in your ideas and know how to translate your
            vision into leading-edge web applications and personalized websites.
          </p>
          <a
            href="/"
            className="w-[180px]  mb-2 flex flex-row gap-1 items-center">
            <h2 className=" text-xl text-coralred font-bold">Learn more</h2>
            <img src={learnArrowImg} alt="" className=" flex  items-center" />
          </a>
        </div>
        {/* end of text */}

        {/* end of photo */}
      </motion.div>
    </section>
  );
};

export default AllServices;
