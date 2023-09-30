/** @format */

import React from "react";
import { Link } from "react-scroll";
import { Nextlogo } from "../../assets/index.js";
import { navLinksdata } from "./../../constants/index";

const Navbar = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4 ">
      {/* Left Side */}
      <div>
        <a href="/" className="cursor-pointer">
          <img
            className="object-contain h-20 w-30 rounded-full"
            src={Nextlogo}
            alt="Logo"
          />
        </a>
      </div>
      {/*right side*/}
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}>
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
                {/*  if remove a tag will become clickable only */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* End=> */}
    </div>
  );
};

export default Navbar;
