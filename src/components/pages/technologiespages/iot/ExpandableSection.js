/** @format */

import React, { useState } from "react";

const ExpandableSection = ({
  title,
  content,
  isExpanded,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <div
      className={`border border-gray-400 p-4 cursor-pointer transition-all ${
        isExpanded ? "hover:w-[300px]" : "hover:w-[75px]"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <h1 className="text-lg font-semibold">{title}</h1>
      {isExpanded && <p className="text-sm mt-2">{content}</p>}
    </div>
  );
};

export default ExpandableSection;
