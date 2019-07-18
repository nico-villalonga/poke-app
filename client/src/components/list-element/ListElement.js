import React from 'react';
import { Wrapper, ImageContainer } from './ListElementStyle';

const ListElement = props => {
  const { className, data, showDetail } = props;

  return (
    <Wrapper onClick={ showDetail(data.id) }>
      <ImageContainer className={ className }>
        { data.sprites && <img alt="" src={data.sprites.front_default} /> }
      </ImageContainer>

      <p>{ data.name }</p>
    </Wrapper>
  );
}

export default ListElement;
