/** @format */

import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";

const Accotdoin = ({ open, toggle, title, desc }) => {
  return (
    <div className="mt-5 md:mt-5  shadow-2xl rounded-lg bg-white">
      <div
        className="py-3 md:py-5 px-3 md:px-5 flex justify-between items-center cursor-pointer"
        onClick={toggle}>
        <p className="text-2xl sm:text-md max-sm:text-sm md:text-3xl  font-abelPro font-semibold">
          {title}
        </p>
        <div className="text-3xl sm:text-md max-sm:text-sm md:text-4xl text-coralred ">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="text-[14px] max-sm:text-[12px] px-3 md:px-5 pb-2 md:pb-4 ">
          {desc}
        </div>
      </Collapse>
    </div>
  );
};

export default Accotdoin;
