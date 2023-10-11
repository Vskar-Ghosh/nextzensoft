/** @format */

import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const ClientReviewTitle = () => {
  const [text] = useTypewriter({
    words: ["Testimonials"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.6,
        y: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
      }}
      className="w-full flex flex-col justify-center items-center text-center gap-5 p-4 md:p-8 lg:p-12">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="font-abelPro font-bold text-coralred text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4">
          What Our{" "}
          <span className="text-[#193E65] text-xl xl:text-6xl sm:text-2xl">
            Customers Say
          </span>
        </h2>

        <p className="text-[#193E65] font-adventPro text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-6 tracking-wide">
          Our honorable and valuable clients share their values with us. Let’s
          hear our satisfied clients’ voices.
        </p>
      </div>
    </motion.div>
  );
};

export default ClientReviewTitle;
