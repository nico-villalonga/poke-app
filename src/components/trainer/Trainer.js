import React from 'react';
import { Container } from './TrainerStyle';

const Trainer = props => {
  const { data } = props;

  return (
    // <Container onClick={ showDetail(data.id) }>
    <Container>
      { data.img && <img alt="" src={data.img} /> }
      <p>{ data.name }</p>
    </Container>
  );
}

export default Trainer;
