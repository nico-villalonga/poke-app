import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d10322;
  box-shadow: 3px 2px 11px 0px;
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  max-width: 220px;
  margin-left: 20px;
`;

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;

  li {
    display: flex;
    width: 150px;

    a {
      color: white;
      font-weight: bold;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      &.active {
        background-color: #ee6d71;
      }
    }
  }
`;
