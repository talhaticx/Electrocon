"use client";
import React from "react";
import { Spotlight } from "../ui/spotlight-new";
import GridLines from "react-gridlines";
import { motion } from "framer-motion"; // Import Framer Motion
import Button from "../components/button";

import { ECON } from "../data/econ";

export default function Welcome() {
  return (
    <GridLines
      className="grid-area"
      cellWidth={30}
      cellWidth2={30}
      strokeWidth={1}
      lineColor="#45474a"
      lineColor2="#45474a"
    >
      <div className="h-screen w-screen flex md:items-center md:justify-center bg-black/[0.70] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight duration={15} />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center gap-4">
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-4xl md:text-7xl TitleFontCustom text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
            >
              {ECON}
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.2, ease: "easeOut" }} className="text-3xl mt-4 md:mt-0 md:text-5xl TitleFontCustom text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              The Most Aviated Event
            </motion.h3>
          </div>
          <p className="mt-4 md:mt-5 text-lg md:text-base font-normal text-neutral-300 max-w-lg text-center mx-auto">
            Technical Event Organized by IET on Campus UET Lahore. Modules like
            Coding Competitions, Gaming and Robo War.
          </p>
          <div className="flex justify-center mt-4">
            <Button text={"Sign Up"} path="/home" />
          </div>
        </div>
      </div>
    </GridLines>
  );
}
