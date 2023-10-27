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
} from "../../assets/index";

const ServiceWeProvide = () => {
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
            Services we{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              provide
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            In these hustle and bustle days, fintech has permeated into every
            corner of the world as a way to provide consumers with efficient and
            cost-effective solutions to their financial demands. It is
            revolutionizing the way people manage money and access financial
            services, making it easier and more convenient than ever before.
          </p>
        </div>
        {/* end of text */}
        <div className="w-full sm:w-auto">
          <img
            src={ftSWP}
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
            src={ftMOBPAY}
            alt=""
            className="w-[450px] h-[300px]    mx-auto sm:mx-5 md:mx-5"></img>
        </div>

        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Mobile{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Payment
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            Mobile payment is one of good fintech service example in the
            industry. This application revolutionized the entire industry,
            allowing customers to make and receive payments using their mobile
            devices. This technology has made it easier for customers to pay for
            goods and services without having cash. With the help of mobile
            payment, businesses can securely process payments and offer
            customers a variety of payment options.
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
            Mobile{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Banking
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            Mobile banking is steadily growing in the fintech industry as more
            and more people use mobile devices to check their bank accounts,
            transfer money, and much more. Mobile banking is convenient, secure,
            and easy to use, allowing users to manage their finances
            effectively. Mobile banking offers a wide range of features and
            services, including account management, balance transfers, bill
            payments…, and more. It also allows users to access their account
            information from anywhere with an internet connection. For example,
            users can check their balance or make payments directly from their
            mobile device without having to visit a physical bank or wait in
            line.
          </p>
        </div>
        {/* end of text */}
        <div>
          <img
            src={ftMOBNk}
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
            Blockchain{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Application
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            The advent of Blockchain technology in the fintech industry has
            changed how financial transactions are conducted. Blockchain is a
            distributed ledger technology (DLT) that offers a secure,
            transparent, and immutable way to record, store, and share data. It
            has enabled fintech companies to provide faster and more efficient
            services to their customers, which could be one of the examples of
            fintech solutions in the near future.
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
            Crowdfunding{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Platforms
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            Crowdfunding is an innovative fintech solution that helps businesses
            and entrepreneurs raise money more conveniently . By allowing
            individual investors to pool their resources to fund a project,
            crowdfunding has become a powerful way to finance new products and
            services. Crowdfunding platforms include a simple donation system
            accompanied by rewards-based funding or equity-based investments.
            Many platforms offer additional services, such as marketing and
            analytics, to help businesses reach their fundraising goals.
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
            Stock{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Trading
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            One of the most popular fintech service examples is stock trading,
            which allows people to buy and sell stocks and other financial
            assets. Stock trading is a great way to build wealth and diversify
            your portfolio, but it can also be risky if you need help figuring
            out what to do.
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
            Budgeting{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Application
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            Fintech has made important differences in the world of managing
            personal finance. Consumers can use budgeting and portfolio
            management apps to create their budgets. They can use these personal
            finance apps to record their financial transactions.
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
    </section>
  );
};

export default ServiceWeProvide;
