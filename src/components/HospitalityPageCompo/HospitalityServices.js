/** @format */

import React from "react";
import { motion } from "framer-motion";
import {
  ftSWP,
  ftMOBPAY,
  ftMOBNk,
  ftBLC,
  ftCWF,
  ftSTCK,
  ftBUGTAP,
  hospitalit1,
  customSoft,
  resturant,
} from "../../assets/index";

const HospitalityServices = () => {
  return (
    <section className="w-full py-3 flex flex-col sm:justify-center items-center  ">
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
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10 ">
        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Hospitality Software{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Development Services
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            The Hospitality industry needs to allocate resources to clients
            according to their requirements and manage inventory accordingly.
            Technology can help improve customer satisfaction by simplifying and
            optimizing the operations of the industry. It can help businesses
            develop incredible marketing strategies, through data analytics of
            the website and social media, and attract customer attention by
            anticipating their requirements.
          </p>
        </div>
        {/* end of text */}
        <div className="w-full sm:w-auto">
          <img
            src={hospitalit1}
            alt=""
            className="w-[450px] h-[300px] max-xl:skew-y-12 xl:skew-y-12 sm:skew-y-3   mx-auto sm:mx-5 md:mx-5"></img>
        </div>
        {/* end of photo */}
      </motion.div>

      {/* end of custom */}

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
        <div>
          <img
            src={customSoft}
            alt=""
            className="w-[450px] h-[300px]    mx-auto sm:mx-5 md:mx-5"></img>
        </div>

        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Custom Hospitality software{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              solutions
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            Our customer experience management software incorporates all the
            steps of interaction with your customers, from booking a hotel to
            examining it, to the post-trip period when they might want to give
            feedback, verify details of their trip, or choose a new one.
          </p>
        </div>
        {/* end of text */}

        {/* end of photo */}
      </motion.div>
      {/* end of web */}
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
        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Restaurant management
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              software
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            We develop an automated and coherent view of the system managing the
            kitchen, bar, stores, etc., on a single platform. A system resolves
            the challenges faced by restaurants by rationalizing store
            management, accounting functionalities, be it a restaurant or a
            chain of restaurants.
          </p>
        </div>
        {/* end of text */}
        <div>
          <img
            src={resturant}
            alt=""
            className="w-[450px] h-[300px] max-xl:skew-y-12 xl:skew-y-12 sm:skew-y-3   mx-auto sm:mx-5 md:mx-5"></img>
        </div>
        {/* end of photo */}
      </motion.div>
      {/* end of value */}
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
        <div>
          <img
            src={ftBLC}
            alt=""
            className="w-[450px] h-[300px]    mx-auto sm:mx-5 md:mx-5"></img>
        </div>

        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Property management{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              software
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            We create an online platform that integrates the latest and most
            important management techniques and technology to reduce costs and
            maximize income. A strong and intuitive system assists you in
            looking for the right market opportunities and building stronger
            relationships by offering customer insights
          </p>
        </div>
        {/* end of text */}
      </motion.div>
      {/* end of blochain */}
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
        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Inventory management{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              solutions
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            An entire inventory management solution will involve management
            software, mobile computers and label printers. These tools will
            empower your business to track inventory levels and movements in
            your warehouse.
          </p>
        </div>
        {/* end of text */}
        <div>
          <img
            src={ftCWF}
            alt=""
            className="w-[450px] h-[300px] max-xl:skew-y-12 xl:skew-y-12 sm:skew-y-3   mx-auto sm:mx-5 md:mx-5"></img>
        </div>
        {/* end of photo */}
      </motion.div>
      {/* end of cloudfunding */}

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
        <div>
          <img
            src={ftSTCK}
            alt=""
            className="w-[450px] h-[300px]    mx-auto sm:mx-5 md:mx-5"></img>
        </div>

        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Universal recreational{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              booking engine
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            We develop a sustainable solution with multi-tenant architecture
            with database sharing and a separate storage for individual
            customers. The team utilizes the latest technology and architecture
            to make the software robust and reliable.
          </p>
        </div>
        {/* end of text */}
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
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10">
        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Events management{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              system
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            I-Four develops sustainable technology solutions that help manage
            events like conferences successfully with features present in the
            system, which provide a personalized system to manage unique events.
          </p>
        </div>
        {/* end of text */}
        <div>
          <img
            src={ftBUGTAP}
            alt=""
            className="w-[450px] h-[300px]    mx-auto sm:mx-5 md:mx-5"></img>
        </div>
      </motion.div>
      {/* end */}
    </section>
  );
};

export default HospitalityServices;
