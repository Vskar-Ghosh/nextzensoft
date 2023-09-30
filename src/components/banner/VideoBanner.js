/** @format */

import React from "react";

import "./BannerCustomCss.css";
// import { videoOne } from "../../assets/index.js";
import { motion } from "framer-motion";

const VideoBanner = () => {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.3,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 2,
      }}
      className="w-full lg:w-1/2 flex justify-center items-center relative rounded-lg">
      {/* <video
        className="rounded-lg light-gray-shadow w-full lg:w-[1200px] h-auto lg:h-[400px] z-10"
        src={videoOne}
        autoPlay
        loop
        muted
        playsInline
      /> */}
    </motion.div>
  );
};

export default VideoBanner;
