import React from 'react';
import { Wrapper } from './PokemonStyle';

const Pokemon = props => {
  const { data, showDetail } = props;

  return (
    <Wrapper onClick={ showDetail(data.id) }>
      { data.sprites && <img alt="" src={data.sprites.front_default} /> }
      <p>{ data.name }</p>
    </Wrapper>
  );
}

export default Pokemon;
