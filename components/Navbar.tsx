import Image from "next/image";
import React, { FC } from "react";

const Navbar: FC = () => {
  const links = ["Home", "Cars", "Support"];

  return (
    <nav className="flex justify-between min-h-min p-6 w-full bg-slate-200 dark:bg-slate-600 shadow-md">
      <Image
        src={"https://cdn-icons-png.flaticon.com/512/6604/6604292.png"}
        height={50}
        width={50}
        alt="Logo"
      />
      <div className="hidden sm:flex items-center w-4/5 md:w-3/5 lg:w-2/5 justify-around md:justify-between">
        {links.map((link) => {
          return <a className="text-lg">{link}</a>;
        })}
      </div>
      <Image
        src={"/profile.jpeg"}
        height={40}
        width={50}
        alt="Profile"
        className="rounded-full hover:shadow-xl"
      />
    </nav>
  );
};

export default Navbar;
