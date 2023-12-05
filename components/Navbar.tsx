"use client";
import { faBell, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Cars",
      href: "cars",
    },
    {
      text: "Support",
      href: "support",
    },
  ];
  const menuLinks = [
    { icon: faBell, text: "Notifications" },
    { icon: faGear, text: "Settings" },
  ];

  return (
    <nav className="flex justify-between min-h-min p-6 w-full bg-slate-200 dark:bg-slate-600 shadow-md">
      <Image
        src={"https://cdn-icons-png.flaticon.com/512/6604/6604292.png"}
        height={50}
        width={50}
        alt="Logo"
      />
      <div className="flex items-center text w-4/5 md:w-3/5 lg:w-2/5 justify-around md:justify-between">
        {links.map((link) => {
          return (
            <Link
              key={link.text}
              href={link.href}
              className="text-xl font-semibold hover:text-blue-300 duration-150 hover:cursor-pointer"
            >
              {link.text}
            </Link>
          );
        })}
      </div>
      <div className="relative">
        <Image
          src={"/profile.jpeg"}
          height={40}
          width={50}
          alt="Profile"
          className="rounded-full hover:cursor-pointer hover:shadow-2xl duration-200"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu ? (
          <div
            className={`h-36 w-64 bg-white rounded-md absolute top-20 right-0 z-10 border-solid border-2 border-slate-200 duration-300`}
          >
            {menuLinks.map((link) => {
              return (
                <div className="flex items-center w-full hover:bg-gray-200 hover:cursor-pointer">
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="text-2xl ml-5 p-3"
                    color="gray"
                  />
                  <h3 className="m-5 text-black">{link.text}</h3>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
