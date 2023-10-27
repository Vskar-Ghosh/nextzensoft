/** @format */

import React from "react";
import { motion } from "framer-motion";
const WebAppMainCompo = () => {
  return (
    <div className="w-full py-3 flex flex-col justify-center sm:justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
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
          className="flex justify-center mt-3 mx-auto">
          <h1 className="text-6xl text-coralred font-abelPro">
            We are ready to meet{" "}
            <span className="text-6xl text-[#241468] font-abelPro">
              your challenges
            </span>
          </h1>
        </motion.div>
        <div className="w-1/2 justify-start items-center p-3 mx-3 mt-5">
          <p className="text-xl text-[#999999] font-abelPro leading-normal">
            We work with agile frameworks, which are perfect for building apps
            from job boards to marketplaces and social media platforms.
            Brocoders offers a full-service web development and the expertise
            you may rely on.
          </p>
        </div>

        <div className="w-full sm:w-[90vw] lg:w-[80vw] xl:w-[70vw] h-auto flex flex-row mt-5 justify-center items-center gap-5 p-10">
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
            className="w-full sm:w-1/2 flex flex-col p-5">
            <h1 className="text-xl sm:text-xl text-[#193E65] font-abelPro font-bold leading-normal mb-2 p-2">
              Front-end development
            </h1>
            <p className="text-[#999999] font-abelPro leading-normal">
              Create an application with an intuitive visual interface, or a
              responsive, SEO-optimized website with a clear human-centered
              design. We use progressive tools and technologies to build
              websites and web apps in alignment with your business purposes and
              brand, as well as stand up to design challenges of any complexity.
            </p>
            <h1 className="text-xl sm:text-xl text-[#193E65] font-abelPro font-bold leading-normal mb-2 p-2">
              DevOps and cloud infrastructure
            </h1>
            <p className="text-[#999999] font-abelPro leading-normal">
              Accelerate your business’ response to challenges of the modern
              business environment, where workload agility, efficiency, and
              flawless performance have become absolute necessities, and
              optimize testing and deployment costs significantly with DevOps
              services and cloud adoption.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 2,
            }}
            className="w-full sm:w-1/2 flex flex-col p-5">
            <h1 className="text-xl sm:text-xl text-[#193E65] font-abelPro font-bold leading-normal mb-2 p-2">
              Back-end development
            </h1>
            <p className="text-[#999999] font-abelPro leading-normal">
              Drive your product performance to new heights with powerful,
              stable, reliable, and scalable back-end systems. We apply best
              practices in web application architecture to ensure the coherence
              of business logic realization and secure you from any troubles on
              the server side or in the system core.
            </p>
            <h1 className="text-xl sm:text-xl text-[#193E65] font-abelPro font-bold leading-normal mb-2 p-2">
              Quality assurance
            </h1>
            <p className="text-[#999999] font-abelPro leading-normal">
              Bring the top-notch user experience by assuring the seamless and
              bug-free performance of your web application. Throughout the
              development cycle, we provide QA and all sorts of software testing
              of a product and its separate features to ensure its stability and
              efficiency along with proactivity in risk prediction,
              identification, and prevention.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WebAppMainCompo;
