"use client";
import {
  IconDefinition,
  faBell,
  faGear,
  faPhone,
  faTableColumns,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import ProfileMenu from "./ProfileMenu";

interface iLink {
  icon: IconDefinition;
  text: string;
  href: string;
}

const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const links: iLink[] = [
    {
      icon: faTableColumns,
      text: "Dashboard",
      href: "/dashboard/3HEFX",
    },
    {
      icon: faWarehouse,
      text: "Garage",
      href: "/garage",
    },
    {
      icon: faPhone,
      text: "Support",
      href: "/support",
    },
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
              <FontAwesomeIcon icon={link.icon} className="text-xl mr-5" />
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
        {showMenu ? <ProfileMenu /> : <></>}
      </div>
    </nav>
  );
};

export default Navbar;
