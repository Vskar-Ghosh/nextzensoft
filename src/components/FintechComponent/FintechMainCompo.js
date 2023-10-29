/** @format */

import React from "react";
import { motion } from "framer-motion";
const FintechMainCompo = () => {
  return (
    <div className="w-full py-3 flex flex-col justify-center sm:justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
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
          className="flex justify-center mt-3 mx-auto"
        >
          <h1 className=" max-xl:text-8xl xl:text-7x lg:text-6xl md-text-5xl sm:text-3xl max-sm:text-3xl max-sm:mx-4 text-coralred font-abelPro">
            FinTech applications{" "}
            <span className=" max-xl:text-8xl xl:text-7x lg:text-6xl md-text-5xl sm:text-3xl max-sm:text-3xl text-[#241468] font-abelPro">
              we can develop
            </span>
          </h1>
        </motion.div>
        <div className="w-1/2 justify-start items-center p-3 mx-3 mt-5">
          <p className="text-base max-sm:text-sm text-[#999999] max-sm:w-full font-abelPro leading-normal">
            We work with agile frameworks, which are perfect for building apps
            from job boards to marketplaces and social media platforms.
            Nextzensoft offers a full-service web development and the expertise
            you may rely on.
          </p>
        </div>

        <div className="w-full sm:w-[90vw] lg:w-full xl:w-[70vw] h-auto flex flex-row md:flex-col sm:flex-col lg:flex-row max-lg:flex-row max-xl:flex-row xl:flex-row max-sm:flex-col mt-5 justify-center items-center gap-5 p-10">
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
            className="w-full sm:w-1/2 h-[390px] bg-white flex flex-col items-baseline shadow-xl p-5"
          >
            <h1 className="text-xl sm:text-xl text-[#193E65] font-abelPro font-bold leading-normal mb-2 p-2">
              AI-enabled Solutions
            </h1>
            <p className="text-[#999999] font-abelPro leading-normal">
              Stay ahead of the times with AI-powered back-office operations,
              predictive analytics and invaluable Big Data-driven insights
            </p>
            <h1 className="text-xl sm:text-xl text-[#193E65] font-abelPro font-bold leading-normal mb-2 p-2">
              Digital Banking Solutions
            </h1>
            <p className="text-[#999999] font-abelPro leading-normal">
              Provide a decent self-service experience across any device with a
              fraud-proof banking app to win your customers’ loyalty
            </p>
          </motion.div>
          {/* end */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 2,
            }}
            className="w-full sm:w-1/2 flex h-[390px] bg-white flex-col shadow-xl p-5"
          >
            <h1 className="text-xl sm:text-xl text-[#193E65] font-abelPro font-bold leading-normal  p-2">
              Finance Management Solutions
            </h1>
            <p className="text-[#999999] font-abelPro leading-normal">
              We create products that let end-users manage and control their
              personal finances, monitor and categorize expenses and make
              data-driven forecasts.
            </p>
            <h1 className="text-xl sm:text-xl text-[#193E65] font-abelPro font-bold leading-normal  p-2">
              Payments and Billing Solutions
            </h1>
            <p className="text-[#999999] font-abelPro leading-normal">
              Keep your clients satisfied with a full-cycle billing and payment
              statistics, smart real-time reporting and finance automation.
            </p>
          </motion.div>
          {/* end */}

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 2,
            }}
            className="w-full sm:w-1/2 h-[390px] bg-white flex flex-col shadow-xl p-5"
          >
            <h1 className="text-xl sm:text-xl text-[#193E65] font-abelPro font-bold leading-normal mb-2 p-2">
              Blockchain-Based Solutions
            </h1>
            <p className="text-[#999999] font-abelPro leading-normal">
              Leverage our Blockchain-based expertise to protect your end-users’
              sensitive data and ensure at-a-glance transactions with no third
              parties involved.
            </p>
            <h1 className="text-xl sm:text-xl text-[#193E65] font-abelPro font-bold leading-normal mb-2 p-2">
              Fintech App Development and Upgrade
            </h1>
            <p className="text-[#999999] font-abelPro leading-normal">
              We design a new project or enhance your solution with leading-edge
              UI/UX practices to let you deliver an outstanding user experience.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FintechMainCompo;
