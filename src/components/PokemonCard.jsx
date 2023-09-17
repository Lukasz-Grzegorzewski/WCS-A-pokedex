import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <figure>
        {pokemon.imgSrc ? (
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            alt={pokemon.name}
          />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }),
};

export default PokemonCard;
