import React from "react";
import { ClockIcon } from "@heroicons/react/outline";
import MoveIcon from "./MoveIcon";
import { baseUrl } from "../../../services/pokemonUniteApiService";

function SpecialMoveContainer({ pokemonId, moves, type }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between w-full capitalize">
        <div className="flex flex-col">
          <span className="font-light text-sm">{type}</span>
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

      <div className="flex flex-col">
      <div className="flex justify-between w-full capitalize my-3">
        <div className="flex flex-col">
          <p className="font-bold text-lg">{moves[1].name}</p>
        </div>
        <p>Lv. 1 or 3</p>
        <div className="flex flex-col items-end">
          <p>{moves[1].category}</p>
          <div className="flex">
            {moves[1].cooldown} <ClockIcon className="w-4 text-blue-500 ml-1" />
          </div>
        </div>
      </div>
      <div className="mt-1">{moves[0].description}</div>

      <div className="flex justify-between w-full capitalize my-3">
        <div className="flex flex-col">
          <p className="font-bold text-lg">{moves[2].name}</p>
        </div>
        <p>Lv. 1 or 3</p>
        <div className="flex flex-col items-end">
          <p>{moves[2].category}</p>
          <div className="flex">
            {moves[2].cooldown} <ClockIcon className="w-4 text-blue-500 ml-1" />
          </div>
        </div>
      </div>
      <div className="mt-1">{moves[2].description}</div>
      </div>
    </div>
  );
}

export default SpecialMoveContainer;
