import React from 'react';
import { Container } from './PokemonStyle';

const Pokemon = props => {
  const { pokemon, showDetail } = props;

  return (
    <Container onClick={ showDetail(pokemon.id) }>
      { pokemon.sprites && <img alt="" src={pokemon.sprites.front_default} /> }
      <p>{ pokemon.name }</p>
    </Container>
  );
}

export default Pokemon;
