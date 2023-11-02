/** @format */

import React from "react";
import { motion } from "framer-motion";
import { FcApproval, FcRight } from "react-icons/fc";
import { vissionImg, missionImg, valuesImg } from "../../../assets/index";
import { BrowserRouterasRouter } from "react-router-dom";

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
        className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center p-10">
        <div className="w-1/2 flex flex-col  justify-center  mx-10 p-5 ">
          <h1 className="text-5xl text-coralred font-abelPro font-bold leading-normal">
            Our{" "}
            <span className="text-5xl text-deepBlue font-abelPro font-bold leading-normal">
              Vission
            </span>
          </h1>
          <p className="tex-[#999999]  font-abelPro leading-normal">
            At Nextzensoft , we believe the promise of technology is
            boundless,but complicated with technical jargon and unknowns.We aim
            to simplify complex operations , create meaningful user
            experiences,and deliver sclable , enduring business value. We
            believe success is combination of satisfied customers,fulfilled
            employees,and useful solutins. Everything we do is intended to find
            the right balance of outcomers for the common benifits for all.
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
            We are a team of driven exparts.We are passionately committed to
            wrestling with the most complex business problems and applying
            technology systematically to solve them.we don't take a
            transactional approach to our engagenments.Rather, we foster
            personalized relationships built on trust and perpetual delivery of
            benefit over time. At Nextzensoft,we empower through technology.
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
          <div className="flex flex-col justify-start items-start p-2 gap-2">
            <div className="flex flex-row gap-2 items-start">
              <p className="text-[#999999] font-abelPro leading-normal">
                Our spirit of innovation keeps us motivated and constantly
                nudges us towards upgrading our skills to serve our clients
                better.
              </p>
            </div>
            {/* end 1 */}
            <div className="flex flex-row gap-2 items-start">
              <p className="text-[#999999] font-abelPro leading-normal">
                Our sense of commitment empowers us to create technological
                solutions that truly serve our clients.
              </p>
            </div>
            {/* end 2 */}
            <div className="flex flex-row gap-2 items-start">
              <p className="text-[#999999] font-abelPro leading-normal">
                As we are always in pursuit of excellence, we extend our
                limitations with an open mind to work with any tech stacks and
                app development methods.
              </p>
            </div>
            {/* end 3 */}
            <div className="flex flex-row gap-2 items-start">
              <p className="text-[#999999] font-abelPro leading-normal">
                We are constantly endeavoring to create a community of IT
                experts and businesses to nurture an everlasting ecosystem of
                sustainable and holistic prosperity.
              </p>
            </div>
            {/* end 4 */}
          </div>
        </div>
        {/* end of text */}
        <div>
          <img src={valuesImg} alt="" height={400} width={400}></img>
        </div>
        {/* end of photo */}
      </motion.div>
      {/* end of value */}
    </section>
  );
};

export default MissionVissionComponent;
