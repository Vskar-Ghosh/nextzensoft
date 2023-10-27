/** @format */

import React from "react";
import { motion } from "framer-motion";
import {
  delivryApp,
  pos,
  inventory,
  crm,
  supplyChanin,
  onlineEcom,
} from "../../assets/index";

const PhWhatWeOffer = () => {
  return (
    <div className="w-full py-3 flex flex-col justify-center sm:justify-center items-center ">
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
          <h1 className=" max-xl:text-8xl xl:text-7x lg:text-6xl md-text-5xl sm:text-3xl max-sm:text-3xl max-sm:mx-4 text-coralred text-center font-abelPro">
            Applications we can develop <br />
            <span className=" max-xl:text-8xl xl:text-7x lg:text-6xl md-text-5xl sm:text-3xl max-sm:text-3xl text-[#241468] text-center font-abelPro">
              to Streamline Pharmaceutical Operations{" "}
            </span>
          </h1>
        </motion.div>
        <div className="w-1/2 justify-start items-center p-3 mx-3 mt-5">
          <p className="text-base max-sm:text-sm text-[#999999] max-sm:w-full font-abelPro leading-normal">
            We at Nextzensoft offer customized and affordable pharmacy app
            development services for independent pharmacies, hospitals, and
            medicine delivery businesses.
          </p>
        </div>

        <div className="w-full flex flex-col  justify-center items-center gap-5 p-10">
          <div className="flex lg:flex-row xl:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center items-center gap-10">
            <div className="w-full sm:w-1/3  h-[350px] flex flex-col justify-start items-center shadow-lg rounded-md p-5">
              <div className=" w-full h-[120px] mt-2 mb-2 ">
                <img src={delivryApp} alt="" className="w-full h-[100px]" />
              </div>
              <h1 className=" lg:text-3xl max-sm:text-xl sm:text-xl text-deepBlue font-abelPro font-bold  mt-2">
                Medicine Delivery Mobile App
              </h1>
              <p className="text-base font-abelPro mt-3">
                Medicine delivery app development company enabling fast and
                convenient medicine ordering. Search for relevant medicine and
                its alternatives, upload prescriptions, experience expert
                counseling, etc. all in one place.
              </p>
            </div>
            {/* item1 */}
            <div className="w-full  h-[350px] sm:w-1/3 flex flex-col justify-start items-center shadow-lg rounded-md p-5">
              <div className=" w-full h-[120px] mt-2 mb-2 ">
                <img src={pos} alt="" className="w-full h-[100px]" />
              </div>
              <h1 className=" lg:text-3xl max-sm:text-xl sm:text-xl text-deepBlue font-abelPro font-bold  mt-2">
                POS Application/Software
              </h1>
              <p className="text-base font-abelPro mt-3">
                Powerful POS software to manage sale and purchase at thousands
                of pharmacy stores all at once. Experience fast billing speed,
                role-based data sharing with cashiers, and real-time
                synchronization with website/application.
              </p>
            </div>
            {/* end of item 2 */}
            <div className="w-full sm:w-1/3 h-[350px] flex flex-col justify-start items-center shadow-lg rounded-md p-5">
              <div className=" w-full h-[120px] mt-2 mb-2 ">
                <img src={inventory} alt="" className="w-full h-[100px]" />
              </div>
              <h1 className=" lg:text-3xl max-sm:text-xl sm:text-xl text-deepBlue font-abelPro font-bold  mt-2">
                Inventory Management Software
              </h1>
              <p className="text-base font-abelPro mt-3">
                Monitor and share medicine inventory status, order requests, new
                products, alternate brands, and shipment details. As an online
                medicine delivery app development company we also implement
                AI-powered integrations for better inventory forecasts,
                procurement management, and dynamic pricing updation.
              </p>
            </div>
            {/* end of item3 */}
          </div>
          {/* first row */}

          <div className="flex lg:flex-row xl:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center items-center gap-10">
            <div className="w-full sm:w-1/3  h-[350px] flex flex-col justify-start items-center shadow-lg rounded-md p-5">
              <div className=" w-full h-[120px] mt-2 mb-2 ">
                <img src={crm} alt="" className="w-full h-[100px]" />
              </div>
              <h1 className=" lg:text-3xl max-sm:text-xl sm:text-xl text-deepBlue font-abelPro font-bold  mt-2">
                Pharmaceutical CRM Software
              </h1>
              <p className="text-base font-abelPro mt-3">
                Cloud-based pharmaceutical CRM to manage patient/customer,
                healthcare professionals and pharmacies database. Visibility
                into the status of payment, ongoing orders, and inventory to
                streamline the pharmaceutical operations.
              </p>
            </div>
            {/* item1 */}
            <div className="w-full sm:w-1/3  h-[350px] flex flex-col justify-start items-center shadow-lg rounded-md p-5">
              <div className=" w-full h-[120px] mt-2 mb-2 ">
                <img src={supplyChanin} alt="" className="w-full h-[100px]" />
              </div>
              <h1 className=" lg:text-3xl max-sm:text-xl sm:text-xl text-deepBlue font-abelPro font-bold  mt-2">
                Supply Chain Management Software
              </h1>
              <p className="text-base font-abelPro mt-3">
                Streamline supply chain operations – demand and supply of
                medicines to pharmacies, tracking order deliveries, maintaining
                inventory, and more with advanced supply chain management
                software.
              </p>
            </div>
            {/* end of item 2 */}
            <div className="w-full sm:w-1/3  h-[350px] flex flex-col justify-start items-center shadow-lg rounded-md p-5">
              <div className=" w-full h-[120px] mt-2 mb-2 ">
                <img src={onlineEcom} alt="" className="w-full h-[100px]" />
              </div>
              <h1 className=" lg:text-3xl max-sm:text-xl sm:text-xl text-deepBlue font-abelPro font-bold  mt-2">
                ECommerce Web Portal
              </h1>
              <p className="text-base font-abelPro mt-3">
                User-friendly, mobile responsive, dynamic and robust performing
                websites and web apps to help patients with appointment booking,
                medicine orders, prescriptions, and complaint redress via
                helpdesk.
              </p>
            </div>
            {/* end of item3 */}
          </div>
          {/* end of 2nd row */}
        </div>

        {/* end of soft */}
      </div>
    </div>
  );
};

export default PhWhatWeOffer;
