import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <figure>
        {pokemon.imgSrc ? (
          <img
            src={pokemon.imgSrc}
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
    imgSrc: PropTypes.string,
  }),
};

export default PokemonCard;
