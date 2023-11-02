/** @format */

import React from "react";

const TeamMemberCard = (props) => {
  return (
    <div className=" w-60 m-2 h-[420px] bg-[#241468] pb-2 rounded-lg relative group">
      <div className=" absolute top-40 right-0 z-10 h-10 w-32 bg-gradient-to-r from-[#e39f3e] to-[#f0da37] flex items-center justify-around text-xl text-black opacity-0  group-hover:opacity-100 transition-all duration-300">
        <div className=" h-8 w-8 flex items-center justify-center gap-2">
          <img className="w-full h-full" src={props.country} alt="" />
          <p className=" text-sm">{props.countryName}</p>
        </div>
      </div>
      <div className=" h-48 bg-white  flex flex-col items-center justify-center">
        <img className="w-full h-full" src={props.image} alt="" />
      </div>
      <div className=" h-44 p-4 text-white relative ">
        <div>
          <div className=" text-xl text-white font-abelPro font-bold">
            <h2 className="">{props.name}</h2>
          </div>
          <div className=" relative p-1 ">
            <h3 className=" text-xs  font-abelPro pb-1 font-medium ">
              {props.deg}
            </h3>
            <hr></hr>

            <p className=" text-xs  pt-1 opacity-70  mb-2">
              {props.experience}
            </p>

            <p className=" text-xs pb-1 pt-1  opacity-70">
              <span className=" font-medium ">Expertise:</span>
              {props.tec}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
