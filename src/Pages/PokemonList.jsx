import { useEffect, useState } from "react";
import Content from "../Layout/Content";
import UniteLoader from "../Global/UniteLoader";
import usePokemonList from "../hooks/usePokemonList";
import PokemonListItem from "./PokemonList/PokemonListItem";

function PokemonList() {
  const pokemonList = usePokemonList();

  const [loading, setLoading] = useState(true);

  const [filterName, setFilterName] = useState("");
  const [filterAttackType, setFilterAttackType] = useState("");
  const [filterBattleType, setFilterBattleType] = useState("");

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

          <div className="flex justify-between items-center my-2">
            <input
              type="search"
              placeholder="Search Pokemon..."
              className="px-2 py-1 w-3/5"
              onChange={(e) => setFilterName(e.target.value)}
            />

            <div className="flex flex-col space-y-2">
              <select onChange={(e) => setFilterAttackType(e.target.value)}>
                <option value="">Melee/Ranged</option>
                <option value="melee">Melee</option>
                <option value="ranged">Ranged</option>
              </select>
              <select onChange={(e) => setFilterBattleType(e.target.value)}>
                <option value="">Battle Type</option>
                <option value="all-rounder">All-Rounder</option>
                <option value="attacker">Attacker</option>
                <option value="defender">Defender</option>
                <option value="speedster">Speedster</option>
                <option value="supporter">Supporter</option>
              </select>
            </div>

          </div>
          <div className="flex flex-wrap justify-around">
            {pokemonList
              .filter((pokemon) => {
                if (!pokemon.name.toLowerCase().includes(filterName.toLowerCase())) {
                  return false;
                }

                if (filterAttackType && pokemon.attack_type !== filterAttackType ) {
                  return false;
                }

                if (filterBattleType && pokemon.battle_type !== filterBattleType ) {
                  return false;
                }

                return true;
              })
              .map((pokemon) => {
                return <PokemonListItem pokemon={pokemon} key={pokemon.id} />;
              })}
          </div>
        </div>
      )}
    </Content>
  );
}

export default PokemonList;
