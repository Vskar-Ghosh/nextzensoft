/** @format */

import React, { useState } from "react";
import SolutionsTitle from "../layouts/SolutionsTitle.js";
import { SiProgress, SiAntdesign } from "react-icons/si";
import SoEcommerce from "./SoEcommerce.js";
import SoluntionBusiness from "./SoluntionBusiness.js";
import SolutionHealthcare from "./SolutionHealthcare.js";
import SolutionBlockchan from "./SolutionHealthcare.js";
import SolutionMarketingTech from "./SolutionMarketingTech.js";
import SolutionsHospitality from "./SolutionsHospitality.js";

const Solutions = () => {
  const [ecommerceData, setEcommerceData] = useState(true);
  const [businessData, setBusinessData] = useState(false);
  const [healtcareData, setHealthcareData] = useState(false);
  const [hospilatyData, setHospilatyData] = useState(false);
  const [blockchainData, setBlockchainData] = useState(false);
  const [marketingData, setmarketingData] = useState(false);
  return (
    <section
      id="solutions"
      className="w-full py-20 border-b-[1px] border-black">
      <div>
        {" "}
        <SolutionsTitle Title="" description="" />
      </div>
      {/* end */}

      <div>
        <ul className="w-full grid grid-cols-6 mt-10">
          <li
            onClick={() =>
              setEcommerceData(true) &
              setBusinessData(false) &
              setBlockchainData(false) &
              setHealthcareData(false) &
              setHospilatyData(false) &
              setmarketingData(false)
            }
            className={`${
              ecommerceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } solutionsLi`}>
            E-Commerce
          </li>
          <li
            onClick={() =>
              setEcommerceData(false) &
              setBusinessData(true) &
              setBlockchainData(false) &
              setHealthcareData(false) &
              setHospilatyData(false) &
              setmarketingData(false)
            }
            className={`${
              businessData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } solutionsLi`}>
            Business
          </li>
          <li
            onClick={() =>
              setEcommerceData(false) &
              setBusinessData(false) &
              setBlockchainData(false) &
              setHealthcareData(true) &
              setHospilatyData(false) &
              setmarketingData(false)
            }
            className={`${
              healtcareData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } solutionsLi`}>
            Healthcare
          </li>
          <li
            onClick={() =>
              setEcommerceData(false) &
              setBusinessData(false) &
              setBlockchainData(false) &
              setHealthcareData(false) &
              setHospilatyData(true) &
              setmarketingData(false)
            }
            className={`${
              hospilatyData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } solutionsLi`}>
            Hospitality
          </li>
          <li
            onClick={() =>
              setEcommerceData(false) &
              setBusinessData(false) &
              setBlockchainData(true) &
              setHealthcareData(false) &
              setHospilatyData(false) &
              setmarketingData(false)
            }
            className={`${
              blockchainData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } solutionsLi`}>
            Blockchain
          </li>
          <li
            onClick={() =>
              setEcommerceData(false) &
              setBusinessData(false) &
              setBlockchainData(false) &
              setHealthcareData(false) &
              setHospilatyData(false) &
              setmarketingData(true)
            }
            className={`${
              marketingData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } solutionsLi`}>
            Marketing Tech
          </li>
        </ul>
      </div>

      {ecommerceData && <SoEcommerce />}
      {businessData && <SoluntionBusiness />}
      {healtcareData && <SolutionHealthcare />}
      {hospilatyData && <SolutionsHospitality />}
      {blockchainData && <SolutionBlockchan />}
      {marketingData && <SolutionMarketingTech />}
    </section>
  );
};

export default Solutions;
