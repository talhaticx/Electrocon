"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { COLORS } from "./../lib/constants";
import FloatingImage from "./floatingImage";
import Navbar from "./navbar";

export default function Hero() {
  const words = [
    { text: "Wait ", ClassName: "econGrey" },
    { text: "is " },
    { text: "over, " },
    { text: "Electrocon ", className: "econPurpleLight" },
    { text: "25 ", className: "econPurpleLight" },
    { text: "is " },
    { text: "here." },
  ];

  return (
    <div className="flex flex-col items-center justify-around h-screen w-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-1/2 pt-16 w-3/5">
        <TypewriterEffect words={words} />
      </div>

      <div className="flex flex-col items-center justify-center h-1/2">
        <FloatingImage src="econ.png" alt="Electrocon" width={300}/>
      </div>
    </div>
  );
}
