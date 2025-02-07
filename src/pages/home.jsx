import React from "react";
import Hero from "../sections/hero";
import TimerSection from "../sections/timerSection";
import { TracingBeam } from "../ui/tracing-beam";

import { ECON, ECON_INTRODUCTION } from "../data/econ";

const Home = () => {
  return (
    <>
      <div style={{ background: "#000" }} className=" overflow-y-hidden">
        <Hero />
        <div className="w-full px-3">
          <TracingBeam>
            <TimerSection />

            <h1 className="text-white text-4xl font-bold mt-16">
              About {ECON}
            </h1>
            <p className="text-white text-lg mt-4">
              {ECON_INTRODUCTION}
              </p>
          </TracingBeam>
        </div>
      </div>
    </>
  );
};

export default Home;
