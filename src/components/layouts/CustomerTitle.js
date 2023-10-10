/** @format */

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const CustomerTitle = () => {
  const [text] = useTypewriter({
    words: [
      "We pride ourselves in being trusted",
      " and having the opportunity to work with leading companies in their respective fields.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.6,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
      }}
      className="w-full flex justify-center items-center text-center gap-5 p-4 md:p-8 lg:p-12">
      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-abelPro font-bold text-coralred ">
          Our Customers{" "}
          <span className="text-4xl md:text-6xl lg:text-7xl font-abelPro text-white">
            Worldwide
          </span>
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-green-500">
          <span className="text-2xl md:text-4xl lg:text-5xl font-adventPro text-coralred">
            {text}
          </span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base md:text-lg lg:text-xl font-bodyFont leading-6 tracking-wide">
          {/* Add your description text here */}
        </p>
      </div>
    </motion.div>
  );
};

export default CustomerTitle;
