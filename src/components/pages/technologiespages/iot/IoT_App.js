/** @format */

import React, { useState } from "react";

const IoT_App = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const handleMouseEnter = (sectionIndex) => {
    setExpandedSection(sectionIndex);
  };

  const handleMouseLeave = () => {
    setExpandedSection(null);
  };

  const sections = [
    {
      title: "Full-cycle Internet of Things development Services",
      content:
        "Tell us the idea of your IoT software project, and we will take care of the rest. As an IoT software development services provider, Binariks covers all IoT software development stages. We complete business research, create prototypes, develop and test the product, and keep supporting it after the release.",
    },
    {
      title: "Custom IoT Development of Cloud Solutions ",
      content:
        "Refactor legacy IoT applications or migrate them to the cloud with our help. We leverage the capabilities of Amazon AWS, Microsoft Azure, and Google Cloud for Internet of Things software development to improve the scalability, performance, and cost-effectiveness of designed solutions",
    },

    {
      title: "Embedded IoT Software Development ",
      content:
        "Launch IoT-based home automation solutions, smart wearables, enterprise-level products, and other embedded IoT solutions with ease. Binariks is an expert in IoT connectivity that knows how to integrate software and hardware into a single frictionless system",
    },
    {
      title: "IoT Analytics",
      content:
        "Power Internet of Things solutions with advanced analytics based on AI and big data capabilities. We deploy IoT products that process large volumes of data in real-time and convert it into useful findings for end-users and software providers.",
    },
    {
      title: "IoT Mobile ApplicationsAnother Section Title",
      content:
        "CoMonitor device interactions with IoT apps to improve user experience, collect behavioral statistics, offer personalized tips, and implement a range of other handy features. Mobile applications serve as a touch point between smart Internet of Things devices and usersntent of another section. This section can be expanded on hover.",
    },
    {
      title: "IoT Software Enhancement",
      content:
        "Build custom solutions on top of current software or upgrade it with more innovative IoT technologies. Our IoT software development company can join your project at any stage to strengthen your in-house expertise and speed up the IoT development process device interactions with IoT apps to improve user experience, collect behavioral statistics, offer personalized tips, and implement a range of other handy features. Mobile applications serve as a touch point between smart Internet of Things devices and usersntent of another section. This section can be expanded on hover.",
    },
    {
      title: "IoT Consulting",
      content:
        "Choose Binariks as your Internet of Things consulting partner to create products with high market demand and a powerful technology stack. Binariks’ IoT technology experts can run an audit of your existing solutions or provide recommendations on future projects device interactions with IoT apps to improve user experience, collect behavioral statistics, offer personalized tips, and implement a range of other handy features. Mobile applications serve as a touch point between smart Internet of Things devices and usersntent of another section. This section can be expanded on hover.",
    },
    // Add more sections as needed
  ];

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h2 className="text-6xl text-coralred font-abelPro font-bold mt-10 mb-10">
        Explore our IOT{" "}
        <span className="text-6xl text-deepBlue font-abelPro font-bold mt-10 mb-10">
          {" "}
          expertise
        </span>
      </h2>
      <p className="text-base font-abelPro p-2 mt-3 text-center">
        Nextzensoft unites IoT experts that have launched IoT applications for
        customers from automotive, healthcare, real estate, transportation, and
        other industries. We create solutions of any size and complexity ranging
        from a quick prototype to full-fledged IoT software platforms and
        industrial IoT.
      </p>
      <div className="w-[90vw] grid max-xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-1 gap-10 p-10 mx-5">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`border-[2px] border-coralred rounded-xl shadow-2xl p-4 cursor-pointer transition-all ${
              expandedSection === index ? "w-[300px]" : "h-[75px]"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}>
            <h1 className="text-lg font-abelPro flex items-center">
              {section.title}
            </h1>
            {expandedSection === index && (
              <p className="text-sm mt-2">{section.content}</p>
            )}
            {expandedSection === index && (
              <div className="w-full h-[20px] bg-coralred mt-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IoT_App;
