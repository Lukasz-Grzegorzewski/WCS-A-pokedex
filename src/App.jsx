import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

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

  const handleClick = (type) => {
    if(type === "increment" ) setPokemonIndex((prev) => prev + 1)
    else setPokemonIndex((prev) => prev - 1)
  };

  return (
    <div className="app">
      <PokemonCard pokemon={pokemon} />

      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={() => handleClick("increment")}>Increment</button>
      )}
      {pokemonIndex > 0 && <button onClick={() => handleClick("decrement")}>Decrement</button>}
    </div>
  );
}

export default App;
