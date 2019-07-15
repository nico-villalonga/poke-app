import React from 'react';
import { Wrapper } from './TrainerStyle';

const Trainer = props => {
  const { data, showDetail } = props;

  return (
    <Wrapper onClick={ showDetail(data.id) }>
      { data.sprites && <img alt="" src={data.sprites.front_default} /> }
      <p>{ data.name }</p>
    </Wrapper>
  );
}

export default Trainer;
