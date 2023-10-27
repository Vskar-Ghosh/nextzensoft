/** @format */

import React from "react";

import { ndjAngulor, ndjNode, ndjReact } from "../../../../assets/index";

const JsCompo = () => {
  return (
    <div className="flex flex-col p-3">
      <div className="flex flex-col ml-20 mr-20 mb-10 p-1o">
        <h1 className="text-6xl text-coralred font-abelPro font-bold mt-10 mb-10 text-center">
          JavaScript Development{" "}
          <span className="text-6xl text-deepBlue font-abelPro font-bold mt-10 mb-10 text-center">
            {" "}
            Services
          </span>
        </h1>

        <p className="text-xl text-deepBlue font-abelPro font-bold text-center mt-3">
          Nextzen offer feature-packed JavaScript Services. We have expertise in
          designing a single-page applications, industrial ERP softwares to
          Mobile App development.
        </p>
        <p className="text-lg text-deepBlue text-center font-abelPro p-3 mt-5 ">
          JavaScript is a well-known front end technology today. We use a JS
          framework to create interactive web pages. As we all know that most of
          the browsers have JS engine inbuilt that makes it works smooth.
          Furthermore, it is a lightweight and object-oriented language. It has
          superior functions like Java & C++ syntax that reduces the concepts to
          learn the language. Today this framework is emerging as a server-side
          technology. You can see Node.js is one of the best examples of it. Be
          it Front End or Back End, JS is very crucial for creating a
          single-page website or a mobile application in the development
          process. This scripting technology creates interactive interfaces with
          better user experience in front-end programming.
        </p>
      </div>
      {/* end of heading */}
      <div className="flex max-xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col justify-center items-center max-sm:flex-col gap-10 max-sm:gap-5 sm:gap-5">
        <div className="flex flex-col w-[300px] h-[600px] p-5 mt-5 rounded-xl shadow-2xl bg-white">
          <div className="flex flex-col w-[80px] h-[80px] bg-white rounded-xl shadow-xl justify-center items-center p-3 mb-2">
            <img src={ndjAngulor} alt="" className="" />
          </div>
          <h1 className="text-2xl text-coralred font-abelPro font-bold mt-2">
            AngularJS
          </h1>
          <p className="text-xl text-deepBlue font-abelPro text-start">
            AngularJS is an extensible and exciting new JavaScript MVC framework
            developed by Google for building well-designed, structured and
            interactive single-page applications (SPA). It lays strong emphasis
            on Testing and Development best practices such as templating and
            declarative bi-directional data binding. It is a complete framework
            that helps in writing a proper architectured, maintainable and
            testable client side code.
          </p>
        </div>
        {/* end of 1 */}
        <div className="flex flex-col w-[300px] h-[600px] p-5 mt-5 rounded-xl shadow-2xl bg-white ">
          <div className="flex flex-col w-[80px] h-[80px] bg-white rounded-xl shadow-xl justify-center items-center p-3 mb-2">
            <img src={ndjNode} alt="" className="" />
          </div>
          <h1 className="text-2xl text-coralred font-abelPro font-bold mt-2">
            Node.JS
          </h1>
          <p className="text-xl text-deepBlue font-abelPro text-start">
            Node.JS is a runtime environment written on Javascript server-side
            for execution. It helps real-time network applications on this
            open-source platform. Node.js represents a development platform that
            can respond to creating applications for the modern web. This
            includes: Real-time applications, Multiplayer games, Single-page
            applications and JSON-based APIs.
          </p>
        </div>
        {/* enf of item 2*/}
        <div className="flex flex-col w-[300px] h-[600px] p-5 mt-5 rounded-xl bg-white shadow-2xl ">
          <div className="flex flex-col w-[80px] h-[80px] bg-white rounded-xl shadow-xl justify-center items-center p-3 mb-2">
            <img src={ndjReact} alt="" className="" />
          </div>
          <h1 className="text-2xl text-coralred font-abelPro font-bold mt-2">
            React JS
          </h1>
          <p className="text-xl text-deepBlue font-abelPro text-start">
            React is a component-based JavaScript library for building user
            interfaces. Currently, React is maintained by Facebook and an active
            community of developers and companies. It can be used as a
            foundation for single-page or mobile applications and it is ideal
            for reflecting data in real time. ReactJS or React has a
            business-forward mindset and a strong concept of code reusability.
          </p>
        </div>
        {/* end of item 3 */}
      </div>
      {/* end of freamwork */}
    </div>
  );
};

export default JsCompo;
