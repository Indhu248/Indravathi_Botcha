import React from "react";
import { icons } from "../assets";

const Skills = () => {
  const skills_details = [
    {
      id: 13,
      name: "Java",
      icon: icons.java,
    },
    {
      id: 1,
      name: "React",
      icon: icons.react,
    },
    {
      id: 2,
      name: "Node",
      icon: icons.node,
    },
    {
      id: 3,
      name: "Mongo",
      icon: icons.mongo,
    },
    {
      id: 4,
      name: "Express",
      icon: icons.express,
    },
    {
      id: 5,
      name: "HTML",
      icon: icons.html,
    },
    {
      id: 6,
      name: "CSS",
      icon: icons.css,
    },
    {
      id: 7,
      name: "JavaScript",
      icon: icons.javascript,
    },
    {
      id: 8,
      name: "Python",
      icon: icons.python,
    },
    {
      id: 9,
      name: "Git",
      icon: icons.git,
    },
    {
      id: 10,
      name: "SQL",
      icon: icons.sql,
    },
    {
      id: 11,
      name: "Bootstrap",
      icon: icons.bootstrap,
    },
    {
      id: 12,
      name: "API",
      icon: icons.api,
    },
  ];
  return (
    <div
      id="Skills"
      className="px-10 md:px-30 py-4 flex items flex-col border-t-1 border-slate-800 bg-slate-950 md:py-20 md:min-h-auto xl:min-h-auto"
    >
      <h1 className="text-4xl font-semibold text-violet-500">SKILLS.</h1>
      <div className="grid grid-cols-3 md:grid-rows-3 md:grid-cols-6 gap-2 md:gap-4 mt-4 md:my-10">
        {skills_details.map((item, key) => (
          <div
            key={key}
            className="bg-violet-300/10 rounded-lg flex justify-center items-center gap-2 p-2"
          >
            <h2 className="text-[12px] text-sm md:text-lg text-slate-300">
              {item.name}
            </h2>
            <img src={item.icon} alt="" className="md:h-10 h-6" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
