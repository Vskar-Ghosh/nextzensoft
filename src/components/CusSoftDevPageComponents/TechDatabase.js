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
    <div className="w-[50vw]  bg-white grid grid-cols-4 ">
      <div className="w-[150px] h-[ 150px] p-2 mx-2 shadow-xl rounded-md ">
        <img src={mySql} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="w-[150px] h-[ 150px] p-2 mx-2 shadow-xl rounded-md ">
        <img src={sqlLite} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-xl rounded-md ">
        <img src={mongoDB} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
        <img src={oracleDB} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
        <img src={dynamoDB} alt="" width={150} height={150} className="p-3" />
      </div>
    </div>
  );
};

export default TechDatabase;
