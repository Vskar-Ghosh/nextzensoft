/** @format */

import React, { useState } from "react";
import { javaFaQData } from "../../constants";
import Accotdoin from "./Accotdoin";

const JavaFaq = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(false);
    }
    setOpen(index);
  };
  return (
    <section className="h-[100vh] md:h-[100vh] flex flex-col justify-center items-center py-30 mt-20 p-5  ">
      <h1 className="text-6xl max-sm:text-3xl sm:text-4xl md:text-5xl xl:text-6xl max-xl:text-7xl max-sm:mx-3 font-abelPro font-bold text-coralred mb-0">
        Quick Answers to{" "}
        <span className="text-4xl max-sm:text-3xl sm:text-4xl md:text-5xl xl:text-6xl max-xl:text-6xl font-abelPro font-bold text-[#241468]">
          Common Questions
        </span>
      </h1>
      <div className="w-full grid place-items-center overflow-auto scrollbar-hide ">
        <div className="h-[100vh] flex flex-col mt-10">
          <div className="px-4 md:px-5 max-w-[800px] ">
            {javaFaQData.map((data, index) => {
              return (
                <Accotdoin
                  key={index}
                  open={index === open}
                  title={data.title}
                  desc={data.description}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JavaFaq;
