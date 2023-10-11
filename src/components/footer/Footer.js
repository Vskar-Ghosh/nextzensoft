/** @format */

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Nextlogo } from "../../assets/index";

const Footer = () => {
  return (
    <section className="w-full py-3 p-10 items-center mt-5 bg-[#241468] ">
      <div className="w-full py-10 h-auto md:h-auto lg:h-auto border-b-[1px] border-black grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="w-full h-full md:col-span-2 lg:col-span-1">
          <h2 className="text-xl md:text-2xl uppercase text-designColor tracking-wider">
            Offices
          </h2>
          <div className="w-full h-[0.5px] bg-black mt-2 mb-2"></div>

          <div className="p-2 mt-2 mb-2">
            <h2 className="font-abelPro font-bold  hover:text-white">
              1/B Thamina Bhaban, Mirpur 1, Dhaka 1216, Bangladesh
            </h2>
            <h2 className="font-abelPro font-bold  hover:text-white ">
              Cell: 008801991-730274
            </h2>
          </div>

          <div className="p-2 mt-2 mb-2">
            <h2 className="font-abelPro font-bold  hover:text-white ">
              Albuquerque Tower, 1309 4th St SW, 87102, New York, US
            </h2>
            <h2 className="font-abelPro font-bold  hover:text-white ">
              Cell: +16629762448
            </h2>
          </div>

          {/*  */}
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
          {/* end => */}
        </div>
        {/* end of logo side => */}
        <div className="w-full h-full md:col-span-2 lg:col-span-1">
          <h3 className="text-xl md:text-2xl uppercase text-designColor tracking-wider">
            Quick Link
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            {/* going to open new tab */}
            <a href="about" target="_blank" rel="noopener noreferrer">
              <li>
                <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                  About
                  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
            </a>

            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Services
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Solutions
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Industries
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Blog
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>
        {/* End Of Quick */}
        <div className="w-full h-full md:col-span-2 lg:col-span-1">
          <h3 className="text-xl md:text-2xl uppercase text-designColor tracking-wider">
            Terms
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Terms of use
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Privacy Policy
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Terms of Service
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Cookies Policy
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                FAQ's
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>
        {/* end of RESOURCES */}
        <div className="w-full h-full md:col-span-2 lg:col-span-1">
          <h3 className="text-xl md:text-2xl uppercase text-designColor tracking-wider">
            Technologies
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Java
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                JavaScript
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Flutter
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                C#
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Blockchain
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>
        {/* end of DEVELOPERS */}
      </div>
    </section>
  );
};

export default Footer;
