import React from "react";
import { ClockIcon } from "@heroicons/react/outline";

function SpecialMoveContainer({ moves }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between w-full capitalize">
        <div className="flex flex-col">
          <span className="font-light text-sm">{moves[0].type}</span>
          <p className="font-bold text-lg">{moves[0].name}</p>
        </div>
        <p>Lv. 1 or 3</p>
        <div className="flex flex-col items-end">
          <p>{moves[0].category}</p>
          <div className="flex">
            {moves[0].cooldown} <ClockIcon className="w-4 text-blue-500 ml-1" />
          </div>
        </div>
      </div>
      <div className="mt-1">{moves[0].description}</div>
    </div>
  );
}

export default SpecialMoveContainer;
