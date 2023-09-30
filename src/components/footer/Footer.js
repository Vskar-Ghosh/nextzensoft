/** @format */

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Nextlogo } from "../../assets/index";

const Footer = () => {
  return (
    <section className="w-full py-3 p-10 items-center mt-5 bg-[#241468] ">
      <div className="w-full py-10 h-auto md:h-auto lg:h-auto border-b-[1px] border-black grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="w-full h-full md:col-span-2 lg:col-span-1">
          <img className="w-32" src={Nextlogo} alt="Nextlogo" />
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
                Portfolio
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Services
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Blog
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Contact
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>
        {/* End Of Quick */}
        <div className="w-full h-full md:col-span-2 lg:col-span-1">
          <h3 className="text-xl md:text-2xl uppercase text-designColor tracking-wider">
            RESOURCES
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Authentication
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                System Status
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
                Pricing
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Over Right
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>
        {/* end of RESOURCES */}
        <div className="w-full h-full md:col-span-2 lg:col-span-1">
          <h3 className="text-xl md:text-2xl uppercase text-designColor tracking-wider">
            DEVELOPERS
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Documentation
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Authentication
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                API Reference
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Support
                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg md:text-xl relative hover:text-designColor duration-300 group cursor-pointer">
                Open Source
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
