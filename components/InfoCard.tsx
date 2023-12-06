import {
  IconDefinition,
  faCircleCheck,
  faCircleMinus,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { FC, useState } from "react";

interface iProps {
  header: string;
  icon: IconDefinition;
  data: string[] | number[];
  valueLabel?: string;
  renderCondition?: boolean;
  warningCondition?: (entry: number | string) => boolean;
  warningIcon?: IconDefinition;
}

const InfoCard: FC<iProps> = ({
  header,
  data,
  icon,
  valueLabel = "",
  renderCondition = true,
  warningCondition,
  warningIcon = icon,
}) => {
  // const [pass, setPass] = useState(true);

  let pass = true;

  return (
    <>
      {renderCondition ? (
        <>
          <div className="flex flex-col items-center mt-10">
            <div className="flex">
              <p className="text-lg font-semibold">{header}</p>
              <FontAwesomeIcon
                icon={pass ? faCircleCheck : faCircleMinus}
                className="text-xl ml-4 mt-1"
                color={pass ? "#34bf67" : "#f57547"}
              />
            </div>
            <div
              className={`${
                data.length > 2
                  ? "grid grid-cols-2"
                  : "flex justify-center items-center"
              } h-48 w-32 m-10 xxs:w-64 xs:w-96 rounded-xl bg-slate-200 dark:bg-slate-600 shadow-lg`}
            >
              {data.map((value, index) => {
                const showWarning = warningCondition && warningCondition(value);
                // if (showWarning) {
                //   setPass(false);
                // } else if (index === data.length - 1) {
                //   setPass(true);
                // }
                return (
                  <div className="flex items-center justify-center" key={index}>
                    {/* <Image src={"/tire.png"} height={20} width={20} alt="Tire Photo" /> */}
                    <FontAwesomeIcon
                      icon={showWarning ? warningIcon : icon}
                      className={`${data.length > 2 ? "text-2xl" : "text-5xl"}`}
                      color={showWarning ? "#f57547" : "#34bf67"}
                    />
                    <h3
                      className={`text-${
                        data.length > 2 ? "md ml-3" : "2xl ml-7"
                      } font-semibold`}
                    >
                      {value} {valueLabel}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default InfoCard;
