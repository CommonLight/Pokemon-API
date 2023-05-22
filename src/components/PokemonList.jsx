import React, { useState, useEffect } from 'react'


const PokemonList = (props) => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon-species?limit=1010')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }, [])

    return (
        <div id='wrapper'>
            <img className='pokeImage' src={ require("./imgs/Poke.png") } alt="pokemon logo" />
            <p className="pokeTitle">THE COMPLETE LIST</p>
            <hr />
            <ul className='pokeList'>
            {pokemon.length > 0 && pokemon.map((pokemon, index) => {
                return (<li key= {index} > {pokemon.name} </li>)
            })}
            <p className='end'>THE END</p>
            </ul>
        </div>
    )
}

export default PokemonList