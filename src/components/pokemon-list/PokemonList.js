import React from 'react';
import Pokemon from '../pokemon/Pokemon';

const PokemonList = props => {
  const { collection, showDetail } = props;

  return (
    <ul>
      {
        collection.map(poke => (
          <Pokemon
            key={ poke.id }
            pokemon={ poke }
            showDetail={ showDetail }
          />
        ))
      }
    </ul>
  );
}

export default PokemonList;
