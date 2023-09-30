/** @format */

import React from "react";
import { SiProgress, SiAntdesign } from "react-icons/si";
import SolutionsCard from "./SolutionsCard.js";
import { motion } from "framer-motion";

const SoluntionBusiness = () => {
  return (
    <section className="w-full  py-20  items-center border-b-[1px]">
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 2,
        }}
        className="grid grid-cols-3 gap-20">
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
      </motion.div>
    </section>
  );
};

export default SoluntionBusiness;
