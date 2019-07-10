import styled from 'styled-components'

export const Wrapper = styled.aside`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: rgba(0,0,0,0.7);
	overflow: auto;
`;

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

  & img {
    max-width: 600px;
    width: auto;
  }

  & h2 {
    text-transform: capitalize;
    margin: 0;
  }
`;

export const InfoContainer = styled.div`
  margin: 0 25px;
`;

export const CloseButton = styled.div`
	cursor: pointer;
  color: lightgray;
  position: absolute;
  top: 10px;
  right: 12px;
`;
