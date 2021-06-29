import { useEffect, useState } from "react";
import Content from "../Layout/Content";
import UniteLoader from "../Global/UniteLoader";
import usePokemonList from "../hooks/usePokemonList";
import PokemonListItem from "./PokemonList/PokemonListItem";

function PokemonList() {
  const pokemonList = usePokemonList();

  const [loading, setLoading] = useState(true);

  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [pokemonList]);

  return (
    <Content>
      {loading && <UniteLoader loading={loading} />}

      {!loading && (
        <div className="flex flex-col">
          <div className="flex items-center mx-3 my-2">
            <input type="search" placeholder="Search Pokemon..." className="w-full px-2 py-1" onChange={(e) => setFilterName(e.target.value)} />
          </div>
          <div className="flex flex-wrap justify-around">
            {
              pokemonList
              .filter((pokemon) => pokemon.name.toLowerCase().includes(filterName.toLowerCase()))
              .map((pokemon) => {
                return <PokemonListItem pokemon={pokemon} key={pokemon.id} />
              })
            }
          </div>
        </div>
      )}
    </Content>
  );
}

export default PokemonList;
