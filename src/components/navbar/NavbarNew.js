/** @format */

import React, { useState } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { Nextlogo } from "../../assets/index.js";
import { FaBars } from "react-icons/fa";

const NavbarNew = () => {
  const [activePage, setActivePage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSubItems, setShowSubItems] = useState(false);

  const handleMenuClick = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    // Hide sub-items when a menu item is clicked
    setShowSubItems(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubItemsMouseEnter = () => {
    setShowSubItems(true);
  };

  const handleSubItemsMouseLeave = () => {
    // Check if the mouse is outside of the "Industries" section
    if (!showSubItems) {
      setShowSubItems(true);
    }
  };

  return (
    <div className="w-full sticky top-0 z-50 p-2 px-5 bg-bodyColor mx-auto flex justify-between items-center font-adventPro shadow-md">
      <div className="flex items-center">
        <RouterLink to="/">
          <img
            className="object-contain h-16 w-30 rounded-md"
            src={Nextlogo}
            alt="Logo"
          />
        </RouterLink>
      </div>
      <div className="lg:hidden">
        <button
          className="text-gray-400 hover:text-designColor focus:outline-offset-1"
          onClick={toggleMenu}>
          <FaBars size={24} />
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden absolute top-24 left-0 right-0 bg-bodyColor p-5">
          <ul className="flex flex-col items-center gap-5">
            <li>
              <NavLink
                to="/"
                className={`text-xl text-[#1C1F35] hover:text-designColor ${
                  activePage === "home" ? "active" : "none"
                }`}
                onClick={() => handleMenuClick("home")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={`text-xl text-[#1C1F35] hover:text-designColor ${
                  activePage === "about" ? "active" : "none"
                }`}
                onClick={() => handleMenuClick("about")}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={`text-xl text-[#1C1F35] hover:text-designColor ${
                  activePage === "services" ? "active" : "none"
                }`}
                onClick={() => {
                  handleMenuClick("services");
                  // Hide sub-items when Services is clicked
                  setShowSubItems(false);
                }}>
                Services
              </NavLink>
            </li>
            {/* industries */}
            <li>
              <div
                onMouseEnter={handleSubItemsMouseEnter}
                onMouseLeave={handleSubItemsMouseLeave}
                className="relative">
                <span
                  className={`text-xl text-[#1C1F35] hover:text-designColor ${
                    activePage === "industries" ? "active" : "none"
                  }`}>
                  Industries
                </span>
                {showSubItems && (
                  <div className="sub-items-container absolute right-[-200px]  transform translate-x-5 w-[450px]  bg-white p-5 rounded-md shadow-xl mt-20 text-[#1C1F35] hover-text-designColor">
                    <ul className="grid grid-rows-2 grid-cols-2  p-2">
                      <li>
                        <NavLink
                          to="/fintech"
                          className="text-sm text-[#1C1F35] hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                          onClick={() => {
                            handleMenuClick("fintech");
                            // Hide sub-items when Services is clicked
                            setShowSubItems(false);
                          }}>
                          Fintech
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/healthcare"
                          className="text-sm text-[#1C1F35]  hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                          onClick={() => {
                            handleMenuClick("healthcare");
                            // Hide sub-items when Services is clicked
                            setShowSubItems(false);
                          }}>
                          Healthcare
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/ecommerce"
                          className="text-sm text-[#1C1F35] hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                          onClick={() => {
                            handleMenuClick("ecommerce");
                            // Hide sub-items when Services is clicked
                            setShowSubItems(false);
                          }}>
                          E-Commerce
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/education"
                          className="text-sm text-[#1C1F35]  hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                          onClick={() => {
                            handleMenuClick("education");
                            // Hide sub-items when Services is clicked
                            setShowSubItems(false);
                          }}>
                          Education
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/hospitality"
                          className="text-lg text-[#1C1F35] hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                          onClick={() => {
                            handleMenuClick("hospitality");
                            // Hide sub-items when Services is clicked
                            setShowSubItems(false);
                          }}>
                          Hospitality
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/pharmacy"
                          className="text-sm text-[#1C1F35]  hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                          onClick={() => {
                            handleMenuClick("pharmacy");
                            // Hide sub-items when Services is clicked
                            setShowSubItems(false);
                          }}>
                          Pharmacy
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/foodtech"
                          className="text-sm text-[#1C1F35]  hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                          onClick={() => {
                            handleMenuClick("foodtech");
                            // Hide sub-items when Services is clicked
                            setShowSubItems(false);
                          }}>
                          Foodtech
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/realestate"
                          className="text-sm text-[#1C1F35]  hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                          onClick={() => {
                            handleMenuClick("realestate");
                            // Hide sub-items when Services is clicked
                            setShowSubItems(false);
                          }}>
                          Real-Estate
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            {/* end of sm industries */}
            <li>
              <NavLink
                to="/contact"
                className={`text-xl text-[#1C1F35] hover:text-designColor ${
                  activePage === "contact" ? "active" : "none"
                }`}
                onClick={() => handleMenuClick("contact")}>
                <button className="bg-[#193E65] text-white px-4 py-2 rounded-full hover:bg-[#EE7E24] duration-500">
                  Get In Touch
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      {/* end of small Screen bar */}
      <div className="hidden lg:block">
        <ul className="flex items-center gap-10">
          <li>
            <NavLink
              to="/"
              className={`text-xl text-[#1C1F35] hover:text-designColor ${
                activePage === "home" ? "active" : "none"
              }`}
              onClick={() => handleMenuClick("home")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`text-xl text-[#1C1F35] hover:text-designColor ${
                activePage === "about" ? "active" : "none"
              }`}
              onClick={() => handleMenuClick("about")}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={`text-xl text-[#1C1F35] hover:text-designColor ${
                activePage === "services" ? "active" : "none"
              }`}
              onClick={() => {
                handleMenuClick("services");
                // Hide sub-items when Services is clicked
                setShowSubItems(false);
              }}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/case"
              className={`text-xl text-[#1C1F35] hover:text-designColor ${
                activePage === "case" ? "active" : "none"
              }`}
              onClick={() => {
                handleMenuClick("case");
                // Hide sub-items when Services is clicked
                setShowSubItems(false);
              }}>
              Cases
            </NavLink>
          </li>
          {/* industries */}
          <li>
            <div
              onMouseEnter={handleSubItemsMouseEnter}
              onMouseLeave={handleSubItemsMouseLeave}
              className="relative">
              <span
                className={`text-xl text-[#1C1F35] hover:text-designColor ${
                  activePage === "industries" ? "active" : "none"
                }`}>
                Industries
              </span>
              {showSubItems && (
                <div className="sub-items-container absolute right-[-100px]  transform translate-x-5 w-[450px]  bg-white p-5 rounded-md shadow-xl mt-6 text-[#1C1F35] hover-text-designColor">
                  <ul className="grid grid-rows-2 grid-cols-2 gap-5 p-3">
                    <li>
                      <NavLink
                        to="/fintech"
                        className="text-lg text-[#1C1F35] hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                        onClick={() => {
                          handleMenuClick("fintech");
                          // Hide sub-items when Services is clicked
                          setShowSubItems(false);
                        }}>
                        Fintech
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/healthcare"
                        className="text-lg text-[#1C1F35]  hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                        onClick={() => {
                          handleMenuClick("healthcare");
                          // Hide sub-items when Services is clicked
                          setShowSubItems(false);
                        }}>
                        Healthcare
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/ecommerce"
                        className="text-lg text-[#1C1F35] hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                        onClick={() => {
                          handleMenuClick("ecommerce");
                          // Hide sub-items when Services is clicked
                          setShowSubItems(false);
                        }}>
                        E-Commerce
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/education"
                        className="text-lg text-[#1C1F35]  hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                        onClick={() => {
                          handleMenuClick("education");
                          // Hide sub-items when Services is clicked
                          setShowSubItems(false);
                        }}>
                        Education
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/hospitality"
                        className="text-lg text-[#1C1F35] hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                        onClick={() => {
                          handleMenuClick("hospitality");
                          // Hide sub-items when Services is clicked
                          setShowSubItems(false);
                        }}>
                        Hospitality
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/pharmacy"
                        className="text-lg text-[#1C1F35]  hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                        onClick={() => {
                          handleMenuClick("pharmacy");
                          // Hide sub-items when Services is clicked
                          setShowSubItems(false);
                        }}>
                        Pharmacy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/foodtech"
                        className="text-lg text-[#1C1F35]  hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                        onClick={() => {
                          handleMenuClick("foodtech");
                          // Hide sub-items when Services is clicked
                          setShowSubItems(false);
                        }}>
                        Foodtech
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/realestate"
                        className="text-lg text-[#1C1F35]  hover:text-designColor hover-bg-gray-100 p-2 mb-3 mt-3 rounded-md"
                        onClick={() => {
                          handleMenuClick("realestate");
                          // Hide sub-items when Services is clicked
                          setShowSubItems(false);
                        }}>
                        Real-Estate
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
          {/* end industries */}
          <li>
            <NavLink
              to="/contact"
              className={`text-xl text-[#1C1F35] hover:text-designColor ${
                activePage === "contact" ? "active" : "none"
              }`}
              onClick={() => handleMenuClick("contact")}>
              <button className="bg-[#193E65] text-white px-4 py-2 rounded-full hover:bg-[#EE7E24] duration-500">
                Get In Touch
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarNew;
