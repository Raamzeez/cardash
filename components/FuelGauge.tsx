import { faGasPump } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface iProps {
  percentage: number;
  range: number;
}

const FuelGauge: FC<iProps> = ({ percentage, range }) => {
  const barWidth = ((percentage / 100) * 8).toFixed(1);

  console.log(barWidth);

  return (
    <div className="flex">
      <FontAwesomeIcon icon={faGasPump} className="text-2xl mr-4" />
      <div className="relative h-6 w-32 rounded-sm border border-gray-400">
        <div
          className={`absolute h-6 rounded-sm bg-black dark:bg-white`}
          style={{ width: `${barWidth}rem` }}
        />
      </div>
      <p className="text-lg ml-5 font-semibold">
        {range} miles{" "}
        <span className="invisible md:visible">({percentage}%)</span>
      </p>
    </div>
  );
};

export default FuelGauge;
