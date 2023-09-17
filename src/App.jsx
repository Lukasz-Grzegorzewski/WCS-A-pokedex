import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  let pokemon = pokemonList[0];

  return (
    <div className="app">
      <PokemonCard pokemon={pokemon}/>
    </div>
  );
}

export default App;
