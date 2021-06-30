import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UniteLoader from "../Global/UniteLoader";
import useActivePokemon from "../hooks/useActivePokemon";
import Content from "../Layout/Content";
import PokemonDetailsHeader from "./PokemonDetails/PokemonDetailsHeader";

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

      {!loading &&
        <div className="flex flex-col">
            <PokemonDetailsHeader pokemon={pokemon} />
        </div>
    }
    </Content>
  );
}

export default PokemonDetails;
