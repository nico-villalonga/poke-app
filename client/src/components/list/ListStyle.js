import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  max-width: 750px;
  margin: auto;
`;

export const Ul = styled.ul`
  padding: 0;
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  li {
    padding: 20px;
    width: 150px;
    display: inline-block;
    cursor: pointer;
    -webkit-transition: 0.3s all;
    transition: 0.5s all;
    height: 150px;
    text-align: center;
    margin: 14px 25px;
    border-radius: 50%;

    :hover {
      transform: scale(1.25);
      background: #e3e3e3;
    }
  }
`;