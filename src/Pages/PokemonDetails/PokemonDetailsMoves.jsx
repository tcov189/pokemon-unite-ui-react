import React, { useState } from "react";
import BaseMoveAbilityContainer from "./PokemonDetailsMoves/BaseMoveAbilityContainer";
import MoveIcon from "./PokemonDetailsMoves/MoveIcon";
import SpecialMoveContainer from "./PokemonDetailsMoves/SpecialMoveContainer";

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
        specialOneAttacks = [...specialOneAttacks, { ...move }];
        break;
      case "special 2":
        specialTwoAttacks = [...specialTwoAttacks, { ...move }];
        break;
      default:
        break;
    }
  }

  const special1Image = specialOneAttacks.find(
    (move) => move.unlock_level === 1
  );
  const special2Image = specialTwoAttacks.find(
    (move) => move.unlock_level === 3
  );

  return (
    <div className="flex flex-col px-2 py-1 bg-gray-400 shadow">
      <div className="flex w-full justify-between p-1 mb-1 shadow-md">
        <MoveIcon moveName={`${pokemon.ability_name} icon`} moveIconPath={pokemon.ability_icon_path} onClick={() => setActiveTab("ability")} isActive={activeTab === "ability"} />

        <MoveIcon moveName="Basic attack icon" moveIconPath={basicAttack.icon_path} onClick={() => setActiveTab("basic")} isActive={activeTab === "basic"} />

        <MoveIcon moveName={special1Image.name} moveIconPath={special1Image.icon_path} onClick={() => setActiveTab("special_1")} isActive={activeTab === "special_1"} />

        <MoveIcon moveName={special2Image.name} moveIconPath={special2Image.icon_path} onClick={() => setActiveTab("special_2")} isActive={activeTab === "special_2"} />

        <MoveIcon moveName={uniteAttack.name} moveIconPath={uniteAttack.icon_path} onClick={() => setActiveTab("unite")} isActive={activeTab === "unite"} />
      </div>

      <div className="flex py-2 px-2 ">
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

        {activeTab === "special_1" && (
          <SpecialMoveContainer moves={specialOneAttacks} />
        )}
        {activeTab === "special_2" && (
          <SpecialMoveContainer moves={specialTwoAttacks} />
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
