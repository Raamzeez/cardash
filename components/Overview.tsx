"use client";

import Image from "next/image";
import React, { FC, useState } from "react";
import { FaC, FaCarBattery } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";
import { BsLightningChargeFill } from "react-icons/bs";
import TirePressureCard from "./QuadInfoCard";
import TypeLabel from "./TypeLabel";
import getCarById from "@/tools/getCarById";
import LocationModal from "./LocationModal";
import Alert from "./Alert";
import FuelGauge from "./FuelGauge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleMinus,
  faCircleXmark,
  faOilCan,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";

interface iProps {
  id: string;
}

const Overview: FC<iProps> = ({ id }) => {
  const [isCharging, setIsCharging] = useState(true);

  // const [hover, setHover] = useState(false);

  const car = getCarById(id);

  return (
    <>
      {/* <Alert type="error" /> */}
      <div className="relative flex flex-col w-full items-center justify-center p-12 bg-lightgrid dark:bg-darkgrid bg-cover bg-center shadow-lg">
        {/* <LocationModal /> */}
        {/* <div className="flex absolute top-4 left-8 bg-slate-800 p-4 rounded-3xl"> */}
        <div className="flex absolute top-4 left-8">
          <span className="relative flex h-3 w-3 mr-5 mt-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="invisible 750:visible text-lg font-bold">
            Refreshes Every 15s
            {/* Vehicle Connected */}
          </p>
        </div>
        <div className="absolute top-16 left-6 flex justify-center items-center h-10 w-10 rounded-full bg-slate-300 dark:bg-blue-500 hover:cursor-pointer hover:shadow-lg duration-200">
          <FontAwesomeIcon
            icon={faRotateRight}
            className="text-lg"
            color="white"
          />
        </div>
        <div className="absolute top-9 right-6">
          <Image
            src={car.icon}
            height={car.iconHeight ? car.iconHeight + 10 : 55}
            width={car.iconWidth ? car.iconWidth + 10 : 55}
            alt={`Mercedes Logo`}
          />
        </div>
        <div className="absolute top-32 left-7">
          <TypeLabel type={car.type} />
        </div>
        <h1 className="text-xl xxs:text-2xl xs:text-4xl font-serif">
          {car.model}
        </h1>
        {/* <h1 className="text-xl xxs:text-2xl xs:text-4xl">2023 Polestar 2</h1> */}
        <Image
          src={car.image}
          // height={hover ? 450 : 400}
          // width={hover ? 450 : 400}
          height={400}
          width={400}
          alt="Car Photo"
          // onMouseOver={() => setHover(true)}
          // onMouseLeave={() => setHover(false)}
          className="duration-200"
        />
        <div className="flex flex-row w-full justify-evenly mt-5">
          <div className="flex">
            <IoIosSpeedometer className="invisible xs:visible text-2xl mr-3" />
            <h3 className="text-lg font-semibold">19,728 mi</h3>
          </div>
          {car.type == "ICE" || car.type == "PHEV" ? (
            <div className="flex">
              <FuelGauge percentage={75} range={262} />
            </div>
          ) : (
            <></>
          )}
          {car.type === "EV" || car.type === "PHEV" ? (
            <div className="flex">
              {isCharging ? (
                <BsLightningChargeFill
                  className="invisible xs:visible text-2xl mr-3"
                  color="#34bf67"
                />
              ) : (
                <FaCarBattery className="invisible xs:visible text-2xl mr-3" />
              )}
              <h3 className="text-lg font-semibold">68% - 238 miles</h3>
            </div>
          ) : (
            <></>
          )}
          {car.type === "ICE" || car.type === "PHEV" ? (
            <div className="flex">
              <FontAwesomeIcon icon={faOilCan} className="text-2xl mr-3" />
              <p className="text-lg font-semibold">{car.oil}%</p>
              <FontAwesomeIcon
                icon={
                  car.oil! > 39
                    ? faCircleCheck
                    : car.oil! > 19
                    ? faCircleMinus
                    : faCircleXmark
                }
                className="text-xl ml-5 mt-1"
                color={
                  car.oil! > 39 ? "#34bf67" : car.oil! > 19 ? "orange" : "red"
                }
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Overview;
