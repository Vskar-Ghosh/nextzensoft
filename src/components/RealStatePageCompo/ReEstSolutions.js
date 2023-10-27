/** @format */

import React from "react";
import { motion } from "framer-motion";
import { RiStarFill } from "react-icons/ri";

import {
  realEstateBuy,
  realEstateFinance,
  realEstateProperty,
} from "../../assets/index";

const ReEstSolutions = () => {
  return (
    <section className="w-full flex flex-col pt-10 md:pt-20 py-5  pb-20 md:pb-40 justify-center items-center  bg-[#000412]">
      <div className="flex flex-col justify-center items-center text-center ">
        <h1 className="text-5xl text-white font-abelPro font-bold mb-20">
          Our Custom Real Estate Solutions
        </h1>
        {/* end of text */}
        <div className="flex lg:flex-row max-xl:flex-row xl:flex-row md:flex-col sm:flex-col max-sm:flex-col mx-3 gap-10">
          <div className="flex-col justify-start items-start  ml-3 mr-3">
            <div className="flex flex-col justify-start items-start">
              <img
                src={realEstateBuy}
                width={592}
                height={388}
                alt=""
                className=""
              />
            </div>
            {/* img end */}
            <div className="flex flex-col justify-start items-start mx-3 p-3">
              <h1 className="text-4xl text-white font-abelPro font-bold text-left mt-2">
                Buy, sell, rent homes
              </h1>
              <p className="text-xl text-white font-abelPro mt-2 text-left">
                From real estate listings to ibuying platforms and customer
                relationship management tools for agents, we can help you
                develop tailored web and mobile applications that make it easy
                to find, buy, sell or rent homes.
              </p>
            </div>
            {/* end of text=> */}

            <div className="flex flex-col justify-start items-start  p-3">
              <div className="flex flex-row justify-start items-start gap-2 mb-2">
                <div className="w-[50px] h-[50px] flex flex-col justify-center items-center text-coralred bg-white rounded-xl">
                  <RiStarFill />
                </div>
                <div className="flex flex-col p-2  justify-start items-start">
                  <h1 className="reEstHeadOne">Real Estate Booking App</h1>
                </div>
              </div>
              {/* end of item one */}
              <div className="flex flex-row justify-start items-start gap-2 mt2">
                <div className="w-[50px] h-[50px] flex flex-col justify-center items-center text-coralred bg-white rounded-xl">
                  <RiStarFill />
                </div>
                <div className="flex flex-col p-2  justify-start items-start">
                  <h1 className="reEstHeadOne">Custom Real Estate App</h1>
                </div>
              </div>
              {/* end of item 2 */}
              <div className="flex flex-row justify-start items-start gap-2 mt-2">
                <div className="w-[50px] h-[50px] flex flex-col justify-center items-center text-coralred bg-white rounded-xl">
                  <RiStarFill />
                </div>
                <div className="flex flex-col p-2  justify-start items-start ">
                  <h1 className="reEstHeadOne">Corporate Solutions</h1>
                </div>
              </div>
              {/* end item 3 */}
            </div>
            {/* end item hilder */}
          </div>
          {/* end of 1st one */}
          <div className="flex-col justify-start items-start  ml-3 mr-3">
            <div className="flex flex-col justify-start items-start">
              <img
                src={realEstateFinance}
                width={592}
                height={388}
                alt=""
                className=""
              />
            </div>
            {/* img end */}
            <div className="flex flex-col justify-start items-start mx-3 p-3">
              <h1 className="text-4xl text-white font-abelPro font-bold text-left mt-2">
                Finance homes
              </h1>
              <p className="text-xl text-white font-abelPro mt-2 text-left">
                Are you a startup looking to use financial technology to lower
                friction to buying a home? We can help you digitize the entire
                mortgage process and bring blockchain technology to democratize
                access to real estate investment.
              </p>
            </div>
            {/* end of text=> */}

            <div className="flex flex-col justify-start items-start  p-3">
              <div className="flex flex-row justify-start items-start gap-2 mt2">
                <div className="w-[50px] h-[50px] flex flex-col justify-center items-center text-coralred bg-white rounded-xl">
                  <RiStarFill />
                </div>
                <div className="flex flex-col p-2  justify-start items-start ">
                  <h1 className="reEstHeadOne">Payment Integration</h1>
                </div>
              </div>
              {/* item 1 */}
              <div className="flex flex-row justify-start items-start gap-2 mt-2">
                <div className="w-[50px] h-[50px] flex flex-col justify-center items-center text-coralred bg-white rounded-xl">
                  <RiStarFill />
                </div>
                <div className="flex flex-col p-2  justify-start items-start">
                  <h1 className="reEstHeadOne">HOA Management</h1>
                </div>
              </div>
              {/* item */}
              <div className="flex flex-row justify-start items-start gap-2 mt-2">
                <div className="w-[50px] h-[50px] flex flex-col justify-center items-center text-coralred bg-white rounded-xl">
                  <RiStarFill />
                </div>
                <div className="flex flex-col p-2  justify-start items-start">
                  <h1 className="reEstHeadOne">Real Estate CRM</h1>
                </div>
              </div>
              {/* item3 */}
            </div>
          </div>
          {/* end 2nd one */}
          <div className="flex-col justify-start items-start  ml-3 mr-3">
            <div className="flex flex-col justify-start items-start">
              <img
                src={realEstateProperty}
                width={592}
                height={388}
                alt=""
                className=""
              />
            </div>
            {/* img end */}
            <div className="flex flex-col justify-start items-start mx-3 p-3">
              <h1 className="text-4xl text-white font-abelPro font-bold text-left mt-2">
                Manage property
              </h1>
              <p className="text-xl text-white font-abelPro mt-2 text-left">
                We've built several SaaS-based property management platforms
                that foster meaningful interactions between tenants, landlords,
                and service providers and automate the day-to-day
                responsibilities of property owners.
              </p>
            </div>
            {/* end of text=> */}

            <div className="flex flex-col justify-start items-start  p-3">
              <div className="flex flex-row justify-start items-start gap-2">
                <div className="w-[50px] h-[50px] flex flex-col justify-center items-center text-coralred bg-white rounded-xl">
                  <RiStarFill />
                </div>
                <div className="flex flex-col p-2  justify-start items-start">
                  <h1 className="reEstHeadOne">
                    Property management platforms
                  </h1>
                </div>
              </div>
              {/* item-1 */}
              <div className="flex flex-row justify-start items-start gap-2">
                <div className="w-[50px] h-[50px] flex flex-col justify-center items-center text-coralred bg-white rounded-xl mt-3">
                  <RiStarFill />
                </div>
                <div className="flex flex-col p-2  justify-start items-start mt-3">
                  <h1 className="reEstHeadOne">
                    Intercome management software
                  </h1>
                </div>
              </div>
              {/* item-2 */}
              <div className="flex flex-row justify-start items-start gap-2">
                <div className="w-[50px] h-[50px] flex flex-col justify-center items-center text-coralred bg-white rounded-xl mt-3">
                  <RiStarFill />
                </div>
                <div className="flex flex-col p-2  justify-start items-start mt-3">
                  <h1 className="reEstHeadOne">Real Estate ERP Software</h1>
                </div>
              </div>
            </div>
          </div>
          {/* end 3rd one */}
        </div>
        {/* emd of conent holder */}
      </div>
    </section>
  );
};

export default ReEstSolutions;
