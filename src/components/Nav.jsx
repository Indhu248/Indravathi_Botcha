import React, { useState } from "react";
import { Mail, Menu, MoveRight } from 'lucide-react';
import ColorPicker from "./ColorPicker";

const Nav = () => {

  const yourEmail = "botchaindravathi248@gmail.com"; // Replace with your email
  const subject = "Let's Connect!";
  const body = "Hi, I'd like to get in touch with you.";

  const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const [showMenu, setShowMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const data = [
    {
      id: 1,
      title: "Home",
      link: "#Home",
    },
    {
      id: 2,
      title: "About",
      link: "#About",
    },
    {
      id: 3,
      title: "Skills",
      link: "#Skills",
    },
    {
      id: 4,
      title: "Projects",
      link: "#Projects",
    },
    {
      id: 5,
      title: "Contact",
      link: "#Contact",
    }
  ];
  return (
    <div className="flex justify-between items-center py-8 text-white">
        <h1 className="text-xl md:text-3xl font-black text-slate-50">INDRAVATHI<span className="text-slate-950">.</span></h1>
      <div>
        <div className="flex flex-col md:flex md:flex-row items-center">
          <Menu color="black" onClick={() => setShowMenu(!showMenu)} className="relative md:hidden"/>
          <nav
          className={`absolute md:relative rounded-lg md:rounded-none left-50 md:left-0 top-18 md:top-0 bg-slate-950 md:bg-transparent md:flex transition-all px-4 md:px-0 md:mr-6 ${
            showMenu ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 p-6 md:p-0">
            {data.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={() => setActiveItem(item.id)}
                  className={`transition-all text-slate-50 md:text-slate-950 ${
                    activeItem === item.id
                      ? "border-b-2 border-violet-950"
                      : "border-transparent"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="hidden lg:flex md:w-50 justify-between items-center bg-slate-950 hover:bg-slate-800 text-slate-50 font-bold py-2 px-2 rounded-full">
          <a href={mailtoLink}
          className="text-slate-400 font-normal text-md flex items-center pl-2">
            {/* <Mail size={19}/> */}
            Write an email</a>
          <div className="bg-violet-600 p-2 rounded-full">
          <MoveRight size={24} color="white"/>
          </div>
        </button>
        </div>
        {/* <ColorPicker /> */}
      </div>
    </div>
  );
};

export default Nav;
