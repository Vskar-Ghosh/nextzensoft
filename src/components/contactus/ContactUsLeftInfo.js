/** @format */

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactUsLeftInfo = () => {
  return (
    <div className="w-[35%] h-full bg-blue-300 p-8 rounded-lg  gap-8 flex flex-col justify-center ">
      <div className=" flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-[#EE7E24]">
          Get in touch with us
        </h2>
        <p className="text-lg text-normal text-[#848484]">
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value.
        </p>

        <div className="bg-green-200 w-2 h-5"></div>
        <div className="bg-red-400d"></div>
        <div className="bg-blue-400"></div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find Us in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUsLeftInfo;
