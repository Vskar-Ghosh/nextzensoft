/** @format */

import React from "react";
import { aws, azure } from "../../assets/index";

const TechCloud = () => {
  return (
    <div className="customTechUsedLeft">
      <div className="customTechCard">
        <img src={aws} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard">
        <img src={azure} alt="" width={150} height={150} className="p-3" />
      </div>
    </div>
  );
};

export default TechCloud;
