/** @format */

import React from "react";
import { motion } from "framer-motion";
import { whatWeOfferImg } from "../../assets/index";

const WhatWeOffer = () => {
  return (
    <section className="w-full py-3 flex flex-col items-center">
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
        {/* Text Content */}
        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal">
            What{" "}
            <span className="text-3xl sm:text-5xl text-[#193E65] font-abelPro font-bold leading-normal mb-3">
              We Offer
            </span>
          </h1>
          <p className="text-[#999999] font-abelPro leading-normal mt-3">
            We build software development teams that grow with our clients, from
            the early stages to whatever they aspire to be. Our expertise
            includes front-end, backend, database, and server solutions for
            mobile, web, and desktop applications. Our purpose is to provide our
            clients with expert guidance and to build software vital to their
            organizations.
          </p>
        </div>
        {/* Image */}
        <div className="w-full sm:w-auto">
          <img
            src={whatWeOfferImg}
            alt=""
            className="w-[450px] h-[300px] max-xl:skew-y-12 xl:skew-y-12 sm:skew-y-3 rounded-full shadow-xl mx-auto sm:mx-3 md:mx-5"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default WhatWeOffer;
