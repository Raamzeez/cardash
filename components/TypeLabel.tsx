import CarType from "@/types/CarType";
import React, { FC } from "react";

interface iProps {
  type: CarType;
}

const TypeLabel: FC<iProps> = ({ type }) => {
  return (
    <p
      className={`text-lg italic ${type === "EV" && "text-sky-400"} ${
        type === "PHEV" && "text-emerald-400"
      } ${type === "ICE" && "text-orange-400"} font-semibold`}
    >
      {type}
    </p>
  );
};

export default TypeLabel;
