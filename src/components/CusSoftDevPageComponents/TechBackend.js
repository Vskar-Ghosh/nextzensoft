/** @format */

import React from "react";
import {
  nodeJs,
  java,
  aspNet,
  cSharpe,
  django,
  expressJS,
  js,
  laravel,
  php,
  spring,
  springBoot,
} from "../../assets/index";

const TechBackend = () => {
  return (
    <div className="customTechUsedLeft">
      <div className="customTechCard">
        <img src={java} alt="" width={150} height={150} className="p-1" />
      </div>

      <div className="customTechCard">
        <img src={nodeJs} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={cSharpe} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={spring} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={springBoot} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard">
        <img src={aspNet} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={django} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard">
        <img src={expressJS} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard">
        <img src={laravel} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard">
        <img src={php} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard">
        <img src={js} alt="" width={150} height={150} className="p-2" />
      </div>
    </div>
  );
};

export default TechBackend;
