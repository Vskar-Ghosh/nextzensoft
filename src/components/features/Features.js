/** @format */

import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section className="w-full  py-20  items-center border-b-[1px]">
      <Title title="Features" description="What We Do ...." />

      <div className="grid grid-cols-3 gap-20">
        <Card
          icon={<FaBars />}
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
        <Card
          icon={<AiFillAppstore />}
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
        <Card
          icon={<FaMobile />}
          title="Mobile App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
        <Card
          icon={<SiProgress />}
          title="Web App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
        <Card
          icon={<SiAntdesign />}
          title="Mobile App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
        <Card
          icon={<FaGlobe />}
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
      </div>
    </section>
  );
};

export default Features;
