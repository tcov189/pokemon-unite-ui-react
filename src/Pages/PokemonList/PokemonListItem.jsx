import React from "react";

function PokemonListItem({ pokemon }) {
  const iconUrl = `images/pokemon/${pokemon.id}/profile.png`;
  return (
    <div className={`flex flex-col items-center p-2 m-1 bg-${pokemon.battle_type} bg-pokemon-profile border border-yellow-200 rounded-tr-lg text-gray-200 capitalize`}>
      <p className="font-bold">{pokemon.name}</p>
      <div className="w-7/12">
        <img src={require(`@/${iconUrl}`).default} alt={`${pokemon.name} profile`} />
      </div>
      <p className="text-sm">
        {pokemon.battle_type} | {pokemon.attack_type}
      </p>
    </div>
  );
}

export default PokemonListItem;
