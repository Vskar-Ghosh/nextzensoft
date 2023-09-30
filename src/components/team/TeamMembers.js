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
    <section className="w-full py-10 p-10 bg-[#9400ff] ">
      <Carousel
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        responsive={responsive}>
        {developbr}
      </Carousel>
    </section>
  );
};

export default TeamMembers;
