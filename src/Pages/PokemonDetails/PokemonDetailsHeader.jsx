import React from "react";

function PokemonDetailsHeader({ pokemon }) {
  return (
    <div className="flex space-x-3 px-3 py-2 bg-gray-600 shadow text-gray-300">
      <div className="w-20 border border-yellow-200 rounded-tr-lg">
        <img src={pokemon.image_path} alt="" />
      </div>

      <div className="flex flex-col w-3/5 capitalize">
        <h2 className="font-bold text-2xl mb-2 mt-1">{pokemon.name}</h2>
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
