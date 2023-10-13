/** @format */

import React from "react";
import { motion } from "framer-motion";
import { customSoftImg } from "../../assets/index";

const EngagementModel = () => {
  return (
    <div className="w-full py-3 flex flex-col justify-center sm:justify-center items-center p-8 bg-green-200">
      <div className="w-full flex flex-col justify-center items-center bg-yellow-300">
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
          className="flex justify-center mb-10 mx-auto ">
          <h1 className="text-6xl xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl text-coralred font-abelPro">
            Our{" "}
            <span className="text-6xl text-[#241468] font-abelPro">
              Engagement Model
            </span>
          </h1>
        </motion.div>
        {/* end of headind */}

        <div className="w-[50vw] sm:w-1/2 xl:w-[50vw] lg:w-[50vw]  mx-5 sm:mx-10 p-5 bg-blue-200">
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
            href="/"
            className="w-[180px]  mb-2 flex flex-row gap-1 items-center">
            <h2 className=" text-xl text-coralred font-bold">Learn more</h2>
            <img src={customSoftImg} alt="" className=" flex  items-center" />
          </a>
        </div>
        {/* end */}

        <div className="w-full sm:w-1/2 xl:w-full lg:w-full flex flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col   mx-5 sm:mx-10 p-5 bg-orange-300 ">
          <div>
            <img src={customSoftImg} alt="" className=" flex  items-center" />
          </div>

          <div className="w-[70vw] flex flex-col">
            <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
              Web{" "}
              <span className="text-3xl sm:text-xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
                Application Development
              </span>
            </h1>
            <p className="tex-[#999999] font-abelPro leading-normal">
              We help you create diverse and complex software solutions for your
              business needs. Listening to your ideas, we implement and create
              custom software solutions from scratch, designed especially for
              your business. With Enosis, you get quality software and perfect
              service every time.
            </p>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default EngagementModel;
