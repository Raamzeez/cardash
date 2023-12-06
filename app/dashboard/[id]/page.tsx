import Controls from "@/components/Controls";
import Overview from "@/components/Overview";
import InfoCard from "@/components/InfoCard";
import TirePressureCard from "@/components/InfoCard";
import getCarById from "@/tools/getCarById";
import {
  faBoxArchive,
  faCircleCheck,
  faDoorClosed,
  faDoorOpen,
  faGear,
  faPlug,
  faTruck,
  faTruckRampBox,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { faWindowMaximize as faHalfWindow } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

interface iProps {
  params: {
    id: string;
  };
}

const Page: FC<iProps> = ({ params }) => {
  const car = getCarById(params.id);

  const pressures = [36, 36, 36, 36];
  const windows = ["Closed", "Open", "Closed", "Closed"];
  const doors = ["Closed", "Closed", "Open", "Closed"];
  const sunroofs = ["Open"];
  const trunks = ["Open"];
  const chargePort = ["Open"];

  return (
    <main className="flex flex-col items-center">
      {/* <p className="text-2xl">ID: {params.id}</p> */}
      <Overview car={car} />
      <Controls />
      <div className="w-full flex flex-row flex-wrap justify-around">
        <InfoCard
          header="Tire Pressures"
          icon={faGear}
          data={pressures}
          valueLabel="psi"
          warningCondition={(entry) => (entry as number) < 30}
        />
        <InfoCard
          header="Windows"
          icon={faWindowMaximize}
          warningIcon={faHalfWindow}
          data={windows}
          warningCondition={(entry) => (entry as string) === "Open"}
        />
        <InfoCard
          header="Doors"
          icon={faDoorClosed}
          warningIcon={faDoorOpen}
          data={doors}
          warningCondition={(entry) => (entry as string) === "Open"}
        />
        <InfoCard
          header="Sunroofs"
          icon={faBoxArchive}
          warningIcon={faHalfWindow}
          data={sunroofs}
          warningCondition={(entry) => (entry as string) === "Open"}
        />
        <InfoCard
          header="Trunks"
          icon={faTruck}
          warningIcon={faTruckRampBox}
          data={trunks}
          warningCondition={(entry) => (entry as string) === "Open"}
        />
        <InfoCard
          header="Charge Port"
          icon={faPlug}
          data={chargePort}
          renderCondition={car.type === "EV" || car.type === "PHEV"}
          warningCondition={(entry) => (entry as string) === "Open"}
        />
      </div>
    </main>
  );
};

export default Page;
