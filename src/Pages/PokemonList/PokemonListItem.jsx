import React from "react";

function PokemonListItem({ pokemon }) {
  return (
    <div className="flex flex-col items-center p-2 m-1 bg-gray-900 border border-yellow-200 rounded-lg text-gray-200 capitalize">
      <p className="font-bold">{pokemon.name}</p>
      <div className="w-7/12">
        <img src={pokemon.image_path} alt={`${pokemon.name} profile`} />
      </div>
      <p className="text-sm">
        {pokemon.battle_type} | {pokemon.attack_type}
      </p>
    </div>
  );
}

export default PokemonListItem;
