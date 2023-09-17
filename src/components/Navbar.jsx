import PropTypes from "prop-types";
import { useId } from "react";

const Navbar = ({ pokemonList, handleClick }) => {
  return (
    <div className="navbar">
      {pokemonList &&
        pokemonList.map((pokemon) => (
          <button key={useId()} onClick={() => handleClick(pokemon.name)}>
            {pokemon.name}
          </button>
        ))}
    </div>
  );
};

Navbar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ),
  handleClick: PropTypes.func,
};

export default Navbar;
