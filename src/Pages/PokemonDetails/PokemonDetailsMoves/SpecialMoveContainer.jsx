import React from "react";
import { ClockIcon } from "@heroicons/react/outline";
import MoveCard from "./MoveCard";
import { baseUrl } from "../../../services/pokemonUniteApiService";

function SpecialMoveContainer({ pokemonId, moves, type }) {
  const imageFileNamePrefix = type.replace(' ', '_');

  return (
    <div className="flex flex-col w-full">
      <MoveCard
        moveName={moves[0].name}
        moveType={type}
        cooldown={moves[0].cooldown}
        moveCategory={moves[0].category}
        moveDescription={moves[0].description}
        unlockLevel="1 or 3"
        moveIconPath={`${baseUrl}/images/pokemon/${pokemonId}/${imageFileNamePrefix}.png`}
      />

      <div className="flex flex-col">
        <MoveCard
          moveName={moves[1].name}
          moveType={type}
          cooldown={moves[1].cooldown}
          moveCategory={moves[1].category}
          moveDescription={moves[1].description}
          unlockLevel={moves[1].unlock_level}
          moveIconPath={`${baseUrl}/images/pokemon/${pokemonId}/${imageFileNamePrefix}a.png`}
        />

        <MoveCard
          moveName={moves[2].name}
          moveType={type}
          cooldown={moves[2].cooldown}
          moveCategory={moves[2].category}
          moveDescription={moves[2].description}
          unlockLevel={moves[2].unlock_level}
          moveIconPath={`${baseUrl}/images/pokemon/${pokemonId}/${imageFileNamePrefix}b.png`}
        />
      </div>
    </div>
  );
}

export default SpecialMoveContainer;
