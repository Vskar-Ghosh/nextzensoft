/** @format */

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamMemberCard from "./TeamMemberCard.js";
import { responsive, developertData } from "./TeamMemberData.js";

export const TeamMembers = () => {
  const developbr = developertData.map((item) => (
    <TeamMemberCard
      key={item.id}
      image={item.image}
      name={item.name}
      edu={item.edu}
      deg={item.deg}
      experience={item.experience}
      tec={item.tech}
    />
  ));

  return (
    <section className="w-full p-10 flex flex-col items-center justify-center ">
      <h1 className=" text-6xl text-center p-10 ">
        <span className=" text-[#ee7324]">Meet</span> Expert Team
      </h1>
      <div className=" w-[75%] p-5">
        <Carousel
          autoPlay={false}
          autoPlaySpeed={2000}
          infinite={true}
          responsive={responsive}
          className="flex"
        >
          {developbr}
        </Carousel>
      </div>
    </section>
  );
};

export default TeamMembers;
