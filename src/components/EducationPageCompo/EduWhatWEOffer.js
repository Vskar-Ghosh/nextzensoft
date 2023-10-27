/** @format */

import React from "react";
import { motion } from "framer-motion";

const EduWhatWEOffer = () => {
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
        <h1 className="font-abelPro text-deepBlue text-4xl md:text-5xl font-bold">
          What
          <br />
          <span className="text-coralred"> We </span>
          {""}Offer
        </h1>
        <p className="text-xl font-abelPro text-[#999999] leading-normal mt-3">
          We are an education software development company and we build
          cutting-edge educational software that helps academic institutions,
          individuals and corporate training organizations streamline teaching
          and learning processes, reduce manual workloads—and enhance the impact
          of their education programs.
        </p>
      </motion.div>
    </section>
  );
};

export default EduWhatWEOffer;
