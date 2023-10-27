/** @format */

import React from "react";
import { java, aspNet, cSharpe, python } from "../../assets/index";

const TechDesktop = () => {
  return (
    <div className="customTechUsedLeft">
      <div className="customTechCard">
        <img src={java} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard">
        <img src={cSharpe} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={aspNet} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={python} alt="" width={150} height={150} className="p-3" />
      </div>
    </div>
  );
};

export default TechDesktop;
