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
	background: #eeeeee;
	margin: auto;
	padding: 50px;
	margin-top:50px;
  margin-bottom:50px;
  position: relative;
`;

export const CloseButton = styled.div`
	cursor: pointer;
  position: absolute;
  top: 10px;
  right: 12px;

	img {
		width: 16px;
	}
`;
