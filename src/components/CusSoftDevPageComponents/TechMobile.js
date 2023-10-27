/** @format */

import React from "react";
import {
  java,
  android,
  kotlin,
  dart,
  flutter,
  swift,
} from "../../assets/index";

const TechMobile = () => {
  return (
    <div className="customTechUsedLeft">
      <div className="customTechCard">
        <img src={android} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard">
        <img src={java} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={kotlin} alt="" width={150} height={150} className="p-3" />
      </div>

      <div className="customTechCard">
        <img src={flutter} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={dart} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={swift} alt="" width={150} height={150} className="p-3" />
      </div>
    </div>
  );
};

export default TechMobile;
