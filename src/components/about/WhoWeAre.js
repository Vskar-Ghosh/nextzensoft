/** @format */

import React from "react";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="w-full flex flex-col pt-10 md:pt-20 py-5 md:py-10 pb-20 md:pb-40 justify-center items-center bg-[#f5f5f5] mt-10 md:mt-20">
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
        <h1 className="font-abelPro text-4xl md:text-5xl font-bold">
          Who
          <br />
          <span className="text-coralred"> We</span>
          <br />
          Are
        </h1>
        <p className="font-abelPro text-[#999999] leading-normal">
          We are the premier provider of software development and testing
          services. Having talented software engineers on board, we craft
          compelling web, desktop, and mobile applications for our clients.
          Since our inception, we have partnered with numerous companies and
          delivered operational gains to start-up, emerging, and established
          organizations in the United States and Canada.
        </p>
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
