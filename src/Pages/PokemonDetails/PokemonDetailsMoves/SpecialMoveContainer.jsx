import React, { useState } from "react";
import { LockOpenIcon } from "@heroicons/react/outline";
import MoveCard from "./MoveCard";
import { baseUrl } from "../../../services/pokemonUniteApiService";
import MoveIcon from "./MoveIcon";

function SpecialMoveContainer({ pokemonId, moves, type }) {
  const [activeTab, setActiveTab] = useState("a");

  const imageFileNamePrefix = type.replace(" ", "_");

  return (
    <div className="flex flex-col w-full">
      <MoveCard
        moveName={moves[0].name}
        moveType={type}
        cooldown={moves[0].cooldown}
        moveCategory={moves[0].category}
        moveDescription={moves[0].description}
        unlockLevel="1 or 3"
      />

      <div className="flex flex-col">
        <div className="flex justify-around">
          <div className="flex my-2">
            <MoveIcon
              moveName={moves[1].name}
              moveIconPath={`images/pokemon/${pokemonId}/${imageFileNamePrefix}a.png`}
              onClick={() => setActiveTab("a")}
              isActive={activeTab === "a"}
            />
          </div>

          <div className="flex justify-center items-center text-lg">
            <LockOpenIcon className="w-5" /> Lv. {moves[1].unlock_level}
          </div>

          <div className="flex">
            <MoveIcon
              moveName={moves[2].name}
              moveIconPath={`images/pokemon/${pokemonId}/${imageFileNamePrefix}b.png`}
              onClick={() => setActiveTab("b")}
              isActive={activeTab === "b"}
            />
          </div>
        </div>

        {activeTab === "a" && (
          <MoveCard
            moveName={moves[1].name}
            moveType={type}
            cooldown={moves[1].cooldown}
            moveCategory={moves[1].category}
            moveDescription={moves[1].description}
            moveIconPath={`${baseUrl}/images/pokemon/${pokemonId}/${imageFileNamePrefix}a.png`}
            upgradeLevel={moves[1].upgrade_level}
            upgradeEffect={moves[1].upgrade_effect}
          />
        )}

        {activeTab === "b" && (
          <MoveCard
            moveName={moves[2].name}
            moveType={type}
            cooldown={moves[2].cooldown}
            moveCategory={moves[2].category}
            moveDescription={moves[2].description}
            moveIconPath={`${baseUrl}/images/pokemon/${pokemonId}/${imageFileNamePrefix}b.png`}
            upgradeLevel={moves[2].upgrade_level}
            upgradeEffect={moves[2].upgrade_effect}
          />
        )}
      </div>
    </div>
  );
}

export default SpecialMoveContainer;
