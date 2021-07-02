import React, { useState } from "react";
import { baseUrl } from "../../services/pokemonUniteApiService";
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

        <MoveIcon moveName="Basic attack icon" moveIconPath={`${baseUrl}/images/icons/basic_attack.png`} onClick={() => setActiveTab("basic")} isActive={activeTab === "basic"} />

        <MoveIcon moveName={special1Image.name} moveIconPath={`${baseUrl}/images/pokemon/${pokemon.id}/special_1.png`} onClick={() => setActiveTab("special_1")} isActive={activeTab === "special_1"} />

        <MoveIcon moveName={special2Image.name} moveIconPath={`${baseUrl}/images/pokemon/${pokemon.id}/special_2.png`} onClick={() => setActiveTab("special_2")} isActive={activeTab === "special_2"} />

        <MoveIcon moveName={uniteAttack.name} moveIconPath={`${baseUrl}/images/pokemon/${pokemon.id}/unite.png`} onClick={() => setActiveTab("unite")} isActive={activeTab === "unite"} />
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
          <SpecialMoveContainer pokemonId={pokemon.id} moves={specialOneAttacks} type="special 1" />
        )}
        {activeTab === "special_2" && (
          <SpecialMoveContainer pokemonId={pokemon.id} moves={specialTwoAttacks} type="special 2" />
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
