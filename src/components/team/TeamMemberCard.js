/** @format */

import React from "react";

import { salimTest } from "../../assets";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const TeamMemberCard = (props) => {
  return (
    <div className="w-full md:w-[350px] mr-5 ml-5 p-4 xl:px-12 h-auto md:h-[550px] bg-[#451952] xl:py-5 rounded-lg shadow-2xl flex flex-col bg-gradient-to-r from-[#ffffff] to-[#ffffff] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-25 h-25 overflow-hidden mx-6 rounded-full bg-center bg-no-repeat bg-cover">
        <img
          className="w-[100px] h-[100px] object-cover rounded-full group-hover:scale-110 duration-300 cursor-pointer mx-auto"
          src={props.image}
          alt=""
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-10">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl uppercase text-designColor font-normal">
              {props.name}
            </h2>
          </div>
          <div className=""></div>
          <h3 className="mt-3 border-b-[1px] border-orange-500">
            Full Stack Software Engineer
          </h3>
          <p className="text-sm md:text-base tracking-wide mt-3 duration-300">
            {props.edu}
          </p>
          {/* <div className="w-full h-[1.5px] bg-white"></div> */}

          <p className="text-sm md:text-base tracking-wide mt-3 duration-300">
            {props.experience}
          </p>
          <p className="text-sm md:text-base tracking-wide mt-3 duration-300">
            Java, C#, JavaCsrip, Flutter, React, NodeJs, MySQL, MongoDB,
            TailwindCss
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
