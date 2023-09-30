/** @format */

import React from "react";
import { motion } from "framer-motion";
// import { software1, development } from "../../assets/index.js";

const MissionVissionComponent = () => {
  return (
    <section className="w-full py-3 items-center bg-[#65a6c6] ">
      <div className="relative">
        {/* <img src={missionbg} alt="banner" /> */}
      </div>
      <div className="w-full h-auto flex flex-row items-center gap-20 ml-5 mr-5 p-10">
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
          className="w-1/3 h-[300px] bg-[#fbf6f64c] shadow-xl rounded-lg p-5">
          <h1 className="text-white text-start text-4xl font-bold ">
            Our Mission
          </h1>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 2,
          }}
          className="w-1/3 h-[300px] bg-red-400 p-5 shadow-xl rounded-lg ">
          <h1 className="text-white text-start text-4xl font-bold ">
            Our Vission
          </h1>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing
          </p>
        </motion.div>
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
          className="w-1/3 h-[300px] bg-red-400 p-5 shadow-xl rounded-lg">
          <h1 className="text-white text-start text-4xl font-bold ">
            Our Values
          </h1>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVissionComponent;
