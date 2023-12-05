import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

const ProfileMenu: FC = () => {
  const menuLinks = [
    { icon: faBell, text: "Notifications" },
    { icon: faGear, text: "Settings" },
  ];

  return (
    <div
      className={`h-36 w-64 bg-white dark:bg-slate-900 rounded-md absolute top-20 right-0 z-10 border-solid border-2 border-slate-200 dark:border-slate-900 duration-300`}
    >
      {menuLinks.map((link) => {
        return (
          <div
            className="flex items-center w-full hover:bg-gray-200 dark:hover:bg-gray-800 hover:cursor-pointer"
            key={link.text}
          >
            <FontAwesomeIcon
              icon={link.icon}
              className="text-2xl ml-5 p-3"
              color="lightgray"
            />
            <h3 className="m-5">{link.text}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileMenu;
