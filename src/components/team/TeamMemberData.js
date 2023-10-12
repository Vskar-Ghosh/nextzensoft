/** @format */
import {
  salimTest,
  vaskarTest,
  sabbirTest,
  ibnul,
} from "../../assets/index.js";
export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 3000, min: 1500 },
    items: 4,
    slidesToSlide: 2,
  },
  LargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1500, min: 1150 },
    items: 3,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1150, min: 800 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const developertData = [
  {
    id: 1,
    image: salimTest,
    name: "Md Salim Hossain",
    edu: " Limkokwing University of Creative Technology(Malaysia)",
    deg: "Full Stack Software Engineer",
    experience:
      " Experienced full-stack developer with two plus years of experience in the industry. ",
    tech: "Java,C#,JavaCsrip,Flutter,React,NodeJs Mysql,MongoDB,TailwindCss",
  },
  {
    id: 2,
    image: sabbirTest,
    name: "Sabbir Rahman",
    edu: "Independent University, Bangladesh",
    deg: "Product Manager",
    experience:
      " Experienced full-stack developer with two plus years of experience in the industry. ",
    tech: "Java,C#,JavaCsrip,Flutter,React,NodeJs Mysql,MongoDB,TailwindCss",
  },
  {
    id: 3,
    image: vaskarTest,
    name: "Vaskar Ghosh",
    edu: "Varendra University, Bangladesh",
    deg: "Developer",
    experience:
      " Experienced full-stack developer with one plus years of experience in the industry. ",
    tech: "Java,C#,JavaCsrip,Flutter,React,NodeJs Mysql,MongoDB,TailwindCss",
  },
  {
    id: 1,
    image: ibnul,
    name: "Ibnul Hossain",
    edu: "Independent University, Bangladesh",
    deg: "App developer",
    experience:
      " Experienced full-stack developer with two plus years of experience in the industry. ",
    tech: "Java,C#,JavaCsrip,Flutter,React,NodeJs Mysql,MongoDB,TailwindCss",
  },
];
