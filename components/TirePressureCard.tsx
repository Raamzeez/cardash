import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { FC } from "react";

const TirePressureCard: FC = () => {
  const pressures = [36, 36, 36, 36];

  return (
    <div className="grid grid-cols-2 h-48 w-32 xxs:w-64 xs:w-96 rounded-xl bg-slate-200 shadow-xl">
      {pressures.map((pressure, index) => {
        return (
          <div className="flex items-center justify-center" key={index}>
            {/* <Image src={"/tire.png"} height={20} width={20} alt="Tire Photo" /> */}
            <FontAwesomeIcon
              icon={faGear}
              className="text-2xl"
              color="#34bf67"
            />
            <h3 className="text-black text-md ml-3">{pressure} psi</h3>
          </div>
        );
      })}
    </div>
  );
};

export default TirePressureCard;
