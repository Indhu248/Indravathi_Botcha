import React from "react";
import { PrefetchPageLinks } from "react-router-dom";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "../components/Footer";
import Blocks from "../components/Blocks";

const About = () => {
  const span_style =
    "text-violet-500"
  return (
    <div 
    id="About" className="relative w-[100vw] bg-slate-950 md:px-30">
      <div>
        <h1 className="text-slate-50 text-2xl md:text-4xl font-semibold text-center px-12 md:px-46 py-20">
          I'M A <span className={span_style}>FULL-STACK DEVELOPER</span> DIGITAL CREATOR, AND AI ENTHUSIAST WHO LOVES BUILDING, DESIGNING, AND SHARING KNOWLEDGE. I SIMPLIFY COMPLEX TOPICS TO HELP OTHERS LEARN AND GROW. WHETHER THROUGH CODE, DESIGN, OR CONTENT, I AIM TO INSPIRE AND EXPLORE NEW POSSIBILITIES.
        </h1>
      </div>
      {/* <Blocks /> */}
    </div>
  );
};

export default About;
