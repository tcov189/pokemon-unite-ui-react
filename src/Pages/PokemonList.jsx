import { useEffect, useState } from "react";
import Content from "../Layout/Content";
import UniteLoader from "../Global/UniteLoader";
import usePokemonList from "../hooks/usePokemonList";

function PokemonList() {
  const pokemonList = usePokemonList();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [pokemonList]);

  return <Content>{loading && <UniteLoader loading={loading} />}</Content>;
}

export default PokemonList;
