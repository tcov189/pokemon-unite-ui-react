import { ClockIcon, LockOpenIcon } from "@heroicons/react/outline";
import React from "react";
import { baseUrl } from "../../../services/pokemonUniteApiService";
import MoveIcon from "./MoveIcon";

function MoveCard({
  moveIconPath,
  moveName,
  moveType = null,
  unlockLevel,
  moveCategory,
  cooldown,
  moveDescription,
}) {
  return (
    <div className="mb-2">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <MoveIcon moveName={moveName} moveIconPath={moveIconPath} width="40px" height="40px" />
          <div className="flex flex-col capitalize ml-1">
            {moveType && <span className="font-light text-sm">{moveType}</span>}
            <p className="font-bold text-lg">{moveName}</p>
          </div>
        </div>

        {unlockLevel && (
          <p className="flex items-center">
            <LockOpenIcon className="w-4" /> Lv. {unlockLevel}
          </p>
        )}

        <div className="flex flex-col items-end capitalize">
          <p>{moveCategory}</p>

          {cooldown && (
            <div className="flex">
              {cooldown} <ClockIcon className="w-4 text-blue-500 ml-1" />
            </div>
          )}
        </div>
      </div>

      <div className="mt-1">{moveDescription}</div>
    </div>
  );
}

export default MoveCard;
