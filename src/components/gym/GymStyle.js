import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  padding: 20px;
  width: 150px;
  display: inline-block;
  cursor: pointer;
  -webkit-transition: 0.3s all;
  transition: 0.5s all;
  height: 150px;
  text-align: center;
  margin: 25px;
  border-radius: 50%;

  :hover {
    transform: scale(1.25);
    background: lightgray;
  }

  p {
    margin: 0;
    text-transform: capitalize;
  }
`;

export const ImageContainer = styled.div`
  height: 120px;

  & img {
    max-width: 90px;
    max-height: 140px;
    padding: 30px;
  }
`;
