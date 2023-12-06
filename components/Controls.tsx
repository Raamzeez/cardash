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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateRight,
  faBell,
  faBellSlash,
  faBolt,
  faLightbulb,
  faLocationDot,
  faLock,
  faSquare,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";

const Controls: FC = () => {
  const controls = [
    {
      unactivated: "Unlock Car",
      icon: faUnlock,
      activated: "Lock Car",
      activatedIcon: faLock,
    },
    {
      unactivated: "Start Charging",
      icon: faBolt,
      activated: "Stop Charging",
      activatedIcon: faSquare,
    },
    {
      unactivated: "Locate Vehicle",
      icon: faLocationDot,
      activated: "Locate Vehicle",
      activatedIcon: faLocationDot,
    },
    {
      unactivated: "Enable Notifications",
      icon: faBell,
      activated: "Disable Notifications",
      activatedIcon: faBellSlash,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-y-12 justify-items-center sm:flex sm:flex-row items-center sm:justify-between w-full md:w-4/5 lg:w-2/5 m-10">
      {controls.map((control) => {
        return (
          // <ControlButton
          //   unactivated={control.unactivated}
          //   activated={control.activated}
          //   key={control.unactivated}
          //   icon={control.icon}
          //   activatedIcon={control.activatedIcon}
          // />
          // <div className="flex items-center justify-center absolute bottom-24 w-32 h-8 bg-slate-600 rounded-md">
          //   <p className="text-">{control.activated}</p>
          // </div>
          <ControlButton
            key={control.unactivated}
            activated={control.activated}
            icon={control.icon}
            unactivated={control.unactivated}
            activatedIcon={control.activatedIcon}
          />
        );
      })}
    </div>
  );
};

export default Controls;
