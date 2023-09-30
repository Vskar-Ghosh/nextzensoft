/** @format */

import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carousel from "./components/slider/Carousel ";
import { countries } from "./components/slider/Data.js";

import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Projects from "./components/Projects/projects";
import Solutions from "./components/solutions/Solutions.js";
import ClientReview from "./components/clientreview/ClientReview.js";
import ContactUs from "./components/contactus/ContactUs.js";
import Footer from "./components/footer/Footer.js";
import FooterBottom from "./components/footer/FooterBottom.js";
import TeamMembers from "./components/team/TeamMembers.js";
import About from "./components/about/About";
import HomePage from "./components/pages/HomePage"; // Import HomePage component
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import ContactusPage from "./components/pages/ContactusPage";
import SolutionsPage from "./components/pages/SolutionsPage";

import NavbarNew from "./components/navbar/NavbarNew"; //

function App() {
  return (
    <Router>
      <div className="w-full h-auto bg-bodyColor text-lightText">
        <NavbarNew />
        <Routes>
          {" "}
          {/* Wrap your routes with <Routes> */}
          <Route path="/" element={<HomePage />} /> {/* Home page */}
          <Route path="/about" element={<AboutPage />} /> {/* About page */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/contact" element={<ContactusPage />} />
          {/* Add more Route components for other pages */}
        </Routes>

        <Footer />
        <FooterBottom />
      </div>
    </Router>
  );
}

export default App;
