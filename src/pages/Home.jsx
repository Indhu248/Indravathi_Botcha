import React from "react";
import Nav from "../components/Nav";
import ColorPicker from "../components/ColorPicker";
import { MoveRight } from "lucide-react";
import Blocks from "../components/Blocks";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
    id="Home"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
     className="w-full h-[100vh] bg-gradient-to-r from-[#745BFF] to-[#A291FF] px-8 md:px-16 lg:px-30">
      <Nav />
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-col justify-center h-[80vh] text-center lg:text-left">
          <h1 className="text-[9vh] sm:text-[15vh] md:text-[21vh] lg:text-[23vh] leading-14 md:leading-34 font-black">
            Web<br />
            Developer
          </h1>
          <button className="flex w-40 justify-between items-center bg-slate-50 hover:bg-slate-300 text-slate-950 font-bold py-2 px-2 rounded-full mt-8 mx-auto lg:mx-0">
            <a href="https://drive.google.com/file/d/1i_aLqwbo13EKWWD01vPPF9UlT9xGC52P/view?usp=sharing" className="text-slate-950 font-normal text-lg pl-2">Resume</a>
            <div className="bg-violet-500 p-2 rounded-full">
              <MoveRight size={24} color="white" />
            </div>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-auto  md:flex justify-center lg:justify-end mt-8 lg:mt-0">
          <Blocks />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
