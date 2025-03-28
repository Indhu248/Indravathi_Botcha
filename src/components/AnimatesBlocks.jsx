import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedBlocks = () => {
  return (
    <motion.div className="grid grid-cols-3 grid-rows-3 gap-4 p-4 w-[56vw] md:w-[16vw] h-58">
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="col-span-1 w-15 h-15 row-span-1 bg-[#794DFF60] p-4 text-center rounded-lg"
      ></motion.div>
      <div className="col-span-1 w-10 h-10 row-span-1 bg-[#794DFF90] p-4 text-center rounded-lg"></div>
      <div className="col-start-1 w-10 h-10 row-span-1 bg-[#794DFF] p-4 text-center rounded-lg"></div>

      <div className="col-start-2 w-15 h-15 row-span-1 bg-[#794DFF60] p-4 text-center rounded-lg"></div>
      <motion.div 
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.9,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }}
      className="col-start-3 w-15 h-15 row-span-1 bg-[#794DFF] p-4 text-center rounded-lg"></motion.div>

      <div className="col-start-2 w-10 h-10 row-span-1 bg-[#794DFF60] p-4 text-center rounded-lg"></div>
      <motion.div className="col-start-3 w-10 h-10 row-span-1 bg-[#794DFF80] p-4 text-center rounded-lg"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }}></motion.div>
      {/* <div className="col-span-3 row-span-1 bg-rose-600 p-4 text-center">8</div> */}
    </motion.div>
  );
};

export default AnimatedBlocks;
