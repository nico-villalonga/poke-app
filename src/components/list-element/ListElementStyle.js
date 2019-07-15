import styled from 'styled-components';

export const Wrapper = styled.div`
  p {
    margin: 0;
    text-transform: capitalize;
  }
`;

export const ImageContainer = styled.div`
  &.trainer {
    img {
      max-width: 78px;
      height: 120px;
    }
  }

  &.gym {
    height: 120px;

    img {
      max-width: 90px;
      padding: 30px;
    }
  }
`;
