/** @format */

import React from "react";
import { motion } from "framer-motion";
import { vissionImg, missionImg } from "../../../assets/index";

const MissionVissionComponent = () => {
  return (
    <section className="w-full py-3 flex flex-col items-center  ">
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
        className="flex flex-row justify-center p-10">
        <div className="w-1/2 flex flex-col  justify-center  mx-10 p-5 ">
          <h1 className="text-5xl text-coralred font-abelPro font-bold leading-normal">
            Our{" "}
            <span className="text-5xl text-[#193E65] font-abelPro font-bold leading-normal">
              Vission
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            Our global approach opens the doors to the best talent worldwide,
            and our culture of continuous learning and sharing fosters growth
            and innovation. We help you create diverse and complex software
            solutions for your business needs. Listening to your ideas, we
            implement and create custom software solutions from scratch,
            designed especially for your business. With Enosis, you get quality
            software and perfect service every time. Our global approach opens
            the doors to the best talent worldwide, and our culture of
            continuous learning and sharing fosters growth and innovation.
          </p>
        </div>
        {/* end of text */}
        <div>
          <img src={vissionImg} alt="" height={400} width={400}></img>
        </div>
        {/* end of photo */}
      </motion.div>

      {/* end of vission */}

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
        className="flex flex-row justify-center p-10">
        <div>
          <img src={missionImg} alt="" height={400} width={400}></img>
        </div>

        <div className="w-1/2 flex flex-col  justify-center  mx-10 p-5 ">
          <h1 className="text-5xl text-coralred font-abelPro font-bold leading-normal">
            Our{" "}
            <span className="text-5xl text-[#193E65] font-abelPro font-bold leading-normal">
              Mission
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            Our global approach opens the doors to the best talent worldwide,
            and our culture of continuous learning and sharing fosters growth
            and innovation. We help you create diverse and complex software
            solutions for your business needs. Listening to your ideas, we
            implement and create custom software solutions from scratch,
            designed especially for your business. With Enosis, you get quality
            software and perfect service every time. Our global approach opens
            the doors to the best talent worldwide, and our culture of
            continuous learning and sharing fosters growth and innovation.
          </p>
        </div>
        {/* end of text */}

        {/* end of photo */}
      </motion.div>
      {/* end of mission */}
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
        className="flex flex-row justify-center p-10">
        <div className="w-1/2 flex flex-col  justify-center  mx-10 p-5 ">
          <h1 className="text-5xl text-coralred font-abelPro font-bold leading-normal">
            Our{" "}
            <span className="text-5xl text-[#193E65] font-abelPro font-bold leading-normal">
              Values
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            Our global approach opens the doors to the best talent worldwide,
            and our culture of continuous learning and sharing fosters growth
            and innovation. We help you create diverse and complex software
            solutions for your business needs. Listening to your ideas, we
            implement and create custom software solutions from scratch,
            designed especially for your business. With Enosis, you get quality
            software and perfect service every time. Our global approach opens
            the doors to the best talent worldwide, and our culture of
            continuous learning and sharing fosters growth and innovation.
          </p>
        </div>
        {/* end of text */}
        <div>
          <img src={vissionImg} alt="" height={400} width={400}></img>
        </div>
        {/* end of photo */}
      </motion.div>
      {/* end of value */}
    </section>
  );
};

export default MissionVissionComponent;
