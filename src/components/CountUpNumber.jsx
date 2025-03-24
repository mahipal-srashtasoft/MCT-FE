import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const formatNumber = (num) => {
  if (num >= 1000) return (num / 1000).toFixed(0) + "K"; // Convert to "K" format
  return num;
};
const CountUpNumber = ({ end, suffix, duration = 2  }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="flex flex-col items-center text-center space-y-2">
      <div className="text-3xl font-bold text-orange-500">
        {inView && (
          <>
            <CountUp
              start={0}
              end={end}
              duration={duration}
              formattingFn={formatNumber}
            />
            {suffix}
          </>
        )}
      </div>
    </div>
  );
};

export default CountUpNumber;
