import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";
import Navbar from "./components/Navbar";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  let pokemon = pokemonList[pokemonIndex];

  const handleClick = (pokemonName) => {
    setPokemonIndex(pokemonList.findIndex(pokemon => pokemon.name === pokemonName))
  };

  return (
    <div className="app">
      <Navbar pokemonList={pokemonList} handleClick={handleClick}/>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;
