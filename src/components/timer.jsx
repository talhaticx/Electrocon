import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { COLORS } from "../lib/constants";

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const renderCircle = (value, max, label) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const progress = (value / max) * circumference;

    return (
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <svg width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={COLORS.econGrey}
            strokeWidth="9"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={COLORS.econPurpleLight}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={0} // Starts full
            strokeLinecap="butt"
            whileInView={{ strokeDashoffset: circumference - progress }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fontSize="20"
            fill="#fff"
            fontWeight="bold"
          >
            {value}
          </text>
        </svg>
        <span className="text-sm text-white">{label}</span>
      </motion.div>
    );
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {renderCircle(timeLeft.days, 10, "Days")}
      {renderCircle(timeLeft.hours, 24, "Hours")}
      {renderCircle(timeLeft.minutes, 60, "Minutes")}
      {renderCircle(timeLeft.seconds, 60, "Seconds")}
    </div>
  );
};

export default Timer;
