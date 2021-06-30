import React, { useState } from "react";
import BaseMoveAbilityContainer from "./PokemonDetailsMoves/BaseMoveAbilityContainer";

function PokemonDetailsMoves({ pokemon }) {
  const [activeTab, setActiveTab] = useState("ability");

  const moves = [...pokemon.moves];

  let basicAttack = {};
  let specialOneAttacks = [];
  let specialTwoAttacks = [];
  let uniteAttack = {};

  for (let index = 0; index < moves.length; index++) {
    const move = moves[index];

    switch (move.slot) {
      case "basic":
        basicAttack = { ...move };
        break;
      case "unite":
        uniteAttack = { ...move };
        break;
      case "special 1":
          specialOneAttacks = [...specialOneAttacks, {...move}]
        break;
      case "special 2":
          specialTwoAttacks = [...specialTwoAttacks, {...move}]
        break;
      default:
        break;
    }
  }

  console.log(specialTwoAttacks)

  return (
    <div className="flex flex-col px-3 py-2 bg-gray-400 shadow">
      <div className="flex w-full justify-between">
        <div
          className="cursor bg-red-500 border border-yellow-300 px-2 py-1"
          onClick={() => setActiveTab("ability")}
        >
          AB
        </div>
        <div
          className="cursor bg-red-500 border border-yellow-300 px-2 py-1"
          onClick={() => setActiveTab("basic")}
        >
          BA
        </div>
        <div className="cursor bg-red-500 border border-yellow-300 px-2 py-1">
          S1
        </div>
        <div className="cursor bg-red-500 border border-yellow-300 px-2 py-1">
          S2
        </div>
        <div
          className="cursor bg-red-500 border border-yellow-300 px-2 py-1"
          onClick={() => setActiveTab("unite")}
        >
          UN
        </div>
      </div>

      <div className="flex py-2 px-2 bg-red-500 shadow border border-yellow-300">
        {activeTab === "ability" && (
          <BaseMoveAbilityContainer
            name={pokemon.ability_name}
            type="ability"
            description={pokemon.ability_description}
          />
        )}

        {activeTab === "basic" && (
          <BaseMoveAbilityContainer
            name={basicAttack.name}
            type="basic"
            description={basicAttack.description}
          />
        )}

        {activeTab === "unite" && (
          <BaseMoveAbilityContainer
            name={uniteAttack.name}
            type="unite"
            description={uniteAttack.description}
            cooldown={uniteAttack.cooldown}
            category={uniteAttack.category}
            unlockLevel={uniteAttack.unlock_level}
          />
        )}
      </div>
    </div>
  );
}

export default PokemonDetailsMoves;
