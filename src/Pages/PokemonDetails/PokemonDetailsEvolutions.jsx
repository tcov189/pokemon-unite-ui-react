import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import React from "react";
import PokemonDetailsEvolutionsCard from "./PokemonDetailsEvolutions/PokemonDetailsEvolutionsCard";

function PokemonDetailsEvolutions({ pokemonId, evolutions }) {
  console.log(evolutions);
  return (
    <div className="flex flex-col py-1 bg-gray-600 text-gray-300">
      <p className="font-bold text-lg px-3">Evolutions</p>

      <div className="flex justify-center space-x-3">
        {!evolutions.length && <p className="py-1 pl-1 text-sm">Pokemon doesn't have evolutions</p>}
        {evolutions.map((evo) => {
          return (
            <div className="flex items-center" key={`evo_stage_${evo.stage}`}>
              <PokemonDetailsEvolutionsCard pokemonId={pokemonId} evo={evo} />
              {evo.level_evolved_at && (
                <div>
                  <ChevronDoubleRightIcon className="h-8" />
                  <p className="font-bold text-center">
                    Lv {evo.level_evolved_at}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonDetailsEvolutions;
