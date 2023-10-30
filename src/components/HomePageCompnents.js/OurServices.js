/** @format */

import React, { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import {
  softDevAni,
  webDevAni,
  mobDevAni,
  digitaltTransAni,
} from "../../assets/index.js";

const OurServices = () => {
  const [refresh, setRefresh] = useState(0); // State to trigger refresh
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const servicesComponent = servicesRef.current;
      if (servicesComponent) {
        // Refresh the component
        setRefresh((prevRefresh) => prevRefresh + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      key={refresh}
      ref={servicesRef}
      className="w-full  py-5 mt-20 mb-5 items-center ">
      <div className="w-full flex flex-col ">
        <div className="p-5 flex justify-center">
          <h1 className="text-5xl text-coralred font-abelPro font-bold leading-normal">
            Our{" "}
            <span className="text-5xl text-[#193E65] font-abelPro font-bold leading-normal">
              Services
            </span>
          </h1>
        </div>
        {/* end h1= div ==> */}
        <div className="w-full flex flex-wrap justify-center gap-5">
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
            className=" flex flex-col  w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[380px] rounded-xl shadow-2xl ">
            <Lottie
              loop={true}
              animationData={softDevAni}
              className=" w-full h-[180px] bg-black justify-center items-center"
            />

            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-1 ">
              Custom Software Development
            </h2>
            <p className="font-abelPro text-[#999999] p-2">
              We help you create diverse and complex software solutions for your
              business needs. Listening to your ideas, we implement and create
              custom software solutions from scratch, designed especially for
              your business. With Enosis, you get quality software and perfect
              service every time.
            </p>
          </motion.div>
          {/* end */}
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
            className=" flex flex-col  w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[380px] rounded-xl shadow-2xl ">
            <Lottie
              loop={true}
              animationData={webDevAni}
              className=" w-full h-[180px] bg-black justify-center items-center"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-1">
              Web Application Development
            </h2>
            <p className="font-abelPro text-[#999999] p-2">
              Powered with 3+ years of experience in web design and development,
              the Brocoders team treats our clients as partners, not just
              customers: we trust in your ideas and know how to translate your
              vision into leading-edge web applications and personalized
              websites.
            </p>
          </motion.div>

          {/* end */}
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
            className=" flex flex-col  w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[380px] rounded-xl shadow-2xl ">
            <Lottie
              loop={true}
              animationData={mobDevAni}
              className=" w-full h-[180px] bg-black justify-center items-center"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-1">
              Mobile Application Development
            </h2>
            <p className="font-abelPro text-[#999999] p-2">
              Bring your products and services closer to their users by
              implementing a custom mobile application developed with your
              business objectives in mind. We know how to do this in a fast and
              cost-efficient way for both iOS and Android, without compromising
              quality and usability.
            </p>
          </motion.div>

          {/* end */}
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
            className=" flex flex-col  w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[380px] rounded-xl shadow-2xl ">
            <Lottie
              loop={true}
              animationData={digitaltTransAni}
              className=" w-full h-[180px] bg-black justify-center items-center"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-1 ">
              Digital Transformation
            </h2>
            <p className="font-abelPro text-[#999999] p-2">
              In This digital age, adopting cutting-edge technology, and
              redefining business strategies to stay competitive in the rapidly
              evolving technology landscape. It involves the modernization of
              legacy systems, enhancing agility, optimizing processes, and
              leveraging data-driven insights to drive growth and ensure
              long-term success.
            </p>
          </motion.div>

          {/* end */}
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
            className=" flex flex-col  w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[380px] rounded-xl shadow-2xl ">
            <Lottie
              loop={true}
              animationData={digitaltTransAni}
              className=" w-full h-[180px] bg-black justify-center items-center"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-1 ">
              DevOps and Cloud Services
            </h2>
            <p className="font-abelPro text-[#999999] p-2">
              Faster product development and deployment, enhanced quality and
              efficiency, increased delivery capacity, stability, and resilience
              to failures — all this and more can be brought to you by
              implementing the best cloud architecture and DevOps practices,
              applied by our cross-functional team with 3+ years of experience.
            </p>
          </motion.div>

          {/* end */}
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
            className=" flex flex-col  w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[380px] rounded-xl shadow-2xl ">
            <Lottie
              loop={true}
              animationData={digitaltTransAni}
              className=" w-full h-[180px] bg-black justify-center items-center"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-1 hover:text-coralred ">
              Product Development
            </h2>
            <p className="font-abelPro text-[#999999] p-2">
              We are ready to either polish your MVP so you can reach a
              Product-Market Fit and start gaining decent traction or underpin
              your product with additional powerful features that make your
              solution of a higher value.
            </p>
          </motion.div>

          {/* end */}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
