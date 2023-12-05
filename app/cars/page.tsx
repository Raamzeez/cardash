import { faCar, faChargingStation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { FC } from "react";

const Page: FC = () => {
  const cars = [
    {
      icon: "/Mercedes_Icon.png",
      image: "/car.webp",
      model: "Mercedes Benz EQS",
      year: "2023",
      ev: true,
    },
    {
      icon: "/Polestar_Icon_White.png",
      image: "/car2.webp",
      model: "Polestar 2",
      year: "2022",
      ev: true,
      iconHeight: 50,
      iconWidth: 50,
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center w-full h-screen bg-garagelight dark:bg-garage bg-cover bg-bottom">
        <div className="flex hover:cursor-pointer hover:shadow-xl duration-200 m-10 bg-gradient-to-r from-cyan-500 to-blue-500 justify-center items-center h-12 w-48 rounded-xl">
          <div className="flex">
            <FontAwesomeIcon icon={faCar} className="mr-3 mt-1" />
            <p className="font-semibold">Add Car</p>
          </div>
        </div>
        <div className="flex flex-row">
          {cars.map((car) => {
            return (
              <div key={car.model}>
                <div className="relative m-20 flex flex-col justify-center items-center mt-20 h-80 w-80 hover:h-96 hover:w-96 bg-white rounded-sm duration-200 hover:shadow-xl hover:cursor-pointer bg-cover bg-lightgrid dark:bg-darkgrid">
                  <div className="absolute top-3 left-6">
                    <p className="text-lg italic text-sky-300 font-semibold">
                      BEV
                    </p>
                  </div>
                  <div className="absolute top-3 right-6">
                    <Image
                      src={car.icon}
                      height={car.iconHeight ? car.iconHeight : 30}
                      width={car.iconWidth ? car.iconWidth : 30}
                      alt={`${car.icon} Logo`}
                    />
                  </div>
                  <Image
                    src={car.image}
                    height={275}
                    width={275}
                    alt="Car Image"
                  />
                  <h1 className="font-serif text-3xl mt-10">{car.model}</h1>
                  <p className="mt-3 text-md">{car.year}</p>
                </div>
                {/* <div className="m-20 flex flex-col justify-center items-center mt-20 rounded-sm duration-200 hover:cursor-pointer">
                  <Image
                    src={car.image}
                    height={275}
                    width={275}
                    alt="Car Image"
                  />
                  <h1 className="font-serif text-3xl mt-10">{car.model}</h1>
                  <p className="mt-3 text-md">{car.year}</p>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
