import React from 'react';
import Pokemon from '../pokemon/Pokemon';

const PokemonList = props => {
  const { collection } = props;

  return (
    <ul>
      {
        collection.map(poke => (
          <Pokemon
            key={ poke.id }
            pokemon={ poke }
          />
        ))
      }
    </ul>
  );
}

export default PokemonList;
