import styled from 'styled-components'

export const Wrapper = styled.div``;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 25px;

  & img {
    max-width: 100px;
    max-height: 100px;
    width: auto;
  }

  & h2 {
    text-transform: capitalize;
    margin-left: 15px;
  }
`;

export const InfoContainer = styled.div`
  padding: 25px;
  padding-bottom: 0;
`;

export const ThumbsContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    padding-right: 30px;
  }

  img.small-image {
    max-width: 30px;
    max-height: 60px;
  }
`;

export const ThumbsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;

  li {
    display: flex;
  }
`;