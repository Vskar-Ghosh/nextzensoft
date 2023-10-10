/** @format */

import React, { useState } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { Nextlogo } from "../../assets/index.js";
import { FaBars } from "react-icons/fa";
import { buttonImage } from "../../assets/index.js";

const NavbarNew = () => {
  const [activePage, setActivePage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (page) => {
    setActivePage(page);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // button style
  const buttonStyle = {
    backgroundImage: `url(${buttonImage})`, // Replace with the actual image path
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center",
    backgroundSize: "auto 100%",
  };

  return (
    <div className="w-full sticky top-0 z-50 p-2 px-5 bg-bodyColor mx-auto flex justify-between items-center font-adventPro shadow-md">
      <div className="flex items-center">
        <RouterLink to="/">
          <img
            className="object-contain h-16 w-30 rounded-full"
            src={Nextlogo}
            alt="Logo"
          />
        </RouterLink>
      </div>
      {/* Hamburger Menu Icon */}
      <div className="lg:hidden">
        <button
          className="text-gray-400 hover:text-designColor focus:outline-offset-1"
          onClick={toggleMenu}
        >
          <FaBars size={24} />
        </button>
      </div>
      {/* Nav Menu for Smaller Screens */}
      {menuOpen && (
        <div className="lg:hidden absolute top-24 left-0 right-0 bg-bodyColor p-5">
          <ul className="flex flex-col items-center gap-5">
            <li>
              <NavLink
                to="/"
                className={`text-xl  text-[#1C1F35] hover:text-designColor ${
                  activePage === "home" ? "active" : "none"
                }`}
                onClick={() => handleMenuClick("home")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={`text-xl  text-[#1C1F35] hover:text-designColor ${
                  activePage === "about" ? "active" : "none"
                }`}
                onClick={() => handleMenuClick("about")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={`text-xl  text-[#1C1F35] hover:text-designColor ${
                  activePage === "services" ? "active" : "none"
                }`}
                onClick={() => handleMenuClick("services")}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/solutions"
                className={`text-xl  text-[#1C1F35] hover:text-designColor ${
                  activePage === "solutions" ? "active" : "none"
                }`}
                onClick={() => handleMenuClick("solutions")}
              >
                Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={`text-xl  text-[#1C1F35] hover:text-designColor ${
                  activePage === "contact" ? "active" : "none"
                }`}
                onClick={() => handleMenuClick("contact")}
              >
                Industries
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={`text-xl text-[#1C1F35] hover:text-designColor ${
                  activePage === "contact" ? "active" : "none"
                }`}
                onClick={() => handleMenuClick("contact")}
              >
                <button className="bg-[#EE7E24] text-white px-4 py-2 rounded-full hover:bg-[#193E65] duration-1000">
                  Get In Toutch{" "}
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      )}{" "}
      {/* Nav Menu for Larger Screens */}
      <div className="hidden lg:block">
        <ul className="flex items-center gap-10">
          <li>
            <NavLink
              to="/"
              className={`text-xl  text-[#1C1F35] hover:text-designColor ${
                activePage === "home" ? "active" : "none"
              }`}
              onClick={() => handleMenuClick("home")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`text-xl  text-[#1C1F35] hover:text-designColor ${
                activePage === "about" ? "active" : "none"
              }`}
              onClick={() => handleMenuClick("about")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={`text-xl  text-[#1C1F35] hover:text-designColor ${
                activePage === "services" ? "active" : "none"
              }`}
              onClick={() => handleMenuClick("services")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/solutions"
              className={`text-xl  text-[#1C1F35] hover:text-designColor ${
                activePage === "solutions" ? "active" : "none"
              }`}
              onClick={() => handleMenuClick("solutions")}
            >
              Solutions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={`text-xl  text-[#1C1F35] hover:text-designColor ${
                activePage === "contact" ? "active" : "none"
              }`}
              onClick={() => handleMenuClick("contact")}
            >
              Industries
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={`text-xl text-[#1C1F35] hover:text-designColor ${
                activePage === "contact" ? "active" : "none"
              }`}
              onClick={() => handleMenuClick("contact")}
            >
              <button className="bg-[#193E65] text-white px-4 py-2 rounded-full hover:bg-[#EE7E24] duration-500">
                {" "}
                Get In Toutch{" "}
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarNew;
