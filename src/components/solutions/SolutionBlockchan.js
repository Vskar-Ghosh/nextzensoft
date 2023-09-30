/** @format */

import React from "react";
import { SiProgress, SiAntdesign } from "react-icons/si";
import SolutionsCard from "./SolutionsCard.js";

const SolutionBlockchan = () => {
  return (
    <section
      id="features"
      className="w-full  py-20  items-center border-b-[1px]">
      <div className="grid grid-cols-3 gap-20">
        <SolutionsCard
          icon={<SiAntdesign />}
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
        <SolutionsCard
          icon={<SiAntdesign />}
          title="App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
        <SolutionsCard
          icon={<SiAntdesign />}
          title="Mobile App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
        <SolutionsCard
          icon={<SiProgress />}
          title="Web App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
        <SolutionsCard
          icon={<SiAntdesign />}
          title="Mobile App Development"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
        <SolutionsCard
          icon={<SiAntdesign />}
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad"
        />
      </div>
    </section>
  );
};

export default SolutionBlockchan;
