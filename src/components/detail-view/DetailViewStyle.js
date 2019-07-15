import styled from 'styled-components'

export const Wrapper = styled.div``;

export const Container = styled.div`
	max-width: 640px;
	background: lightgray;
	margin: auto;
	padding: 50px;
	margin-top:50px;
  margin-bottom:50px;
`;

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
`;

export const CloseButton = styled.div`
	cursor: pointer;
  color: lightgray;
  position: absolute;
  top: 10px;
  right: 12px;
`;

export const ThumbsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ThumbsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;

  li {
    display: flex;
  }
`;