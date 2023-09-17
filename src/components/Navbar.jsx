import React from "react";

const Navbar = ({ pokemonIndex, pokemonListLength, handleClick }) => {
  return (
    <div>
      <button
        disabled={pokemonIndex <= 0}
        onClick={() => handleClick("decrement")}
      >
        Decrement
      </button>

      <button
        disabled={pokemonIndex >= pokemonListLength - 1}
        onClick={() => handleClick("increment")}
      >
        Increment
      </button>
    </div>
  );
};

export default Navbar;
