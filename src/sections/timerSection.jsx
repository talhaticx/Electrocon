import React from "react";
import Timer from "../components/timer";

import { EVENTDATE } from "../lib/constants";

const TimerSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-full h-100 md:h-68 text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Event starts in...</h1>
        <Timer targetDate={EVENTDATE} />
      </div>
    </>
  );
};

export default TimerSection;
