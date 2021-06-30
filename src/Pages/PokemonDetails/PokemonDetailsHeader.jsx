import React from "react";

function PokemonDetailsHeader({ pokemon }) {
  return (
    <div className="flex space-x-3">
      <div className="w-20 border border-yellow-200">
        <img src={pokemon.image_path} alt="" />
      </div>

      <div className="flex flex-col w-3/5 capitalize">
        <h2 className="font-bold text-2xl mb-2">{pokemon.name}</h2>
        <hr />
        <div className="flex justify-between pt-2">
          <p>{pokemon.battle_type}</p>
          <p>{pokemon.attack_type}</p>
          <p>{pokemon.difficulty}</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailsHeader;
