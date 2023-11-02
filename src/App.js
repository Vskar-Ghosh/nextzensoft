/** @format */

import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer.js";
import FooterBottom from "./components/footer/FooterBottom.js";
import HomePage from "./components/pages/HomePage"; // Import HomePage component
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import SolutionsPage from "./components/pages/SolutionsPage";
import NavbarNew from "./components/navbar/NavbarNew"; //
import CustomSoftwarePage from "./components/pages/CustomSoftwarePage";
import WebAppDevPage from "./components/pages/WebAppDevPage";
import MobileAppDevPage from "./components/pages/MobileAppDevPage";
import IndustriesPage from "./components/pages/IndustriesPage.js";
import GetInTouchPage from "./components/pages/GetInTouchPage.js";
import FinTechPage from "./components/pages/FinTechPage.js";
import HealthcarePage from "./components/pages/HealthcarePage.js";
import EcommercePage from "./components/pages/EcommercePage.js";
import EducationPage from "./components/pages/EducationPage.js";
import HospitalityPage from "./components/pages/HospitalityPage";
import PharmacyPage from "./components/pages/PharmacyPage.js";
import FoodTechPage from "./components/pages/FoodTechPage.js";
import RealEsatatePage from "./components/pages/RealEsatatePage.js";
import JavaPage from "./components/pages/technologiespages/JavaPage.js";
import NodeJsPage from "./components/pages/technologiespages/nodejs/NodeJsPage.js";
import JavaScriptPage from "./components/pages/technologiespages/JavaScript/JavaScriptPage.js";
import IotPage from "./components/pages/technologiespages/iot/IotPage.js";
import CasePage from "./components/pages/CaseStudy/CasePage.js";
import ScrollToTop from "./components/ScrollToTop.js";
import CareerPage from "./components/careers/CareerPage.js";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="w-full h-auto bg-bodyColor text-lightText">
        <NavbarNew />
        <Routes>
          {" "}
          {/* Wrap your routes with <Routes> */}
          <Route path="/" element={<HomePage />} /> {/* Home page */}
          <Route path="/about" element={<AboutPage />} /> {/* About page */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/case" element={<CasePage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<GetInTouchPage />} />
          {/*sub  pages */}
          <Route path="/customsoftwarepage" element={<CustomSoftwarePage />} />
          <Route path="/webappdevpage" element={<WebAppDevPage />} />
          <Route path="/mobileppdevpage" element={<MobileAppDevPage />} />
          {/* industries */}
          <Route path="/fintech" element={<FinTechPage />} />
          <Route path="/healthcare" element={<HealthcarePage />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/hospitality" element={<HospitalityPage />} />
          <Route path="/pharmacy" element={<PharmacyPage />} />
          <Route path="/foodtech" element={<FoodTechPage />} />
          <Route path="/realestate" element={<RealEsatatePage />} />
          {/* technologies */}
          <Route path="/java" element={<JavaPage />} />
          <Route path="/nodejs" element={<NodeJsPage />} />
          <Route path="/javascript" element={<JavaScriptPage />} />
          <Route path="/iot" element={<IotPage />} />
          {/* careerpage   */}
          <Route path="/careerpage" element={<CareerPage />} />
        </Routes>

        <Footer />
        <FooterBottom />
      </div>
    </Router>
  );
}

export default App;
