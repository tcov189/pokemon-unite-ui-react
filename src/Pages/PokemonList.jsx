import { useEffect, useState } from "react";
import Content from "../Layout/Content";
import UniteLoader from "../Global/UniteLoader";
import usePokemonList from "../hooks/usePokemonList";
import PokemonListItem from "./PokemonList/PokemonListItem";

function PokemonList() {
  const pokemonList = usePokemonList();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [pokemonList]);

  return (
    <Content>
      {loading && <UniteLoader loading={loading} />}

      {!loading && (
        <div className="flex flex-wrap justify-center">
          {
            pokemonList.map((pokemon) => {
              return <PokemonListItem pokemon={pokemon} key={pokemon.id} />
            })
          }
        </div>
      )}
    </Content>
  );
}

export default PokemonList;
