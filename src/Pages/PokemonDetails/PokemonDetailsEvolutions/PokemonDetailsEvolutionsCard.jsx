import React from "react";

function PokemonDetailsEvolutionsCard({ evo, pokemonId }) {
  const iconUrl = `images/pokemon/${pokemonId}/stage_${evo.stage}.png`;

  return (
    <div className="flex flex-col capitalize">
      <img
        style={{ maxWidth: "100px" }}
        src={require(`@/${iconUrl}`).default}
        alt="Pokemon stage"
      />
    </div>
  );
}

export default PokemonDetailsEvolutionsCard;
