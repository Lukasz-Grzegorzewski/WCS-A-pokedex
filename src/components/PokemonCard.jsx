import React from "react";

const PokemonCard = (props) => {
  return (
    <div className="pokemon-card">
      <figure>
        {props.pokemon.imgSrc ? (
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            alt={props.pokemon.name}
          />
        ) : (
          <p>???</p>
        )}
        <figcaption>{props.pokemon.name}</figcaption>
      </figure>
    </div>
  );
};

export default PokemonCard;
