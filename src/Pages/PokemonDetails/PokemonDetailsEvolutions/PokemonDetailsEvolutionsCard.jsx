import React from 'react'
import { baseUrl } from '../../../services/pokemonUniteApiService'

function PokemonDetailsEvolutionsCard({evo, pokemonId}) {
    return (
        <div className="flex flex-col capitalize">
            <img style={{maxWidth: "100px"}} src={`${baseUrl}/images/pokemon/${pokemonId}/stage_${evo.stage}.png`} alt="Pokemon stage" />
        </div>
    )
}

export default PokemonDetailsEvolutionsCard
