import { useEffect, useState } from 'react'
import Content from '../Layout/Content'
import { fetchAllPokemon } from '../services/pokemonUnitApiService';

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);

    const getPokemon = async () => {
        try {
            const res = await fetchAllPokemon();
            console.log(res.data);
          setPokemonList(res.data.pokemon);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        getPokemon();
      }, []);
    return (
        <Content>
            This ist the PokemonList
        </Content>
    )
}

export default PokemonList
