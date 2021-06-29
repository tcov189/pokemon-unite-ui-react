import { useState, useEffect } from 'react';
import { fetchAllPokemon } from '../services/pokemonUnitApiService';

function usePokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  const getPokemon = async () => {
    try {
        // Disable cache for time being
    //   const cache = localStorage.getItem('pokemonListCache');

    //   if (cache) {
    //     setPokemonList(JSON.parse(cache));
    //   } else {
    //     const res = await fetchAllPokemon();

    //     setPokemonList(res.data.all_pokemon);

    //     localStorage.setItem('pokemonListCache', JSON.stringify(res.data.all_pokemon));
    //   }
        const res = await fetchAllPokemon();

        setPokemonList(res.data.all_pokemon);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return pokemonList;
}

export default usePokemonList