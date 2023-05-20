import React from 'react'


const PokemonList = () => {
  return (
    <div id='wrapper'>
        <img className='pokeImage' src={ require("./imgs/Poke.png") } alt="pokemon logo" />
        <p className="pokeTitle">THE COMPLETE LIST</p>
        <hr />
        <ul className='pokeList'>
            <li>Pikachu</li>
            <li>Charmander</li>
            <li>Squirtle</li>
        </ul>
    </div>
  )
}

export default PokemonList