import React from 'react';
import { Container } from './PokemonStyle';

const Pokemon = props => {
  const { pokemon } = props;

  return (
    <Container>
      { pokemon.sprites && <img alt="" src={pokemon.sprites.front_default} /> }
      <p>{ pokemon.name }</p>
    </Container>
  );
}

export default Pokemon;
