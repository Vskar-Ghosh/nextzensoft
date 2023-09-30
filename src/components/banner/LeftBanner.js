/** @format */

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["To Architect The Dream. For Next Generation."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 0.3,
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 2,
      }}
      className="w-full lg:w-1/2 flex flex-col gap-5 ml-4 md:ml-8">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg md:text-xl font-normal">
          WELCOME TO Nextzensoft
        </h4>
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-[#f37003] whitespace-nowrap">
          Elite{" "}
          <span className="font-extrabold text-transparent text-xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4 md:mt-0 whitespace-nowrap">
            Software Development
          </span>
        </h1>

        <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-red">
          Company <span className="text-[#f37003]">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base md:text-lg font-bodyFont leading-6 tracking-wide">
          Nexzensoft, Limited. has a global reputation for an up-to-scratch
          customer experience which marks us as one of the best software
          development companies in the world.
        </p>
      </div>
      {/* Media */}
      {/* <Media /> */}
    </motion.div>
  );
};

export default LeftBanner;
