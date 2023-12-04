"use client";
import React, { FC, useState } from "react";
import { IconType } from "react-icons";

interface iProps {
  unactivated: string;
  activated: string;
  icon: IconType;
  activatedIcon: IconType;
}

const ControlButton: FC<iProps> = (props) => {
  const [activated, setActivated] = useState(false);

  return (
    <>
      <div
        className="m-5 flex justify-center items-center h-20 w-20 rounded-full dark bg-sky-500 dark:bg-sky-900 duration-300 hover:shadow-xl hover:cursor-pointer hover:bg-sky-900 dark:hover:bg-sky-400"
        //   onClick={() => setActivated(!activated)}
      >
        {activated ? (
          <props.activatedIcon className="text-3xl" color="white" />
        ) : (
          <props.icon className="text-3xl" color="white" />
        )}
      </div>
    </>
  );
};

export default ControlButton;
