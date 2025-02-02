"use client";
import React from "react";
import { Spotlight } from "./A-ui/spotlight-new";
import GridLines from "react-gridlines";
import Title from "./title";

export default function Hero() {
  return (
    <GridLines
      className="grid-area"
      cellWidth={30}
      cellWidth2={30}
      strokeWidth={1}

      lineColor="#0D1116"
      lineColor2="#0D1116"
    >
      <div className="h-screen w-screen  flex md:items-center md:justify-center bg-black/[0.60] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight duration={15} />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Electrocon 24 <br /> The Most Aviated Event
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Technical Event Organazied by IET on Campus UET Lahore. Modules like Coding Competitions, Gaming and Robo War.
        </p>
      </div>
      </div>
    </GridLines>
  );
}
