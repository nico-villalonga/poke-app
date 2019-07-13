import React from 'react';
import { Container } from './TrainerStyle';

const Trainer = props => {
  const { data, showDetail } = props;

  return (
    <Container onClick={ showDetail(data.id) }>
      { data.sprites && <img alt="" src={data.sprites.front_default} /> }
      <p>{ data.name }</p>
    </Container>
  );
}

export default Trainer;
