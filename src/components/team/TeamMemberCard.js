/** @format */

import React from "react";

import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const TeamMemberCard = (props) => {
  return (
    <div className=" w-60 m-2 h-80 bg-[#193e65] pb-2 relative group">
      <div className=" absolute top-40 right-0 z-10 h-10 w-32 bg-gradient-to-r from-[#e39f3e] to-[#f0da37] flex items-center justify-around text-xl text-black opacity-0  group-hover:opacity-100 transition-all duration-300">
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <BsGithub />
        </a>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </div>
      <div className=" h-48 bg-white  flex flex-col items-center justify-center">
        <img className="w-full h-full" src={props.image} alt="" />
      </div>
      <div className=" h-44 p-4 text-white relative ">
        <div>
          <div className=" text-xl font-bold">
            <h2 className="">{props.name}</h2>
          </div>
          <div className=" relative p-1">
            <h3 className=" text-xs pb-1">Full Stack Software Engineer</h3>
            {/* <p className=" text-xs pb-1">{props.edu}</p> */}
            {/* <div className="w-full h-[1.5px] bg-white"></div> */}

            <p className=" text-xs pb-1">{props.experience}</p>
            {/* <p className=" text-xs pb-1">
              Java, C#, JavaCsrip, Flutter, React, NodeJs, MySQL, MongoDB,
              TailwindCss
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
