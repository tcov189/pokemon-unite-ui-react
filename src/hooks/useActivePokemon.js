import { useState, useEffect } from "react";
import { getPokemon } from "../services/pokemonUniteApiService";

function useActivePokemon(id) {
  const [activePokemon, setActivePokemon] = useState([]);

  const callApi = async (id) => {
    try {
      const cache = localStorage.getItem(`pokemon_${id}`);

      if (cache) {
        setActivePokemon(JSON.parse(cache));
      } else {
        const res = await getPokemon(id);

        setActivePokemon(res.data.pokemon);

        localStorage.setItem(
          `pokemon_${id}`,
          JSON.stringify(res.data.pokemon)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    callApi(id);
  }, [id]);

  return activePokemon;
}

export default useActivePokemon;
