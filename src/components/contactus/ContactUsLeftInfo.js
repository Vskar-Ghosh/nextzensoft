/** @format */

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactUsLeftInfo = () => {
  return (
    <div className="w-[35%] h-full bg-blue-300 p-8 rounded-lg  gap-8 flex flex-col justify-center ">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className=" flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Hello</h3>
        <p className="text-lg text-normal text-gray-300">Something</p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          solutahic consequuntur eum repellendus ad
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone:
          <samp className="text-lightText">+8801307543654</samp>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:
          <samp className="text-lightText">nextzensogt@next.com</samp>
        </p>
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
