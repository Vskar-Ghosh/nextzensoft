/** @format */

import React from "react";
import {
  dynamoDB,
  mongoDB,
  mySql,
  sqlLite,
  oracleDB,
} from "../../assets/index";

const TechDatabase = () => {
  return (
    <div className="customTechUsedLeft">
      <div className="customTechCard ">
        <img src={mySql} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard ">
        <img src={sqlLite} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard">
        <img src={mongoDB} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard ">
        <img src={oracleDB} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={dynamoDB} alt="" width={150} height={150} className="p-3" />
      </div>
    </div>
  );
};

export default TechDatabase;
