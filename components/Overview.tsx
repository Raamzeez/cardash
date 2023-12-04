"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import { FaC, FaCarBattery } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";
import { BsLightningChargeFill } from "react-icons/bs";

const Overview: FC = () => {
  const [isCharging, setIsCharging] = useState(true);

  return (
    <div className="relative flex flex-col w-full items-center justify-center p-12 bg-lightgrid dark:bg-darkgrid bg-cover bg-center shadow-lg">
      {/* <div className="flex absolute top-4 left-8 bg-slate-800 p-4 rounded-3xl"> */}
      <div className="flex absolute top-4 left-8">
        <span className="relative flex h-3 w-3 mr-5 mt-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <p className="invisible 750:visible text-black dark:text-white text-lg font-bold">
          <span className="invisible -mr-20 ml-2 md:mr-3 md:ml-0 md:visible">
            Vehicle
          </span>
          Connected
        </p>
      </div>
      {/* <h1 className="text-xl xxs:text-2xl xs:text-4xl font-serif">
        2023 Mercedes Benz EQS
      </h1> */}
      <h1 className="text-xl xxs:text-2xl xs:text-4xl">2023 Polestar 2</h1>
      <Image src={"/car.webp"} height={400} width={400} alt="Car Photo" />
      <div className="flex flex-row w-full justify-evenly mt-5">
        <div className="flex">
          <IoIosSpeedometer className="invisible xs:visible text-2xl" />
          <h3 className="ml-3 text-lg font-semibold">19,728 mi</h3>
        </div>
        <div className="flex">
          {isCharging ? (
            <BsLightningChargeFill
              className="invisible xs:visible text-2xl"
              color="#34bf67"
            />
          ) : (
            <FaCarBattery className="invisible xs:visible text-2xl" />
          )}
          <h3 className="ml-3 text-lg font-semibold">48% - 238 miles</h3>
        </div>
      </div>
    </div>
  );
};

export default Overview;
