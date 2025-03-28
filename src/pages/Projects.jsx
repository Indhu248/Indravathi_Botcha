import { MoveRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import one from "../assets/one.jpeg";
import two from "../assets/two.jpeg";
import three from "../assets/three.jpeg";
import four from "../assets/four.jpg";

const Projects = () => {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState("");
  // const [arrowVisible, setArrowVisible] = useState(false);
  return (
    <motion.div 
    id="Projects" className="border-t-1 border-slate-800 px-10 md:px-30 py-10 flex flex-col min-h-auto bg-slate-950">
      <h1 className="text-4xl font-semibold text-violet-500">PROJECTS.</h1>
      <div className="flex flex-col mt-4 md:mt-0">
        {[
          { name: "E-COMMERCE WEBSITE", image: one, link:"https://github.com/Indhu248?tab=repositories" },
          { name: "PORTFOLIO WEBSITE", image: two, link:"https://github.com/Indhu248/portfolio_indhu" },
          { name: "YOUTUBE CLONE", image: three, link:"https://github.com/Indhu248/Youtube_Clone" },
          { name: "OTHER PROJECTS", image: four, link:"https://github.com/Indhu248?tab=repositories" },
        ].map((project, index) => (
          <motion.div
            key={index}
            className="item relative group flex flex-col md:flex-row items-center justify-center md:justify-between border-b-1 border-slate-800"
            initial={{ opacity: 1, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onPointerEnter={() => {
              setVisible(true);
              setId(index);
            }}
            onPointerLeave={() => setVisible(false)}
          >
            <motion.h1 className="relative text-2xl md:text-5xl font-semibold text-slate-300 py-4 z-20">
              {index + 1}. {project.name}
            </motion.h1>

            <motion.div className="md:flex justify-center items-center">
              <img
                src={project.image}
                alt=""
                className="md:hidden md:flex h-40 w-70 object-cover p-2 rounded-3xl"
              />
              <a href={project.link} className="pointer">
              <motion.img
                src={project.image}
                alt=""
                className={`hidden md:flex h-40 w-70 object-cover p-2 rounded-3xl ${
                  visible && id == index ? "opacity-100" : "opacity-0"
                }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: visible && id == index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              />
              </a>

              <MoveRight
                color="white"
                size={60}
                className={`absolute hidden md:flex border-2 border-slate-100 h-30 w-30 p-4 rounded-full ${
                  visible && id == index ? "opacity-100" : "opacity-0"
                }`}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
