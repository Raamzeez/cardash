import Controls from "@/components/Controls";
import Overview from "@/components/Overview";
import TirePressureCard from "@/components/TirePressureCard";
import React, { FC } from "react";

interface iProps {
  params: {
    id: string;
  };
}

const Page: FC<iProps> = ({ params }) => {
  return (
    <main className="flex flex-col items-center">
      {/* <p className="text-2xl">ID: {params.id}</p> */}
      <Overview id={params.id} />
      <Controls />
      <TirePressureCard />
    </main>
  );
};

export default Page;
