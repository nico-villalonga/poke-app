import React from 'react';
import { Wrapper, ImageContainer } from './GymStyle';

const Gym = props => {
  const { data, showDetail } = props;

  return (
    <Wrapper onClick={ showDetail(data.id) }>
      <ImageContainer>
        { data.sprites && <img alt="" src={data.sprites.front_default} /> }
      </ImageContainer>

      <p>{ data.name }</p>
    </Wrapper>
  );
}

export default Gym;
