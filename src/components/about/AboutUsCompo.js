/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { aboutImagehomePage } from "../../assets/index.js";
import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";
import { useInView } from "react-intersection-observer";

const AboutUsCompo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold as needed
  });
  return (
    <section className="w-full h-auto py-8 md:py-20 border-b-2 border-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:mx-2 lg:mx-4 md:mt-4 lg:mt-0">
          <motion.h1
            ref={ref}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 2,
            }}
            className="text-3xl md:text-4xl lg:text-5xl text-[#f37003]">
            Who We Are
          </motion.h1>

          <motion.h1
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 2,
            }}
            className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4">
            We are From Another Space to Automate the World
          </motion.h1>

          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 2,
            }}
            className="text-base md:text-lg lg:text-xl font-bodyFont leading-6 tracking-wide mt-4 mb-10">
            Nextzensoft works in multiple areas including software development,
            website development, customized software solutions, mobile app
            development, theme design, and development. Our dream is to continue
            your journey with success.
          </motion.p>

          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 2,
            }}>
            <Link
              to="/about"
              className="w-[150px] md:w-[170px] h-12 mt-4 bg-[#6556be] hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
              More About Us
            </Link>
          </motion.div>
        </div>
        {/* end of left div */}
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
          className="md:w-1/2 mt-8 md:mt-0">
          <div className="flex justify-center items-center">
            <img
              className="w-full md:w-[450px] lg:w-[600px] h-auto"
              src={aboutImagehomePage}
              alt="Image Description"
            />
          </div>
        </motion.div>
        {/* end of right div */}
      </div>
    </section>
  );
};

export default AboutUsCompo;
