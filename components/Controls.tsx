import React, { FC } from "react";
import { RiLoaderLine } from "react-icons/ri";
import { FaUnlock } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { PiHeadlightsFill } from "react-icons/pi";
import { PiHeadlightsBold } from "react-icons/pi";
import { RiRestartLine } from "react-icons/ri";
import { FaBullhorn } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFan } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ControlButton from "./ControlButton";

const Controls: FC = () => {
  const controls = [
    {
      unactivated: "Unlock Car",
      icon: FaUnlock,
      activated: "Lock Car",
      activatedIcon: FaLock,
    },
    {
      unactivated: "Turn On Headlights",
      icon: PiHeadlightsFill,
      activated: "Turn Off Headlights",
      activatedIcon: PiHeadlightsFill,
    },
    {
      unactivated: "Start Engine",
      icon: RiRestartLine,
      activated: "Stop Engine",
      activatedIcon: ImCross,
    },
    {
      unactivated: "Locate Vehicle",
      icon: FaMapMarkerAlt,
      activated: "Locate Vehicle",
      activatedIcon: FaMapMarkerAlt,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-y-20 justify-items-center sm:flex sm:flex-row items-center sm:justify-between w-full md:w-4/5 lg:w-2/5 m-10">
      {controls.map((control) => {
        return (
          // <ControlButton
          //   unactivated={control.unactivated}
          //   activated={control.activated}
          //   key={control.unactivated}
          //   icon={control.icon}
          //   activatedIcon={control.activatedIcon}
          // />
          <div className="relative m-5 flex justify-center items-center h-20 w-20 rounded-full dark bg-sky-500 dark:bg-sky-900 duration-300 hover:shadow-xl hover:cursor-pointer hover:bg-sky-900 dark:hover:bg-sky-400">
            {/* <div className="flex items-center justify-center absolute bottom-24 w-32 h-8 bg-slate-600 rounded-md">
              <p className="text-">{control.activated}</p>
            </div> */}
            <control.icon className="text-3xl" color="white" />
          </div>
        );
      })}
    </div>
  );
};

export default Controls;
