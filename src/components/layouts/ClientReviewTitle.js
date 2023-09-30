/** @format */

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
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
      className="w-full flex flex-col justify-center items-center text-center gap-10 p-4 md:p-8 lg:p-12">
      <div className="flex flex-col gap-5">
        <h2 className="font-extrabold p-3 text-transparent text-4xl md:text-5xl lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4">
          What Our Customers Say
        </h2>

        {/* <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-green-500">
          <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-orange-500">
            {text}
          </span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2> */}
        <p className="text-base md:text-lg lg:text-xl font-bodyFont leading-6 tracking-wide">
          Our honorable and valuable clients share their values with us. Let’s
          hear our satisfied clients’ voices.
        </p>
      </div>
    </motion.div>
  );
};

export default ClientReviewTitle;
