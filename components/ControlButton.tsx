"use client";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState } from "react";

interface iProps {
  unactivated: string;
  activated: string;
  icon: IconDefinition;
  activatedIcon: IconDefinition;
}

const ControlButton: FC<iProps> = (props) => {
  const [activated, setActivated] = useState(false);

  return (
    <>
      <div
        className="m-5 flex justify-center items-center h-20 w-20 rounded-full dark bg-sky-500 dark:bg-sky-900 duration-300 hover:shadow-xl hover:cursor-pointer hover:bg-sky-900 dark:hover:bg-sky-400"
        onClick={() => setActivated(!activated)}
      >
        {activated ? (
          <FontAwesomeIcon
            icon={props.activatedIcon}
            className="text-3xl"
            color="white"
          />
        ) : (
          <FontAwesomeIcon
            icon={props.icon}
            className="text-3xl"
            color="white"
          />
        )}
      </div>
    </>
  );
};

export default ControlButton;
