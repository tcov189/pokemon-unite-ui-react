import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UniteLoader from "../Global/UniteLoader";
import useActivePokemon from "../hooks/useActivePokemon";
import Content from "../Layout/Content";
import PokemonDetailsEvolutions from "./PokemonDetails/PokemonDetailsEvolutions";
import PokemonDetailsHeader from "./PokemonDetails/PokemonDetailsHeader";
import PokemonDetailsMoves from "./PokemonDetails/PokemonDetailsMoves";
import ViabilityContainer from "./PokemonDetails/ViabilityContainer";

function PokemonDetails() {
  const { id } = useParams();

  const pokemon = useActivePokemon(id);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [pokemon]);

  return (
    <Content>
      {loading && <UniteLoader loading={loading} />}

      {!loading && (
        <div className="flex flex-col">
          <PokemonDetailsHeader pokemon={pokemon} />

          <ViabilityContainer
            offense={pokemon.offense}
            endurance={pokemon.endurance}
            mobility={pokemon.mobility}
            scoring={pokemon.scoring}
            support={pokemon.support}
          />

          <PokemonDetailsMoves pokemon={pokemon} />

          <PokemonDetailsEvolutions pokemonId={pokemon.id} evolutions={pokemon.evolutions} />

        </div>
      )}
    </Content>
  );
}

export default PokemonDetails;
