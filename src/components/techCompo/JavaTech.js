/** @format */

import React from "react";
import { motion } from "framer-motion";
import { useOfJava } from "../../assets/index";
const JavaTech = () => {
  return (
    <section className="w-full  py-0 ">
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
              Java{" "}
              <span className="text-3xl sm:text-5xl text-[#193E65] font-abelPro font-bold leading-normal mb-3">
                development
              </span>
            </h1>
            <p className="text-[#999999] font-abelPro leading-normal mt-3">
              Our vast expertise in Java development covers the full software
              development life cycle: from IT audit and to continuous
              support.Nextzensoft maintains a wide range of Java software
              development services using a personalized technical approach. We
              cover all types of applications from consumer-oriented to
              enterprise-grade solutions serving B2B, B2C, or B2E sectors.
            </p>
          </div>
          {/* Image */}
          <div className="w-full sm:w-auto">
            <img
              src={useOfJava}
              alt=""
              className="w-[450px] h-[300px]  rounded-full  mx-auto sm:mx-3 md:mx-5"
            />
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default JavaTech;
