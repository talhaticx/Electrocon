"use client";
import { TypewriterEffect } from "./../ui/typewriter-effect";
import FloatingImage from "./../components/floatingImage";
import Navbar from "./../components/navbar";

export default function Hero() {
  const words = [
    { text: "Wait ", ClassName: "econGrey" },
    { text: "is " },
    { text: "over, " },
    { text: "ElectroCON’25", className: "econPurpleLight" },
    { text: "is " },
    { text: "here." },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-around h-screen w-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-3/5 mb-24 py-16 md:mb-0 md:mx-10 md:w-3/5">
        <TypewriterEffect words={words} />
      </div>

      <div className="flex flex-col items-center justify-center md:w-2/5 ">
        <FloatingImage src="econ.png" alt="Electrocon" width={230}/>
      </div>
    </div>
  );
}
