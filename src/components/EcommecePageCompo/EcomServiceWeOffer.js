/** @format */

import React from "react";

import {
  eC_B2C,
  eC_B2B,
  eC_Api,
  eC_C_integration,
  eC_Migration,
  eC_storage,
  eC_MultiV,
  eC_Mob,
  eC_Web,
} from "../../assets/index";

const EcomServiceWeOffer = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-white mb-20">
      <h1 className=" max-xl:text-6xl xl:text-6xl  lg:text-6xl md:text-5xl sm:text-4xl max-sm:text-4xl text-center text-coralred font-abelPro font-bold leading-normal mb-10 mt-5">
        E-Commerce Development{" "}
        <span className="max-xl:text-6xl xl:text-6xl  lg:text-6xl md:text-5xl sm:text-4xl max-sm:text-4xl text-center text-[#193E65] font-abelPro font-bold leading-normal">
          Solutions We Offer
        </span>{" "}
      </h1>
      {/* heading end => */}
      <div className="flex flex-col max-xl:flex-row xl:flex-row max-lg:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center items-center gap-5 p-3 mt-5 ml-5 mr-5">
        <div className="w-[350px] h-[350px] flex flex-col justify-start items-start p-3">
          <div className="flex flex-col justify-center items-center bg-white p-5 rounded-xl shadow-xl w-[100px] h-[100px]">
            <img
              src={eC_B2C}
              alt=""
              style={{ maxWidth: "90px", maxHeight: "90px" }}
              className="w-[90px] h-[90px]"
            />
          </div>
          <div className="flex flex-col mt-3 gap-2 items-start">
            <h1 className="text-2xl font-abelPro font-bold text-deepBlue">
              B2C E-commerce Platforms
            </h1>
            <p className="text-lg font-abelPro max-w-[300px] mx-auto items-start">
              Owning a wholesale or retail business in the locality? Now, unlock
              the vastness of the consumer base with B2C Marketplace Development
              Solution.
            </p>
          </div>
        </div>
        {/* item=>1 */}
        <div className="w-[350px] h-[350px] flex flex-col justify-start items-start p-3">
          <div className="flex flex-col justify-center items-center bg-white p-5 rounded-xl shadow-xl w-[100px] h-[100px]">
            <img
              src={eC_B2B}
              alt=""
              style={{ maxWidth: "90px", maxHeight: "90px" }}
              className="w-[90px] h-[90px]"
            />
          </div>
          <div className="flex flex-col mt-3 gap-2 items-start">
            <h1 className="text-2xl font-abelPro font-bold text-deepBlue">
              B2C E-commerce Platforms
            </h1>
            <p className="text-lg font-abelPro max-w-[300px] mx-auto items-start">
              Providing products and services to business clients? Now do the
              same on the digital marketplace. Enhance the efficiency by opting
              for a B2B Marketplace Development Solution.
            </p>
          </div>
        </div>
        {/* item=>2 */}
        <div className="w-[350px] h-[350px] flex flex-col justify-start items-start p-3">
          <div className="flex flex-col justify-center items-center bg-white p-5 rounded-xl shadow-xl w-[100px] h-[100px]">
            <img
              src={eC_MultiV}
              alt=""
              style={{ maxWidth: "90px", maxHeight: "90px" }}
              className="w-[90px] h-[90px]"
            />
          </div>
          <div className="flex flex-col mt-3 gap-2 items-start">
            <h1 className="text-2xl font-abelPro font-bold text-deepBlue">
              Multi-vendor platforms
            </h1>
            <p className="text-lg font-abelPro max-w-[300px] mx-auto items-start">
              Planning to earn some cash from other’s inventory? Get a
              multivendor marketplace and render opportunities to other sellers.
            </p>
          </div>
        </div>
        {/* item=>3 */}
      </div>

      {/* 1st row */}

      <div className="flex flex-col max-xl:flex-row xl:flex-row max-lg:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center items-center gap-5 p-3 mt-5 ml-5 mr-5">
        <div className="w-[350px] h-[350px] flex flex-col justify-start items-start p-3">
          <div className="flex flex-col justify-center items-center bg-white p-5 rounded-xl shadow-xl w-[100px] h-[100px]">
            <img
              src={eC_Migration}
              alt=""
              style={{ maxWidth: "90px", maxHeight: "90px" }}
              className="w-[90px] h-[90px]"
            />
          </div>
          <div className="flex flex-col mt-3 gap-2 items-start">
            <h1 className="text-2xl font-abelPro font-bold text-deepBlue">
              Migration & Updates
            </h1>
            <p className="text-lg font-abelPro max-w-[300px] mx-auto items-start">
              Move your existing legacy portal to advance new and secured
              platforms which are modern-age, efficient, customizable and fully
              functional.
            </p>
          </div>
        </div>
        {/* item=>1 */}
        <div className="w-[350px] h-[350px] flex flex-col justify-start items-start p-3">
          <div className="flex flex-col justify-center items-center bg-white p-5 rounded-xl shadow-xl w-[100px] h-[100px]">
            <img
              src={eC_Api}
              alt=""
              style={{ maxWidth: "90px", maxHeight: "90px" }}
              className="w-[90px] h-[90px]"
            />
          </div>
          <div className="flex flex-col mt-3 gap-2 items-start">
            <h1 className="text-2xl font-abelPro font-bold text-deepBlue">
              API Integration
            </h1>
            <p className="text-lg font-abelPro max-w-[300px] mx-auto items-start">
              Implement advanced API for more convenient E-commerce
              developmentn.Like Payment gateway,Customer management,Analytics
              support,Billing management And much more.
            </p>
          </div>
        </div>
        {/* item=>2 */}
        <div className="w-[350px] h-[350px] flex flex-col justify-start items-start p-3">
          <div className="flex flex-col justify-center items-center bg-white p-5 rounded-xl shadow-xl w-[100px] h-[100px]">
            <img
              src={eC_Web}
              alt=""
              style={{ maxWidth: "90px", maxHeight: "90px" }}
              className="w-[90px] h-[90px]"
            />
          </div>
          <div className="flex flex-col mt-3 gap-2 items-start">
            <h1 className="text-2xl font-abelPro font-bold text-deepBlue">
              E-Commerce Marketplace Develop
            </h1>
            <p className="text-lg font-abelPro max-w-[300px] mx-auto items-start">
              We offer modern and engaging ecommerce website which will fit your
              goals and objective.Roust your eCommerce business with the touch
              of endless feature and functionality.
            </p>
          </div>
        </div>
        {/* item=>3 */}
      </div>
      {/* 2nd row */}

      <div className="flex flex-col max-xl:flex-row xl:flex-row max-lg:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center items-center gap-5 p-3 mt-5 ml-5 mr-5">
        <div className="w-[350px] h-[350px] flex flex-col justify-start items-start p-3">
          <div className="flex flex-col justify-center items-center bg-white p-5 rounded-xl shadow-xl w-[100px] h-[100px]">
            <img
              src={eC_Mob}
              alt=""
              style={{ maxWidth: "90px", maxHeight: "90px" }}
              className="w-[90px] h-[90px]"
            />
          </div>
          <div className="flex flex-col mt-3 gap-2 items-start">
            <h1 className="text-2xl font-abelPro font-bold text-deepBlue">
              E-commerce mobile app development
            </h1>
            <p className="text-lg font-abelPro max-w-[300px] justify-start items-start">
              We are specialized in creating m-Commerce solutions.We offer
              amazing services eCommerce moble app, You can also integrate live
              chat,chatbot features.
            </p>
          </div>
        </div>
        {/* item=>1 */}
        <div className="w-[350px] h-[350px] flex flex-col justify-start items-start p-3">
          <div className="flex flex-col justify-center items-center bg-white p-5 rounded-xl shadow-xl w-[100px] h-[100px]">
            <img
              src={eC_storage}
              alt=""
              style={{ maxWidth: "90px", maxHeight: "90px" }}
              className="w-[90px] h-[90px]"
            />
          </div>
          <div className="flex flex-col mt-3 gap-2 items-start">
            <h1 className="text-2xl font-abelPro font-bold text-deepBlue">
              Online Store Development
            </h1>
            <p className="text-lg font-abelPro max-w-[300px] mx-auto items-start">
              We are manage distinct online store projects ofe varied complexity
              complexitties and many domains be they expertise in capital or
              consumer goods , media,distribution,food delivery ,public or
              business seervices.{" "}
            </p>
          </div>
        </div>
        {/* item=>2 */}
        <div className="w-[350px] h-[350px] flex flex-col justify-start items-start p-3">
          <div className="flex flex-col justify-center items-center bg-white p-5 rounded-xl shadow-xl w-[100px] h-[100px]">
            <img
              src={eC_C_integration}
              alt=""
              style={{ maxWidth: "90px", maxHeight: "90px" }}
              className="w-[90px] h-[90px]"
            />
          </div>
          <div className="flex flex-col mt-3 gap-2 justify-center items-start">
            <h1 className="text-2xl font-abelPro font-bold text-deepBlue">
              Custom E-commerce Integration
            </h1>
            <p className="text-lg font-abelPro max-w-[300px] mx-auto items-start">
              Using our expertise in REST and SOAP API integration, make your
              E-commerce more valuable and efficient..
            </p>
          </div>
        </div>
        {/* item=>3 */}
      </div>
      {/* 3rd row */}

      {/* end holedr */}
    </div>
  );
};

export default EcomServiceWeOffer;
