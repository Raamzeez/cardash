import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import React, { FC } from "react";

const ExtraInfoCard: FC = () => {
  return (
    <div className="grid grid-cols-2 h-48 w-32 m-10 xxs:w-64 xs:w-96 rounded-xl bg-slate-200 shadow-xl">
      <FontAwesomeIcon icon={faWindowMaximize} />
    </div>
  );
};

export default ExtraInfoCard;
