import { useState, useEffect } from "react"
import { apiFetch } from "../utils/api-fetch"
import PokemonCard from "./PokemonCard"

export default function PokemonContainer({ type }) {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        const retornoAPI = await apiFetch('/type/'+type);
        setPokemons(retornoAPI.pokemon);
    }

    return (
        <div>
            {
                pokemons.map((pokemonCorrenteDoFor) => {
                    return (
                        <PokemonCard
                            pokemon={pokemonCorrenteDoFor.pokemon}
                        />
                    )
                })
            }
        </div>
    )
}