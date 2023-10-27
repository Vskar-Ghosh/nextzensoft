/** @format */

import React from "react";
import {
  antDesign,
  css,
  html,
  js,
  nextJS,
  react,
  tailwind,
  threeJS,
  vueJS,
  agulerjs,
  typescript,
  bootstrap,
  m_ui,
} from "../../assets/index";

const TechFontEnd = () => {
  return (
    <div className="customTechUsedLeft">
      <div className="customTechCard">
        <img src={react} alt="" width={150} height={150} className="p-2" />
      </div>

      <div className="customTechCard">
        <img src={agulerjs} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={vueJS} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={threeJS} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={nextJS} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={js} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="w-[150px] h-[ 150px] p-2 mx-2 shadow-xl rounded-md ">
        <img src={html} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard">
        <img src={css} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="customTechCard">
        <img src={typescript} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard">
        <img src={tailwind} alt="" width={150} height={150} className="p-2" />
      </div>

      <div className="customTechCard">
        <img src={antDesign} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard">
        <img src={bootstrap} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="customTechCard">
        <img src={m_ui} alt="" width={150} height={150} className="p-2" />
      </div>
    </div>
  );
};

export default TechFontEnd;
