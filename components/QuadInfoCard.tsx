import { IconDefinition, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { FC } from "react";

interface iProps {
  icon: IconDefinition;
  data: string[] | number[];
}

const QuadInfoCard: FC<iProps> = ({ data, icon }) => {
  return (
    <div className="grid grid-cols-2 h-48 w-32 m-10 xxs:w-64 xs:w-96 rounded-xl bg-slate-200 dark:bg-slate-600 shadow-xl">
      {data.map((data, index) => {
        return (
          <div className="flex items-center justify-center" key={index}>
            {/* <Image src={"/tire.png"} height={20} width={20} alt="Tire Photo" /> */}
            <FontAwesomeIcon icon={icon} className="text-2xl" color="#34bf67" />
            <h3 className="text-md ml-3 font-semibold">{data}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default QuadInfoCard;
