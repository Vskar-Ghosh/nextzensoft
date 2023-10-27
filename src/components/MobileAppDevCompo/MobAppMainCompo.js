/** @format */

import React from "react";
import { motion } from "framer-motion";

const MobAppMainCompo = () => {
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
          className="flex justify-center items-center mt-3 mx-auto">
          <h1 className="text-5xl text-coralred font-abelPro max-sm:mx-3 mx-3">
            Transforming Visions into Mobile Realities:{" "}
            <span className="text-5xl text-[#241468] font-abelPro max-sm:mx-3 mx-3 ">
              Our Mobile App Development Services
            </span>
          </h1>
        </motion.div>
        <div className="w-1/2 justify-start items-center p-3 mx-3 mt-5">
          <p className="text-xl sm:text-[12px] max-sm:text-[10px] md:text-[14px] text-[#999999] font-abelPro leading-normal">
            Our proficiency extends beyond native apps; we are experts in
            cross-platform development, allowing us to build mobile apps that
            work flawlessly on both iOS and Android, saving you time and
            resources.
          </p>
        </div>

        <div className="w-full sm:w-[90vw] lg:w-[80vw] xl:w-[70vw] h-auto flex flex-row mt-5 justify-center items-center gap-5 p-10">
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
            className="w-full sm:w-1/2 flex flex-col p-5">
            <h1 className="text-xl lg:text-2xl xl:2xl max-xl:text-4xl sm:text-[14px] max-sm:text-[14px] text-[#193E65] font-abelPro font-bold leading-normal mb-2 p-2">
              E-commerce applications
            </h1>
            <p className="text-[#999999] lg:text-lg sm:text-[12px] max-sm:text-[10px] md:text-[14px] font-abelPro leading-normal">
              As e-commerce is experiencing yet another moment of glory, it's
              crucial to not miss out on the opportunity to update your digital
              presence and make sure your products and services are available on
              all types of mobile devices. Should it be an app for an existing
              business or a new digital product developed from scratch, we've
              got you covered with years of experience and versatility.
            </p>
            <h1 className="text-xl lg:text-2xl xl:2xl max-xl:text-4xl sm:text-[14px] max-sm:text-[14px] text-[#193E65] font-abelPro font-bold leading-normal mb-2 p-2">
              Delivery and on-demand services
            </h1>
            <p className="text-[#999999] lg:text-lg sm:text-[12px] max-sm:text-[10px] md:text-[14px] font-abelPro leading-normal translate-x11 shadow-xl shadow-gray-300 p-3 translate-y11 skew-x-[6deg]">
              From a streamlined and straightforward tool for an on-demand
              delivery service that’s easy to navigate to an all-purpose
              multi-layer mobile system, we can make it work for you and your
              customers. Organize your staff’s work, manage deliveries, provide
              stellar customer service — all in one app on your phone. Save
              yourself from the agony of choosing between Android and IOS — go
              for a cross-platform mobile development allowing your product to
              adapt to hundreds of devices.
            </p>
          </motion.div>
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
            className="w-full sm:w-1/2 flex flex-col p-5">
            <h1 className="text-xl lg:text-2xl xl:2xl max-xl:text-4xlsm:text-[14px] max-sm:text-[14px] text-[#193E65] font-abelPro font-bold leading-normal mb-2 p-2">
              E-learning platforms
            </h1>
            <p className="text-[#999999] lg:text-lg sm:text-[12px] max-sm:text-[10px] md:text-[14px] font-abelPro leading-normal">
              We know how to design and customize a mobile learning platform to
              cater to the needs and demands of both students and teachers, keep
              them engaged, enable every party to achieve their goals, and
              overcome the challenges educational products might face.
            </p>
            <h1 className="text-xl lg:text-2xl xl:2xl max-xl:text-4xl sm:text-[14px] max-sm:text-[14px] text-[#193E65] font-abelPro font-bold leading-normal mb-2 p-2">
              Ride-sharing and taxi apps
            </h1>
            <p className="text-[#999999] lg:text-lg sm:text-[12px] max-sm:text-[10px] md:text-[14px] font-abelPro leading-normal translate-x11 shadow-xl shadow-gray-300 p-3 translate-y11 skew-y-[6deg]">
              Though carpooling apps have a similar operating principle and idea
              behind them, Brocoders can create a universal tool for both
              drivers and passengers, integrate maps, set up the payment system
              while also protecting your business from fraud, tailoring an app
              to your local market, and fine-tuning performance and quality.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MobAppMainCompo;
