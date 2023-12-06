import Controls from "@/components/Controls";
import Overview from "@/components/Overview";
import QuadInfoCard from "@/components/QuadInfoCard";
import TirePressureCard from "@/components/QuadInfoCard";
import {
  faCircleCheck,
  faDoorClosed,
  faGear,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface iProps {
  params: {
    id: string;
  };
}

const Page: FC<iProps> = ({ params }) => {
  const pressures = ["36 psi", "36 psi", "36 psi", "36 psi"];
  const windows = ["Closed", "Closed", "Closed", "Closed"];
  const doors = ["Closed", "Closed", "Closed", "Closed"];

  return (
    <main className="flex flex-col items-center">
      {/* <p className="text-2xl">ID: {params.id}</p> */}
      <Overview id={params.id} />
      <Controls />
      <div className="w-full flex flex-row flex-wrap justify-around">
        <div className="flex flex-col items-center">
          <div className="flex">
            <p className="text-lg font-semibold">Tire Pressures</p>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-xl ml-4 mt-1"
              color="#34bf67"
            />
          </div>
          <QuadInfoCard icon={faGear} data={pressures} />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex">
            <p className="text-lg font-semibold">Windows</p>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-xl ml-4 mt-1"
              color="#34bf67"
            />
          </div>
          <QuadInfoCard icon={faWindowMaximize} data={windows} />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex">
            <p className="text-lg font-semibold">Doors</p>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-xl ml-4 mt-1"
              color="#34bf67"
            />
          </div>
          <QuadInfoCard icon={faDoorClosed} data={doors} />
        </div>
      </div>
    </main>
  );
};

export default Page;
