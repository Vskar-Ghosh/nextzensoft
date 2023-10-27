/** @format */

import React from "react";
import { motion } from "framer-motion";
import {
  Ph_icon1,
  Ph_icon2,
  Ph_icon3,
  Ph_icon4,
  Ph_icon5,
  Ph_icon6,
} from "../../assets/index";

const PhFeatures = () => {
  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-5xl font-abelPro font-bold text-coralred text-center mb-2">
        Functions and Features of a Pharmacy Application
      </h1>
      <div className="flex max-xl:flex-row xl:flex-row lg:flex-row max-sm:flex-col sm-flex-col md:flex-col justify-center items-center lg:gap-20 sm:gap-7 max-sm:gap-7 p-3 mt-10">
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
          className=" max-xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-full sm:w-full max-sm:w-full h-[300px] flex flex-row justify-center items-start gap-3 ">
          <div className="lg:w-[350px] max-sm:w-[350px]">
            <img src={Ph_icon1} alt="" className="" />
          </div>
          <div className="flex flex-col justify-start items-start gap-3 text-start">
            <h1 className="text-xl text-deepBlue font-abelPro font-bold">
              Complete digital twin of the conventional pharmacy store
            </h1>
            <p className="text-base font-abelPro ">
              We transform the conventional pharmacy store to a digital form by
              means of online pharmacy app development, through which thousands
              of medicines are stored in a database that can be queried within
              seconds and payments can be made instantly.
            </p>
          </div>
        </motion.div>
        {/*end of=> item 1 */}
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
          className=" max-xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-full sm:w-full max-sm:w-full h-[300px] flex flex-row justify-center items-start gap-3 ">
          <div className="lg:w-[350px] max-sm:w-[350px]">
            <img src={Ph_icon2} alt="" className="" />
          </div>
          <div className="flex flex-col justify-start items-start gap-3 text-start">
            <h1 className="text-xl text-deepBlue font-abelPro font-bold">
              Highly attractive interface
            </h1>
            <p className="text-base font-abelPro ">
              An interface that is easy to use and attractive to feel is very
              important for user onboarding. Our UX and UI developers have years
              of experience designing highly attractive and engaging interfaces
              that will make ordering using your pharmacy app a charm. Zero
              lagging time -- even highly intricate designs will work smoothly
              on all contemporary devices.
            </p>
          </div>
        </motion.div>
        {/* end of =>item2 */}
      </div>
      {/* end of => 1st row */}
      <div className="flex max-xl:flex-row xl:flex-row lg:flex-row max-sm:flex-col sm-flex-col md:flex-col justify-center items-center lg:gap-20 sm:gap-7 max-sm:gap-7 p-3 mt-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 2,
          }}
          className=" max-xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-full sm:w-full max-sm:w-full h-[300px] flex flex-row justify-center items-start gap-3 ">
          <div className="lg:w-[350px] max-sm:w-[350px]">
            <img src={Ph_icon3} alt="" className="" />
          </div>
          <div className="flex flex-col justify-start items-start gap-3 text-start">
            <h1 className="text-xl text-deepBlue font-abelPro font-bold">
              Enable real-time content management
            </h1>
            <p className="text-base font-abelPro ">
              Maintain the catalog of your medicines – both prescription and
              nonprescription medicines – using a highly intuitive and
              user-friendly content management system. Allow your distributors
              to update their own catalogs, or keep complete control under
              yourself or your admins.
            </p>
          </div>
        </motion.div>
        {/*end of=> item 1 */}
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
          className=" max-xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-full sm:w-full max-sm:w-full h-[300px] flex flex-row justify-center items-start gap-3 ">
          <div className="lg:w-[350px] max-sm:w-[350px]">
            <img src={Ph_icon4} alt="" className="" />
          </div>
          <div className="flex flex-col justify-start items-start gap-3 text-start">
            <h1 className="text-xl text-deepBlue font-abelPro font-bold">
              We provide multicurrency online payments
            </h1>
            <p className="text-base font-abelPro ">
              Take your pharmacy app international by allowing pharmacies in
              different countries to sell their medicines locally. The app can
              be easily customized for local currencies and the same app can be
              downloaded in different regions of the world using their own
              indigenous currencies. You will earn money in your own currency.
            </p>
          </div>
        </motion.div>
        {/* end of =>item2 */}
      </div>
      {/* end of => 2nd row */}
      <div className="flex max-xl:flex-row xl:flex-row lg:flex-row max-sm:flex-col sm-flex-col md:flex-col justify-center items-center lg:gap-20 sm:gap-7 max-sm:gap-7 p-3 mt-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 2,
          }}
          className=" max-xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-full sm:w-full max-sm:w-full h-[300px] flex flex-row justify-center items-start gap-3 ">
          <div className="lg:w-[350px] max-sm:w-[350px]">
            <img src={Ph_icon5} alt="" className="" />
          </div>
          <div className="flex flex-col justify-start items-start gap-3 text-start">
            <h1 className="text-xl text-deepBlue font-abelPro font-bold">
              Completely secure transactions
            </h1>
            <p className="text-base font-abelPro ">
              The medical perceptions and the order history of your customers is
              confidential. Our pharmacy mobile app development services provide
              complete encryption and privacy to all the transactions that take
              place through our mobile apps. We can incorporate SSL and
              end-to-end encryption to all incoming and outgoing transactional
              messages.
            </p>
          </div>
        </motion.div>
        {/*end of=> item 1 */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            y: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 2,
          }}
          className=" max-xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-full sm:w-full max-sm:w-full h-[300px] flex flex-row justify-center items-start gap-3 ">
          <div className="lg:w-[350px] max-sm:w-[350px]">
            <img src={Ph_icon6} alt="" className="" />
          </div>
          <div className="flex flex-col justify-start items-start gap-3 text-start">
            <h1 className="text-xl text-deepBlue font-abelPro font-bold">
              Analytics and reporting
            </h1>
            <p className="text-base font-abelPro ">
              Analytics tools enable you to introduce data-driven decisions in
              your business, conduct audits empowered by detailed reports, and
              develop effective strategies.
            </p>
          </div>
        </motion.div>
        {/* end of =>item2 */}
      </div>
      {/* end of 3rd => row */}
    </div>
  );
};

export default PhFeatures;
